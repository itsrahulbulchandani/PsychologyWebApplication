'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingCalendarProps {
  onDateTimeSelect: (date: Date, time: string) => void;
  selectedPackage: { name: string; price: string; sessions: number } | null;
}

export default function BookingCalendar({ onDateTimeSelect, selectedPackage }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  // Generate time slots (11 AM to 8 PM)
  const timeSlots = [
    '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  // Fetch booked slots for the current month
  useEffect(() => {
    const fetchBookedSlots = async () => {
      setLoading(true);
      try {
        const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
        
        const response = await fetch(
          `/api/availability?startDate=${startOfMonth.toISOString()}&endDate=${endOfMonth.toISOString()}`
        );
        
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.events) {
            const booked = new Set<string>();
            
            // For each event, mark all hourly slots that overlap with it
            data.events.forEach((event: any) => {
              if (event.start?.dateTime && event.end?.dateTime) {
                const eventStart = new Date(event.start.dateTime);
                const eventEnd = new Date(event.end.dateTime);
                
                // Check each hour from 11 AM to 8 PM
                for (let hour = 11; hour <= 20; hour++) {
                  const slotStart = new Date(eventStart);
                  slotStart.setHours(hour, 0, 0, 0);
                  const slotEnd = new Date(slotStart);
                  slotEnd.setMinutes(50); // 50-minute session
                  
                  // Check if this slot overlaps with the event
                  if (slotStart < eventEnd && slotEnd > eventStart) {
                    const slotKey = `${slotStart.getFullYear()}-${slotStart.getMonth()}-${slotStart.getDate()}-${hour}`;
                    booked.add(slotKey);
                  }
                }
              }
            });
            setBookedSlots(booked);
          }
        }
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookedSlots();
  }, [currentMonth]);

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

  const isTimeSlotBooked = (date: Date, time: string) => {
    const [timeStr, period] = time.split(' ');
    let [hours] = timeStr.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    const slotKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${hours}`;
    return bookedSlots.has(slotKey);
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
        className={`h-12 rounded-full flex items-center justify-center text-sm transition-colors duration-200 ${
          isDateDisabled(day)
            ? 'text-ink/20 cursor-not-allowed'
            : isDateSelected(day)
            ? 'bg-pine text-cream'
            : 'hover:bg-sage-pale text-ink'
        }`}
      >
        {day}
      </button>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="bg-sage-pale border border-ink/10 rounded-xl p-8 text-center">
        <Calendar className="mx-auto mb-4 text-pine" size={40} />
        <p className="text-ink-soft">Please select a package first to view available dates</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-ink/15 rounded-xl p-6 sm:p-8">
      
      {/* Calendar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            className="p-2 rounded-full hover:bg-sage-pale transition-colors text-ink"
            aria-label="Previous month"
          >
            <ChevronLeft size={22} />
          </button>
          <h4 className="font-display text-xl text-ink">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h4>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-sage-pale transition-colors text-ink"
            aria-label="Next month"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-[11px] uppercase tracking-[0.12em] font-semibold text-ink-soft">
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
          <div className="flex items-center mb-4 border-t border-ink/10 pt-6">
            <Clock className="text-pine mr-2" size={18} />
            <h4 className="font-display text-lg text-ink">Available time slots</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {timeSlots.map((time) => {
              const isBooked = selectedDate && isTimeSlotBooked(selectedDate, time);
              return (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  disabled={isBooked}
                  className={`px-4 py-3 rounded-full text-sm transition-colors duration-200 border ${
                    selectedTime === time
                      ? 'bg-pine text-cream border-pine'
                      : isBooked
                      ? 'bg-cream-deep text-ink/30 border-ink/10 cursor-not-allowed line-through'
                      : 'bg-white text-ink border-ink/15 hover:border-pine/60'
                  }`}
                >
                  {isBooked ? 'Booked' : time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-sage-pale rounded-lg border border-pine/30">
          <p className="text-pine-dark text-sm font-medium">
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

