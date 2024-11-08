import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="custom-text">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatibus voluptates enim, ut architecto, quia laborum itaque distinctio fuga quae quasi ratione doloribus? Non dolor consequuntur ipsam porro aperiam, exercitationem ratione debitis perspiciatis dolorem consectetur ea eligendi sunt incidunt provident facilis atque accusantium quia.
      </p>
    </>
  )
}

export default App
