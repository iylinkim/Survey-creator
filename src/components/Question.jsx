import React, { useState } from "react";
import Content from "./Content";
import "../scss/question.scss";

const Question = () => {
  const [option, setOption] = useState("MultiChoice");
  const optionChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <li className="question">
      <p className="question_title">
        <input type="text" placeholder="Question Text" />
      </p>
      <p className="question_desc">
        <textarea placeholder="input desc"></textarea>
      </p>
      <select onChange={optionChange} className="type_options">
        <option value="MultiChoice">MultiChoice</option>
        <option value="Checkbox">Checkbox</option>
        <option value="Textbox">Textbox</option>
      </select>
      <Content option={option} />
      <button class="question_del_btn">Remove</button>
    </li>
  );
};

export default Question;
