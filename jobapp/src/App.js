import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import Work from "./components/Work";
import NavbarHome from "./components/Navbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { loginuser, logoutuser, selectUser } from "./components/userSlice";
import { auth } from "./firebase";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  // console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // console.log(userAuth)
      if (userAuth) {
        //already login
        dispatch(
          loginuser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //logout
        dispatch(logoutuser());
      }
    });
  }, []);

  return (
    <>
      {/* <NavbarHome/>  */}

      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/Work" element={<Work />} />
            <Route exact path="/Jobs" element={<Jobs />} />
            <Route exact path="/Apply" element={<Apply />} />
            <Route exact path="/Blog" element={<Blog />} />
          </Routes>
          <Footer /> 
        </div>
      )}
    </>
  );
}

export default App;
