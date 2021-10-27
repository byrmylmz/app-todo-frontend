<template>
  <div class="page-wrapper login-form">
 
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register to to do App
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" @submit.prevent="validateBeforeSubmit" method="POST">
        <!-- <div v-if="successMessage" class="flex items-center rounded bg-green-100 mt-1 mb-1 p-1 text-xs text-green-800 border border-green-300">{{successMessage}}</div> -->

       <div v-if="serverErrors" class="">
         <div class="flex items-center rounded bg-red-100 mt-1 mb-1 p-1 text-xs text-red-800 border border-red-300" v-for="(value,key) in serverErrors" :key="key">
           {{value[0]}}
         </div>
       </div>
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md  shadow-sm -space-y-px">
        <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" name="name" type="name" autocomplete="name" v-model="name" v-validate="'required'" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
         <div v-if="errors.first('name')" class="flex items-center rounded bg-red-100 mt-1 mb-1 p-1 text-xs text-red-800 border border-red-300">{{ errors.first('name') }}</div>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="username" name="username" type="email" autocomplete="email" v-model="username" v-validate="'required|email'" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
           <div v-if="errors.first('username')" class="flex items-center rounded bg-red-100 mt-1 mb-1 p-1 text-xs text-red-800 border border-red-300">{{ errors.first('username') }}</div>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password"  v-model="password" v-validate="'required|min:6'" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
           <div v-if="errors.first('password')" class="flex items-center rounded bg-red-100 mt-1 mb-1 p-1 text-xs text-red-800 border border-red-300">{{ errors.first('password') }}</div> 
        </div>
      </div>

      <div class="flex items-center justify-between">
        


      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Register
        </button>
      </div>
    </form>
  </div>
</div>
  </div>

  
</template>

<script>
export default {
  data(){
    return{
      name:'',
      username:'',
      password:'',
      serverErrors:'',
      successMessage:'',
    }
  },
  methods:{
    validateBeforeSubmit(){
      this.$validator.validateAll().then(result=>{
        if(result){
          this.register();
           // return;
        }
        // alert('correct them errors.');
      })

    },
    register(){
      this.$store.dispatch('register',{

        name:this.name,
        username:this.username,
        password:this.password,
  
      })
       .then(()=>{
         this.successMessage='Registered Succesfully'
         this.$router.push({name:'login',params:{dataSuccessMessage:this.successMessage}})
         this.$toast.success({
            title:this.successMessage ,
            message:'You can login here'
          })

       })
       .catch(error=>{
         this.serverErrors=Object.values(error.response.data.errors)
       })

    }
  }
  
}
</script>