import ProfileCard from "./ProfileCard/ProfileCard";
import LastViewedCard from "./LastViewedCard/LastViewedCard";
import TopicItem from "./TopicItem/TopicItem";
import {topicAPI} from "../../services/topicApi";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {Field, Form, Formik} from "formik";

const TopicList = () => {
    const [sort, setSort] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = +searchParams.get("page");
    if(!currentPage) currentPage = 1;
    const pageSize = 5;
    const accessToken = useSelector(state => state.auth.token);
    const {data: topics, isFetching, refetch} = topicAPI.useFetchAllTopicsQuery({accessToken, page: currentPage, pageSize, sort});
    return (
        <div className="container-xl">
            <button className="btn" onClick={() => refetch()}>Refresh</button>
            <div className="row mt-5 justify-content-md-center">
                <div className="col-lg-2 col-md-8 col-sm-12">
                    <ProfileCard/>
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="mb-3">
                            <Formik initialValues={{sort: sort}} onSubmit={(values, {setSubmitting}) => {
                                setSort(values.sort)
                                setSubmitting(false);
                            }}>
                                {({isSubmitting, handleSubmit}) => (
                                    <Form>
                                        <Field as="select" className="form-select" name="sort" onInput={handleSubmit}
                                               placeholder="Select a sort" tabIndex="-1">
                                            <option value="0">By Date</option>
                                            <option value="1">By Date Descending</option>
                                            <option value="2">By Likes</option>
                                        </Field>
                                    </Form>
                                )
                                }
                            </Formik>
                        </div>
                    <div>
                        <Paginator/>
                    </div>
                    <div>
                        {!isFetching && topics && topics.topics.map(topic => <TopicItem topic={topic} key={topic.id}/>)}
                    </div>
                </div>
                <div className="col-lg-2 col-md-8 col-sm-12">
                    <LastViewedCard/>
                </div>
            </div>
            {isFetching &&
            <div>Fetching...</div>}
        </div>
    );
}

export default TopicList;