"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Learn TypeScript"), new todoItem_1.TodoItem(2, "Learn Rust"),
    new todoItem_1.TodoItem(3, "Go to the gym"), new todoItem_1.TodoItem(4, "Take the kids from pre-school, true")
];
let collection = new todoCollection_1.TodoCollection("Kliment", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for a walk");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
//collection.addTodo(todoItem);
