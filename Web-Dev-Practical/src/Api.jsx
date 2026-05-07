import React, { useEffect, useState } from "react";

function Api() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

  }, []);

  return (
    <div>

      <h2>User Data</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Api;