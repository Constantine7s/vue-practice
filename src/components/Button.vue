<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button @click="handleClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: String,
    text: String,
  },
  methods: {
    handleClick() {
      console.log('handleClick()');
      this.$emit('toggle-add-task');
    },
  },
};
</script>
