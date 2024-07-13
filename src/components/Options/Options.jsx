import s from "./Options.module.css";
// import handleClick from "../App";
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.place}>
      <button className={s.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.button} onClick={() => resetFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;