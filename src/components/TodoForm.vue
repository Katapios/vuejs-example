<template>
  <form @submit.prevent>
    <h4>Create new todo</h4>
    <app-input
      v-model="newTodo.title"
      type="text"
      placeholder="Title"
    />
    <app-input
      v-model="newTodo.body"
      type="text"
      placeholder="Description"
    />
    <app-button class="btn"
      @click="sendTodo"
      style="align-self: flex-end; margin-top: 15px"
    >create!
    </app-button>
  </form>
</template>

<script>
export default {
  name: 'TodoForm',
  data () {
    return {
      newTodo: {
        id: Date.now(),
        title: '',
        body: ''
      }
    }
  },
  methods: {
    sendTodo () {
      this.$emit('onCreateNewTodo', this.newTodo)
      this.newTodo = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
