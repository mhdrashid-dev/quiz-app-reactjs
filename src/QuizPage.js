import React from 'react'
import QuestionPage from './Pages/QuestionPage'
import Result from './Pages/Result'
import SetupPage from './Pages/SetupPage'
import StartingPage from './Pages/StartingPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function QuizPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<StartingPage></StartingPage>} ></Route>
          <Route path='/setup' element={<SetupPage></SetupPage>} ></Route>
          <Route path='/question' element={<QuestionPage></QuestionPage>}></Route>     
          <Route path='/result' element={<Result></Result>}></Route>                                     
        </Routes>
      </Router>
    </div>
  )
}

export default QuizPage
