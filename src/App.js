import "./App.css";
import MainGame from "./Components/MainGame";
import Score from "./Components/Score";

const App = () => {
  return (
    <main className="background w-screen h-screen relative p-[3vh]">
      <div className="h-full w-full relative">
        <Score />
        <MainGame />
      </div>
    </main>
  );
};

export default App;
