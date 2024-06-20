import {getObjFromQueryString} from "../utils/getSearchParamsAsObject";
import {useSearchParams} from "react-router-dom";


export const useAppMergeParamsWithSearchParams = ():any => {
// TODO add typing useAppMergeParamsWithSearchParams
    const [searchParams, setSearchParams] = useSearchParams();

    const mergeParamsWithSearchParams = (newParams: Record<string, string>): void => {
        const queryString = searchParams.toString();
        let newObj = {} as Record<string, string>;
        const queryObj = getObjFromQueryString(queryString);
        newObj = {...queryObj, ...newParams};
        setSearchParams(newObj)
    }

    return {mergeParamsWithSearchParams}
}

