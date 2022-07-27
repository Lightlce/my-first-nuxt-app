<template>
  <div class="relative min-h-screen bg-[#F8F9F9] flex flex-col">
    <Header/>

    <main>
      <Sidebar />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '../components/common/Header.vue'

export default {
  components: {

    Header,

  },

}
</script>
