'use client';

import { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingCalendarProps {
  onDateTimeSelect: (date: Date, time: string) => void;
  selectedPackage: { name: string; price: string; sessions: number } | null;
}

export default function BookingCalendar({ onDateTimeSelect, selectedPackage }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate time slots (9 AM to 6 PM)
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date >= today) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onDateTimeSelect(selectedDate, time);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Create calendar grid
  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-12"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={isDateDisabled(day)}
        className={`h-12 rounded-lg flex items-center justify-center font-medium transition-all duration-200 ${
          isDateDisabled(day)
            ? 'text-gray-300 cursor-not-allowed'
            : isDateSelected(day)
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
            : 'hover:bg-blue-50 text-gray-700'
        }`}
      >
        {day}
      </button>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <Calendar className="mx-auto mb-4 text-blue-600" size={48} />
        <p className="text-gray-700">Please select a package first to view available dates</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Select Date & Time</h3>
      
      {/* Calendar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h4 className="text-xl font-bold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h4>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div>
          <div className="flex items-center mb-4">
            <Clock className="text-blue-600 mr-2" size={20} />
            <h4 className="text-lg font-bold text-gray-900">Available Time Slots</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTime === time
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <p className="text-green-800 font-semibold">
            ✓ Selected: {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
}

