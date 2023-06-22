import React, { useState } from "react";

const Form = () => {
  let [name, setName] = useState("");
  let [pwd, setPwd] = useState("");
  let [error, seterror] = useState({});
  console.log(name, pwd);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    return console.log("submitted");
  };

  function validate() {
    let err = {};
    if (!name || !pwd) {
      err.name = "Both username and password are required.";
      seterror(err);
    } else {
      seterror({});
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="pwd">Password:</label>

        <input
          type="password"
          name=""
          id="pwd"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <br />

        <button type="submit">Submit</button>
        <p>{error.name}</p>
      </form>
    </div>
  );
};

export default Form;
