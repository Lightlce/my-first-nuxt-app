<template>
  <svg
    v-if="!isActive"
    class="block"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.9999 6.66699H7.99992C6.52716 6.66699 5.33325 7.8609 5.33325 9.33366V25.3337C5.33325 26.8064 6.52716 28.0003 7.99992 28.0003H23.9999C25.4727 28.0003 26.6666 26.8064 26.6666 25.3337V9.33366C26.6666 7.8609 25.4727 6.66699 23.9999 6.66699Z"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.3333 4V9.33333"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6665 4V9.33333"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.33325 14.667H26.6666"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.6665 20C8.6665 21.1046 9.56194 22 10.6665 22C11.7711 22 12.6665 21.1046 12.6665 20C12.6665 18.8954 11.7711 18 10.6665 18C9.56194 18 8.6665 18.8954 8.6665 20Z"
      fill="#6245F4"
    />
    <path
      d="M23.9999 6.66699H7.99992C6.52716 6.66699 5.33325 7.8609 5.33325 9.33366V14.5H26.6666V9.33366C26.6666 7.8609 25.4727 6.66699 23.9999 6.66699Z"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9999 3.66699H3.99992C2.52716 3.66699 1.33325 4.8609 1.33325 6.33366V22.3337C1.33325 23.8064 2.52716 25.0003 3.99992 25.0003H19.9999C21.4727 25.0003 22.6666 23.8064 22.6666 22.3337V6.33366C22.6666 4.8609 21.4727 3.66699 19.9999 3.66699Z"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.3333 1V6.33333"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.6665 1V6.33333"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.33325 11.667H22.6666"
      stroke="#6245F4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.6665 17C4.6665 18.1046 5.56194 19 6.66651 19C7.77108 19 8.66651 18.1046 8.66651 17C8.66651 15.8954 7.77108 15 6.66651 15C5.56194 15 4.6665 15.8954 4.6665 17Z"
      fill="#6245F4"
    />
    <path
      d="M19.9999 3.66699H3.99992C2.52716 3.66699 1.33325 4.8609 1.33325 6.33366V11.5H22.6666V6.33366C22.6666 4.8609 21.4727 3.66699 19.9999 3.66699Z"
      fill="#6245F4"
      stroke="#6245F4"
      stroke-width="1.5"
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
      required: false,
    },
  },
}
</script>
