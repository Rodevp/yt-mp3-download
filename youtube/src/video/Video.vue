<template>
  <section class="video">
    <section class="video__card">
      <div class="video__img">
        <img :src="img" alt="image of video" />
      </div>
      <div class="video__info">
        <p class="video__info_item">{{ likes }} likes</p>
        <p class="video__info_item">{{ title }}</p>
      </div>
      <div class="video__content_btn">
        <button
          @click="downloadAudio"
          class="button"
          >Descargar</button
        >
      </div>
    </section>
  </section>
</template>

<script>

import { saveAs } from 'file-saver'

export default {
  data() {
    return {
      title: "",
      img: "",
      mediaLink: "",
      likes: 0,
      videoID: ''
    };
  },

  methods: {
    async getVideoInfo() {
      try {
        const response = await fetch("http://localhost:3001/video");

        if (response.status === 200) {

          const data = await response.json();
          this.img = data.img;
          this.likes = data.likes;
          this.title = data.title;
          this.mediaLink = data.mediaLink;
          this.videoID = data.idVideo
        }

      } catch (error) {
        console.error("no se pudo hacer la petición");
      }
    },

    downloadAudio() {
      saveAs(this.mediaLink, `${this.title}.mp3`)
    }

  },

  async mounted() {
    this.getVideoInfo();
  },
};
</script>

<style scoped>
.video {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.video__card {
  width: 80%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 380px;
  box-shadow: rgba(255, 82, 82, 0.4) 0px 2px 8px 0px;
}

.video__img {
  width: 90%;
  height: 140px;
}

.video__img img {
  width: 100%;
  height: 100%;
}

.video__info {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video__info_item {
  padding: 0.5em 0;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  font-family: var(--font);
  color: #f4efef;
}

.video__content_btn {
  width: 90%;
  padding: 1em 0;
  display: flex;
  justify-content: center;
}

.button {
  width: 150px;
  padding: 1em 1em;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 45px;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-family: var(--font);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  color: #191919;
  background-color: #ff0400;
}

.button:hover {
  background-color: #ff3936;
}

.button:active {
  transform: translateY(-1px);
}

@media screen and (min-width: 520px) {
  .video__card {
    width: 70%;
  }
}

@media screen and (min-width: 620px) {
  .video__card {
    width: 60%;
  }
}

@media screen and (min-width: 720px) {
  .video__card {
    width: 50%;
  }
}

@media screen and (min-width: 920px) {
  .video__card {
    width: 40%;
  }
}

@media screen and (min-width: 1020px) {
  .video__card {
    width: 30%;
  }
}
</style>