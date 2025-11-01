
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Itemtable from './components/Itemtable'
import Statistics from './components/Statistics'
import Layout from './Layout'
import Login from './pages/Login'
import Protectedroutes from './pages/ProtectedRoutes'
import Loader from './components/Loading'
import { Toaster } from 'react-hot-toast'
import Register from './pages/Register'
import Setupcard from './pages/Setup'

function App() {
 
  return (
    <>
     <Toaster position="top-center"
         reverseOrder={false}/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/setup" element={<Setupcard/>}/>
      <Route 
       path="/setup"
       element={<Protectedroutes>
         <Setupcard/>
       </Protectedroutes>
       }
       ></Route>
      <Route
       path="/dashboard"
       element={<Protectedroutes>
        <Layout/>
       </Protectedroutes>}
      >
      <Route index element={<Dashboard/>}/>
      <Route path="data" element={<Itemtable/>}/>
      <Route path="statistics" element={<Statistics/>}/>
      <Route path="assistant" element={<Loader/>}/>
      </Route>
      <Route path="/" element={<Login/>}/>
      
    </Routes>
    </>
  )
}

export default App
