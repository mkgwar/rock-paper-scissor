import Coin from "./Coin";

const SCISSORS = "SCISSORS";

const Scissors = ({ selectedCoinFromUser }) => {
  const STYLE = "bg-scissors border-scissors-shadow";
  const IMG_URL = "/images/icon-scissors.svg";
  return (
    <div onClick={() => selectedCoinFromUser(SCISSORS)}>
      <Coin url={IMG_URL} coinStyle={STYLE} />
    </div>
  );
};

export default Scissors;
