import  { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Comment } from "./component/Comment";
import { Login } from "./component/Login";
import { Thankyou } from "./component/Thankyou";


function App() {
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
const onChangeC = (text:string) => {
  setComments(text)
}
const onChangeE = (email:string)=>{
  setEmail(email)
}
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/comment" element={<Comment onChangeC={onChangeC} onChangeE={onChangeE}  />} />
        <Route path="/thankyou" element={<Thankyou comment = {comments} email={email} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
