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
      <div style={{ marginBottom: '1rem' }}>
        <Title />
      </div>
      <TodoForm />
      <CurrentTodos />
      <hr />
      <PastTodos />
      <div style={{ marginTop: '20rem' }}>
        <TitleSetter />
      </div>
    </>
  )
}

export default TodoBody
