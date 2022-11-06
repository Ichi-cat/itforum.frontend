import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/js/tabler.min'
import './App.css';
import Header from "./components/Header/Header";
import TopicList from "./components/TopicList/TopicList";
import {Route, Routes} from "react-router-dom"
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setToken} from "./store/reducers/AuthReducer";
import SignInContainer from "./components/LoginForm/SignInContainer";
import SignUpContainer from "./components/RegistrationForm/SignUpContainer";

function App() {
    const [isDark, setDark] = useState(localStorage.getItem("theme") === "dark");
    const dispatch = useDispatch();
    if(localStorage.getItem("token"))
        dispatch(setToken(localStorage.getItem("token")))
  return (
    <div className={`App ` + (isDark ? "theme-dark":"theme-light")}>
      <Routes>
          <Route path="/" element={<Header setDark={setDark}/>}>
              <Route index element={<TopicList/>}/>
              <Route path="list" element={<TopicList/>}/>
              <Route path="tags" element={<TopicList/>}/>
              <Route path="users" element={<TopicList/>}/>
              <Route path="/profile" element={<ProfileInfo/>}/>
          {/*    routings for pages with header*/}
          </Route>
          <Route path="/SignIn" element={<SignInContainer/>}/>
          <Route path="/SignUp" element={<SignUpContainer/>}/>
          {/*    routings for pages without header*/}
          {/*https://reactrouter.com/en/main/start/overview*/}
      </Routes>
    </div>
  );
}

export default App;

