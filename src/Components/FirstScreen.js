import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

const FirstScreen = ({ selectedCoinFromUser }) => {
  return (
    <div className="first-screen h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center w-full gap-16">
        <div className="flex justify-center items-center w-full gap-12">
          <Paper selectedCoinFromUser={selectedCoinFromUser} />
          <Scissors selectedCoinFromUser={selectedCoinFromUser} />
        </div>
        <Rock selectedCoinFromUser={selectedCoinFromUser} />
      </div>
    </div>
  );
};

export default FirstScreen;
