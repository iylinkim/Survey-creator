import React from "react";
import Question from "../components/Question";

const Home = () => {
  return (
    <>
      <h1>TurnChat! Form</h1>
      <div className="title_area">
        <form>
          <div className="default_title">
            <textarea>Default Title</textarea>
          </div>
          <p className="default_value">
            <input type="text" />
          </p>
        </form>
        <ul className="questions">
          <Question />
        </ul>
      </div>
    </>
  );
};

export default Home;
