<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green"/>
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
    },
  },
  components: {
    Button,
},
};
</script>

<style scoped>
header {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}
</style>
