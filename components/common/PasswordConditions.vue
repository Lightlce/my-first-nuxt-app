<template>
  <div>
    <h2 class="text-[16px] font-bold leading-[20px] mb-[10px]">
      Your password must have:
    </h2>

    <div class="flex mb-[8px]">
      <img
        v-if="hasEightCharacters"
        src="~/assets/icons/password-check.svg"
        alt=""
        class="mr-[8px]"
      />
      <img
        v-else
        src="~/assets/icons/password-uncheck.svg"
        alt=""
        class="mr-[8px]"
      />
      <span
        class="text-[16px] leading-[24px] text-gray"
        style="width: calc(100% - 28px)"
      >
        At least 8 characters
      </span>
    </div>
    <div class="flex mb-[8px]">
      <img
        v-if="hasOneUpperCase"
        src="~/assets/icons/password-check.svg"
        alt=""
        class="mr-[8px]"
      />
      <img
        v-else
        src="~/assets/icons/password-uncheck.svg"
        alt=""
        class="mr-[8px]"
      />
      <span
        class="text-[16px] leading-[24px] text-gray"
        style="width: calc(100% - 28px)"
      >
        At least 1 upper case character
      </span>
    </div>
    <div class="flex mb-[8px]">
      <img
        v-if="hasOneLowerCase"
        src="~/assets/icons/password-check.svg"
        alt=""
        class="mr-[8px]"
      />
      <img
        v-else
        src="~/assets/icons/password-uncheck.svg"
        alt=""
        class="mr-[8px]"
      />
      <span
        class="text-[16px] leading-[24px] text-gray"
        style="width: calc(100% - 28px)"
      >
        At least 1 lower case character
      </span>
    </div>
    <div class="flex mb-[24px]">
      <img
        v-if="hasOneNumberOrSymbol"
        src="~/assets/icons/password-check.svg"
        alt=""
        class="mr-[8px]"
      />
      <img
        v-else
        src="~/assets/icons/password-uncheck.svg"
        alt=""
        class="mr-[8px]"
      />
      <span
        class="text-[16px] leading-[24px] text-gray"
        style="width: calc(100% - 28px)"
      >
        At least 1 number or symbol
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasEightCharacters: {
      type: Boolean,
      required: true,
    },
    hasOneUpperCase: {
      type: Boolean,
      required: true,
    },
    hasOneLowerCase: {
      type: Boolean,
      required: true,
    },
    hasOneNumberOrSymbol: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
