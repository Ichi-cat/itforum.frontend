import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/js/tabler.min'
import './App.css';
import Header from "./components/Header/Header";
import AddTopicButton from "./components/TopicAdding/AddTopicButton";
import TopicList from "./components/TopicList/TopicList";
import {Route, Routes} from "react-router-dom"
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import {useState} from "react";
import TagList from "./components/TagList/TagList";
import {useDispatch} from "react-redux";
import {setToken} from "./store/reducers/AuthReducer";
import SignInContainer from "./components/LoginForm/SignInContainer";
import SignUpContainer from "./components/RegistrationForm/SignUpContainer";
import TopicListByTag from "./components/TopicListByTag/TopicListByTag";
import BaseUserInfoContainer from "./components/RegistrationForm/BaseUserInfo/BaseUserInfoContainer";
import BaseUserInfoPage2Container from "./components/RegistrationForm/BaseUserInfoPage2/BaseUserInfoPage2Container";
import AddTopicPage from "./components/TopicAdding/AddTopicPage";
import "./services/Renderer/renderer"
import UserList from "./components/UserList/UserList";
import ForgetPasswordContainer from "./components/ForgetPassword/ForgetPasswordContainer";
import ResetPasswordContainer from "./components/ResetPassword/ResetPasswordContainer";

function App() {
    const [isDark, setDark] = useState(localStorage.getItem("theme") === "dark");
    const dispatch = useDispatch();
    if(localStorage.getItem("token"))
        dispatch(setToken(localStorage.getItem("token")))
  return (
    <div className={`App ` + (isDark ? "theme-dark":"theme-light")}>
      <Routes>
          <Route path="/" element={<><Header setDark={setDark}/><AddTopicButton/></>}>
              <Route index element={<TopicList/>}/>
              <Route path="list" element={<TopicList/>}/>
              <Route path="/byTag/:tag" element={<TopicListByTag/>}/>
              <Route path="tags" element={<TagList/>}/>
              <Route path="users" element={<UserList/>}/>
              <Route path="/profile" element={<ProfileInfo/>}/>
              <Route path="/profile/:profileId" element={<ProfileInfo/>}/>
              <Route path="addTopic" element={<AddTopicPage/>}/>
          {/*    routings for pages with header*/}
          </Route>
          <Route path="/SignIn" element={<SignInContainer/>}/>
          <Route path="/SignUp" element={<SignUpContainer/>}/>
          <Route path="/ResetPassword" element={<ResetPasswordContainer/>}/>
          <Route path="/ForgetPassword" element={<ForgetPasswordContainer/>}/>
          <Route path="/info/1" element={<BaseUserInfoContainer/>}/>
          <Route path="/info/2" element={<BaseUserInfoPage2Container/>}/>
          {/*    routings for pages without header*/}
          {/*https://reactrouter.com/en/main/start/overview*/}
      </Routes>
    </div>
  );
}

export default App;

