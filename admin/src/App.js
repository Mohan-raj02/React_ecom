import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./pages/Products";
import Orders from "./pages/Order";
import UserDetails from "./pages/Details";
import Sidebar from './components/Sidebar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
		<Router>
			<div>
        {/* <ToastContainer theme='dark' position="top-center" autoClose={3000}/> */}
        
        {/* <ul>
            <li><Link to='/products'>products</Link></li>
            <li><Link to='/orders'>orders</Link></li>
            <li><Link to='/details'>details</Link></li>
        </ul> */}
				<Routes>
            <Route path="/" element={<Sidebar/>} /> 
            <Route path="/products" element={<Products/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/details" element={<UserDetails/>}/>
        </Routes>
			</div>
		</Router>
  );
}

export default App;
