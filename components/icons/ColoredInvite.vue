<template>
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="block"
  >
    <path
      d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
      :fill="disabled ? '#B6BEC8' : '#FEDB00'"
    />
    <path
      d="M24.75 15L18 19.5L4.5 10.5C4.5 10.5 4.5 7.5 7 7.5H29C31.5 7.5 31.5 10.5 31.5 10.5L24.75 15Z"
      :fill="disabled ? '#7C8A9C' : '#6245F4'"
    />
  </svg>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
