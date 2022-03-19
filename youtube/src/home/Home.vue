<template>
  <main class="wrapper">
    <h1 class="header">Youtube Downloader</h1>
    <div class="main">
      <div class="main__content_input">
        <input type="text"  class="input" placeholder="Ej: https://www.youtube.com/watch?v=gkzLAVh8tGM"/>
      </div>
      <div class="main__content_btn">
        <button class="button">Convertir</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
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

.main {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main__content_input, .main__content_btn {
    width: 80%;
    padding: 1em 0;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
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

</style>