import React, { useState, useEffect } from 'react';

import styles from "./styles.module.css";

const Adminpanel = () => {
  const [users, setUsers] = useState([]);

  /* Fetch metoda za preuzimanje cijele liste korisnika */
  useEffect(() => {
    fetch('http://localhost:8080/api/listUsers')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);
  

  return (
    <div>
      <nav className={styles.navbar}>
				<h1>AdminPanel</h1>
			</nav>

      {/* Main tabela korisnika */}
      <div className="App">
        <h1>User List</h1>
          <table>
            <tr>
                <td>Ime</td>
                <td>Prezime</td>
                <td>Mail</td>
                <td>Uloga</td>
            </tr>
            {/* Ovdje izlistavamo sve korisnike */}
            {users.map(user => (
              <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.roles}</td>
              </tr>
            ))}
          </table>
      </div>
    </div>
  );
}

export default Adminpanel;