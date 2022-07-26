<template>
  <div>
    <nuxt-link
      v-if="!isExternal"
      class="
        flex
        items-center
        p-3
        text-[16px]
        leading-[20px]
        rounded-lg
        hover:font-bold
        h-[56px]
      "
      :class="toggleActiveClassName(to)"
      :to="to"
      :data-event-tracking="dataEventTracking"
    >
      <component :is="icon" />
      <span class="ml-2">{{ label }}</span>
    </nuxt-link>
    <a
      v-else
      class="
        flex
        items-center
        p-3
        text-[16px]
        leading-[20px]
        rounded-lg
        hover:font-bold
        h-[56px]
      "
      :class="toggleActiveClassName(to)"
      :href="to"
      target="_blank"
      :data-event-tracking="dataEventTracking"
    >
      <component :is="icon" />
      <span class="ml-2">{{ label }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    isExternal: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
      required: true,
    },
    label: {
      type: String,
      default: null,
      required: true,
    },
    icon: {
      type: Object,
      default: null,
      required: true,
    },
    dataEventTracking: {
      type: String,
      default: null,
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
