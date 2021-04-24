import React from "react";
import Checkbox from "./Checkbox";
import MultiChoice from "./MultiChoice";
import Textbox from "./Textbox";
import { connect } from "react-redux";
import { add_content } from "../store";
import "../scss/content.scss";

const Content = ({ option, questions, addContent }) => {
  const onClick = () => {
    addContent();
  };
  return (
    <div>
      {option !== "Textbox" && <button onClick={onClick} class="add_content_btn">+</button>}
      {option !== "Textbox" && questions.map((question) => {
        return getContent(option, question, question.id);
      })}
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

function getContent(option, props, key) {
  switch (option) {
    case "MultiChoice":
      return <MultiChoice {...props} key={key} />;
    case "Checkbox":
      return <Checkbox {...props} key={key} />;
    case "Textbox":
      return <Textbox {...props} key={key} />;
    default:
      return <MultiChoice {...props} key={key} />;
  }
}
