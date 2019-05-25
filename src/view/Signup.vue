<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 my-5">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center mb-5">Sign Up</h3>

          <div class="form-group">
            <input v-model="name" type="text" placeholder="Name" class="form-control">
          </div>

          <div class="form-group">
            <input v-model="email" type="text" placeholder="Email" class="form-control">
          </div>

          <div class="form-group">
            <input v-model="password" type="password" placeholder="Password" class="form-control">
          </div>

          <div class="form-group">
            <button @click="registerUser()" class="btn btn-success text-center form-control">Sign Up</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },


    methods: {
        registerUser(){
            
        }
    },
}
</script>
