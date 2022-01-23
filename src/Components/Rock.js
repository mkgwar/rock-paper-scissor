import Coin from "./Coin";

const Rock = () => {
  const STYLE = "bg-rock border-rock-shadow";
  const IMG_URL = "/images/icon-rock.svg";
  return (
    <div>
      <Coin url={IMG_URL} coinStyle={STYLE} />
    </div>
  );
};

export default Rock;
