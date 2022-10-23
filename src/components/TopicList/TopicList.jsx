import ProfileCard from "./ProfileCard/ProfileCard";
import LastViewedCard from "./LastViewedCard/LastViewedCard";
import TopicItem from "./TopicItem/TopicItem";

const TopicList = () => {
    const topics = [
        {id: "7324b1dd-07c9-4442-b0ac-25feba79965a", name: "Topic name", shortContent: "Some content" },
        {id: "7324b1dd-07c9-4442-b0ac-25feba79945a", name: "Topic name", shortContent: "Some content" },
        {id: "7324b1dd-07c9-4442-b0ac-25feba79935a", name: "Topic name", shortContent: "Some content" }
    ];
    return (
        <div className="container-xl">
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
            </div>
        </div>
    );
}

export default TopicList;