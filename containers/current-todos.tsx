import React, { FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const CurrentTodos: FC<Props> = () => {
  const [currentTodos] = useTodoStore((todoStore) => todoStore.current)

  return (
    <>
      <h3>Current Todos</h3>
      {currentTodos.map((todo) => {
        return <div key={todo.id}>{todo.text}</div>
      })}
    </>
  )
}

export default CurrentTodos
