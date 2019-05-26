<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 my-5">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center mb-5">Sign Up</h3>

          <div class="form-group">
            <input
              v-bind:class="{ 'is-invalid': errors.name, 'is-valid': !errors.name && submitted}"
              v-model="name"
              type="text"
              placeholder="Name"
              class="form-control"
            >
            <div class="errors" v-if="errors.name">
              <small class="text-danger" :key="error" v-for="error in errors.name">{{ error}}</small>
            </div>
          </div>

          <div class="form-group">
            <input
              v-bind:class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && submitted}"
              v-model="email"
              type="text"
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
              v-model="password"
              type="password"
              placeholder="Password"
              class="form-control"
            >
            <div class="errors" v-if="errors.password">
              <small class="text-danger" :key="error" v-for="error in errors.password">{{ error}}</small>
            </div>
          </div>

          <div class="form-group">
            <button
              @click="registerUser()"
              :disabled="loading"
              class="btn btn-success text-center form-control"
            >
              <i class="fas fa-spin fa-spinner" v-if="loading"></i>
              {{ loading ? '':'SignUp' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Axios from "axios";
import config from "@/config";

export default {
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      return next({ path: "/" });
    }

    next();
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
      submitted: false,
      loading: false
    };
  },

  methods: {
    registerUser() {
      this.loading = true;
      Axios.post(`${config.apiUrl}/auth/register`, {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(response => {
          // Success notification
          this.$noty.success("Signup Successfully");
          this.loading = false;
          this.submitted = true;
          const data = response.data.data;
          localStorage.setItem("auth", JSON.stringify(data));
          this.$root.auth = data;

          this.$router.push("/");
        })
        .catch(({ response }) => {
          this.$noty.error("Oops, something went wrong!");
          this.loading = false;
          this.submitted = true;
          this.errors = response.data;
        });
    }
  }
};
</script>
