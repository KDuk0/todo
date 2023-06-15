import { TodoItem  } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Learn TypeScript"), new TodoItem(2, "Learn Rust"),
    new TodoItem(3, "Go to the gym"), new TodoItem(4, "Take the kids from pre-school, true")];

let collection: TodoCollection = new TodoCollection("Kliment", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodo("Go for a walk");
let todoItem: TodoItem = collection.getTodoById(newId);
todoItem.printDetails();

//collection.addTodo(todoItem);