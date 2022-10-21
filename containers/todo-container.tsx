import React, { FC } from 'react'
import CurrentTodos from './current-todos'
import PastTodos from './past-todos'
import TodoForm from './todo-form'

interface Props {}

const TodoBody: FC<Props> = () => {
  return (
    <>
      <TodoForm />
      <CurrentTodos />
      <hr />
      <PastTodos />
    </>
  )
}

export default TodoBody
