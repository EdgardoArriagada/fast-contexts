import React, { useRef, FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const TodoForm: FC<Props> = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [, setNewValue] = useTodoStore((store) => store.current)
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = { id: Date.now(), text: e.currentTarget.todo.value }

    setNewValue((store) => ({ current: [...store.current, newTodo] }))

    formRef.current?.reset()
  }

  return (
    <form ref={formRef} onSubmit={handleOnSubmit}>
      <label htmlFor="todo">Todo</label>
      <input id="todo" type="text" />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
