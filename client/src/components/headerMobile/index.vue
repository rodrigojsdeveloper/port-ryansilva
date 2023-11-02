<template>
  <div>
    <header
      class="fixed top-0 hidden h-81 w-full flex-row items-center justify-between z-[1000] pt-6 px-4 pt-2 max-lg:flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" @click="toggleModal"
        class="cursor-pointer">
        <template v-if="!openModal">
          <path fill="#a3a3a3" fill-rule="evenodd"
            d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
            clip-rule="evenodd" />
        </template>
        <template v-else>
          <path fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="m7 7l10 10M7 17L17 7" />
        </template>
      </svg>
    </header>
    <Modal v-if="openModal" :setModal="toggleModal" />
  </div>
</template>

<script>
import Modal from '../modal/index.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      openModal: false
    };
  },
  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    }
  }
};
</script>