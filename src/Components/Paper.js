import Coin from "./Coin";

const Paper = () => {
  const STYLE = "bg-paper border-paper-shadow";
  const IMG_URL = "/images/icon-paper.svg";
  return (
    <div>
      <Coin url={IMG_URL} coinStyle={STYLE} />
    </div>
  );
};

export default Paper;
