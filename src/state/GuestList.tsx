import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleGuestAdd = () => {
    setName('');
    setGuests([...guests, name]);
  }

  return (
    <div>
      <h3>Guest List</h3>

      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleGuestAdd}>Add guest</button>
      <ul>
        {guests.map((guest, index) => {
          return (<li key={guest}>{guest}</li>)
        })}
      </ul>
    </div>
  );
};

export default GuestList;