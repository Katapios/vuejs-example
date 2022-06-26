<template>
    <h1>Todos List</h1>
    <app-input
      v-model="searchQuery"
      placeholder="put query here"
    />
    <div class="app__btns">
      <app-button
        @click="showDialog"
      >create new post
      </app-button>
      <app-select
        v-model="selectedSort"
        :options="sortOptions"
      >
      </app-select>
    </div>

    <app-dialog v-model:show='dialogIsVisible'>
      <todo-form
        @onCreateNewTodo="createNewTodo"
      >
      </todo-form>
    </app-dialog>
    <todo-list
      :todos="sortedAndSearchedTodos"
      @remove="removeTodo"
      v-if="!isTodosLoading"
    >
    </todo-list>
    <div v-else>loading...</div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current__page': page === pageNumber
        }"
        @click="pageChange(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'
import AppDialog from '@/components/UI/AppDialog'
import AppButton from '@/components/UI/AppButton'
import axios from 'axios'
import AppSelect from '@/components/UI/AppSelect'
import AppInput from '@/components/UI/AppInput'

export default {
  components: {
    AppInput,
    AppSelect,
    AppButton,
    AppDialog,
    TodoList,
    TodoForm
  },
  data () {
    return {
      todos: [],
      dialogIsVisible: false,
      isTodosLoading: true,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        // { value: 'id', name: 'by id' },
        { value: 'title', name: 'by title' },
        { value: 'body', name: 'by description' }
      ]
    }
  },
  methods: {
    createNewTodo (todo) {
      this.todos.push(todo)
      this.dialogIsVisible = false
    },
    removeTodo (todo) {
      this.todos = this.todos.filter(p => p.id !== todo.id)
    },
    showDialog () {
      this.dialogIsVisible = true
    },
    pageChange (pageNumber) {
      this.page = pageNumber
      this.fetchTodos()
    },
    async fetchTodos () {
      try {
        this.isTodosLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.todos = response.data
      } catch (e) {
        alert('error')
      } finally {
        this.isTodosLoading = false
      }
    }
  },
  mounted () {
    this.fetchTodos()
  },
  computed: {
    sortedTodos () {
      return [...this.todos].sort((todo1, todo2) => todo1[this.selectedSort]?.localeCompare(todo2[this.selectedSort]))
    },
    sortedAndSearchedTodos () {
      return this.sortedTodos.filter(todo => todo.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page () {
      this.fetchTodos()
    }
  }
  // watch: {
  //   selectedSort (newValue) {
  //     this.todos.sort((todo1, todo2) => {
  //       return todo1[newValue]?.localeCompare(todo2[newValue])
  //     })
  //   }
  // }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current__page {
  border: 2px solid teal;
}
</style>
