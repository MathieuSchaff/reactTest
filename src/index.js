import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// const textAnim = document.getElementById("textAnim");
// let arrayMetier = ["développeur", "marketeur", "shilleur", "artiste"];
// let wordIndex = 0;
// let letterIndex = 0;
// const createLetter = () => {
//   const letter = document.createElement("span");
//   textAnim.appendChild(letter);
//   letter.textContent = arrayMetier[wordIndex][letterIndex];
//   setTimeout(() => {
//     letter.remove();
//   }, 2800);
// };
// const loop = () => {
//   setTimeout(() => {
//     if (wordIndex >= arrayMetier.length) {
//       wordIndex = 0;
//       letterIndex = 0;
//       loop();
//     } else {
//       if (letterIndex < arrayMetier[wordIndex].length) {
//         createLetter();
//         letterIndex++;
//         loop();
//       } else {
//         wordIndex++;
//         letterIndex = 0;

//         setTimeout(() => {
//           loop();
//         }, 2800);
//       }
//     }
//   }, 50);
// };
// loop();
