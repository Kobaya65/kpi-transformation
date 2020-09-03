import React from "react";

const LoginPage = () => {
  return (
    <form action="/login" method="post">
      <div>
        <label>Nom :</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
  );
};

export default LoginPage;
