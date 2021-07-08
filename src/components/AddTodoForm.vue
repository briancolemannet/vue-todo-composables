<template>
  <div class="todo-form-wrapper">
    <p class="is-size-4 has-text-weight-medium">Add a Todo</p>
    <form class="form" @submit.prevent="submitForm">
      <div class="field">
        <label for="title" class="label">Title</label>
        <div class="control">
          <input id="title" v-model.trim="title" type="text" class="input">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button @click="clearForm" class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useTodos} from "../composables/todos";

export default defineComponent({
  name: 'AddTodoForm',
  props: {},
  components: {},
  setup() {
    const {addTodo} = useTodos()
    const title = ref('')

    function submitForm() {
      const name = title.value
      addTodo({name, complete: false})
      title.value = ''
    }

    function clearForm() {
      title.value = ''
    }

    return {
      title,
      submitForm,
      clearForm,
    }
  }
})
</script>

<style lang="scss">

.todo-form-wrapper {
  min-width: 400px;
  max-width: 600px;
}

</style>
