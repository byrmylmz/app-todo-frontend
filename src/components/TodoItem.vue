<template>
    <div class="todo-item">
        
        <div  class="shadow-md p-3 flex flex-row rounded-lg justify-between">
                      <div class="flex items-center ">
                          <div class="bg-blue-400 inline-block rounded-lg p-1 mr-1 h-full"></div>
                            <input type="checkbox"  class="" v-model="completed" @change="doneEdit">
                            <div v-if="!editing" @dblclick="editTodo(todo)" class="flex pl-1"  :class="{ completed : completed } "> {{title}}</div>    
                          <input v-else type="text" v-model="title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)"  @keyup.esc="cancelEdit(todo)" 
                          class="flex border border-gray-500 bg-gray-100 rounded "> 
                      </div>
                      
                        
                        <div class="flex items-center">
                             <div>
                                 <button @click="pluralize" class="rounded bg-gray-200 px-1  hover:bg-gray-300 border-2  text-xs font-normal">Plural</button>
                             </div>
                             
                             <div class="p-1" @click="removedTodo(id)">
                                    <a class="h-5 w-5 text-gray-500 inline-block p-1 cursor-pointer hover:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                                        clip-rule="evenodd" />
                                    </svg>
                                    </a>
                             </div>
                        </div>
         </div> 
    </div>
</template>
<script>
export default{
    name:'todo-item',

    props:{
        todo:{
            type:Object,
            required:true,
        },

        index:{
            type:Number,
            required:true,
        },

        checkAll:{
            type:Boolean,
            required:true,
        }
    },

    data(){
        return{
            'id':this.todo.id,
            'title':this.todo.title,
            'completed':this.todo.completed,
            'editing':this.todo.editing,
            'beforeEditCache':'',
        }
    },

    created(){
        eventBus.$on('pluralize',this.handlePluralize)
    },

    beforeDestroy(){
        eventBus.$off('pluralize',this.handlePluralize)
    },
    
    watch:{
        checkAll(){
            this.completed=this.checkAll ? true :this.todo.completed
        }
    },
    directives: { 
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    methods:{
        
       removedTodo(id){
            this.$store.dispatch('deleteTodo',id)
        },

        editTodo(){ 
        this.beforeEditCache= this.title
        this.editing=true
      },

      doneEdit(){
        if(this.title.trim() ==''){
           this.title=this.beforeEditCache
        } 
        
         this.editing=false
         this.$store.dispatch('updateTodo',{
             'id':this.id,
             'title':this.title,
             'completed':this.completed,
             'editing':this.editing
         })

        

      },

      cancelEdit(){
        title=this.beforeEditCache
        editing=false
      },

      pluralize(){
          eventBus.$emit('pluralize')
      },

      handlePluralize(){
          this.title=this.title + 's'
            this.$store.dispatch('updateTodo', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing,
            })
      }

    },
}

</script>
