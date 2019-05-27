<template>
  <div class="my-5">
    <div class="d-flex justify-content-between">
      <button
        @click="getPreviousArticles()"
        :disabled="articles.prev_page_url == null"
        class="btn btn-warning"
      >Previous Page</button>
      <button
        @click="getNextArticles()"
        :disabled="articles.next_page_url == null"
        class="btn btn-warning"
      >Next Page</button>
    </div>

    <div class="row my-3" v-if="!loading">
      <div class="col-md-8 offset-md-2" v-for="(article, index) in articles.data" :key="index">
        <Article :article="article"/>
      </div>
    </div>

    <div class="loader text-center" v-else>
      <i class="fas fa-5x fa-spin fa-spinner"></i>
    </div>
    
  </div>
</template>


<script>
import Axios from "axios";
import config from "@/config";
import Article from "@/components/Article.vue";

export default {
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("auth")) {
      return next({ path: "/login" });
    }

    next();
  },

  components: {
    Article
  },

  mounted() {
    this.getArticles();
  },

  data() {
    return {
      articles: {},
      loading: true
    };
  },

  methods: {
    getArticles(url = `${config.apiUrl}/articles`) {
      this.loading = true;

      Axios.get(url).then(response => {
        this.loading = false;
        this.articles = response.data.data;
      });
    },

    getPreviousArticles() {
      this.getArticles(this.articles.prev_page_url);
    },

    getNextArticles() {
      this.getArticles(this.articles.next_page_url);
    }
  }
};
</script>

<style>
.btn-warning {
  color: #ffffff;
}
.btn-warning:hover {
  color: #ffffff;
}
</style>
