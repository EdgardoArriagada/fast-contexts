import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
  FC,
} from 'react'

type StringDispatch = (value: string) => void

const WordStateContext = createContext<
  [[string, string], StringDispatch, StringDispatch] | null
>(null)

type Action = {
  type: 'updateFirst' | 'updateLast'
  payload: string
}

type State = [string, string]
type Reducer = (state: State, action: Action) => State

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'updateFirst':
      return [action.payload, state[1]]
    case 'updateLast':
      return [state[0], action.payload]
    default:
      throw new Error()
  }
}

type NormalProviderProps = {
  children?: React.ReactNode
}

const NormalProvider: FC<NormalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer>(reducer, ['', ''])

  const setFirst = useCallback((value: string) => {
    dispatch({ type: 'updateFirst', payload: value })
  }, [])

  const setLast = useCallback((value: string) => {
    dispatch({ type: 'updateLast', payload: value })
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
