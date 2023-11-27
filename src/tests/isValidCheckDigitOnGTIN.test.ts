import { errorsList } from "../modules/errorsList";
import { isValidCheckDigitOnGTIN } from "../modules/isValidCheckDigitOnGTIN";

test.each([
    "722510035005",
    "710882350628",
    "00614141453245",
    "078000053401",
    "00012345678905",
    "5901234123457",
    "000012341238",
    "0000012341238",
    "00000012341238",
    "12341238",
])("isValidCheckDigitOnGTIN valid tests", (productCode) => {
    expect(isValidCheckDigitOnGTIN(productCode)).toBe(true);
});
test.each([
    ["", errorsList.emptyString],
    ["6", errorsList.invalidStringLengthForGTIN],
    ["86", errorsList.invalidStringLengthForGTIN],
    ["84656", errorsList.invalidStringLengthForGTIN],
    ["846546", errorsList.invalidStringLengthForGTIN],
    ["84654855681", errorsList.invalidStringLengthForGTIN],
    ["846548556815868", errorsList.invalidStringLengthForGTIN],
    ["078000053404", errorsList.invalidCheckDigit],
    ["00614131453245", errorsList.invalidCheckDigit],
    ["792510035005", errorsList.invalidCheckDigit],
    ["710882350626", errorsList.invalidCheckDigit],
    ["01012345678905", errorsList.invalidCheckDigit],
    ["5901230123457", errorsList.invalidCheckDigit],
    [5901234123457, errorsList.notString],
])("isValidCheckDigitOnGTIN invalid tests", (productCode, expectedError) => {
    expect(() => {
        //@ts-ignore
        isValidCheckDigitOnGTIN(productCode, "error");
    }).toThrowError(expectedError);
    //@ts-ignore
    expect(isValidCheckDigitOnGTIN(productCode)).toBe(false);
    //@ts-ignore
    expect(isValidCheckDigitOnGTIN(productCode, "boolean")).toBe(false);
});
