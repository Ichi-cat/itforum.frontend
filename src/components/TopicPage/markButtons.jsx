import React, { useState } from "react";
import { topicAPI } from "../../services/topicApi";
import c from "classnames";
import { IconThumbUp } from '@tabler/icons';
import { IconThumbDown } from '@tabler/icons';

const MarkButtons = ({ topicId, Marks }) => {
    const [likeCount] = useState(Marks.likeCount);
    const [dislikeCount] = useState(Marks.dislikeCount);
    const [isMarkDisabled, setIsMarkDisabled] = useState(false);
    const [like, _data] = topicAPI.useSetMarkMutation();
    const [dislike, _] = topicAPI.useSetMarkMutation();

    const MarkedOnClick = (markType) => {
        setIsMarkDisabled(true);
        console.log(Marks);
        like({ topicId: topicId, mark: markType }).then(data => {
            if (!data.error) potomDodelayu();
            setIsMarkDisabled(false);
            return data;
        });
    }
    const potomDodelayu = () => {
        /*if like(alreadyExist)
            *****/
    }
    return (
        <div>
            <button
                disabled={isMarkDisabled}
                onClick={() => MarkedOnClick(0)}
                className={c({ "active": Marks.isLiked }, "btn")/* c({ ["active"]: this.state.likeActive, "btn": true }) */}
            >
                <IconThumbUp></IconThumbUp>{likeCount}
            </button>
            <button
                disabled={isMarkDisabled}
                className={c({ ["active"]: Marks.isDisliked }, "btn")}
                onClick={() => MarkedOnClick(1)/* this.handleDislike() */}
            >
                <IconThumbDown></IconThumbDown>{dislikeCount}
            </button>
        </div>
    );
}

export default MarkButtons;
const rootElement = document.getElementById("root");