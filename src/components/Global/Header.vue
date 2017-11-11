<template>
  <header>
  	<nav>
  		<router-link to="/">Home</router-link>
  		<router-link to="/about">About</router-link>
  		<router-link to="/whatever">Whatever</router-link>
  	</nav>
  	<div class="lang_switch">
  		<div class="ru active">русский</div>
  		<div class="eng">english</div>
  	</div>
  </header>
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
header {
	height: 10vh;
	border: 1px solid #000;
	margin-top: 50px;
	margin-bottom: 50px;
	display: flex;
	align-items:center;
	padding-left: 26px;
	padding-right: 26px;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
	nav {
		display: flex;
		flex-direction: row;
		a {
			display: block;
			margin-right: 15px;
			color:#000;
			font-size: 20px;

			&.router-link-exact-active {
				text-decoration: none;
				cursor: default;
				font-weight: 900;
			}
		}
	}
	.lang_switch {
		width: 70px;
		display: flex;
		flex-direction: column;
		.active {
			font-weight: 800;
		}
		&>div {
			&.active {
				cursor: default;
			}
			&:not(.active) {
				cursor: pointer;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
  header {
    a {
    	width: 80px;
    }
  }
}
</style>
