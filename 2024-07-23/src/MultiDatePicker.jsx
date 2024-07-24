import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const MultiDatePicker = ( {setSelectedDates, selectedDates} ) => {

  const handleDayClick = (day, { selected }) => {
    const newSelectedDates = selected
      ? selectedDates.filter(selectedDay => !selectedDay.isSameDay(day))
      : [...selectedDates, day];
    setSelectedDates(newSelectedDates);
  };

  return (
    <div>
      <DayPicker
        mode="multiple"
        selected={selectedDates}
        onDayClick={handleDayClick}
      />
      <div>
        <h3>Selected Dates:</h3>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiDatePicker;

// Helper function to compare dates without time
Date.prototype.isSameDay = function (other) {
  return (
    this.getFullYear() === other.getFullYear() &&
    this.getMonth() === other.getMonth() &&
    this.getDate() === other.getDate()
  );
};
