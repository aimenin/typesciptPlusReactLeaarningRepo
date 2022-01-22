import React from "react";

const EventComponent: React.FC = () => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.clientX);
  }

  return <div>
    <input onChange={handleOnChange} />
    <div draggable onDragStart={handleDragStart} style={{ cursor: 'grab' }}>Drag me</div>
  </div>
}

export default EventComponent;