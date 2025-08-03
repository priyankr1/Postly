
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage'
import { useChange } from './context/StateProvider';
import LogHomePage from './Pages/LogHomePage';
import UserProfile from './Pages/UserProfile';
import AddPost from './Pages/AddPost';
import Profile from './Pages/Profile';
import Header from './Component/Header';


function App() {
  const {user}=useChange();
  return (
    <div className='App'>
    
    <Routes>
    <Route path="/" element={!user?<Homepage/>:<LogHomePage/>}/>
    <Route path="/me" element={<UserProfile/>}/>
    <Route path='/add-post' element={!user?<Homepage/>:<AddPost/>}/>
    <Route path="/profile/:id" element={<Profile/>} />

    </Routes>
    </div>
  );
}

export default App;
