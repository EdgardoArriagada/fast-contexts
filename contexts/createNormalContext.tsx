import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  FC,
} from 'react'

type StringDispatch = (value: string) => void

const WordStateContext = createContext<
  [[string, string], StringDispatch, StringDispatch] | null
>(null)

type NormalProviderProps = {
  children?: React.ReactNode
}

const NormalProvider: FC<NormalProviderProps> = ({ children }) => {
  const [state, setState] = useState<[string, string]>(['', ''])

  const setFirst = useCallback((value: string) => {
    setState((prev) => [value, prev[1]])
  }, [])

  const setLast = useCallback((value: string) => {
    setState((prev) => [prev[0], value])
  }, [])

  return (
    <WordStateContext.Provider value={[state, setFirst, setLast]}>
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
