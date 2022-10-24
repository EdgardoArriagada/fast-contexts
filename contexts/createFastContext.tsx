import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react'

export default function createFastContext<Store>(initialState: Store) {
  type UseStoreDataReturnType = ReturnType<typeof useStoreData>

  type FunctionSetter = (store: Store) => Partial<Store>
  type SetArg = Partial<Store> | FunctionSetter
  type SelectorSetter = (value: SetArg) => void

  function useStoreData(): {
    get: () => Store
    set: (arg: SetArg) => void
    subscribe: (callback: () => void) => () => void
  } {
    const store = useRef(initialState)

    const get = useCallback(() => store.current, [])

    const subscribers = useRef(new Set<() => void>())

    const set = useCallback((arg: SetArg) => {
      if (typeof arg === 'function') {
        store.current = { ...store.current, ...arg(store.current) }
      } else {
        store.current = { ...store.current, ...arg }
      }
      subscribers.current.forEach((callback) => callback())
    }, [])

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])

    return {
      get,
      set,
      subscribe,
    }
  }

  const StoreContext = createContext<UseStoreDataReturnType | null>(null)

  function Provider({ children }: { children: React.ReactNode }) {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    )
  }

  function useStoreContext() {
    const store = useContext(StoreContext)

    if (!store) {
      throw new Error('Store not found')
    }

    return store
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): SelectorOutput {
    const store = useStoreContext()

    const [state, setState] = useState(() => selector(store.get()))

    useEffect(() => {
      const callback = () => setState(selector(store.get()))
      const unsubscribe = store.subscribe(callback)
      callback()
      return unsubscribe
    }, [store, selector])

    return state
  }

  function useUpdater(): SelectorSetter {
    const store = useStoreContext()

    return store.set
  }

  return {
    Provider,
    useStore,
    useUpdater,
  }
}
