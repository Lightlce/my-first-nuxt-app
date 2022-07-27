<template>
  <div class="pt-[32px] pb-[58px] px-[24px] sm:py-[64px] sm:px-0">
    <div class="w-[295px] mx-auto">
      <div
        v-if="$route.name === 'register'"
        class="
          yellow-circle
          w-[100px]
          h-[100px]
          rounded-full
          mb-6
          mx-auto
          overflow-hidden
        "
      >
        <img
          src="~/assets/icons/end-page-logo-white.svg"
          alt=""
          class="mix-blend-overlay"
        />
      </div>

      <img
        v-else
        :src="imageSrc"
        alt=""
        class="block w-[105px] h-[105px] mb-[40px] mx-auto"
      />

      <div v-if="$slots.default" class="text-center">
        <h1 class="font-bold text-[24px] leading-[28px] mb-[12px]">
          {{ heading }}
        </h1>
        <slot></slot>
      </div>

      <div
        v-else
        class="
          static
          w-[295px]
          h-[92px]
          top-[124px]
          left-0
          flex flex-col
          items-start
          p-0
        "
      >
        <div
          class="
            static
            w-full
            left-0
            right-0
            top-0
            bottom-[69.57%]
            not-italic
            font-bold
            text-center text-[24px]
            leading-[32px]
            mb-4
          "
        >
          {{ heading }}
        </div>

        <div
          class="
            static
            left-0
            right-0
            top-[calc(50%-48px/2+22px)]
            not-italic
            text-base
            leading-[24px]
            font-normal
            text-center
          "
        >
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: [String, Object],
      default: null,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.yellow-circle {
  /* Gradient/yellow */
  background: linear-gradient(135deg, #ffe543 0.13%, #ffcd19 100.13%);
}
</style>
