from __future__ import annotations

from typing import Literal
from fastapi import FastAPI, UploadFile
from pydantic import BaseModel

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

@app.get("/tax-info/text")
async def upload_text(law: str):
    return Schema.model_json_schema()

@app.get("/tax-info/file")
async def upload_file(law: UploadFile) -> Schema:
    return ...
