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
      d="M24.4999 6.66699H8.49992C7.02716 6.66699 5.83325 7.8609 5.83325 9.33366V25.3337C5.83325 26.8064 7.02716 28.0003 8.49992 28.0003H24.4999C25.9727 28.0003 27.1666 26.8064 27.1666 25.3337V9.33366C27.1666 7.8609 25.9727 6.66699 24.4999 6.66699Z"
      :stroke="isActive ? '#6245F4' : '#99A4B2'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.8333 4V9.33333"
      :stroke="isActive ? '#6245F4' : '#99A4B2'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.1665 4V9.33333"
      :stroke="isActive ? '#6245F4' : '#99A4B2'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.1665 20C9.1665 21.1046 10.0619 22 11.1665 22C12.2711 22 13.1665 21.1046 13.1665 20C13.1665 18.8954 12.2711 18 11.1665 18C10.0619 18 9.1665 18.8954 9.1665 20Z"
      :fill="isActive ? '#6245F4' : '#99A4B2'"
    />
    <path
      d="M24.4999 6.66699H8.49992C7.02716 6.66699 5.83325 7.8609 5.83325 9.33366V14.5H27.1666V9.33366C27.1666 7.8609 25.9727 6.66699 24.4999 6.66699Z"
      :fill="isActive ? '#6245F4' : ''"
      :stroke="isActive ? '#6245F4':'#99A4B2'"
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
