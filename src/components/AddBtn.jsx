import React from "react";
import { connect } from "react-redux";
import { add_question } from "../store";

const AddBtn = ({addQuestion}) => {
  const onClick = () => {
      console.log('add question')
      console.log(addQuestion)
    addQuestion();
  };
  return (
    <div className="add_btn_area">
      <button onClick={onClick}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return { questions: state.questions }; 
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addQuestion: () => dispatch(add_question()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddBtn);
