import './App.css'
import { Homepage } from './views/Homepage.jsx'
import { Formpage } from './views/Formpage'
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Homepage />
      <Formpage />
    </div>
  )
}

export default App
