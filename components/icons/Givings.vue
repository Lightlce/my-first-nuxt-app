<template>
  <svg
    class="block"
    width="25"
    height="25"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.35205 27.6673C8.01872 21.6673 10.6854 17.0007 16.6854 14.334"
      :stroke="isActive ? '#6245F4' : '#99A4B2'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.6853 23.6667C20.976 23.6667 26.6853 19.2827 27.352 7.66667V5H22C10 5 6.01867 10.3333 6 17C6 18.3333 6 21 8.66667 23.6667H12.6667H12.6853Z"
      :stroke="isActive ? '#6245F4' : '#99A4B2'"
      stroke-width="2"
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
