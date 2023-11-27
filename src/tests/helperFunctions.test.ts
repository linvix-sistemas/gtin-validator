import { errorsList } from "../modules/errorsList";
import { isString, isStringOfDigits, randomGtinType } from "../modules/helpersFunctions";

test.each(["fasdfas", "54685486"])("isString valid tests", (productCode) => {
    expect(isString(productCode)).toBe(true);
});

test.each([
    ["", errorsList.emptyString],
    [655234, errorsList.notString],
    [null, errorsList.notString],
    [4516.5464, errorsList.notString],
    [undefined, errorsList.notString],
    [() => {}, errorsList.notString],
    [{ key: "value" }, errorsList.notString],
])("isString invalid tests", (productCode, expectedError) => {
    expect(() => isString(productCode, "error")).toThrowError(expectedError);
    expect(isString(productCode, "boolean")).toBe(false);
});

test.each(["045051564", "5646541546"])("isStringOfDigits valid tests", (productCode) => {
    expect(isStringOfDigits(productCode)).toBe(true);
});

test.each([
    ["", errorsList.emptyString],
    ["4564fa4566", errorsList.stringContainsNonDigitCharacters],
    ["f6546546", errorsList.stringContainsNonDigitCharacters],
    ["546354.54654", errorsList.stringContainsNonDigitCharacters],
    ["+54635454654", errorsList.stringContainsNonDigitCharacters],
    ["-54635454654", errorsList.stringContainsNonDigitCharacters],
    ["$54635454654", errorsList.stringContainsNonDigitCharacters],
    ["NaN", errorsList.stringContainsNonDigitCharacters],
])("isStringOfDigits invalid tests", (productCode, expectedError) => {
    expect(() => isStringOfDigits(productCode, "error")).toThrowError(expectedError);
    expect(isStringOfDigits(productCode, "boolean")).toBe(false);
});

for (let i = 0; i < 100; i++) {
    test("randomGtinType", () => {
        expect(randomGtinType().toString()).toMatch(/(GTIN-8|GTIN-12|GTIN-13|GTIN-14)/);
    });
}
