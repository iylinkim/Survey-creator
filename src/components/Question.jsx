import React, { useState } from "react";
import Content from "./Content";

const Question = () => {
  const [option, setOption] = useState("MultiChoice");
  const optionChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <li>
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
      <div>
        <Content option={option} />
      </div>
      <button>Remove</button>
    </li>
  );
};

export default Question;
