const Score = () => {
  return (
    <div className="flex justify-between items-center border-2 border-Header-Outline p-4 absolute top-0 left-0 right-0 rounded-lg">
      <div className="text-white leading-5 text-2xl font-black">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </div>
      <div className="bg-white p-6 py-2 flex flex-col items-center">
        <div className="text-Score-Text text-sm">SCORE</div>
        <div className="text-Dark-Text text-5xl">12</div>
      </div>
    </div>
  );
};

export default Score;
