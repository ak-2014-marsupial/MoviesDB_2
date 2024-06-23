import {useNavigate, useSearchParams} from "react-router-dom";
import {mergeSearchParams} from "../utils/getSearchParamsAsObject";


const useAppNavigateWithNewParams = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    type IState={state:Record<string,string>} | {}
    const navigateWithParams =
        // (to: string, params : Record<string, string>,toDisplay:Record<string,string>):void => {
        // const newQueryString = mergeSearchParams(params, searchParams.toString());
        //
        // navigate(`${to}${newQueryString}`,{state:{toDisplay}})

        (to: string, params : Record<string, string>,state:IState):void => {
            const newQueryString = mergeSearchParams(params, searchParams.toString());

            navigate(`${to}${newQueryString}`,state)
    }

    return {
        navigateWithParams
    };

}

export {useAppNavigateWithNewParams}