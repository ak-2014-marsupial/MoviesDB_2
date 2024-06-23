import Pagination from 'rc-pagination';
import React, {useState} from 'react';

import 'rc-pagination/assets/index.css';
import enUSLocale from 'rc-pagination/lib/locale/en_US';

import {useAppSelector} from "../../hooks/reduxHooks";
import {useAppMergeParamsWithSearchParams} from "../../hooks/useAppMergeParamsWithSearchParams";


const PaginationComponent = () => {
    const {page = 1, total_pages} = useAppSelector(state => state.movies.movieList);
    const [currentPage, setCurrentPage] = useState<number>(page);

    const {mergeParamsWithSearchParams} = useAppMergeParamsWithSearchParams();

    const handlePageChange = (page: number) => {
        mergeParamsWithSearchParams({page: `${page}`})
        setCurrentPage(page);
    }



    return (
        // <div className={css.pagination}>
            <Pagination
                className="pagination-data"
                current={currentPage}
                total={total_pages} // Total number of items
                pageSize={20} // Number of items per page
                onChange={handlePageChange}
                locale={enUSLocale}
            />
        // </div>
    );
};


export {PaginationComponent};