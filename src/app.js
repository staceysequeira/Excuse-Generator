/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = [
    "A blind dog",
    "A herd of rabid cats",
    "A swarm of narcoleptic clowns",
    "A rovering gang of pre-schoolers"
  ];
  let action = ["vomited", "threw", "glitter-bombed", "slapped"];

  let what = ["hairballs", "hot garbage", "people", "slime"];

  let where = [
    "in my car",
    "on the highway",
    "on my clothes",
    "towards my face"
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
