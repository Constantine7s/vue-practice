<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @toggle-add-task="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task' "
      :color="showAddTask ? 'red' : 'green' "
    />
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
    showAddTask: Boolean,
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
