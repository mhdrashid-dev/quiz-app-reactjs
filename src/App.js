import React from 'react'
import QuizPage from './QuizPage'
import Context from './Context/Context'

function App() {
  
  return (
    <div>
      <Context>
        <QuizPage></QuizPage>
      </Context>
    </div>
  )
}

export default App
