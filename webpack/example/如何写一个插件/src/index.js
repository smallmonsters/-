import './index.css'
const { list } = require("./list");

function index() {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    console.log(element);
  }
}

index()