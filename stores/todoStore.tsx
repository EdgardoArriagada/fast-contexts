import createFastContext from '../contexts/createFastContext'

export type Todo = {
  id: number
  text: string
}

export interface TodoStore {
  current: Todo[]
  past: Todo[]
  title: string
}

export type TodoSetter = (store: TodoStore) => Partial<TodoStore>

const initialState: TodoStore = { current: [], past: [], title: 'Todo List' }

const { Provider, useStore, useUpdater } =
  createFastContext<TodoStore>(initialState)

export {
  Provider as TodoProvider,
  useStore as useTodoStore,
  useUpdater as useTodoUpdater,
}
