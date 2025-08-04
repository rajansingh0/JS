let todo = [];

let req = prompt("please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }
  if (req == "list") {
    console.log("-------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo);
    }
    console.log("-------");
  } else if (req == "add") {
    let ask = prompt("Enter your task");
    todo.push(ask);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt("enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("wrong input");
  }
  req = prompt("enter ur request");
}
