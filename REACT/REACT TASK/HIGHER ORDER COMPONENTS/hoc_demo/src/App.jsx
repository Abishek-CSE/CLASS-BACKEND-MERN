import React from 'react'
import Button from './components/Button'
import withText from './hoc/withText'
const Kesari =withText(Button)
const App = () => {

  return (
  <>
  <Kesari label ={"Bigil"} />
  <Button label ={"Sarkar"} />
  
  </>
  )
}

export default App