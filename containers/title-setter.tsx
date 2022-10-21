import React, { FC, CSSProperties } from 'react'

import { useTodoStore } from '../stores/todoStore'

const inputStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem',
}

interface Props {}

const TitleSetter: FC<Props> = () => {
  const [, updateStore] = useTodoStore((store) => store.title)

  const handleChange = (e: any) => {
    updateStore({ title: e.target.value })
  }

  return (
    <div style={inputStyles}>
      <label htmlFor="todo">Change Title</label>
      <input id="todo" type="text" onChange={handleChange} />
    </div>
  )
}

export default TitleSetter
