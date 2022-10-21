import React, { FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const TodoForm: FC<Props> = () => {
  const [, setNewValue] = useTodoStore((store) => store.current)
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = { id: Date.now(), text: e.currentTarget.todo.value }

    setNewValue((store) => ({ current: [...store.current, newTodo] }))
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo">Todo</label>
      <input id="todo" type="text" />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
