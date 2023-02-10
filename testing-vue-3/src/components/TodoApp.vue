<template>
  <div class="flex justify-center	w-100">
    <div class="surface-card p-4 shadow-2 border-round">
<!--      Heading-->
      <div class="text-3xl font-medium text-900 mb-3">To Do List</div>
      <div class="font-medium text-500 mb-3">What do you need to get done today</div>

<!--      To do list-->
      <div class="border-2 border-dashed surface-border">
        <div v-for="todo in todos" :key="todo.id" class="p-3" data-test="todo">
          <label :for="todo.id" :class="todo.completed ? 'completed' : ''" data-test="todo-label">{{todo.text}}</label>
          <input :name="todo.id" v-model="todo.completed" type="checkbox" data-test="todo-checkbox">
        </div>
      </div>

      <form class="mt-8" data-test="form" @submit.prevent="createATodo">
            <input id="newTodo" type="text" v-model="newToDo" class="p-inputtext-lg" data-test="new-todo"/>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "TodoApp",
  data(){
    return{
      newToDo: '',
      todos: [
        { id: 1, text: 'Learn Vue Testing', completed: false},
        { id: 2, text: 'Get to know Prime Vue', completed: false},
        { id: 3, text: 'Tell the team your findings', completed: false},
        { id: 4, text: 'Implement it!', completed: false},
      ],
      completedTasks: [],
    }
  },
  methods:{
    createATodo(){
      this.todos.push({
        id: 5,
        text: this.newToDo,
        completed: false
      })
    }
  }
}
</script>

<style scoped>
.p-checkbox:deep(.p-checkbox-box.p-highlight){
  background: red;
  border: pink;
}

.completed{
  text-decoration: line-through;
}
</style>