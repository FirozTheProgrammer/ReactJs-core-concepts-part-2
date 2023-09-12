import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }),
    [];

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
      }}
    >
      <h3>Users: {user.length}</h3>
      {user.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div
      style={{
        border: "2px solid orange",
        padding: "10px",
        margin: "20px 10px",
      }}
    >
      <h3>Name: {name} </h3>
      <h4>Email: {email}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
}
