import React, { FC, CSSProperties } from 'react'

import { useTodoStore, useTodoUpdater, TodoSetter } from '../stores/todoStore'

interface Props {}

const columStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

const elementStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem',
}

const CurrentTodos: FC<Props> = () => {
  const currentTodos = useTodoStore((todoStore) => todoStore.current)
  const todoUpdater = useTodoUpdater()

  const handleCheckboxClick = (id: number) => {
    const newCurrentTodos = currentTodos.filter((todo) => todo.id !== id)
    const newPastTodos = currentTodos.find((todo) => todo.id === id)

    todoUpdater({ current: newCurrentTodos })

    const todoSetter: TodoSetter = (store) => ({
      past: [...store.past, newPastTodos!],
    })

    todoUpdater(todoSetter)
  }

  return (
    <>
      <h3>Current Todos</h3>
      <div style={columStyles}>
        {currentTodos.map(({ id, text }) => {
          return (
            <div key={id} style={elementStyles}>
              <input
                onChange={() => handleCheckboxClick(id)}
                type="checkbox"
                id={String(id)}
                name="subscribe"
                value="newsletter"
              />
              <label htmlFor={String(id)}>{text}</label>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CurrentTodos
