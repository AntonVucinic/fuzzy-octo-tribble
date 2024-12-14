from __future__ import annotations

from typing import Annotated, Any, Literal
from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from pydantic_settings import BaseSettings, SettingsConfigDict
import google.generativeai as genai
import tempfile

class VatRate(BaseModel):
    rate: float
    type_: Literal["Standard", "Special"]
    desc: str

class Registration(BaseModel):
    establishment_class: str
    threshold: float


class Deadline(BaseModel):
    filing_deadline: str #Fonoa has string
    payment_deadline: str #Fonoa has string


class Return(BaseModel):
    filing:Filing
    annual_return:bool
    payment_deadline:str
    payment_currency:str
    language:str
    other_requirements:str

class Filing(BaseModel):
    filing_frequency: str
    applies_to: list[str]
    electronic_filing: bool
    deadlines: list[Deadline]
    penalites: list[str]

class CrossBorder(BaseModel):
    electronic_services: bool
    imports: float
    exports: float


class Authorities(BaseModel):
    contact_information: bool


class Schema(BaseModel):
    vatRates: list[VatRate]
    exemptions: list[str]
    registration_requirements: Registration
    # filing_and_compliance: Filing Inside returns
    returns:Return
    cross_border_transactions: CrossBorder
    deadlines: Deadline
    invoice: list[str]
    penalties: str



app = FastAPI()

class Settings(BaseSettings):
    api_key: str
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings() # pyright: ignore[reportCallIssue]
model = genai.GenerativeModel("gemini-1.5-flash")
model_config = genai.GenerationConfig(
    response_mime_type="application/json", response_schema=Schema
)

genai.configure(api_key=settings.api_key)

@app.get("/tax-info/text", response_model=Schema)
async def upload_text(law: str) -> Any:
    prompt = f"""A user has uploaded the text of this countries tax law.
    Summarize this law using the provided JSON schema.

    {law}
    """
    response = model.generate_content(prompt, generation_config=model_config)
    return response['candidates'][0]['content']['parts'][0]['text']  # pyright: ignore[reportIndexIssue]


@app.post("/tax-info/file")
async def upload_file(law: UploadFile) -> Any:
    file = genai.upload_file(law.file, mime_type="application/pdf")
    prompt = f"""A user has uploaded a PDF file of this countries tax law.
    This law will most most likely be written in the nations official language so it's crucial to adapt and not look for literal symobls in text.
    VAT is spelled PDV in Canada.
    Summarize this law using the provided JSON schema.
    """
    response = model.generate_content([prompt, file], generation_config=model_config)
    return response.to_dict()['candidates'][0]['content']['parts'][0]['text']# pyright: ignore[reportIndexIssue]
