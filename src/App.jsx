import React from "react";
import "./App.css"
// import { getDatabase, set, ref } from "firebase/database";
// import { app } from "./firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebase";
import Signup from "./Pages/Signup ";
import Signin from "./Pages/Signin";


// // const db = getDatabase(app);
// const auth = getAuth(app);

function App() {                          
//   const signupUser = () => {
//     createUserWithEmailAndPassword(
//       auth,
//       "abdullahqaisar@gmail.com",
//       "Abdulaman31@"
//     ).then((value) => console.log(value));
//   };

  // const putData = () => {
  //   set(ref(db, "users/Abdula"), {
  //     id: 1,
  //     name: "Abdula",
  //     age: 31,
  //   });
  // };
  return (
    <>
      <div className="App">
        <h1>FireBase</h1>
      <Signup/>
      <Signin/>
      </div>
    </>
  );
}

export default App;
