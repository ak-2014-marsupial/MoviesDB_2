import {useNavigate, useSearchParams} from "react-router-dom";
import {mergeSearchParams} from "../utils/getSearchParamsAsObject";


const useAppNavigateWithNewParams = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    type IState={state:Record<string,string>} | {}
    const navigateWithParams =

        (to: string, params : Record<string, string | null>,state:IState):void => {
            // todo implement enum Record<enum, string |null>
            const newQueryString = mergeSearchParams(params, searchParams.toString());
            navigate(`${to}${newQueryString}`,state)
    }

    return {
        navigateWithParams
    };

}

export {useAppNavigateWithNewParams}