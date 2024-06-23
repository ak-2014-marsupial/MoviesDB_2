import {useEffect, useMemo} from "react";
import {genreActions} from "../redux/slices";
import { useSearchParams} from "react-router-dom";
import {initialSearchParams} from "../constants/appConstants";
import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {getObjFromQueryString} from "../utils/getSearchParamsAsObject";

const useAppGenres = () => {
    const dispatch = useAppDispatch();
    const { genreList } = useAppSelector((state) => state.genre);


    const [searchParams] = useSearchParams(initialSearchParams);
    const queryString = searchParams.toString()
    const objSearchParams: Record<string, string> = useMemo(() => getObjFromQueryString(queryString), [queryString]);

    useEffect(() => {
        console.log("Fetching Genres");
        dispatch(genreActions.getAll({ ...objSearchParams }));
    }, [dispatch, objSearchParams]);


    return {
        genreList,
    };
};

export {useAppGenres};
