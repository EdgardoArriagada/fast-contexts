import React, { FC } from 'react'
import TodoBody from '../../containers/todo-container'
import { TodoProvider } from '../../stores/todoStore'

interface Props {}

const RealUseCase: FC<Props> = () => {
  return (
    <TodoProvider>
      <TodoBody />
    </TodoProvider>
  )
}

export default RealUseCase
