<template>

    <section class="sm:mt-[56px] mt-[24px]">
      <h1 class="font-bold text-xl px-[24px] sm:px-0">Upcoming events</h1>

      <div class="mt-4 md:flex md:flex-wrap max-w-[900px]">
        <CardTile
          v-for="(item, i) in weeklyEvents"
          :key="i"
          class="desktop-slide flex-1 border-[0px] rounded-lg drop-shadow-tile relative mt-6 md:mr-3 lg:mr-6 w-[240px]"
          cornerTextClass="text-xs lg:text-[16px] sm:px-[12px] font-semibold leading-[20px]"
          :imageSrc="item.imageSrc"
          :cornerText="item.cornerText"
          text-wrapper-class="text-left pt-[20px] px-[20px] pb-[72px]"
        >
          <h1 class="text-md font-bold sm:text-[20px] sm:leading-[24px]">
            {{ item.title }}
          </h1>

          <p
            class="pt-[8px] pb-[12px] text-md leading-6 sm:leading-[24px] whitespace-pre-line mb-auto"
          >
            {{ item.body }}
          </p>

          <a
            v-if="item.isExternal"
            :href="item.to"
            target="_blank"
          
          >
            <BaseButton
              class="absolute bottom-[20px]"
              solid-classes="bg-[#6245F4] text-white text-xs border-0 hover:bg-[#3B4CEF] sm:text-[16px] sm:leading-[24px]"
            >
              {{ item.buttonText }}
            </BaseButton>
          </a>

          <nuxt-link v-else :to="item.to">
            <BaseButton
              class="absolute bottom-[20px]"
              solid-classes="bg-[#6245F4] text-white text-xs border-0 hover:bg-[#3B4CEF] sm:text-[16px] sm:leading-[24px]"
            >
              {{ item.buttonText }}
            </BaseButton>
          </nuxt-link>
        </CardTile>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
