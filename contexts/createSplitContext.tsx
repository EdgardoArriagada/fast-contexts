import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

type StringDispatch = Dispatch<SetStateAction<string>>

const WordStateContext = createContext<string | null>(null)
const WordUpdaterContext = createContext<StringDispatch | null>(null)

type WordProviderProps = {
  children?: React.ReactNode
}

const WordProvider: FC<WordProviderProps> = ({ children }) => {
  const [count, setWord] = useState('')
  return (
    <WordStateContext.Provider value={count}>
      <WordUpdaterContext.Provider value={setWord}>
        {children}
      </WordUpdaterContext.Provider>
    </WordStateContext.Provider>
  )
}

function useWordState() {
  const wordState = useContext(WordStateContext)

  if (typeof wordState === 'undefined') {
    throw new Error('useWordState must be used within a WordProvider')
  }

  return wordState
}

function useWordUpdater() {
  const setWord = useContext(WordUpdaterContext)!
  if (typeof setWord === 'undefined') {
    throw new Error('useWordUpdater must be used within a WordProvider')
  }
  const increment = useCallback((val: string) => setWord(val), [setWord])
  return increment
}

export { WordProvider, useWordState, useWordUpdater }
