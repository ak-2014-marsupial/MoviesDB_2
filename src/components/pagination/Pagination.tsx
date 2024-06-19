import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";


const PaginationComponent = () => {
    const {total_pages,} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page:'1'});

    return (
        <div>
            <Pagination
                count={total_pages}
                page={+query.get('page')}
                onChange={(_, num)=> {
                    setQuery({page: num.toString()})
                    window.scrollTo(0, 0)
                }}
                size="large"
                sx={{margin:7}}
            />
        </div>
    );
}

export {PaginationComponent};