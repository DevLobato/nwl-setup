import './style/global.css';

import { Habit } from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={0} />
      <Habit completed={4} />
      <Habit completed={3} />
      <Habit completed={2} />
    </div>
  )
}

export default App
