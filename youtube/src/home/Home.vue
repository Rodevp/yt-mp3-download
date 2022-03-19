<template>
  <div class="main">
    <div class="spinner__content" v-if="showSpinner">
     <div class="spinner__effect">
        <Spinner />
     </div>
      <p class="spinner__message">
        Convirtiendo...
      </p>
    </div>
    <section class="content__form" v-if="showForm">
      <div class="main__content_input">
        <input
          type="text"
          class="input"
          placeholder="Ej: https://www.youtube.com/watch?v=gkzLAVh8tGM"
          v-model="link"
        />
      </div>
      <div class="error" v-if="visibleMessageError">
        ¡ Lo sentimos, la url no es valida 😫 !
      </div>
      <div class="main__content_btn">
        <button class="button" @click="convertVideo">Convertir</button>
      </div>
    </section>
  </div>
</template>

<script>

import Spinner from '../spinner/Spinner.vue'

export default {

  components: {
    Spinner
  },

  data() {
    return {
      link: "",
      visibleMessageError: false,
      showSpinner: false,
      showForm: true
    };
  },

  methods: {
    async convertVideo() {

      try {
        const response = await fetch("http://localhost:3001/video", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ link: this.link })
        });
        

        if (response.status === 200) {
          this.$router.push({ path: "/video" })
          console.log({ response })
        }

        if (response.status === 400) {
          this.showSpinner = false
        }

      } catch (error) {
        console.error("no se pudo hacer la petición")
      }
    },
  },
};
</script>

<style scoped>
.main {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content__form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main__content_input,
.main__content_btn {
  width: 80%;
  padding: 1em 0;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner__content{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.spinner__effect {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner__message {
  font-size: 2rem;
  padding: 1em o;
  font-family: var(--font);
  color: #f4efef;
}

.button {
  width: 150px;
  padding: 1em 1em;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: var(--font);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #191919;
  background-color: #ff0400;
}

.button:hover {
  background-color: #ff3936;
  box-shadow: 0px 15px 20px rgba(255, 82, 82, 0.4);
  color: #f4efef;
  transform: translateY(-7px);
}

.button:active {
  transform: translateY(-1px);
}

.input {
  width: 100%;
  padding: 0.8em;
  border-radius: 0.5rem;
  font-family: var(--font);
}

.input:focus {
  outline: none;
  border: 2px solid #ff3936;
  transition: border ease 0.3s;
}

.error {
  font-size: 1rem;
  font-family: var(--font);
  color: #f4efef;
}

@media screen and (min-width: 920px) {
  .main__content_input,
  .main__content_btn {
    width: 55%;
  }

  .button {
    width: 180px;
  }
}
</style>