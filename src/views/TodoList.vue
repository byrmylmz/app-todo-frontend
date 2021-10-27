<template>
<div class="flex justify-center   bg-gray-100 h-screen">

  <div class=" mx-auto  bg-gray-150 rounded py-4 px-4">
        
          <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex"  role="alert">
            <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Welcome</span>
            <span class="font-semibold mr-2 text-left flex-auto">Hello {{name}} Welcome</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        
          <div class="py-2">
              <input type="text" 
              class="outline-none
                     border-2 border-gray-300 
                     rounded-lg 
                     h-12 w-96 px-2 bg-gray-200
                     
                     focus:ring-2 focus:ring-blue-600 focus:bg-blue-100 
                     shadow-md" 
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
      name:'Test',
         
    }
  },

    created(){
      this.$store.dispatch('retrieveTodos')
      this.$store.dispatch('retrieveName')
        .then(response=>{
          this.name=response.data.name
        })
      
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
