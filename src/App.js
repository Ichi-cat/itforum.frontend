import './App.css';
import './css/tabler.min.css'
import Header from "./components/Header/Header";
import TopicList from "./components/TopicList/TopicList";
import RegistrationDataInput from "./components/RegistrationForm/RegistrationDataInput";
import SignIn from "./components/LoginForm/SignIn";
import SignUp from "./components/RegistrationForm/SignUp";

function App() {
  return (
    <div className="App theme-dark">
      {/*<Header/>*/}
        {/*<TopicList/>*/}
        <SignUp/>
    </div>
  );
}

export default App;
