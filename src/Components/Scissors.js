import Coin from "./Coin";

const Scissors = () => {
  const STYLE = "bg-scissors border-scissors-shadow";
  const IMG_URL = "/images/icon-scissors.svg";
  return (
    <div>
      <Coin url={IMG_URL} coinStyle={STYLE} />
    </div>
  );
};

export default Scissors;
