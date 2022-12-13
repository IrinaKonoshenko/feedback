export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, key) => {
        return (
          <button key={key} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
      {/* <button onClick={onClick}>Good</button>
      <button onClick={onClick}>Neutral</button>
      <button onClick={onClick}>Bad</button> */}
    </div>
  );
};
