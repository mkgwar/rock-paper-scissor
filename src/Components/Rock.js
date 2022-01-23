import Coin from "./Coin";

const ROCK = "ROCK";

const Rock = ({ selectedCoinFromUser }) => {
  const STYLE = "bg-rock border-rock-shadow";
  const IMG_URL = "/images/icon-rock.svg";
  return (
    <div onClick={() => selectedCoinFromUser(ROCK)}>
      <Coin url={IMG_URL} coinStyle={STYLE} />
    </div>
  );
};

export default Rock;
