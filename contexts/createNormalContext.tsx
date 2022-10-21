import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

type StringDispatch = Dispatch<SetStateAction<string>>

const WordStateContext = createContext<[string, StringDispatch] | null>(null)

type NormalProviderProps = {
  children?: React.ReactNode
}

const NormalProvider: FC<NormalProviderProps> = ({ children }) => {
  const [count, setWord] = useState('')
  return (
    <WordStateContext.Provider value={[count, setWord]}>
      {children}
    </WordStateContext.Provider>
  )
}

function useStore() {
  const store = useContext(WordStateContext)

  if (typeof store === 'undefined') {
    throw new Error('useStore must be used within a WordProvider')
  }

  return store
}

export { NormalProvider, useStore }
