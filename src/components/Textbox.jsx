import React, { useRef } from "react";
import { connect } from "react-redux";
import { get_content } from "../store";

const Textbox = ({ getText, questionId, contentId }) => {
  const inputRef = useRef();

  const handleText = () => {
    getText({ questionId, contentId, text: inputRef.current.value });
  };
  return (
    <div className="content_wrap">
      <input
        className="content_text textbox"
        ref={inputRef}
        type="text"
        placeholder="서베이를 하는 사람이 보는 칸 예제"
        onChange={handleText}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.id,
    getText: (data) => dispatch(get_content(data)),
  };
};

export default connect(null, mapDispatchToProps)(Textbox);
