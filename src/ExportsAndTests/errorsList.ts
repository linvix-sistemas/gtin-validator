/**
 * @description Error messages to be used throughout project.
 */
export const errorsList: {
  emptyString: "Invalid GTIN: The provided productCode is an empty string."
  notString: `Invalid GTIN: The provided productCode is not of type string.`
  stringContainsNonDigitCharacters: "Invalid GTIN: The provided productCode contains non digit characters."
  invalidStringLengthForGTIN: `Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits.`
  invalidRegionPrefixForGTIN: `Invalid GTIN: GTIN region prefix is invalid.`
  invalidStringLengthForRemoveGTINLeadingZerosToUpcOrGTIN13: `Invalid productCode provided to removeGTINLeadingZerosToUpcOrGTIN13: Only valid GTINs between 12-14 digits are accepted.`
  invalidCheckDigit: `Invalid GTIN: GTIN check digit is invalid.`
  unknownRemoveGTINLeadingZerosToUpcOrGTIN13: "Unknown error attempting removeGTINLeadingZerosToUpcOrGTIN13 with the provided productCode."
  invalidStringLengthForCalculateCheckDigitForGTIN: "Invalid length for the provided productCodeWithoutCheckDigit param. The productCodeWithoutCheckDigit param should be a string of digits 7 or 11-13 characters long."
  invalidGtinTypeForGenerateRandomGTIN: 'gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".'
  invalidGtinTypeGenerateArrayOfRandomGTINs: 'gtinType param for generateArrayOfRandomGTINs must be "GTIN-8", "GTIN-12", "GTIN-13", "GTIN-14", or "Any Valid GTIN".'
} = {
  emptyString: "Invalid GTIN: The provided productCode is an empty string.",
  notString: `Invalid GTIN: The provided productCode is not of type string.`,
  stringContainsNonDigitCharacters:
    "Invalid GTIN: The provided productCode contains non digit characters.",
  invalidStringLengthForGTIN: `Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits.`,
  invalidRegionPrefixForGTIN: `Invalid GTIN: GTIN region prefix is invalid.`,
  invalidStringLengthForRemoveGTINLeadingZerosToUpcOrGTIN13: `Invalid productCode provided to removeGTINLeadingZerosToUpcOrGTIN13: Only valid GTINs between 12-14 digits are accepted.`,
  invalidCheckDigit: `Invalid GTIN: GTIN check digit is invalid.`,
  unknownRemoveGTINLeadingZerosToUpcOrGTIN13:
    "Unknown error attempting removeGTINLeadingZerosToUpcOrGTIN13 with the provided productCode.",
  invalidStringLengthForCalculateCheckDigitForGTIN:
    "Invalid length for the provided productCodeWithoutCheckDigit param. The productCodeWithoutCheckDigit param should be a string of digits 7 or 11-13 characters long.",
  invalidGtinTypeForGenerateRandomGTIN:
    'gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".',
  invalidGtinTypeGenerateArrayOfRandomGTINs:
    'gtinType param for generateArrayOfRandomGTINs must be "GTIN-8", "GTIN-12", "GTIN-13", "GTIN-14", or "Any Valid GTIN".',
}
