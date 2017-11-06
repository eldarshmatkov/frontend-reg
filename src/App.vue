<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 980px;
  border: 2px solid #000;
  padding: 3px;
  box-sizing: border-box;
  height: 98vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
  min-height: 334px;
  overflow: hidden;
}
@media screen and (max-width: 1024px) {
  #app {
    width: 652px;
  }
}
@media screen and (max-width: 480px) {
  #app {
    width: 324px;
  } 
}
</style>
