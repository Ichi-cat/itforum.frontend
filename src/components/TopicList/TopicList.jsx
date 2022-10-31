import ProfileCard from "./ProfileCard/ProfileCard";
import LastViewedCard from "./LastViewedCard/LastViewedCard";
import TopicItem from "./TopicItem/TopicItem";
import {topicAPI} from "../../services/topicApi";
import {useSelector} from "react-redux";

const TopicList = () => {
    const token = useSelector(state => state.auth.token);
    const {data: topics, isFetching, refetch} = topicAPI.useFetchAllTopicsQuery(token);
    return (
        <div className="container-xl">
            <button className="btn" onClick={() => refetch()}>Refresh</button>
            {!isFetching &&
            <div className="row mt-5 justify-content-md-center">
                <div className="col-lg-2 col-md-8 col-sm-12">
                    <ProfileCard/>
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12">
                    <div>
                        {topics && topics.map(topic => <TopicItem topic={topic} key={topic.id}/>)}
                    </div>
                </div>
                <div className="col-lg-2 col-md-8 col-sm-12">
                    <LastViewedCard/>
                </div>
            </div>}
            {isFetching &&
            <div>Fetching...</div>}
        </div>
    );
}

export default TopicList;