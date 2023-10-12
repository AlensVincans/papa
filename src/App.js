import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Registration from "./pages/registration/Registration";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className='container content'>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/registration' element={<Registration />} />
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
