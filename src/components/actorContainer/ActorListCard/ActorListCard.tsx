import React, {FC} from 'react';
import { ICast} from "../../../interfaces/actorInterface";

import css from "./ActorListCard.module.css"
import {PosterPreview} from "../../PosterPreview";
import {posterBaseUrl} from "../../../constants";


interface IProps {
    actor: ICast
}

const ActorListCard: FC<IProps> = ({actor}) => {
    const {cast_id, original_name,name, profile_path} = actor;
    return (
        <div>
            <div className={css.wrap_image}>
                <PosterPreview key={cast_id} title={original_name} path={profile_path}/>
            </div>



            <div className={css.title}>{name}</div>
        </div>
    );
};

export {ActorListCard};