function AddToGoogleCalendar({ event }) {
  const createGoogleCalendarUrl = () => {
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const params = new URLSearchParams({
      text: event.title,
      details: `Join us for a day of learning, networking, and celebrating open source innovation.`,
      location: event.room,
      dates: `${event.start}/${event.end}`, // format: YYYYMMDDTHHmmssZ
    });
    return `${base}&${params.toString()}`;
  };

  return (
    <a
      href={createGoogleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
    >
      Add to Calendar
    </a>
  );
}

export default AddToGoogleCalendar;
