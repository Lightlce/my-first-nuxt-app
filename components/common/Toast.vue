<template>
  <div
    v-if="message"
    class="
      flex
      fixed
      bottom-[50px]
      max-w-[1228px]
      w-[93%]
      sm:w-full
      left-[52.5%]
      transform
      translate-x-[-52.5%]
      rounded-[8px]
      z-10
      p-[12px]
      text-white text-[16px]
      leading-[24px]
    "
    :class="color"
  >
    <img :src="icon" alt="" class="mr-[8px]" />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('toast', ['message', 'icon', 'color']),
}
</script>
