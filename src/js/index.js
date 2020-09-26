/* eslint-disable */

import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  //   document.querySelector("#button").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = excuse();
  //   });
};

let excuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

// let who = ["The dog", "My grandma", "His turtle", "My bird", "My brother"];
// let action = ["ate", "peed", "crushed", "broke", "stole"];
// let what = ["my homework", "the keys", "the car", "the money"];
// let when = [
//     "before the class",
//     "right on time",
//     "when I finished",
//     "during my lunch"
//   ];
//   let phrase = document.querySelector("#excuse");
//   let y = Math.floor(Math.random() * 4);
//   let i = who[y] + " " + action[y] + " " + what[y] + " " + when[y];
//   phrase.innerHTML = i;
