function Options({ question, dispatch, answer }) {
  const correct = question.correctOption;
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? " answer " : ""} ${
            hasAnswered ? (index === correct ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={(e) => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
