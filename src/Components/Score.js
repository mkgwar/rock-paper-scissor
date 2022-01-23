const Score = () => {
  return (
    <div className="flex justify-between items-center border-2 border-Header-Outline p-4 absolute top-0 left-0 right-0 rounded-lg">
      <div className="text-white leading-[2.5vh] text-[2.5vh] font-black">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </div>
      <div className="bg-white p-6 py-2 flex flex-col items-center justify-center">
        <div className="text-Score-Text text-[1.5vh]">SCORE</div>
        <div className="text-Dark-Text text-[4.5vh]">12</div>
      </div>
    </div>
  );
};

export default Score;
