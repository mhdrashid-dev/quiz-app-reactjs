import React from 'react'
import Loading from './Components/Loading'
import QuestionPage from './Pages/QuestionPage'
import Result from './Pages/Result'
import SetupPage from './Pages/SetupPage'
import StartingPage from './Pages/StartingPage'

function QuizPage() {
  return (
    <div>
      <StartingPage></StartingPage>
      <SetupPage></SetupPage>
      <QuestionPage></QuestionPage>
      <Result></Result>
      <Loading></Loading>
    </div>
  )
}

export default QuizPage
