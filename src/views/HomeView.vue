<template>
  <div>
    
  </div>

  <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
    <div v-for="movie in movies" :key="movie" class="group ">
      <router-link :to="{name: 'Movie Details', params: {id: movie.id}}">
        <div class="relative overflow-hidden">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" alt=""
               class="w-full h-full group-hover:blur-sm duration-200">
          <div
              class="text-white absolute bg-red-600 bottom-[-120%] duration-300 group-hover:bottom-0 left-0 style w-full p-4">
            <div class="relative z-10">

              <h3 class="text-4xl font-bold mb-8">{{ movie.title }}</h3>
              <p class="h-14 truncate text-lg">{{ movie.overview }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>


</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";


onMounted(async () => {
  let data = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"
    }
  })
  let res = await data.data.results
  console.log(res)
  movies.value = res
})


const movies = ref([])

</script>
<style>
.style {
}

.style:after {
  content: "";
  position: absolute;
  width: 100%;
  background-color: rgb(220 38 38);
  height: 500px;
  z-index: 1;
  left: -100px;
  top: -300px;
  transform: skew(60deg);
}
</style>