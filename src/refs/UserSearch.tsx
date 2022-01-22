import { useState, useRef } from 'react';

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 20},
  {name: 'Michel', age: 20},
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  const handleUserSearch = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);

    setName('');
  }

  return <div>
    <h1>User Seacrh</h1>
    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={handleUserSearch}>Find users</button>
    <h2>Founded user</h2>
    {
      user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : <p>User not found</p>
    }
  </div>
}

export default UserSearch;