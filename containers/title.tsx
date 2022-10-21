import React, { FC } from 'react'

import { useTodoStore } from '../stores/todoStore'

interface Props {}

const Title: FC<Props> = () => {
  const title = useTodoStore((state) => state.title)

  return <h1>{title}</h1>
}

export default Title
