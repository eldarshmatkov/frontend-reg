<template>
	<header>
		<nav>
			<router-link to="/">{{ $t("header.main") }}</router-link>
			<router-link to="/about">{{ $t("header.about") }}</router-link>
			<router-link to="/whatever">{{ $t("header.whatever") }}</router-link>
		</nav>
		<div class="lang_switch">
			<div class="ru" :class="{'active': this.$i18n.locale == 'ru'}"
			@click="setLanguage('ru')">русский</div>
			<div class="eng" :class="{'active': this.$i18n.locale == 'en'}"
			@click="setLanguage('en')">english</div>
		</div>
	</header>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		setLanguage(val) {
			this.$i18n.locale = val
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
	height: 10vh;
	background-color: #fff;
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
				position: relative;
				top: -3px;
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
