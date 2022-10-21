import React, { FC } from 'react'
import CurrentTodos from './current-todos'
import PastTodos from './past-todos'
import TodoForm from './todo-form'
import Title from './title'
import TitleSetter from './title-setter'

interface Props {}

const TodoBody: FC<Props> = () => {
  return (
    <>
      <Title />
      <TodoForm />
      <CurrentTodos />
      <hr />
      <PastTodos />
      <TitleSetter />
    </>
  )
}

export default TodoBody
