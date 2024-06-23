import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";

import {Loader} from "../../Loader";
import css from "./ActorList.module.css"
import {ActorListCard} from "../ActorListCard";

const ActorList = () => {
    const {isActorLoading, actors} = useAppSelector(state => state.movieInfo);
    if (!actors || isActorLoading) return <Loader/>
    return (
        <>
            <div className={css.actor_list}>
                {actors && actors.map(actor => <ActorListCard key={actor.id} actor={actor}/>)}
            </div>
        </>
    );
};

export {ActorList};