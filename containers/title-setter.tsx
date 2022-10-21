import React, { useRef, FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const TitleSetter: FC<Props> = () => {
  const [, updateStore] = useTodoStore((store) => store.title)

  const handleChange = (e: any) => {
    updateStore({ title: e.target.value })
  }

  return (
    <div style={{ marginTop: '20rem' }}>
      <label htmlFor="todo">Change Title</label>
      <input id="todo" type="text" onChange={handleChange} />
    </div>
  )
}

export default TitleSetter
