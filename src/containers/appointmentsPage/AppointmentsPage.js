import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointment,
}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  //calls a function that makes a new appointment array and clears the title, contact, date and time state.
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };
  //returns two components one for the form and one to display the appointments.
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
