<template>
  <main class="wrapper">
    <h1 class="header">Youtube Downloader</h1>
    <Video />
  </main>
</template>

<script>

import Home from './home/Home.vue'
import Video from './video/Video.vue'

export default {
  components: {
    Home,
    Video
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #191919;
  height: 100vh;
}
.header {
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font);
  color: #f4efef;
  background-color: #ff0400;
}

</style>
