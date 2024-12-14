from __future__ import annotations

from typing import Literal
from fastapi import FastAPI, UploadFile
from pydantic import BaseModel

class VatRate(BaseModel):
    rate: float
    type_: Literal["Standard", "Special"]
    desc: str


class RegistrationRequirements(BaseModel):
    thresholds: float
    voluntary_registration: bool
    foreign_company_rules: str


class Filing(BaseModel):
    filing_frequency: str
    required_documentation: list[str]
    electronic_filing: bool
    deadlines: list[Deadline]
    penalites: list[str]

class Deadline(BaseModel):
    ...


class Return(BaseModel):
    eligible_costs: list[str]
    exclusions: list[str]
    time_limits: list[str]
    process: str


class CrossBorder(BaseModel):
    imports: str
    exports: str
    intra_eu_tranasactions: str
    digital_services: str


class IndustrySpecific(BaseModel):
    rules: dict[str, list[str]]


class Authorities(BaseModel):
    contact_information: str
    guidance_documents: list[str]
    advisory_services: bool


class Schema(BaseModel):
    vatRates: list[VatRate]
    exemptions: list[str]
    registration_requirements: RegistrationRequirements
    filing_and_compliance: Filing
    input_vat_recovery: Return
    cross_border_transactions: CrossBorder
    industry_specific_rules: IndustrySpecific
    local_vat_authorities: Authorities


app = FastAPI()

@app.get("/tax-info/text")
async def upload_text(law: str):
    return Schema.model_json_schema()

@app.get("/tax-info/file")
async def upload_file(law: UploadFile) -> Schema:
    return ...
