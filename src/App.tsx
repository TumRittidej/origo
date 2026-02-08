import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './modules/home'
import Layout from './components/layout'
import BasicInformationForm from './modules/basicInformationForm'
import { route } from './constants/routing'
import QuizPage from './modules/quiz'
import ResultPage from './modules/result'
import AboutUsPage from './modules/aboutUs'
import ContactPage from './modules/contactPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={route.home()} element={<HomePage />} />
      </Route>
      <Route
        path={route.basicInformationForm()}
        element={<BasicInformationForm />}
      />
      <Route path={route.quiz()} element={<QuizPage />} />
      <Route path={route.result()} element={<ResultPage />} />
      <Route path={route.aboutUs()} element={<AboutUsPage />} />
      <Route path={route.contact()} element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
