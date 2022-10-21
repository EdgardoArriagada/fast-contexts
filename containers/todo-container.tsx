import React, { FC } from 'react'
import CurrentTodos from './current-todos'
import PastTodos from './past-todos'

interface Props {}

const TodoBody: FC<Props> = () => {
  return (
    <>
      <CurrentTodos />
      <hr />
      <PastTodos />
    </>
  )
}

export default TodoBody
