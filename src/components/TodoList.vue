<template>
    <div class="todo-container">
      <h1>Naufal Rizqullah</h1>
      <h1>223510805</h1>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Tambahkan Tugas Baru" />
      <button class="tmbh" @click="addTask">Tambahkan</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" :checked="task.completed" @change="toggleTask(index)" class="larger-checkbox" />
          <span :class="{ completed: task.completed }" class="task-text">{{ task.text }}</span>
          <button @click="removeTask(index)">Hapus</button>
        </li>
      </ul>
      <h3>{{ incompleteTasksCount }} Tugas Tersisa</h3>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useTodoStore } from '../stores/todo';
  
  export default {
    setup() {
      const store = useTodoStore();
      const newTask = ref('');
  
      const addTask = () => {
        if (newTask.value.trim()) {
          store.addTask(newTask.value);
          newTask.value = '';
        }
      };
  
      const removeTask = (index) => {
        store.removeTask(index);
      };
  
      const toggleTask = (index) => {
        store.toggleTask(index);
      };
  
      const tasks = computed(() => store.tasks);
      const incompleteTasksCount = computed(() => store.incompleteTasksCount);
  
      return {
        newTask,
        addTask,
        removeTask,
        toggleTask,
        tasks,
        incompleteTasksCount
      };
    }
  };
  </script>
    
  <style scoped>
  .todo-container {
    background-image: url('./src/assets/kayu.jpg'); 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 20px;
    border: 2px solid black;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); 
  }

  
  .tmbh {
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .tmbh:hover {
    background-color: orange;
  }
  
  input, button {
    padding: 8px 16px;
    margin: 8px;
    border-radius: 4px;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis; 
    flex-shrink: 0; 
    border-radius: 20px;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
  }
  
  button:hover {
    background-color: green;
  }
  
  ul {
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  li > input[type="checkbox"] {
    margin-right: 10px;
    flex-shrink: 0; 
    transform: scale(1.5); 
  }
  
  li > span {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .completed {
    text-decoration: 2px line-through;
    color: black;
  }
  .task-text {
    color: black;
    font-weight: bold; 
  }   
  .todo-container h1,
  .todo-container h3,
  .todo-container li {
    animation: fadeIn 0.5s ease-in-out forwards; 
    opacity: 0;
  }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

  </style>
  