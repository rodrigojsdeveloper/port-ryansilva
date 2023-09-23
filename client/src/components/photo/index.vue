<template>
  <div class="sticky top-0">
    <p class="style-letter-primary">RyanBS</p>
    <p class="style-letter-secundary">developer</p>
  </div>
</template>
<style lang="sass">
.style-letter-primary
	font-family: Mr Dafoe, sans-serif
	font-size: 4em
	text-align: center
	transform: translateZ(0px)
	filter: drop-shadow(var(--color-primary) 0px 0px 1.89367px) drop-shadow(var(--color-primary) 0px 0px 9.46834px) drop-shadow(var(--color-primary) 0px 0px 28.405px)
	color: var(--color-primary)

.style-letter-secundary
	font-family: Mr Dafoe, sans-serif
	font-size: 44px
	position: absolute
	left: 50%
	top: 32%
	transform: translateX(-50%)
	color: black
	text-align: center
	text-shadow: 3px -3px 0 #00000057, 0 6px 8px rgb(0 0 0 / 58%), 0 9px 10px rgb(0 0 0 / 2%), 0 30px 10px rgb(0 0 0 / 0%), 0 15px 10px rgb(0 0 0 / 21%)
</style>
<script>
export default {
  name: "logoTipo",
};
</script>
