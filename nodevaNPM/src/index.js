import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";
import domHandler from "./dom.js";
import sum from "./utils.js";
import "./style/style.css";
import "./style/style.scss";
import { Promise } from "core-js";
console.log(sum(55, 565));

domHandler();
// ES6 Spread Operator
const person = { name: "Luat" };
const personClone = { ...person };
console.log("personClone", personClone);

// ES7 Object.values
console.log("Object.values", Object.values(personClone));

//promise Async/Await
const handle = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
const fetchData = async () => {
  const data = await handle();
  console.log("data", data);
};

fetchData();
