<template>
  <div id="master">
    
    <ul class="nav">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'todo' }">App</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></li>
      <li v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
    </ul>

          <!-- <transition
            name="router-animation" 
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut" mode='out-in'> -->
            <router-view></router-view>
        <!-- </transition> -->
  </div>
</template>

<script>
export default {
 
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn
    }

  }
  
}
</script>
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>
<style>
   @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    justify-content: flex-end;
    background: #F5F8FA;
    border-bottom: 1px solid lightgrey;

  }
  .nav a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
  .page-wrapper {
    animation-duration:0.1s;
  }
    /* 
      || spinner css  
    */
    .lds-ring-container{
      position:absolute;
      right:50%;
    }
    .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    /* margin: 8px; */
    border: 3px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }



</style>