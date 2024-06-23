
export const getObjFromQueryString = (queryString: string): Record<string, string> => {
    const objResult = {} as Record<string, string>;
    const params = new URLSearchParams(queryString);
    // @ts-ignore
    for (const [key, value] of params.entries()) {
        objResult[key] = value;
    }

    return objResult
}

export const mergeSearchParams = (newParams: Record<string, string>, queryString: string): string => {
    const params = getObjFromQueryString(queryString)
    const obj = {...params, ...newParams}
    // @ts-ignore
    return "?" + Object.keys(obj).map(item => `${item}=${obj[item]}`).join("&")
}