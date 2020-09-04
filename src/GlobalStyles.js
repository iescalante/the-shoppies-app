import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none;
}
`;
export default GlobalStyles;
