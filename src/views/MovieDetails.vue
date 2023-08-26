<script setup>
import axios from "axios"
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"

const route = useRoute()
const id = route.params.id

onMounted(async () => {
  let data = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0",
    },
  })
  console.log(data.data)
  movieInfo.value = data.data
})

const movieInfo = ref("")
const imgDone = ref(false)

const render = () => {
  imgDone.value = true
}
</script>

<template>
  <div v-if="movieInfo.length > 0" class="text-center text-white">
    Loading...
  </div>
  <div v-else class="text-white">
    <div class="max-w-[90vh] px-2 mx-auto relative py-5">
      <div
        class="bg-yellow-500 w-16 h-16 right-0 top-0 absolute rounded-full grid justify-center items-center text-center"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <p class="text-white m-0">{{ movieInfo.vote_average }}</p>
        </div>
      </div>
      <img
        v-show="imgDone"
        @load="render"
        :src="`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`"
        alt=""
        class="w-full h-full rounded"
      />
      <img
        v-show="!imgDone"
        src="/loading.gif"
        alt=""
        class="w-full h-full rounded"
      />
    </div>
    <div class="flex-1 container px-2 md:px-0 mx-auto py-5">
      <h1 class="text-xl md:text-3xl font-bold my-5">{{ movieInfo.title }}</h1>
      <p class="text-base">{{ movieInfo.overview }}</p>
      <p class="mt-3 font-bold">
        Want to See ? Check it out on
        <a :href="movieInfo.homepage" target="_blank" class="text-blue-500"
          >Website</a
        >
      </p>
    </div>
  </div>
</template>
