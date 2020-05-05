// Starting array variable
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

// <<<<< FOR LOOPS >>>>

// 1 - setup to only display the index value not the variable argument
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) { // This is looping through each i and displaying i - not displaying the argument for each i
	console.log(i);
}

// 2 - this one actually moves through the variable arguments
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
	console.log(todos[i]) // the difference here is pulling the argument out with (var[argument])
}

// 3 - Displays argument AND index
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
	console.log(todos[i], i) // the difference here is pulling the argument out with (var[argument])
}

// <<<<< FOR EACH LOOPS >>>>

// 1- the function in forEach is receiving the arguments for each of the todos - not the place number of i
todos.forEach(function(i) {
	console.log(i);
})

// 2- A better way is to add todos variable as the argument, in the forEach
todos.forEach(function(todos) {
	console.log(todos);
})

// 3- this will display the index in the second column - just like the for loop above that does the same
todos.forEach(function(todos, i) {
	console.log(todos, i);
})

// 4 - An even slimmer forEach. Can use logTodos() in other places to display info
function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);

// 5 - Example of logTodos with todosImportant.."extensible" reusable function
var todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];

todos.forEach(logTodos); // cycle through the original todos and log according to function
todosImportant.forEach(logTodos); // reusing function to do the same for Important todos above


// <<<< While and Do While Loops >>>>

// do the loop then do the stuff
var counterOne = 10;
while (counterOne > 0) {
	console.log("while",counterOne);
	counterOne--
}

// do the stuff first, then run loop
var counterTwo = 10
do {
	console.log("do while",counterTwo);
	counterTwo--;
} while (counterTwo > 0);