<template>
  <div v-if="todos.length > 0">
    <h3>My Todos</h3>
    <transition-group name="todo-list">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="$emit('remove', todo)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: deeppink; text-align: center">Todolist is empty"</h2>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.todo-list-item {
  display: inline-block;
  margin-right: 10px;
}
.todo-list-enter-active, .todo-list-leave-active {
  transition: all 0.4s;
}
.todo-list-enter, .todo-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.todo-list-move {
  transition: transform 0.4s;
}
</style>
