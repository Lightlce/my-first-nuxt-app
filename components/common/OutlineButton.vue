<template>
  <div>
    <nuxt-link
      v-if="!isExternal"
      class="
        flex
        items-center
        pt-[20px]
        pb-[16px]
        pl-[26px]
        text-[16px]
        leading-[20px]
        rounded-lg
        button-font
        font-semibold
        hover:font-bold
        h-[56px]
      "
      :class="
        isActive
          ? 'bg-[#F0F2F4]'
          : 'bg-[#FFFFFF] text-[#0B0C0F] drop-shadow-tile'
      "
      :to="to"
      :data-event-tracking="dataEventTracking"
      @click.native="$emit('clicked-button')"
    >
      <component :is="icon" :is-active="isActive" />
      <span class="ml-[20px]">{{ label }}</span>
    </nuxt-link>
    <a
      v-else
      class="
        flex
        items-center
        pt-[20px]
        pb-[16px]
        pl-[26px]
        text-[16px]
        leading-[20px]
        rounded-lg
        button-font
        font-semibold
        hover:font-bold
        h-[56px]
        bg-[#FFFFFF]
        text-[#0B0C0F]
        drop-shadow-tile
      "
      :href="to"
      target="_blank"
      :data-event-tracking="dataEventTracking"
    >
      <component :is="icon" />
      <span class="ml-[20px]">{{ label }}</span>
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
  computed: {
    isActive () {
      return this.$route.path === this.to
    },
  },

}
</script>

<style scoped>
@import url('https://use.typekit.net/jne6owq.css');

.button-font {
  font-size: 16px;
}
</style>
