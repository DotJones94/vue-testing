<template>
  <div>
<!--    Testing a to do list-->
    <div v-for="todo in todos" :key="todo.id" class="feild-checkbox">
      <CheckBox name="todo" :value="todo.text" v-model="completedTasks" />
      <label :for="todo.id">{{todo.text}}</label>
    </div>
  </div>
</template>

<script>

export default {
  name: "TodoApp",
  data(){
    return{
      todos: [
        {
          id: 1,
          text: 'Learn vue testing',
          completed: false,
        }
      ],
      completedTasks: [],
    }
  }
}
</script>

<style scoped>

</style>