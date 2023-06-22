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
      setName("");
      setPwd("");
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
          value={name}
        />
        <br />
        <label htmlFor="pwd">Password:</label>

        <input
          type="password"
          value={pwd}
          id="pwd"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <br />
        <p id="errorMessage">{error.name}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
