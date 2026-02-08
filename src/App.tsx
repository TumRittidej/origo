import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './modules/home'
import Layout from './components/layout'
import BasicInformationForm from './modules/basicInformationForm'
import { route } from './constants/routing'
import QuizPage from './modules/quiz'
import ResultPage from './modules/result'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={route.home()} element={<HomePage />} />
        <Route
          path={route.basicInformationForm()}
          element={<BasicInformationForm />}
        />
        <Route path={route.quiz()} element={<QuizPage />} />
        <Route path={route.result()} element={<ResultPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default App
