<template>
  <div class="header">
  	<router-link to="/">Home</router-link>
  	<router-link to="/about">About</router-link>
  	<router-link to="/whatever">Whatever</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
	height: 10vh;
	border: 2px solid #000;
	display: flex;
	align-items:center;
	padding-left: 26px;
	padding-right: 26px;
	a {
		display: block;
		width: 9%;
		color:#000;
		font-size: 20px;

		&.router-link-exact-active {
			text-decoration: none;
			cursor: default;
			font-weight: 900;
		}
	}
}
@media screen and (max-width: 1024px) {
  .header {
    a {
    	width: 80px;
    }
  }
}
</style>
