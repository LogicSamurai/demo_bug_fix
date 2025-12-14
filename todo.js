function addTodo(todos, item) {
    todos.push(item);
    return todos;
}

function removeTodo(todos, index) {
    // BUG: Should check if index is valid
    todos.splice(index, 1);
    return todos;
}

function getTodo(todos, index) {
    // BUG: No bounds checking
    return todos[index];
}

// Example usage with potential bugs
const myTodos = ["Buy groceries", "Walk dog"];
console.log(getTodo(myTodos, 5)); // BUG: Index out of bounds
removeTodo(myTodos, -1); // BUG: Negative index allowed