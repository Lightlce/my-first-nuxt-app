<template>
  <nuxt-link
    v-if="!isExternal"
    class="text-center py-[8px] px-[4px]"
    :class="isActive ? 'text-[#6245F4]' : 'text-[#99A4B2]'"
    :to="to"
  >
    <component :is="icon" class="inline" :is-active="isActive" />
    <span class="block text-[14px] leading-[20px] text-center">
      {{ label }}
    </span>
  </nuxt-link>
  <a
    v-else
    class="text-center py-[8px] px-[4px] text-[#99A4B2]"
    :href="to"
    target="_blank"
  >
    <component :is="icon" class="inline" color="#99A4B2" />
    <span class="block text-[14px] leading-[20px] text-center">
      {{ label }}
    </span>
  </a>
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
  },
  computed: {
    isActive () {
      return this.$route.path === this.to
    },
  },

}
</script>
