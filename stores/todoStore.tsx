import createFastContext from '../contexts/createFastContext'

export type Todo = {
  id: number
  text: string
}

interface TodoStore {
  current: Todo[]
  past: Todo[]
  title: string
}

const initialState: TodoStore = { current: [], past: [], title: 'Todo List' }

const { Provider, useStore, useUpdater } = createFastContext(initialState)

export {
  Provider as TodoProvider,
  useStore as useTodoStore,
  useUpdater as useTodoUpdater,
}
