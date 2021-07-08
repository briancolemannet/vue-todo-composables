<template>
  <div class="todo-list">
    <h2 class="is-size-3">
      Todo List
    </h2>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
    <button class="button is-small" @click="addRandomTodo">Add random todo</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

import {Todo} from '../models/Todo'

import TodoItem from './TodoItem.vue'

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    }
  },
  components: {TodoItem},
  setup(_, {emit}) {
    function addRandomTodo() {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -';
      const charactersLength = characters.length;
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      emit('addTodo', result)
    }

    return {addRandomTodo}
  }
})
</script>

<style lang="scss">

</style>
