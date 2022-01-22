const EventComponent: React.FC = () => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return <div>
    <input onChange={handleOnChange} />
  </div>
}

export default EventComponent;