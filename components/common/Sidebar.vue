<template>
  <aside class="hidden min-h-[calc(100vh-56px)] w-[316px] lg:block">
    <div
      class="
        hidden
        fixed
        top-[88px]
        bottom-0
        left-0
        w-[316px]
        flex-col
        px-[32px]
        py-[40px]
        lg:flex
        bg-[#F8F9F9]
        overflow-y-auto
        no-scrollbar
      "
      style="box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1)"
    >
      <section class="flex flex-col items-center">
        <Avatar class="mb-[8px] w-[64px] h-[64px]" />
        <span class="block text-[20px] leading-[24px] font-bold text-center">{{
          fullname
        }}</span>
      </section>

      <section class="mt-[48px]">
        <OutlineButton
          v-for="(link, i) in filteredLinks"
          :key="i"
          :icon="link.icon"
          :to="link.to"
          :label="link.label"
          :is-external="link.isExternal"
          :data-event-tracking="link.dataEventTracking"
          class="mb-[12px]"
        />
      </section>
      <section class="mt-[32px] mb-[48px]">
        <h3 class="font-bold text-[16px] leading-[20px] mb-[16px]">Personal</h3>
        <OutlineButton
          v-for="(link, i) in personalLinks"
          :key="i"
          :icon="link.icon"
          :to="link.to"
          :label="link.label"
          :is-external="link.isExternal"
          :data-event-tracking="link.dataEventTracking"
          class="mb-[12px]"
        />
      </section>
      <nuxt-link
        class="font-bold text-[#B80A0A] text-[16px] self-center mb-[30px]"
        to="/auth/logout"
        data-event-tracking="log-out"
      >
        Log out
      </nuxt-link>

      <section class="mt-auto flex justify-center">
        <a
          class="text-sm text-gray"
          href="https://privacy.heartofgodchurch.org/"
          target="_blank"
          data-event-tracking="privacy-policy"
          >Privacy policy</a
        >
      </section>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Avatar from '../icons/Avatar.vue'

import OutlineButton from './OutlineButton.vue'
import OutlineHomeIcon from '@/components/icons/OutlineHome'
import OutlineHappeningsIcon from '@/components/icons/OutlineHappenings'
import OutlineResourcesIcon from '@/components/icons/OutlineResources'
import OutlineGivingsIcon from '@/components/icons/OutlineGivings'
import OutlinePasswordLockIcon from '@/components/icons/OutlinePasswordLock'
import OutlineEditProfileIcon from '@/components/icons/OutlineEditProfile'
import OutlineImpressionSlipIcon from '@/components/icons/OutlineImpressionSlip'

export default {
  components: {
    OutlineButton,
    Avatar,
  },
  data () {
    return {
      links: [
        { to: '/', label: 'Home', icon: OutlineHomeIcon, dataEventTracking: 'home-bottom' },
        { to: '/happenings', label: 'Happenings', icon: OutlineHappeningsIcon, dataEventTracking: 'happenings-bottom' },
        { to: '/resources', label: 'Resources', icon: OutlineResourcesIcon, dataEventTracking: 'resources-bottom' },
        { to: 'https://mygiving.heartofgodchurch.org', label: 'My Giving', icon: OutlineGivingsIcon, minAge: 17, minPastoralStatus: 4, isExternal: true, dataEventTracking: 'mygiving-bottom' },
      ],
      personalLinks: [
        { to: '/change-password', label: 'Change password', icon: OutlinePasswordLockIcon, dataEventTracking: 'change-password' },
        { to: '/profile', label: 'Edit Profile', icon: OutlineEditProfileIcon, dataEventTracking: 'edit-profile' },
        { to: '/impression', label: 'Send Impression Slip', icon: OutlineImpressionSlipIcon, dataEventTracking: 'send-impression-slip' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      age: 'profile/age',
      fullname: 'profile/fullname',
    }),
    ...mapGetters('profile', ['pastoralRoleId']),
    ...mapState('lookups', ['pastoralMapping']),
    filteredLinks () {
      return this.links.filter(l => !l.minAge || this.age > l.minAge).filter(l => !l.minPastoralStatus || this.pastoralMapping[this.pastoralRoleId] >= l.minPastoralStatus)
    },
  },
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
