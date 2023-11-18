<template>
  <div>
    <div>
      <div class="flex gap-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <mask id="mask0_317_2051" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#mask0_317_2051)">
            <path
              d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
              fill="#3019B2"></path>
          </g>
        </svg>
        <h1 class="text-lg font-semibold">{{ props.header }}</h1>
      </div>
      <p class="text-sm">{{ props.content }}</p>
    </div>
    <hr class="h-[0.1px] my-16 bg-gray-1 border-0 dark:bg-gray-700">
  </div>
  
</template>

<script setup>

const props = defineProps({
  dataImage: String,
  header: String,
  content: String,
  open: Boolean,
});

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

    .card-info h1 {
      color: var(--color-primary);
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
  color: gray;
  transition: .5s;
  font-size: 20px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}</style>
