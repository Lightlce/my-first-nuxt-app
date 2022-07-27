<template>
  <section
    v-if="!$slots.default"
    :class="{ relative: buttonText || cornerText }"
  >
    <img
      class="block w-full h-full"
      :class="imageClass"
      :src="src"
      alt="tile-image"
    />

    <span
      v-if="cornerText"
      class="absolute top-0 right-0 bg-yellow-300 text-[#0b0c0f] text-[16px] leading-[24px] font-bold p-[8px] rounded-tr-[22px] rounded-bl-[10px]"
      :class="cornerTextClass"
    >
      {{ cornerText }}
    </span>

    <div v-if="buttonText" class="absolute bottom-0 left-0 w-full py-4">
      <button
        class="bg-yellow-300 text-[#0b0c0f] text-[16px] leading-[24px] font-bold py-[8px] px-[16px] rounded-[12px] hover:bg-yellow-400"
      >
        {{ buttonText }}
      </button>
    </div>
  </section>

  <section v-else>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    imageClass: {
      type: [String, Array, Object],
      default: null,
    },
    cornerTextClass: {
      type: [String, Array, Object],
      default: null,
    },
    src: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: null,
    },
    cornerText: {
      type: String,
      default: null,
    },
  },
}
</script>