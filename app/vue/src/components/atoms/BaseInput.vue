<template>
  <input
    class="base-input"
    type="text"
    :value="value"
    :placeholder="placeholder"
    @change="handleChange"
  >
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    type: {
      type: String,
      defualt: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '入力してください',
    },
  },

  methods: {
    handleChange(e) {
      this.$emit('handleChange', { value: e.target.value });
    },
  },
};
</script>
