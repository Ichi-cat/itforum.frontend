import ProfileCard from "./ProfileCard/ProfileCard";
import TopicItem from "./TopicItem/TopicItem";
import {topicAPI} from "../../services/topicApi";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Sorting from "../common/Sorting/Sorting";
import AllTopicsList from "./AllTopicsList/AllTopicsList";
import TopicListBySubscribers from "./TopicListBySubscribers/TopicListBySubscribers";

const TopicList = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const [isSubscribedTopics, setIsSubscribedTopics] = useState(false);
    return (
        <div className="container-xl">
            <div className="row mt-5 justify-content-md-center">
                <div className="col-lg-2 col-md-8 col-sm-12">
                    {isAuthorized&&<ProfileCard/>}
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12">
                    {!isSubscribedTopics&&<AllTopicsList isSubscribedTopics={isSubscribedTopics} setIsSubscribedTopics={setIsSubscribedTopics} />}
                    {isSubscribedTopics&&<TopicListBySubscribers isSubscribedTopics={isSubscribedTopics} setIsSubscribedTopics={setIsSubscribedTopics} />}
                    </div>
                <div className="col-lg-2 col-md-8 col-sm-12">
                    {/*<LastViewedCard/>*/}
                </div>
            </div>
        </div>
    );
}

export default TopicList;