# Data Processing Report

Generated: 2026-07-19 12:33:29

## Files Processed

- Number of Excel files: 10
- Number of PDF files: 0

## Records

- Total records extracted from Excel: 41664
- Total records extracted from PDFs: 0
- Total records extracted overall: 41664

## Filtering

- Records removed because Mobile Number was missing: 599
- Records removed because Mobile Number was invalid: 830

## Deduplication

- Duplicate records found: 24146
- Duplicate records removed: 24146

## Final Dataset

- Final number of unique records: 16089

## Column Mapping Used

| Original Column Name | Standardized Name |
|---|---|
| `Aadhaar Number of Applicant` | Aadhaar Number of Applicant |
| `Address` | Address |
| `Ag e` | Ag e |
| `Category(OC/BC/SC/ST/Others )` | Category(OC/BC/SC/ST/Others ) |
| `Decision as per 
Field Verification
(Eligible/ 
Ineligible)` | Decision as per 
Field Verification
(Eligible/ 
Ineligible) |
| `District` | District |
| `FP Shop No` | FP Shop No |
| `Gender` | Gender |
| `Gram Panchayat/ 
Ward No` | Gram Panchayat/ 
Ward No |
| `Habitation
 (incase of 
rural areas only)` | Habitation
 (incase of 
rural areas only) |
| `House 
Address` | House 
Address |
| `Location` | Location |
| `Mandal/ 
Municipality & Village` | Mandal/ 
Municipality & Village |
| `Mandal_ Name` | Mandal_ Name |
| `Meeseva Application Number` | Meeseva Application Number |
| `Mobile Number` | Mobile Number |
| `Name` | Name |
| `Name of the
Head of Family` | Name of the
Head of Family |
| `New_District_ Name` | New_District_ Name |
| `Occupati on` | Occupati on |
| `PS_Location` | PS_Location |
| `PS_N O` | PS_N O |
| `PS_Name` | PS_Name |
| `Pending Status (Inspector/MRO/DCSO)` | Pending Status (Inspector/MRO/DCSO) |
| `Qualificat ion` | Qualificat ion |
| `Ration Card No` | Ration Card No |
| `Remarks` | Remarks |
| `S. No` | S. No |
| `SlN O` | SlN O |
| `V_Rel` | V_Rel |

## Files with Issues

- None

## Processing Summary

1. **File Discovery**: Scanned the input directory `/home/kuna/Documents/Hospital/Mobile no.s` recursively for all `.xlsx`, `.xls`, and `.pdf` files, excluding lock files.

2. **Excel Reading**: Each Excel file was read sheet by sheet. Headerless files (e.g., PT NAMES, PT MOBILE NO) were assigned column names (`Name`, `Location`, `Mobile Number`). Files with secondary index rows (e.g., Name of NZB District) had those rows skipped. All sheets were combined.

3. **PDF Reading**: PDF files were processed using `pdfplumber` to extract tabular data from each page. Table headers were used as column names. No PDF files were found in this run.

4. **Column Standardization**: All column names were mapped to standardized names using the defined mapping rules:
   - `V_Name` -> `Name`
   - `Name of the Applicant` -> `Name`
   - `Mobile_No` -> `Mobile Number`
   - `Mobile No` -> `Mobile Number`
   - Unmapped columns were preserved as-is.

5. **Record Filtering**: Records were removed if:
   - Mobile Number was empty, null, or whitespace-only
   - Mobile Number was invalid (did not resolve to exactly 10 digits after normalization)
   - Name was empty or contained no alphabetic characters

6. **Mobile Number Normalization**: All mobile numbers were cleaned by:
   - Removing spaces, dashes, brackets, and special characters
   - Stripping leading `+91` or `91` country codes
   - Validating that exactly 10 digits remained

7. **Deduplication**: Records were deduplicated using Mobile Number as the primary key. When duplicates existed, the most complete record (highest count of non-empty fields) was retained, and data was merged where possible.

8. **Output Generation**:
   - `merged_data.xlsx`: Professionally formatted with bold headers, auto-sized columns, frozen first row, and enabled filters
   - `merged_data.csv`: UTF-8 with BOM for Excel compatibility
   - `processing_report.md`: This report
   - `processing_summary.json`: Machine-readable statistics
