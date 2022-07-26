<template>
  <button
    class="
      min-w-[32px]
      disabled:border-[#D3D8DE] disabled:bg-[#D3D8DE] disabled:cursor-default
    "
    :class="[
      typeClasses,
      sizeClasses,
      fullWidthClasses,
      roundClasses,
      {
        [loadingClasses]: loading,
      },
    ]"
    @click="$emit('click')"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['solid', 'outline', 'borderless'].includes(value)
      },
      default: 'solid',
    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'large'].includes(value)
      },
      default: 'small',
    },
    round: {
      type: String,
      validator(value) {
        return ['normal', 'less'].includes(value)
      },
      default: 'normal',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    withImage: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    solidClasses: {
      type: [String, Array, Object],
      default: 'bg-[#080A6E] border-[#080A6E] text-white hover:bg-[#0E11BE] hover:border-[#0E11BE]',
    },
    outlineClasses: {
      type: [String, Array, Object],
      default:
        'bg-transparent border-[#080A6E] font-[#080A6E] hover:text-white hover:bg-[#0E11BE] hover:border-[#0E11BE]',
    },
    borderlessClasses: {
      type: [String, Array, Object],
      default:
        'border-0 border-transparent hover:bg-black hover:bg-opacity-10 hover:border-transparent active:border-transparent hover:bg-[#0E11BE] hover:border-[#0E11BE]',
    },
  },
  computed: {
    typeClasses() {
      return {
        solid: this.solidClasses,
        outline: this.outlineClasses,
        borderless: this.borderlessClasses,
      }[this.type]
    },
    sizeClasses() {
      let small =
        'text-[16px] leading-[16px] px-[16px] py-[8px] border-[1.5px] focus:outline-blue disabled:bg-[#D3D8DE] disabled:border-[#D3D8DE]'
      let large =
        'text-[18px] leading-[24px] px-[20px] py-[8px] border-[2px] focus:outline-blue disabled:bg-[#D3D8DE]'
      if (this.withImage) {
        small += 'flex items-center py-[11px] '
        large += 'flex items-center py-[12px]'
      }
      return {
        small,
        large,
      }[this.size]
    },
    roundClasses() {
      return {
        normal: 'rounded-[12px]',
        less: 'rounded-[8px]',
      }[this.round]
    },
    fullWidthClasses() {
      return this.fullWidth ? ' flex w-full justify-center ' : 'inline-flex'
    },
    loadingClasses() {
      return ' w-full justify-center '
    },
  },
}
</script>