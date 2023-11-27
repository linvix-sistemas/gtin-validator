import { errorsList } from "./errorsList";
import prefixList from "./prefixList";

/**
 * @description Determines whether the GTIN's prefix region is valid.
 * @param productCode 8 or 12-14 digit GTIN including check digit
 * @param [returnBooleanOrThrowError] default = 'boolean'
 * @returns true if productCode has a valid region prefix.
 */

export function isValidPrefixOfGTIN(productCode: string, returnBooleanOrThrowError: "boolean" | "error" = "boolean") {
    const gtinPrefix = productCode.substr(0, 3);
    let isValid = false;

    for (let i = 0; i < prefixList.length; i++) {
        const prefix = prefixList[i];

        const nIni = prefix.nIni;
        const nFim = prefix.nFim;
        const region = prefix.region;

        if (gtinPrefix >= nIni && gtinPrefix <= nFim) {
            isValid = true;
            return region;
        }
    }

    if (!isValid) {
        if (returnBooleanOrThrowError === "error") {
            throw new Error(errorsList.invalidRegionPrefixForGTIN);
        }
        return false;
    } else {
        return true;
    }
}
