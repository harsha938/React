import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "__blank",
  },
  children: "Click here",
};

function MyApp() {
  return (
    <div>
      <h1>New Custom react</h1>
    </div>
  );
}

const AnotherElement = (
    <a href="https://google.com" target="_blank">Click Here for Google</a>
)

const actualReactElement = React.createElement(
    'a',
    {
        href : 'https://google.com',
        target: '_blank'
    },
    'click here to visit google'
)

createRoot(document.getElementById("root")).render(
    <App />
);
