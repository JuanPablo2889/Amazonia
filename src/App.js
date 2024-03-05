import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Acceder con email y contraseña</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Acceder</button>
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}

export default App;