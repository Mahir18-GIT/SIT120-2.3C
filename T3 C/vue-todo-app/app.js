const App = {
    data() {
        return {
            newTodo: "",
            todos: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() === "") return;
            this.todos.push({ text: this.newTodo.trim() });
            this.newTodo = "";
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
};

Vue.createApp(App).mount('#app');
