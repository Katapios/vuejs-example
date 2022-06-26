<template>
  <div class="todo">
    <div>
      <div><strong>Id:</strong>{{ todo.id }}</div>
      <div><strong>Title:</strong>{{ todo.title }}</div>
      <div><strong>Description:</strong>{{ todo.body }}</div>
    </div>
    <div class="post__btns">
      <app-button @click="$router.push(`/todo/${todo.id}`)">More...</app-button>
      <app-button @click="$emit('remove', todo)">Delete Todo</app-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.todo {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
