import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

const MainGame = () => {
  return (
    <div className="main-game h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center w-full gap-16">
        <div className="flex justify-between items-center w-full">
          <Paper />
          <Scissors />
        </div>
        <Rock />
      </div>

      <div className="absolute bottom-0 text-xl text-white border-2 border-white rounded-lg p-8 py-2 mb-8 cursor-pointer">
        RULES
      </div>
    </div>
  );
};

export default MainGame;
