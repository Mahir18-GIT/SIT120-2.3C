<template>
  <div class="app">
    <h1 class="logo">Todo App</h1>
    <div class="input-container">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo..." class="todo-input">
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <input type="checkbox" v-model="todo.completed">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button class="delete-btn" @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data() {
  return {
    newTodo: '',
    todos: []
  };
},
methods: {
  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim(), completed: false });
      this.newTodo = '';
    }
  },
  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}
}
</script>

<style scoped>
.app {
font-family: 'Arial', sans-serif;
max-width: 600px;
margin: 5% auto;
padding: 30px;
border-radius: 15px;
background-color: #f5f7fa;
box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
}

.logo {
text-align: center;
color: #2c3e50;
font-weight: 600;
font-size: 2em;
letter-spacing: 2px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
margin-bottom: 40px;
}

.input-container {
display: flex;
justify-content: space-between;
}

.todo-input {
flex: 1;
padding: 12px 15px;
border: none;
border-bottom: 3px solid #2980b9;
margin-right: 10px;
background-color: #eaf1f7;
font-size: 18px;
border-radius: 10px;
box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
}

button {
padding: 10px 20px;
border: none;
border-radius: 8px;
background-color: #2980b9;
color: #ffffff;
cursor: pointer;
transition: background-color 0.3s;
}

button:hover {
background-color: #3498db;
}

ul {
list-style-type: none;
padding: 0;
}

.todo-item {
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
padding: 10px 20px;
border-radius: 8px;
background-color: #ecf0f1;
transition: background-color 0.3s;
}

.todo-item:hover {
background-color: #bdc3c7;
}

.todo-item span.completed {
text-decoration: line-through;
color: #7f8c8d;
}

input[type="checkbox"] {
cursor: pointer;
}

.delete-btn {
background-color: #e74c3c;
color: #fff;
transition: background-color 0.3s;
}

.delete-btn:hover {
background-color: #c0392b;
}
</style>
