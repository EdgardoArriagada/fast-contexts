import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react'

export default function createFastContext<Store>(initialState: Store) {
  function useStoreData(): {
    get: () => Store
    set: (value: Partial<Store>) => void
    subscribe: (callback: () => void) => () => void
  } {
    const store = useRef(initialState)

    const get = useCallback(() => store.current, [])

    const subscribers = useRef(new Set<() => void>())

    type FunctionSetter = (value: Store) => Partial<Store>
    type SetArg = FunctionSetter | Partial<Store>

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

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>

  const StoreContext = createContext<UseStoreDataReturnType | null>(null)

  function Provider({ children }: { children: React.ReactNode }) {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    )
  }

  type SelectorSetter = (value: Partial<Store>) => void

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, SelectorSetter] {
    const store = useContext(StoreContext)

    if (!store) {
      throw new Error('Store not found')
    }

    const [state, setState] = useState(() => selector(store.get()))

    useEffect(() => {
      const callback = () => setState(selector(store.get()))
      const unsubscribe = store.subscribe(callback)
      callback()
      return unsubscribe
    }, [store, selector])

    return [state, store.set]
  }

  return {
    Provider,
    useStore,
  }
}
