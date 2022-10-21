import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

type StringDispatch = Dispatch<SetStateAction<string>>

const StateContext = createContext<string | null>(null)
const UpdaterContext = createContext<StringDispatch | null>(null)

type ProviderProps = {
  children?: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState('')

  return (
    <StateContext.Provider value={state}>
      <UpdaterContext.Provider value={setState}>
        {children}
      </UpdaterContext.Provider>
    </StateContext.Provider>
  )
}

function useStoredState() {
  const state = useContext(StateContext)

  if (typeof state === 'undefined') {
    throw new Error('useStoredState must be used within a WordProvider')
  }

  return state
}

function useUpdater() {
  const updater = useContext(UpdaterContext)!

  if (typeof updater === 'undefined') {
    throw new Error('useUpdater must be used within a WordProvider')
  }

  return updater
}

export { Provider, useStoredState, useUpdater }
