<template>
    <div class="card my-5">
        <div class="card-header">
            <h4>{{ article.title }}</h4>
        </div>
        <div class="card-body">
           <div class="my-3" v-html=" article.content.substring(0,200)"></div>

            <button class=" btn btn-primary">Read More</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['article']
}
</script>
