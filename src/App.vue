<template>
  <div id="todo">
     <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './views/TodoList.vue'


export default {
  name: 'todo',
  components: {
    
    TodoList,

  }
}
</script>

<style>
#todo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
