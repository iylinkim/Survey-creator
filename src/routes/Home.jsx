import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import AddBtn from "../components/AddBtn";
import Question from "../components/Question";
import "../scss/home.scss";
import { add_question } from "../store";

const Home = ({ data, addQuestion }) => {
  const surveyTitleRef = useRef();
  const surveySubTitleRef = useRef();
  const [inputValue, setInputValue] = useState("Initial value");

  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const onSubmit = () => {

    console.log({
      survey_title: surveyTitleRef.current.value,
      survey_subTitle: surveySubTitleRef.current.value,
      data
    });
  };
  return (
    <div>
      <h1 className="title">TurnChat! Form</h1>
      <section className="main_body">
        <div className="main_body_content">
          <div className="title_area">
            <div className="default_title">
              <textarea
                ref={surveyTitleRef}
                defaultValue="Default title"
              ></textarea>
            </div>
            <p className="default_value">
              <input
                ref={surveySubTitleRef}
                type="text"
                value={inputValue}
                onChange={onChange}
              />
            </p>
          </div>
          <ul className="questions">
            {Object.keys(data).map((key) => (
              <Question {...data[key]} key={key} />
            ))}
          </ul>
        </div>
        <div className="add_btn_area">
          <button onClick={addQuestion}>+</button>
        </div>
      </section>
      <p className="submit_btn_area">
        <button className="submit_btn" onClick={onSubmit}>
          Submit
        </button>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { data: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: () => dispatch(add_question()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
