<template>
  <div class="flex justify-center	w-100">
    <div class="surface-card p-4 shadow-2 border-round">
<!--      Heading-->
      <div class="text-3xl font-medium text-900 mb-3">To Do List</div>
      <div class="font-medium text-500 mb-3">What do you need to get done today</div>

<!--      To do list-->
      <div class="border-2 border-dashed surface-border">
        <div v-for="todo in todos" :key="todo.id" class="field-checkbox p-3">
          <CheckBox name="todo" :value="todo.id" v-model="completedTasks" class="mr-4"/>
          <label :for="todo.id">{{todo.text}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TodoApp",
  data(){
    return{
      todos: [
        { id: 1, text: 'Learn vue testing'},
        { id: 2, text: 'Get to know Prime Vue'},
        { id: 3, text: 'Tell the team your findings'},
        { id: 4, text: 'Implement it!'},
      ],
      completedTasks: [],
    }
  }
}
</script>

<style scoped>
.p-checkbox:deep(.p-checkbox-box.p-highlight){
  background: red;
  border: pink;
}
</style>