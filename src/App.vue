<template>
  <div class="app container">
    <h1 class="has-text-centered is-size-1">My Todo App</h1>
    <h3 class="has-text-centered is-size-2">
      Todos Count: {{ todosCount }}
    </h3>
    <div class="is-flex is-flex-direction-row is-justify-content-space-between">
      <div class="is-flex-grow-0">
        <TodoList :todos="todos" @addTodo="handleAddTodo"></TodoList>
      </div>
      <div class="is-flex-grow-0">
        <AddTodoForm></AddTodoForm>
      </div>
      <div class="is-flex-grow-0">
        <TodoList :todos="todos" @addTodo="handleAddTodo"></TodoList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TodoList from './components/TodoList.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import {useTodos} from './composables/todos'
import {trim} from 'lodash'

export default defineComponent({
  name: 'App',
  components: {
    TodoList,
    AddTodoForm,
  },
  setup() {
    const {todos, todosCount, addTodo} = useTodos()

    function handleAddTodo(todoTitle: string) {
      addTodo({name: trim(todoTitle)})
    }

    return {todos, todosCount, handleAddTodo}
  }
})
</script>

<style src="./scss/styles.scss" lang="scss"></style>

<style lang="scss">
</style>
