import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import TodoList from './components/TodoList.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.component('TodoList', TodoList);
app.mount('#app');
