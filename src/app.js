/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensiones = [".com", ".net", ".us"];

function dominios() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let w = 0; w < extensiones.length; w++) {
          console.log(pronoun[i] + adj[x] + noun[y] + extensiones[w]);
        }
      }
    }
  }
}

dominios();
