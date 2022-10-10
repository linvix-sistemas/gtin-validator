import { errorsList } from "./errorsList"

/**
 * @description Determines whether productCode param is of type string && not an empty string
 * @param productCode
 * @param [returnBooleanOrThrowError] default = 'boolean'
 * @returns true if string && non empty string
 *  */
export function isString(
  productCode: any,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
): boolean {
  if (productCode === "") {
    if (returnBooleanOrThrowError === "error") throw new Error(errorsList.emptyString)
    return false
  }
  if (typeof productCode !== "string") {
    if (returnBooleanOrThrowError === "error") throw new Error(errorsList.notString)
    return false
  } else return true
}

/**
 * @description Determines whether productCode is a string of digits.
 * @param productCode
 * @param [returnBooleanOrThrowError]
 * @returns true if valid string of digits
 */
export function isStringOfDigits(
  productCode: string,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
) {
  if (isString(productCode, returnBooleanOrThrowError)) {
    if (/^\d+$/.test(productCode)) {
      return true
    }
    if (returnBooleanOrThrowError === "error") {
      throw new Error(errorsList.stringContainsNonDigitCharacters)
    }
    return false
  }
  return false
}

/**
 * @description Randomly returns a number: 8, 12, 13, or 14
 * @example randomGtinLength() // returns random 8,12,13,or 14. for example: //returns 12
 * @returns
 */
export function randomGtinLength() {
  return [8, 12, 13, 14][Math.floor(Math.random() * 4)]
}
