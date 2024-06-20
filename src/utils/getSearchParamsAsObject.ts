export const getObjFromQueryString = (queryString: string): Record<string, string> => {
    const objResult = {} as Record<string, string>;
    const params = new URLSearchParams(queryString);
    // @ts-ignore
    for (const [key, value] of params.entries()) {
        objResult[key] = value;
    }

    return objResult
}

