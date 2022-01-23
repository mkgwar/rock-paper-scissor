import Coin from "./Coin";

const PAPER = "PAPER";

const Paper = ({ selectedCoinFromUser }) => {
  const STYLE = "bg-paper border-paper-shadow";
  const IMG_URL = "/images/icon-paper.svg";
  return (
    <div onClick={() => selectedCoinFromUser(PAPER)}>
      <Coin url={IMG_URL} coinStyle={STYLE} />
    </div>
  );
};

export default Paper;
