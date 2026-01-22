
import Button from './components/Button'

import withCountTracking from './hoc/withCountTracking'


const App = () => {
  const ButtonTracking =withCountTracking(Button)
  
  return (
    <>
    <ButtonTracking label ={"Increment"} label1 ={"Decrement  "}/>

    </>
  )
}

export default App