<template>
  <nav
    class="
      z-10
      flex
      bg-white
      border-t border-t-[#cfcfcf]
      lg:hidden
      justify-evenly
      mt-auto
      sticky
      bottom-0
    "
  >
    <BottomNavButton
      v-for="(button, i) in filteredButtons"
      :key="i"
      :class="navButtonWidth"
      :label="button.label"
      :to="button.to"
      :icon="button.icon"
      :is-external="button.isExternal"
      :data-event-tracking="button.dataEventTracking"
    />
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import BottomNavButton from './BottomNavButton.vue'
import HomeIcon from '@/components/icons/Home'
import HappeningsIcon from '@/components/icons/Happenings'
import ResourcesIcon from '@/components/icons/Resources'
import GivingsIcon from '@/components/icons/Givings'
export default {
  components: { BottomNavButton },
  data () {
    return {
      buttons: [
        { to: '/', icon: HomeIcon, label: 'Home', dataEventTracking: 'home-bottom' },
        { to: '/happenings', icon: HappeningsIcon, label: 'Happenings', dataEventTracking: 'happenings-bottom' },
        { to: '/resources', icon: ResourcesIcon, label: 'Resources', dataEventTracking: 'resources-bottom' },
        { to: 'https://mygiving.heartofgodchurch.org', icon: GivingsIcon, label: 'My Giving', minAge: 17, minPastoralStatus: 4, isExternal: true, dataEventTracking: 'mygiving-bottom' },
      ],
    }
  },

  computed: {
    ...mapGetters({
      age: 'profile/age',
    }),
    ...mapGetters('profile', ['pastoralRoleId']),
    ...mapState('lookups', ['pastoralMapping']),
    filteredButtons () {
      return this.buttons.filter(b => !b.minAge || this.age > b.minAge).filter(b => !b.minPastoralStatus || this.pastoralMapping[this.pastoralRoleId] >= b.minPastoralStatus)
    },
    navButtonWidth () {
      if (this.filteredButtons.length === 4) return 'w-1/4'
      if (this.filteredButtons.length === 5) return 'w-1/5'
      return 'w-1/' + this.filteredButtons.length
    },
  },
}
</script>
