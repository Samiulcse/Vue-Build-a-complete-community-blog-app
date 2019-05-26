<template>
    <h1 class="text-center">the single article </h1>
</template>


<script>

import Axios from 'axios';
import config from '@/config'


export default {
    

    mounted(){
        this.getArticles();
    },

    methods: {
        getArticles(){
            Axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(response=>{
                console.log(response);
            })
        }
    },
}
</script>
