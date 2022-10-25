import './App.css';
import './css/tabler.min.css'
import Header from "./components/Header/Header";
import TopicList from "./components/TopicList/TopicList";
import SignIn from "./components/LoginForm/SignIn";
import SignUp from "./components/RegistrationForm/SignUp";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App theme-dark">
      <Routes>
          <Route path="/" element={<Header/>}>
              <Route index element={<TopicList/>}/>
              <Route path="list" element={<TopicList/>}/>
              <Route path="tags" element={<TopicList/>}/>
              <Route path="users" element={<TopicList/>}/>
          {/*    routings for pages with header*/}
          </Route>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          {/*    routings for pages without header*/}
          {/*https://reactrouter.com/en/main/start/overview*/}

      </Routes>
    </div>
  );
}

export default App;

