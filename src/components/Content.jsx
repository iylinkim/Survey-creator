import React from "react";
import Checkbox from "./Checkbox";
import MultiChoice from "./MultiChoice";
import Textbox from "./Textbox";
import { connect } from "react-redux";
import { add_content } from "../store";
import "../scss/content.scss";

const Content = ({ option, cont, addContent, questionId }) => {
  const onClick = () => {
    addContent(questionId);
  };

  return (
    <div>
      {option !== "Textbox" && (
        <button onClick={onClick} className="add_content_btn">
          +
        </button>
      )}

      {option !== "Textbox"
        ? cont[questionId].contents.map((question) => {
            return getContent(option, question, questionId, question.id);
          })
        : getContent(
            option,
            { id: Date.now() },
            questionId,
            { id: Date.now() }.id
          )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cont: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.id,
    addContent: (id) => dispatch(add_content(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

function getContent(option, props, id, contentId) {
  switch (option) {
    case "MultiChoice":
      return (
        <MultiChoice
          {...props}
          key={contentId}
          questionId={id}
          contentId={contentId}
        />
      );
    case "Checkbox":
      return (
        <Checkbox
          {...props}
          key={contentId}
          questionId={id}
          contentId={contentId}
        />
      );
    case "Textbox":
      return (
        <Textbox
          {...props}
          key={contentId}
          questionId={id}
          contentId={contentId}
        />
      );
    default:
      return (
        <MultiChoice
          {...props}
          key={contentId}
          questionId={id}
          contentId={contentId}
        />
      );
  }
}
