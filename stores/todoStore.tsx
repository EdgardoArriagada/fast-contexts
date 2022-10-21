import createFastContext from '../contexts/createFastContext'

type Todo = {
  id: number
  text: string
}

interface TodoStore {
  current: Todo[]
  past: Todo[]
}

const initialState: TodoStore = { current: [], past: [] }

const { Provider, useStore } = createFastContext(initialState)

export { Provider as TodoProvider, useStore as useTodoStore }
