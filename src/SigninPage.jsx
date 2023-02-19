import "./styles.css";
import { useState } from "react";
import axios from "axios";

const SigninPage = () => {

const [user, setUser] = useState({
  firstName: "",
  lastName: "",
  age: 0
});

const onChangeSetUser = (event, id) => {
    setUser(prevUser => {
        return {
            ...prevUser,
            [id]: event.target.value
        }
    })
}

const sendPostRequest = () => {
    axios.post("https://63f21196f28929a9df530b80.mockapi.io/userData", user);
}

console.log(user)

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="first name"
        id="firstName"
        onChange={(e) => onChangeSetUser(e, "firstName")}
      />
      <input
        type="text"
        placeholder="last name"
        id="lastName"
        onChange={(e) => onChangeSetUser(e, "lastName")}
      />
      <input
        type="text"
        placeholder="age"
        id="age"
        onChange={(e) => onChangeSetUser(e, "age")}
      />
      <button onClick={sendPostRequest}>Sign In</button>
    </div>
  );
};

export default SigninPage;
