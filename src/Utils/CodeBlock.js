import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Paper } from "@material-ui/core";


const rootStyle = {
    padding:0
};

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <Paper elevation="3" style={rootStyle}>
        <SyntaxHighlighter language={language} style={prism}>
            {value}
        </SyntaxHighlighter>
      </Paper>
    );
  }
}

export default CodeBlock;