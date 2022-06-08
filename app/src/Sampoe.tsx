import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  render() {
    let viewText = "テストページ";
    return (
      <div>
        <h1>Hello! World.</h1>
        <p>このページは{viewText}です。</p>
      </div>
    );
  }
}
