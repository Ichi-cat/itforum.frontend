import React, {useState} from 'react';
import {FaUserSecret} from "react-icons/fa";
import {Link} from "react-router-dom";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {useSelector} from "react-redux";
import {subscribeAPI} from "../../../services/subscribeApi";

const UserItem = ({user, refetch}) => {
    const [isSubscribed, setIsSubscribed] = useState(user.isSubscribed);
    const [isSubscribeDisabled, setIsSubscribeDisabled] = useState(false);
    const[subscribe, _data] = subscribeAPI.useSubscribeMutation();
    const[unsubscribe, _] = subscribeAPI.useUnsubscribeMutation();
    const accessToken = useSelector(state => state.auth.token);
    const isAuthorized = useSelector((state) => state.auth.isAuth);
    const subscribeOnClick = () => {
        setIsSubscribeDisabled(true);
        subscribe({accessToken, id: user.id}).then(data => {
            if(!data.error) setIsSubscribed(true);
            setIsSubscribeDisabled(false);
        }).then(()=>refetch());
    }
    const unsubscribeOnClick = () => {
        setIsSubscribeDisabled(true);
        unsubscribe({accessToken, id: user.id}).then(data => {
            if(!data.error) setIsSubscribed(false);
            setIsSubscribeDisabled(false);
        }).then(()=>refetch());
    }
    return (
        <div className="card">
            <div className="card-body p-4 text-center">
                {user.avatar?<span className="avatar avatar-xl mb-3 avatar-rounded"
                              style={{backgroundImage: `url(${user.avatar})`}}></span>:<FaUserSecret className="avatar avatar-xl mb-3 avatar-rounded"/>}
                <h3 className="m-0 mb-1"><Link to={"/profile/"+user.id}>{user.fullName.trim()? user.fullName:"Anonim"}</Link></h3>

                <div className="mt-3">
                    <span className="badge bg-purple-lt">User</span>
                </div>
            </div>
            {isAuthorized&&
            <div className="d-flex">
                <button className="btn card-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                    Message</button>
                {!isSubscribed?<button className="btn card-btn" onClick={subscribeOnClick} disabled={isSubscribeDisabled}>
                    <AiOutlinePlus className="mx-1"/>
                    Subscribe</button>:
                    <button className="btn card-btn" onClick={unsubscribeOnClick} disabled={isSubscribeDisabled}>
                    <AiOutlineMinus className="mx-1"/>
                    Unsubscribe</button>}
            </div>}
        </div>
    );
};

export default UserItem;