<template>
  <header
    class="
      home-top-nav
      flex
      items-start
      lg:items-center
      justify-between
      sticky
      top-0
      left-0
      right-0
      z-[100]
    "
    :class="
      $route.path == '/' ? 'h-[120px] lg:h-[88px]' : 'h-[68px] lg:h-[88px]'
    "
  >
    <div class="ml-[24px] mt-[10px] lg:mt-0 inline-flex items-center">
      <nuxt-link to="/" class="inline-flex">
        <img
          src="~/assets/icons/logo-heart-cross.svg"
          class="mr-[10px]"
          alt="hogc logo"
        />
        <h1
          class="text-[18px] lg:text-[24px] not-italic font-bold text-[#373E49] mt-[10px]"
        >
          HOGC One
        </h1>
      </nuxt-link>
    </div>

    <button class="lg:hidden" data-event-tracking="profile-icon" @click="$emit('openProfileModal')">
      <Avatar class="ml-auto mr-[24px] mt-[15px] h-[36px] w-[36px]" data-event-tracking="profile-icon" />
    </button>
  </header>
</template>

<script>
import Avatar from '../icons/Avatar.vue'

export default {
  components: {
    Avatar,
  },
}
</script>

<style scoped>
@import url('https://use.typekit.net/jne6owq.css');

.home-top-nav {
  background: linear-gradient(135deg, #ffe543 0.13%, #ffcd19 100.13%);
}
</style>
