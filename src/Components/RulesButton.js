const RulesButton = ({ toggleRules }) => {
  return (
    <div
      className="absolute bottom-[6vh] left-1/2 -translate-x-1/2 text-[2vh] text-white border-2 border-white rounded-lg p-[3vh] py-[1vh] cursor-pointer"
      onClick={toggleRules}
    >
      RULES
    </div>
  );
};

export default RulesButton;
