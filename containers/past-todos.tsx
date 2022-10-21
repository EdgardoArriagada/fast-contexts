import React, { FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const PastTodos: FC<Props> = () => {
  const [pastTodos] = useTodoStore((todoStore) => todoStore.past)

  return (
    <>
      <h5>Past Todos</h5>
      {pastTodos.map((todo) => {
        return <div key={todo.id}>{todo.text}</div>
      })}
    </>
  )
}

export default PastTodos
