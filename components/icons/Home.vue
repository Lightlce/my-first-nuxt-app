<template>
  <svg
    v-if="!isActive"
    class="block"
    width="25"
    height="25"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.16667 16H4.5L16.5 4L28.5 16H25.8333"
      stroke="#99A4B2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.1665 16V25.3333C7.1665 26.0406 7.44746 26.7189 7.94755 27.219C8.44765 27.719 9.12593 28 9.83317 28H23.1665C23.8737 28 24.552 27.719 25.0521 27.219C25.5522 26.7189 25.8332 26.0406 25.8332 25.3333V16"
      stroke="#99A4B2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 28.0007V20.0007C12.5 19.2934 12.781 18.6151 13.281 18.115C13.7811 17.6149 14.4594 17.334 15.1667 17.334H17.8333C18.5406 17.334 19.2189 17.6149 19.719 18.115C20.219 18.6151 20.5 19.2934 20.5 20.0007V28.0007"
      stroke="#99A4B2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    class="block"
    width="25"
    height="25"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.66667 16H4L16 4L28 16H25.3333" fill="#6245F4" />
    <path
      d="M6.66667 16H4L16 4L28 16H25.3333"
      stroke="#6245F4"
      stroke-width="2.20267"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.6665 16V25.3333C6.6665 26.0406 6.94746 26.7189 7.44755 27.219C7.94765 27.719 8.62593 28 9.33317 28H22.6665C23.3737 28 24.052 27.719 24.5521 27.219C25.0522 26.7189 25.3332 26.0406 25.3332 25.3333V16"
      fill="#6245F4"
    />
    <path
      d="M6.6665 16V25.3333C6.6665 26.0406 6.94746 26.7189 7.44755 27.219C7.94765 27.719 8.62593 28 9.33317 28H22.6665C23.3737 28 24.052 27.719 24.5521 27.219C25.0522 26.7189 25.3332 26.0406 25.3332 25.3333V16"
      stroke="#6245F4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 28.0007V20.0007C12 19.2934 12.281 18.6151 12.781 18.115C13.2811 17.6149 13.9594 17.334 14.6667 17.334H17.3333C18.0406 17.334 18.7189 17.6149 19.2189 18.115C19.719 18.6151 20 19.2934 20 20.0007V28.0007"
      fill="#F0F2F4"
    />
    <path
      d="M12 28.0007V20.0007C12 19.2934 12.281 18.6151 12.781 18.115C13.2811 17.6149 13.9594 17.334 14.6667 17.334H17.3333C18.0406 17.334 18.7189 17.6149 19.2189 18.115C19.719 18.6151 20 19.2934 20 20.0007V28.0007"
      stroke="#6245F4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
