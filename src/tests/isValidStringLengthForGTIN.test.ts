import { errorsList } from "../modules/errorsList";
import { isValidStringLengthForGTIN } from "../modules/isValidStringLengthForGTIN";

test.each(["84658556", "028465855654", "0284658556544", "02846585565447"])(
    "isValidStringLengthForGTIN valid tests",
    (productCode) => {
        expect(isValidStringLengthForGTIN(productCode)).toBe(true);
    },
);
test.each([
    ["", errorsList.emptyString],
    ["6", errorsList.invalidStringLengthForGTIN],
    ["86", errorsList.invalidStringLengthForGTIN],
    ["846", errorsList.invalidStringLengthForGTIN],
    ["8466", errorsList.invalidStringLengthForGTIN],
    ["84656", errorsList.invalidStringLengthForGTIN],
    ["846546", errorsList.invalidStringLengthForGTIN],
    ["8465456", errorsList.invalidStringLengthForGTIN],
    ["846548556", errorsList.invalidStringLengthForGTIN],
    ["8465485568", errorsList.invalidStringLengthForGTIN],
    ["84654855681", errorsList.invalidStringLengthForGTIN],
    ["846548556815868", errorsList.invalidStringLengthForGTIN],
    [722510035005, errorsList.notString],
])("isValidStringLengthForGTIN invalid tests", (productCode, expectedError) => {
    expect(() => {
        //@ts-ignore
        isValidStringLengthForGTIN(productCode, "error");
    }).toThrowError(expectedError);
    //@ts-ignore
    expect(isValidStringLengthForGTIN(productCode)).toBe(false);
    //@ts-ignore
    expect(isValidStringLengthForGTIN(productCode, "boolean")).toBe(false);
});
