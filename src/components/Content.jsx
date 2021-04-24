import React from "react";
import Checkbox from "./Checkbox";
import MultiChoice from "./MultiChoice";
import Textbox from "./Textbox";
import { connect } from "react-redux";
import { add_content } from "../store";

const Content = ({ option, questions, addContent }) => {
  const onClick = () => {
    console.log("add content");
    addContent();
  };
  return (
    <div>
      {questions.map((question) => getContent(option))}
      <button onClick={onClick}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { questions: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContent: () => dispatch(add_content()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

function getContent(option = "MultiChoice") {
  switch (option) {
    case "MultiChoice":
      return <MultiChoice />;
    case "Checkbox":
      return <Checkbox />;
    case "Textbox":
      return <Textbox />;
    default:
      return <MultiChoice />;
  }
}
