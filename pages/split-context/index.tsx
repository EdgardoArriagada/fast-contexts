import {
  Provider,
  useUpdater,
  useStoredState,
} from '../../contexts/createSplitContext'

const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const updateWord = useUpdater()
  return (
    <div className="field">
      {value}: <input onChange={(e) => updateWord(e.target.value)} />
    </div>
  )
}

const Display = ({ value }: { value: 'first' | 'last' }) => {
  const wordState = useStoredState()
  return (
    <div className="value">
      {value}: {wordState}
    </div>
  )
}

const FormContainer = () => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  )
}

const DisplayContainer = () => {
  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  )
}

const ContentContainer = () => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  )
}

function SplitContext() {
  return (
    <Provider>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </Provider>
  )
}

export default SplitContext
