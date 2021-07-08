import {ref, computed} from 'vue'
import {Todo} from '../models/Todo'

import {uniqueId} from 'lodash'

const todos = ref([] as Todo[])

export function useTodos() {

    const todosCount = computed(() => todos.value.length)

    function addTodo(newTodo: Todo) {
        newTodo.id = uniqueId('todo_')
        todos.value.push(newTodo)
    }

    function toggleComplete(todoId: string) {
        const todo = todos.value.find(t => t.id === todoId)
        if (todo) {
            todo.complete = !todo.complete
        }
    }

    return {todos, todosCount, addTodo, toggleComplete}
}
