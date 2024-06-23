import {useEffect, useMemo} from "react";
import { useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {getObjFromQueryString} from "../utils/getSearchParamsAsObject";
import {initialSearchParams} from "../constants/appConstants";
import {genreActions} from "../redux/slices";

const useAppGenres = () => {
    const dispatch = useAppDispatch();
    const { genreList } = useAppSelector((state) => state.genre);


    const [searchParams] = useSearchParams(initialSearchParams);
    const queryString = searchParams.toString()
    const objSearchParams: Record<string, string> = useMemo(() => getObjFromQueryString(queryString), [queryString]);

    useEffect(() => {
        dispatch(genreActions.getAll({ ...objSearchParams }));
    }, [dispatch, objSearchParams]);


    return {
        genreList,
    };
};

export {useAppGenres};
