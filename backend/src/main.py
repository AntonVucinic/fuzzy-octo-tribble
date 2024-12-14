from __future__ import annotations

import json
from typing import Annotated, Any, Literal

import google.generativeai as genai
from fastapi import Body, FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.routing import APIRoute
from pydantic import BaseModel
from pydantic_settings import BaseSettings, SettingsConfigDict


class VatRate(BaseModel):
    rate: float
    type_: Literal["Standard", "Special"]
    desc: str


class Registration(BaseModel):
    establishment_class: str
    threshold: float


class Deadline(BaseModel):
    filing_deadline: str
    payment_deadline: str | None


class Return(BaseModel):
    filing: Filing
    annual_return: bool
    language: str
    other_requirements: str


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
    returns: Return | None
    cross_border_transactions: CrossBorder
    invoice_requirements: list[str]
    penalties: str


def custom_generate_unique_id(route: APIRoute):
    return route.name


app = FastAPI(generate_unique_id_function=custom_generate_unique_id)

origins = ["http://localhost:8000", "http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Settings(BaseSettings):
    api_key: str
    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()  # pyright: ignore[reportCallIssue]
model = genai.GenerativeModel("gemini-1.5-flash")
model_config = genai.GenerationConfig(
    response_mime_type="application/json", response_schema=Schema
)

genai.configure(api_key=settings.api_key)


@app.post("/tax-info/text", response_model=Schema)
async def upload_text(law: Annotated[str, Body(media_type="text/plain")]) -> Any:
    prompt = f"""A user has uploaded the text of this countries tax law.
    This law will most most likely be written in the nations official language so it's crucial to adapt and not look for literal symobls in text.
    Summarize this law using the provided JSON schema.

    ---

    {law}
    """
    response = model.generate_content(prompt, generation_config=model_config)
    return json.loads(
        response.to_dict()["candidates"][0][  # pyright: ignore[reportIndexIssue]
            "content"
        ]["parts"][0]["text"]
    )


@app.post("/tax-info/file", response_model=Schema)
async def upload_file(law: UploadFile) -> Any:
    file = genai.upload_file(
        law.file, mime_type="application/pdf"  # pyright: ignore[reportArgumentType]
    )
    with open("t.pdf", "wb") as f:
        f.write(await law.read())
    prompt = f"""A user has uploaded a PDF file of this countries tax law.
    This law will most most likely be written in the nations official language so it's crucial to adapt and not look for literal symobls in text.
    Summarize this law using the provided JSON schema.
    """
    response = model.generate_content([prompt, file], generation_config=model_config)
    return json.loads(
        response.to_dict()["candidates"][0][  # pyright: ignore[reportIndexIssue]
            "content"
        ]["parts"][0]["text"]
    )
