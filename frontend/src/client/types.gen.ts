// This file is auto-generated by @hey-api/openapi-ts

export type Body_upload_file_tax_info_file_post = {
    law: (Blob | File);
};

export type CrossBorder = {
    electronic_services: boolean;
    imports: number;
    exports: number;
};

export type Deadline = {
    filing_deadline: string;
    payment_deadline: (string | null);
};

export type Filing = {
    filing_frequency: string;
    applies_to: Array<(string)>;
    electronic_filing: boolean;
    deadlines: Array<Deadline>;
    penalites: Array<(string)>;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type Registration = {
    establishment_class: string;
    threshold: number;
};

export type Return = {
    filing: Filing;
    annual_return: boolean;
    payment_deadline: string;
    payment_currency: string;
    language: string;
    other_requirements: string;
};

export type Schema = {
    vatRates: Array<VatRate>;
    exemptions: Array<(string)>;
    registration_requirements: Registration;
    returns: (Return | null);
    cross_border_transactions: CrossBorder;
    deadlines: Deadline;
    invoice: Array<(string)>;
    penalties: string;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type VatRate = {
    rate: number;
    type_: 'Standard' | 'Special';
    desc: string;
};

export type type_ = 'Standard' | 'Special';

export type UploadTextTaxInfoTextPostData = {
    body: string;
};

export type UploadTextTaxInfoTextPostResponse = (Schema);

export type UploadTextTaxInfoTextPostError = (HTTPValidationError);

export type UploadFileTaxInfoFilePostData = {
    body: Body_upload_file_tax_info_file_post;
};

export type UploadFileTaxInfoFilePostResponse = (Schema);

export type UploadFileTaxInfoFilePostError = (HTTPValidationError);