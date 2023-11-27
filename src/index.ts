import { isValidCheckDigitOnGTIN } from "./modules/isValidCheckDigitOnGTIN";
import { isValidStringLengthForGTIN } from "./modules/isValidStringLengthForGTIN";
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "./modules/removeGTINLeadingZerosToUpcOrGTIN13";
import { isValidGTIN } from "./modules/isValidGTIN";
import { getFormatOfGTIN } from "./modules/getFormatOfGTIN";
import { getFormatOfMinifiedGTIN } from "./modules/getFormatOfMinifiedGTIN";
import { calculateCheckDigitForGTIN } from "./modules/calculateCheckDigitForGTIN";
import { generateRandomGTIN } from "./modules/generateRandomGTIN";
import { generateArrayOfRandomGTINs } from "./modules/generateArrayOfRandomGTINs";

export {
    isValidGTIN,
    isValidCheckDigitOnGTIN,
    isValidStringLengthForGTIN,
    removeGTINLeadingZerosToUpcOrGTIN13,
    getFormatOfGTIN,
    getFormatOfMinifiedGTIN,
    calculateCheckDigitForGTIN,
    generateRandomGTIN,
    generateArrayOfRandomGTINs,
};
