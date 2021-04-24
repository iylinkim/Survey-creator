import React from "react";
import { connect } from "react-redux";
import { remove_content } from "../store";

const MultiChoice = ({ onDelete }) => {
  return (
    <div className="content_wrap">
      <input type="radio" className="radio_checkbox"/>
      <input type="text" className="content_text" />
      <button className="content_del_btn" onClick={onDelete}>-</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(remove_content(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(MultiChoice);
