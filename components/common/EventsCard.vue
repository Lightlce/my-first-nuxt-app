<template>
<div>
    <div v-for="event in Events" :key="event.Title">

    <div class="w-60 h-[348px] rounded-[16px] shadow-xl">
      <div class="w-60 h-[180px] bg-[#D3D8DE] rounded-t-[16px]">
        {{ event.Image }}
      </div>
      <div class="w-60 h-[168px] px-5">
        <h1 class="font-bold text-[20px] leading-6 ">{{ event.Title }}</h1>
        <p class="text-[16px] leading-6 ">{{ event.Body}}</p>
        <button class="px-4 py-2 rounded-[12px] bg-[#6245F4] text-[#fff]">Find out more</button>
      </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    Events: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleActiveClassName (path) {
      return this.$route.path === path ? 'bg-[#6245F4] text-white' : 'bg-gradient-to-b from-[#F8F9F9] to-[#E6E1FF]'
    },
  },
}
</script>

<style>
</style>
