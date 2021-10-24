<template>
  <div class="login-form">
   
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('destroyToken')
    .then(response=>{
      this.$router.push({name:'home'})
    })
  }
  
}
</script>