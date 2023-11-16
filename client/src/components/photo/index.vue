<template>
  <div class="sticky top-0 z-[1000] prin-blued">
	<div class="relative z-10">
		<p class="style-letter-primary">Ryan</p>
		<p class="style-letter-secundary">developer</p>
	</div>
	<div class="size backdrop-blur-sm"></div>
  </div>
</template>
<style lang="sass">
.style-letter-primary
	font-family: Mr Dafoe, sans-serif
	font-size: 2.8em
	text-align: center
	transform: translateZ(0px)
	// filter: drop-shadow(var(--color-primary) 0px 0px 1.89367px) drop-shadow(var(--color-primary) 0px 0px 9.46834px) drop-shadow(var(--color-primary) 0px 0px 28.405px)
	color: var(--color-primary)

.style-letter-secundary
	font-family: Mr Dafoe, sans-serif
	font-size: 26px
	position: absolute
	left: 50%
	top: 43%
	transform: translateX(-50%)
	color: #fff
	text-align: center
	text-shadow: 3px -3px 0 #00000057, 0 6px 8px rgb(0 0 0 / 58%), 0 9px 10px rgb(0 0 0 / 2%), 0 30px 10px rgb(0 0 0 / 0%), 0 15px 10px rgb(0 0 0 / 21%)

.prin-blued
	position: absolute
	height: 83px
	top: 0
	overflow: hidden
	background: #0000004f
	z-index: 2
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)

.size
	position: absolute
	top: -1px
	width: 100%
	height: 100%
</style>
<script>
export default {
  name: "logoTipo",
};
</script>
