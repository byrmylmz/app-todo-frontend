<template>
     <button v-if="showClearCompletedButton" @click="clearCompleted" class="bg-gray-200 hover:bg-gray-300 px-2 rounded border-1 border-gray-500">Clear Completed</button>
</template>
<script>
export default{
    name:'todo-clear-completed',
    computed:{
        showClearCompletedButton(){
            return this.$store.getters.showClearCompletedButton
        }
    },
     
     methods:{
        clearCompleted(){
            this.$store.dispatch('clearCompleted')
        }
    }
}
</script>
