import './App.css';

function Event({ event, deleteEvent }) {
  return (
    <div className="event">
      <p>{event.nazev}</p>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.obsah}</p>
      <button onClick={() => deleteEvent(event.id)}>Odebrat poznamku</button>
    </div>
  );
}

export default Event;
