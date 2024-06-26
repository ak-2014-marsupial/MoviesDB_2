import {KeyArgs} from "../constants/appConstants";

export const getObjFromQueryString = (queryString: string): Record<KeyArgs, string> => {
    const objResult = {} as Record<string, string>;
    const params = new URLSearchParams(queryString);
    // @ts-ignore
    for (const [key, value] of params.entries()) {
        objResult[key] = value;
    }

    return objResult
}

export const mergeSearchParams = (newParams: Record<KeyArgs, string>, queryString: string): string => {
    const params = getObjFromQueryString(queryString)
    const obj = {...params, ...newParams}

    return  "?"+Object.entries(obj)
        .filter(([key,val]) => val.length > 0)
        .map(i=>`${i[0]}=${i[1]}`)
        .join("&")

    // @ts-ignore
    // return "?" + Object.keys(obj).map(item => `${item}=${obj[item]}`).join("&")
}