const Rules = ({ toggleRules }) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-white z-10 flex flex-col justify-start items-center pt-[20vh]">
      <div className="flex flex-col items-center">
        <h1 className="font-black text-[6vh]">RULES</h1>
        <img
          src="/images/image-rules.svg"
          alt="rules"
          className="mt-[6vh] h-[30vh]"
        />
      </div>

      <img
        src="/images/icon-close.svg"
        alt="close"
        className="absolute bottom-[6vh] cursor-pointer"
        onClick={toggleRules}
      />
    </div>
  );
};

export default Rules;
