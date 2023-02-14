/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console");
};

let generateExcuse = () => {
  let who = [
    "A blind dog",
    "A herd of rabid cats",
    "A swarm of narcoleptic clowns",
    "A rovering gang of pre-schoolers"
  ];
  let action = ["vomited", "threw", "glitter-bombed", "chased"];

  let what = ["hairballs", "hot garbage", "people", "slime"];

  let where = [
    "in my car",
    "on the highway",
    "on the way hell",
    "on a Chinese spy balloon"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
