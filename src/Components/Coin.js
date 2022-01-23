const Coin = ({ url, coinStyle }) => {
  return (
    <div className={"h-40 w-40 p-4 border-b-8 rounded-full " + coinStyle}>
      <div className="bg-white w-full h-full flex justify-center items-center border-t-8 border-gray-200 rounded-full">
        <img src={url} alt="paper" />
      </div>
    </div>
  );
};

export default Coin;
