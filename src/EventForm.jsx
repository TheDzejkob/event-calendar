import './App.css';
import { useState } from 'react';

function EventForm({addEvent}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date.trim() || !nazev.trim() || !time.trim() || !obsah.trim()) return;
    addEvent(nazev, date, time, obsah);
  };

    const [date, setDate] = useState("");
    const onDateChange = e => {
      console.log("onNativeChange: ", e.target.value);
      setDate(e.target.value);
    };

    const [nazev, setNazev] = useState("");
    const onNazevChange = e => {
      console.log("onNativeChange: ", e.target.value);
      setNazev(e.target.value);
    };

    const [time, setTime] = useState("");
    const onTimeChange = e => {
      console.log("onNativeChange: ", e.target.value);
      setTime(e.target.value);
    };

    const [obsah, setObsah] = useState("");
    const onObsahChange = e => {
      console.log("onNativeChange: ", e.target.value);
      setObsah(e.target.value);
    };


  return (
    <form onSubmit={handleSubmit}>
     <input type='text' value={nazev} onChange={onNazevChange} placeholder='Nazev poznamky'></input>
     <input type='date' value={date} onChange={onDateChange}></input>
     <input type='time' value={time} onChange={onTimeChange} ></input>
     <input type='text' value={obsah} onChange={onObsahChange} placeholder='Obsah poznaky'></input>
     <button type='submit' >Pridat poznamku</button>
    </form>
  );
}

export default EventForm;
