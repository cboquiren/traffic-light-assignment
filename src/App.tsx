import './App.css'
import { ClassTrafficLight } from './components/class-light'
import { FunctionalTrafficLight } from './components/functional-light'

function App() {
  return (
    <>
      <main>
        <h1>Traffic Light App</h1>
        <div className='container'>
          <div className='left'>
            <FunctionalTrafficLight/>
          </div>
          <div className='right'>
            <ClassTrafficLight/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
