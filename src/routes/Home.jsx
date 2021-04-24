import React, { useState } from "react";
import Question from "../components/Question";
import "../scss/home.scss";

const Home = ({ questions }) => {
  const [inputValue, setInputValue] = useState("Initial value");
  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <>
      <h1 className="title">TurnChat! Form</h1>
      <section className="main_body">
        <div className="title_area">
          <div className="default_title">
            <textarea>Default Title</textarea>
          </div>
          <p className="default_value">
            <input type="text" value={inputValue} onChange={onChange} />
          </p>
        </div>
        {/* <ul className="questions">
          {questions.map((question) => (
            <Question {...question} />
          ))}
        </ul> */}
        <ul className="questions">
          <Question />
        </ul>
      </section>
    </>
  );
};

export default Home;
