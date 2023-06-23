import { PG_WEB_URL } from "./constants";

export const getPaulGrahamSiteUrl = essayMaskingName => {
    if(!essayMaskingName || essayMaskingName.indexOf('http') !== -1) {
        return essayMaskingName;
    }
    return `${PG_WEB_URL}${essayMaskingName}.html`;
};