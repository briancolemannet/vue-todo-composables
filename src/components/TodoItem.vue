<template>
  <div class="todo-item">
    <div class="todo-name">
      {{ todo.name }}
    </div>
    <div class="todo-check-box-wrapper is-clickable ml-3" @click="updateComplete">
      <span v-if="todo.complete" class="material-icons-outlined has-text-success">check</span>
      <span v-else class="material-icons-outlined">check_box_outline_blank</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Todo} from "../models/Todo";
import {useTodos} from "../composables/todos";

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {type: Object as PropType<Todo>}
  },
  components: {},
  setup(props) {
    const {toggleComplete} = useTodos()
    const todoId = props.todo.id

    function updateComplete() {
      toggleComplete(todoId)
    }

    return {updateComplete}
  }

})
</script>

<style lang="scss">
.todo-item {
  display: flex;

  .todo-name {
    flex-grow: 1;
  }

  .todo-check-box-wrapper {
    flex-grow: 0;
  }
}

</style>
