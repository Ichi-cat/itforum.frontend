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
      <Header/>
      <Routes>
        <Route path="/" element={<TopicList />}>
          {/*<Route index element={<TopicList/>} />*/}
          {/*<Route path="teams" element={<Teams />}>*/}
          {/*<Route path=":teamId" element={<Team />} />*/}
          {/*<Route path="new" element={<NewTeamForm />} />*/}
          {/*<Route index element={<LeagueStandings />} />*/}
          {/*</Route>*/}
        </Route>
        {/*<Route path="/details/:topicId" element={<TopicDetails/>}/>*/}
      </Routes>
    </div>
  );
}

export default App;
