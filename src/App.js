import './App.css';
import './css/tabler.min.css'
import Header from "./components/Header/Header";
import TopicList from "./components/TopicList/TopicList";

function App() {
  return (
    <div className="App theme-dark">
      <Header/>
        <TopicList/>
    </div>
  );
}

export default App;
