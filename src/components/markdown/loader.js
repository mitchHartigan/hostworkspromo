import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import { mdHeader, mdParagraph, mdListItem, mdPre } from "../../markdownStyles";

const markdownOptions = {
  overrides: {
    h1: {
      component: mdHeader,
    },
    p: {
      component: mdParagraph,
    },
    li: {
      component: mdListItem,
    },
    pre: {
      component: mdPre,
    },
  },
};

export function MarkdownLoader(props) {
  const { path } = props;
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  if (content) {
    return <Markdown options={markdownOptions}>{content}</Markdown>;
  }
}
