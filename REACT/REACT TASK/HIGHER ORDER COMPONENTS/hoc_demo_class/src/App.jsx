import React from 'react'
import Button from './components/Button'
import withButton from './hoc/withButton'

const App = () => {
    const Component =withButton(Button)
  return (
    <>
    <Component />
    </>
  )
}

export default App