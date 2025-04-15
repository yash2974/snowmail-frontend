import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/usercontext";
import { AuthModeProvider } from "./contexts/authmodecontext";

import Login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import About from "./components/about";
import NotFound from "./components/notfound";
import Home from "./components/home";
import ProtectedRoute from "./firebase/protectedroute";
import Profile from "./components/profile";
import Contact from "./components/contact";
import EmailSender from "./components/mailer";  // Import the mailer component

function App() {
  return (
    <AuthModeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<EmailSender />} />  {/* Added route for Services */}
            <Route 
              path='/profile' 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthModeProvider>
  );
}

export default App;