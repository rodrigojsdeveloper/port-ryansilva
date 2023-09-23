<template>
  <div class="card-wrap justify-center" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
    ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <span class="text-xs text-white-500 ease-in" :style="spanStyle">Profissional</span>
        <h1>{{ props.header }}</h1>
        <p>{{ props.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const width = ref(0);
const height = ref(0);
const mouseX = ref(0);
const mouseY = ref(0);
const mouseLeaveDelay = ref(0);
const card = ref(null);

onMounted(() => {
  width.value = card.value.offsetWidth;
  height.value = card.value.offsetHeight;
});

const props = defineProps({
  dataImage: String,
  header: String,
  content: String,
});

const mousePX = computed(() => {
  return mouseX.value / width.value;
});
const mousePY = computed(() => {
  return mouseY.value / height.value;
});



const cardStyle = computed(() => {
  const rX = mousePX.value * 30;
  const rY = mousePY.value * -30;

  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
  };
});

const spanStyle = computed(() => {
  const hover = mousePX.value || mousePY.value;
  return {
    opacity: hover === 0 && 1 || 0,
    transition: hover && '0.2s all',
  };
});


const cardBgTransform = computed(() => {
  const tX = mousePX.value * -40;
  const tY = mousePY.value * -40;
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
  };
});

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${props.dataImage})`,
  };
});

function handleMouseMove(e) {

  mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2;
  mouseY.value = e.pageY - card.value.offsetTop - height.value / 2;
}
function handleMouseEnter() {
  clearTimeout(mouseLeaveDelay.value);
}

function handleMouseLeave() {
  mouseLeaveDelay.value = setTimeout(() => {
    mouseX.value = 0;
    mouseY.value = 0;
  }, 500);
}


</script>
<style lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.card-wrap {
  margin: 5px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }

    .card-info p {
      opacity: 1;
    }
    .card-info span {
      transition: 1s all;
    }
    .card-info,
    .card-info p {
      transition: 0.3s $hoverEasing;
    }

    .card-info:after {
      transition: 2s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }

    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }

    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

@media screen and (max-width: 1536px) {
  .card {
    height: 250px !important;
    width: 100% !important;
  }
  .card-wrap {
    width: 100%;
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 328px;
  height: 180px;
  background-color: #33333313;
  overflow: hidden;
  border-radius: 10px;
  // box-shadow: rgba(black, 0.66) 0 10px 30px 0, inset #333 0 0 0 2px,
  //   inset #1d1d1d 0 0 0 3px;
  transition: 1s $returnEasing;
  padding: 5px;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 115%;
  height: 115%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    padding-top: 5px;
    letter-spacing: -0.5px;
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom,
        transparent 0%,
        rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Lexend";
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>
