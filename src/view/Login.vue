<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 my-5">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center mb-5">Login</h3>

          <div class="form-group">
            <input
              v-bind:class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && submitted}"
              type="text"
              v-model="email"
              placeholder="Email"
              class="form-control"
            >
            <div class="errors" v-if="errors.email">
              <small class="text-danger" :key="error" v-for="error in errors.email">{{ error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input
              v-bind:class="{ 'is-invalid': errors.password, 'is-valid': !errors.password && submitted}"
              type="password"
              v-model="password"
              placeholder="Password"
              class="form-control"
            >
            <div class="errors" v-if="errors.password">
              <small class="text-danger" :key="error" v-for="error in errors.password">{{ error}}</small>
            </div>
          </div>
          <div class="form-group">
            <button
              @click="loginUser()"
              :disabled="loading"
              class="btn btn-success text-center form-control"
            >
              <i class="fas fa-spin fa-spinner" v-if="loading"></i>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Axios from "axios";

export default {

  beforeRouteEnter (to, from, next) {

    if(localStorage.getItem('auth')){
      return next({ path:"/" });
    }
    
    next();
  },

  data() {
    return {
      email: "",
      password: "",
      errors: {},
      submitted: false,
      loading: false
    };
  },

  methods: {
    loginUser() {
      this.loading = true;
      Axios.post("https://react-blog-api.bahdcasts.com/api/auth/login", {
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.$noty.success("Login Successfully");
          this.loading = false;
          this.submitted = true;
          const data = response.data.data;
          localStorage.setItem("auth", JSON.stringify(data));
          this.$root.auth = data;

          this.$router.push("/");
        })
        .catch(({ response }) => {
          // Error message
          this.$noty.error("Oops, something went wrong!");
          if (response.status == 401) {
            this.errors = {
              email: ["These Credentials does not match our record"]
            };
          } else {
            this.errors = response.data;
          }
          this.loading = false;
          this.submitted = true;
        });
    }
  }
};
</script>
