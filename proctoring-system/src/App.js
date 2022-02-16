import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import SideNavbar from './Components/SideNavbar';
import Dashboard from './Components/Dashboard';
import CreateExam from './Components/CreateExam';
import ViewExam from './Components/ViewExam';
import UpdateExam from './Components/UpdateExam';
import DeleteExam from './Components/Deleteexam';
import ExamDashboard from './Components/ExamDashboard';
import AddQuestion from './Components/AddQuestion';
import ViewQuestions from './Components/ViewQuestions';
import QuestionDashboard from './Components/QuestionDashboard';
import UpdateQuestion from './Components/UpdateQuestion';
import DeleteQuestion from './Components/DeleteQuestion';
import QuizPage from './Components/QuizPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        
        <Route path='/login' element={ <LoginPage/>}/>
        <Route path='/register' element={ <RegisterPage/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
        <Route path='/create-exam' element={ <CreateExam/>}/>
        <Route path='/view-exam' element={ <ViewExam/>}/>
        <Route path='/update-exam/:eid' element={ <UpdateExam/>}/>
        <Route path='/delete-exam/:eid' element={ <DeleteExam/>}/>
        <Route path='/exam-dashboard' element={ <ExamDashboard/>}/>
        <Route path='/add-question/:eid' element={ <AddQuestion/>}/>
        <Route path='/view-questions' element={ <ViewQuestions/>}/>
        <Route path='/question-dashboard/:eid' element={ <QuestionDashboard/>}/>
        <Route path='/update-question/:qid/:eid' element={ <UpdateQuestion/>}/>
        <Route path='/delete-question/:qid' element={ <DeleteQuestion/>}/>
        <Route path='/' element={ <QuizPage/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>

  );
}

export default App;
