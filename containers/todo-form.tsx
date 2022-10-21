import React, { useRef, FC, CSSProperties } from 'react'

import { useTodoStore } from '../stores/todoStore'

const formStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem',
}

interface Props {}

const TodoForm: FC<Props> = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [, updateStore] = useTodoStore((store) => store.current)
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = { id: Date.now(), text: e.currentTarget.todo.value }

    updateStore((store) => ({ current: [...store.current, newTodo] }))

    formRef.current?.reset()
  }

  return (
    <form style={formStyles} ref={formRef} onSubmit={handleOnSubmit}>
      <label htmlFor="todo">Todo</label>
      <input id="todo" type="text" />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
