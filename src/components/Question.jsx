import React, { useRef, useState } from "react";
import Content from "./Content";
import "../scss/question.scss";
import {
  get_question_type,
  get_question_title,
  get_question_desc,
  remove_question,
} from "../store";
import { connect } from "react-redux";

const Question = ({ onDelete, getType, getTitle, getDesc, id }) => {
  const [option, setOption] = useState("MultiChoice");
  
  const titleRef = useRef();
  const descRef = useRef();
  const selectRef = useRef();
  
  const optionChange = (e) => {
    setOption(e.currentTarget.value);
    const selectOption = Array.from(selectRef.current.childNodes).filter(
      (c) => c.selected === true
    )[0].innerText;
    getType({ id, type: selectOption });
  };

  const handleTitle = () => {
    getTitle({ id, text: titleRef.current.value });
  };
  const handleDesc = () => {
    getDesc({ id, text: titleRef.current.value });
  };

  const onClick = () => {
    const ok = window.confirm("이 항목을 지울까요?");
    ok && onDelete();
  };

  return (
    <li className="question">
      <p className="question_title">
        <input
          type="text"
          ref={titleRef}
          placeholder="Question Text"
          onChange={handleTitle}
        />
      </p>
      <p className="question_desc">
        <textarea
          ref={descRef}
          placeholder="input desc"
          onChange={handleDesc}
        ></textarea>
      </p>
      <select ref={selectRef} onChange={optionChange} className="type_options">
        <option value="MultiChoice">MultiChoice</option>
        <option value="Checkbox">Checkbox</option>
        <option value="Textbox">Textbox</option>
      </select>
      <Content option={option} questionId={id} />
      <button onClick={onClick} className="question_del_btn">
        Remove
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.id,
    title: "",
    onDelete: () => dispatch(remove_question(ownProps.id)),
    getTitle: (data) => dispatch(get_question_title(data)),
    getDesc: (data) => dispatch(get_question_desc(data)),
    getType: (data) => dispatch(get_question_type(data)),
  };
};

export default connect(null, mapDispatchToProps)(Question);
