<template>
<div class="flex justify-center   bg-gray-100 h-screen">
  <div class=" mx-auto  bg-gray-150 rounded py-4 px-4">
          <div class="py-2">
              <input type="text" class="todo-input outline-none border border-gray-300 rounded h-10 w-96 px-2 " 
                  placeholder="What needs to be done." v-model="newTodo" @keyup.enter="addTodo">
          </div>
          <!-- transition group -->
          <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <TodoItem v-for="(todo,index) in todosFiltered" :key="todo.id" :todo="todo" :index="index"  :checkAll="!anyRemaining" class="py-2 "
                />
          </transition-group>
              <!-- Check all information -->
                <div class="flex items-center px-2 justify-between border-t-2 py-2">
                  <todo-check-all  ></todo-check-all>
                 
                  <todo-items-remaining></todo-items-remaining>

               </div>
               <!-- buttons -->
                <div class="flex items-center px-2 justify-between border-t-2 py-2">
                <todo-filtered></todo-filtered>
                 <div >
                    <transition name="fade">
                      <todo-clear-completed></todo-clear-completed>
                    </transition>
                 </div>
              </div>
  </div>
  </div>
</template>

<script>

import TodoItem from '../components/TodoItem.vue'
import TodoItemsRemaining from '../components/TodoItemsRemaining.vue'
import TodoCheckAll from '../components/TodoCheckAll.vue'
import TodoFiltered from '../components/TodoFiltered.vue'
import TodoClearCompleted from '../components/TodoClearCompleted.vue'

export default {

  name: 'todo-list',
  components:{
    TodoItem,
    TodoItemsRemaining, 
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted,
  },

  data () {
    return {
      newTodo:'',
      idForTodo:3,
      beforeEditCache:'',
         
    }
  },

    created(){
      this.$store.dispatch('retrieveTodos')
    },

   computed:{
  
    anyRemaining(){
     return this.$store.getters.anyRemaining
    },

    todosFiltered(){
      return this.$store.getters.todosFiltered
    },

  },

  methods:{
      addTodo(){
        
          if(this.newTodo.trim().length ===0){
            return
          }
          
        this.$store.dispatch('addTodo',{
          id:this.idForTodo,
          title:this.newTodo,
        })

        this.newTodo=''
        this.idForTodo++
      },

              
  }
}
</script>

<style >
 @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);
    .completed{
      text-decoration-line: line-through;
      color:gray;
    }
    .active{
      background-color:rgb(74, 221, 69);
    }
    .fade-enter-active, .fade-leave-active{
      transition:opacity.4s;
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
</style>
