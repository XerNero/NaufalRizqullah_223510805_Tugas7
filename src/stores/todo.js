import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      this.tasks.push({ text: task, completed: false });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  },
  getters: {
    incompleteTasksCount: (state) => {
      return state.tasks.filter(task => !task.completed).length;
    }
  }
});
