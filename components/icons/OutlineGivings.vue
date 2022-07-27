<template>
<svg v-if="!isActive" class="block" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1853 23.6667C20.476 23.6667 26.1853 19.2827 26.852 7.66667V5H21.5C9.5 5 5.51867 10.3333 5.5 17C5.5 18.3333 5.5 21 8.16667 23.6667H12.1667H12.1853Z" stroke="#6245F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.85205 27.6673C7.51872 21.6673 10.1854 17.0007 16.1854 14.334" stroke="#6245F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1853 23.6667C20.476 23.6667 26.1853 19.2827 26.852 7.66667V5H21.5C9.5 5 5.51867 10.3333 5.5 17C5.5 18.3333 5.5 21 8.16667 23.6667H12.1667H12.1853Z" fill="#6245F4" stroke="#6245F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.85205 27.6673C7.51872 21.6673 10.1854 17.0007 16.1854 14.334" stroke="#6245F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 21.5C10 19 11.5 16.5 16.1854 14.334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
