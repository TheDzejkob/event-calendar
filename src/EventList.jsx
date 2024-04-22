import './App.css';
import Event from './Event';


function EventList({events, deleteEvent}) {
  return (
    <div className="EventList">
       {events.map(event => (
        <Event key={event.id} event={event} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
}

export default EventList;