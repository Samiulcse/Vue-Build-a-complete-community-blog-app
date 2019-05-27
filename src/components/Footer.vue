<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h5 class="text-center">&copy; {{ date }} Copyright reserved by Samiul Islam</h5>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style>
footer {
  background-color: #c3c3c3;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

