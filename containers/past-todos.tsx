import React, { FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const columStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

const elementStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem',
}

const PastTodos: FC<Props> = () => {
  const [pastTodos, updateStore] = useTodoStore((todoStore) => todoStore.past)

  const handleCheckboxClick = (id: number) => {
    const newPastTodos = pastTodos.filter((todo) => todo.id !== id)
    const resurrectedTodo = pastTodos.find((todo) => todo.id === id)

    updateStore({
      past: newPastTodos,
    })

    updateStore((store) => ({
      current: [...store.current, resurrectedTodo],
    }))
  }

  return (
    <>
      <h5>Past Todos</h5>
      <div style={columStyles}>
        {pastTodos.map(({ id, text }) => {
          return (
            <div key={id} style={elementStyles}>
              <input
                onChange={() => handleCheckboxClick(id)}
                type="checkbox"
                checked
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

export default PastTodos
