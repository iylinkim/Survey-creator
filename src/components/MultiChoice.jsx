import React, { useRef } from "react";
import { connect } from "react-redux";
import { remove_content, get_content } from "../store";

const MultiChoice = ({ onDelete, getText, questionId, contentId }) => {
  const inputRef = useRef();

  const onClick = () => {
    onDelete({ questionId, contentId });
  };

  const handleText = () => {
    getText({ questionId, contentId, text: inputRef.current.value });
  };

  return (
    <div className="content_wrap">
      <input type="radio" className="radio_checkbox" />
      <input
        type="text"
        className="content_text"
        onChange={handleText}
        ref={inputRef}
      />
      <button className="content_del_btn" onClick={onClick}>
        -
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.id,
    onDelete: (data) => dispatch(remove_content(data)),
    getText: (data) => dispatch(get_content(data)),
  };
};

export default connect(null, mapDispatchToProps)(MultiChoice);
