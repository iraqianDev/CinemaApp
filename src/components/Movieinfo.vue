<script setup>
import axios from "axios";
import {useRoute} from 'vue-router';
import {ref, onMounted} from "vue"


const route = useRoute();
const id = route.params.id

onMounted(async () => {

  let data = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"
    },

  })
  console.log(data.data)
  movieInfo.value = data.data

})


const movieInfo = ref("")
const imgDone = ref(false)

const render = () =>{
  imgDone.value = true
}
</script>

<template>
  <div v-if="movieInfo.length > 0" class="text-center text-white">Loading...</div>
  <div v-else class="text-white  md:flex gap-5">
    <div class="w-[50vh] max-w-[100%] mx-auto md:mx-0 ">
      <img v-show="imgDone" @load="render" :src="`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`" alt="" class="w-full h-full rounded">
      <img v-show="!imgDone"  src="/loading.gif" alt="" class="w-full h-full rounded">

    </div>
    <div class="flex-1">
      <h1 class="text-3xl font-bold my-5">{{ movieInfo.title }}</h1>
      <p>{{ movieInfo.overview }}</p>
      <p class="mt-3 font-bold">Want to See ? Check it out on <a :href="movieInfo.homepage" target="_blank"
      class="text-blue-500">Website</a>
      </p>
    </div>
  </div>


</template>

