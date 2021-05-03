<template>
  <label class="label-input">
    <BaseInput
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @handleChange="handleInputChange"
    />
  </label>
</template>

<script>
import BaseInput from '@/components/atoms/BaseInput.vue';

export default {
  name: 'LabelInput',

  components: {
    BaseInput,
  },

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
    handleInputChange({ value }) {
      this.$emit('handleInputChange', { value });
    },
  },
};
</script>
