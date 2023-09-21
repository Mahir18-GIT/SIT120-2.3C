const App = {
    data() {
        return {
            show: true,
            fruits: ['Apple', 'Banana', 'Cherry'],
            inputText: ''
        };
    }
};

Vue.createApp(App).mount('#app');

