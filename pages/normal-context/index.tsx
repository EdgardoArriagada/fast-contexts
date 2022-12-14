import { useStore, NormalProvider } from '../../contexts/createNormalContext'

const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const [, updateFirst, updateLast] = useStore()!
  const updateChoosen = value === 'first' ? updateFirst : updateLast
  return (
    <div className="field">
      {value}: <input onChange={(e) => updateChoosen(e.target.value)} />
    </div>
  )
}

const Display = ({ value }: { value: 'first' | 'last' }) => {
  const [wordState] = useStore()!
  return (
    <div className="value">
      {value}: {wordState[value === 'first' ? 0 : 1]}
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

function NormalContext() {
  return (
    <NormalProvider>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </NormalProvider>
  )
}

export default NormalContext
