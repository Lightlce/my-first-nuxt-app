<template>
  <div class="relative min-h-screen bg-[#F8F9F9] flex flex-col">
    <Header/>

    <main class="lg:flex">
      <Sidebar />
      <nuxt />
    </main>

    <!-- <BottomNav />

    <ProfileModal
      v-if="showingProfileModal"
      @close="showingProfileModal = false"
    />
    <Toast /> -->
  </div>
</template>

<script>
import Header from '../components/common/Header.vue'
// import Toast from '../components/common/Toast.vue'
// import Sidebar from '@/components/common/Sidebar'
// import BottomNav from '@/components/common/BottomNav'
// import ProfileModal from '@/components/modals/Profile'

export default {
  components: {
    // Sidebar,
    // BottomNav,
    Header,
    // ProfileModal,
    // Toast,
  },
  // data () {
  //   return {
  //     showingProfileModal: false,
  //   }
  // },
  // created () {
  //   this.$store.dispatch('profile/fetchProfile')
  //   this.$store.dispatch('lookups/fetchIfNotYet')
  //   this.$store.dispatch('lookups/fetchCgMapping')
  //   this.$store.dispatch('lookups/fetchZoneCgMapping')
  // },
}
</script>
