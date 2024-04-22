import './App.css';
import EventForm from './EventForm';
import EventList from './EventList';
import { useState } from 'react';

function App() {

  const [events, setEvents] = useState([]);

  const addEvent = (nazev, date, time, obsah) => {
    const newEvent = {
      id: Date.now(),
      nazev: nazev,
      date: date,
      time: time,
      obsah: obsah
    };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="App">
      <h1>Event Appka</h1>
     <EventForm addEvent={addEvent}/>
     <EventList events={events} deleteEvent={deleteEvent} />

    </div>
  );
}

export default App;
