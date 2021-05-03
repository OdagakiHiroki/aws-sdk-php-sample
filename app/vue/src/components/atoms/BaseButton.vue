<template>
  <button
    class="base-button"
    @click="handleClick"
  >
  {{text}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    text: {
      type: String,
      default: 'click',
    },
  },

  methods: {
    handleClick() {
      this.$emit('handleClick');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
