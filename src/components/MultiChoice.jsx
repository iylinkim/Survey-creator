import React from "react";
import { connect } from "react-redux";
import { remove_content } from "../store";

const MultiChoice = ({ onDelete }) => {
  return (
    <>
      <input type="radio" />
      <input type="text" />
      <button onClick={onDelete}>-</button>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps.id);
  return {
    onDelete: () => dispatch(remove_content(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(MultiChoice);
