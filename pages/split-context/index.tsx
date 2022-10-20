import {
  WordProvider,
  useWordUpdater,
  useWordState,
} from '../../contexts/createSplitContext'

const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const updateWord = useWordUpdater()
  return (
    <div className="field">
      {value}: <input onChange={(e) => updateWord(e.target.value)} />
    </div>
  )
}

const Display = ({ value }: { value: 'first' | 'last' }) => {
  const wordState = useWordState()
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
    <WordProvider>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </WordProvider>
  )
}

export default SplitContext
