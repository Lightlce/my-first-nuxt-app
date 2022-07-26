<template>
  <section class="bg-white border border-gray-300 rounded-[24px]">
    <ImageTile
      class="w-full rounded-t-[24px]"
      :imageClass="imageClass"
      :cornerTextClass="cornerTextClass"
      :src="imageSrc"
      :cornerText="cornerText"
    />

    <div :class="textWrapperClass">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import ImageTile from '~/components/ImageTile'
export default {
  components: {
    ImageTile,
  },
  props: {
    imageClass: {
      type: [String, Array, Object],
      default: 'rounded-t-[24px]',
    },
    cornerTextClass: {
      type: [String, Array, Object],
      default: null,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    cornerText: {
      type: String,
      default: null,
    },
    textWrapperClass: {
      type: String,
      default: 'text-left p-[20px]',
    },
  },
}
</script>

