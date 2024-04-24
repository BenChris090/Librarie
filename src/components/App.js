import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Book from './Book'
import About from './About';
import Dashboard from './Dashboard';
import AuthPage from './UserAuth';
import AdminDash from './AdminDash';
import AdminAuth from './AdminAuth';
import Four0Four from './404';


function App() {
  return (
    <Router>
      <div className="App h-full">
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/our-work' element={<OurWork/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/get-involved' element={<Get_Involved/>}/> */}
            <Route path='/books-page' element={<Books/>}/>
            <Route path='/books/:id' element={<Book/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/dashboard/:displayName' element={<Dashboard/>}/>
            <Route path='/user-auth' element={<AuthPage/>}/>
            <Route path='/admin-dash' element={<AdminDash/>}/>
            <Route path='/admin-auth' element={<AdminAuth/>}/>
            <Route path='/404' element={<Four0Four/>}/>
          	<Route path="*" element={<Navigate to="/404" />}/>
          </Routes>
        </div>        
      </div>
    </Router>
  );
}

export default App;
 