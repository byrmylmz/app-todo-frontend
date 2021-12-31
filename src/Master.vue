<template>
  <div id="master">
    <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <!-- <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
        </div> -->
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
              <router-link :to="{ name: 'home' }">Home</router-link></a>

            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <router-link :to="{ name: 'todo' }">App</router-link></a>

            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <router-link :to="{ name: 'about' }">About</router-link></a>




          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


        <!-- Profile dropdown -->
        <div class="ml-3 relative">
 <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
           

            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" v-if="!loggedIn">
              <router-link :to="{ name: 'login' }">Login</router-link></a>

            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" v-if="!loggedIn">
              <router-link :to="{ name: 'register' }">Register</router-link></a>

            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" v-if="loggedIn">
             <router-link :to="{ name: 'logout' }">Logout</router-link></a>


          </div>
        </div>
       </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        <router-link :to="{ name: 'home' }">Home</router-link></a>

      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
         <router-link :to="{ name: 'todo' }">App</router-link></a>

      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        <router-link :to="{ name: 'about' }">About</router-link></a>

      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link></a>

      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Register</router-link></a>

      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" v-if="loggedIn">
         <router-link :to="{ name: 'logout' }">Logout</router-link></a>
    </div>
  </div>
</nav>
    
    <!-- <ul class="nav">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'todo' }">App</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></li>
      <li v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
    </ul> -->

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