import React from "react";
import { add_content } from "../store";
import Checkbox from "./Checkbox";
import MultiChoice from "./MultiChoice";
import Textbox from "./Textbox";

const onClick = () => {
  add_content("");
};

const Content = ({ option }) => {
  return (
    <div>
      {getContent(option)}
      <button onClick={onClick}>+</button>
    </div>
  );
};

export default Content;

function getContent(option = "MultiChoice") {
  switch (option) {
    case "MultiChoice":
      return <MultiChoice />;
    case "Checkbox":
      return <Checkbox />;
    case "Textbox":
      return <Textbox />;
  }
}
