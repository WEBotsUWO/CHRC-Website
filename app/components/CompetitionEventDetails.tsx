import { competition2027 } from "../site";

export function CompetitionEventDetails() {
  return (
    <div className="event-heading">
      <p className="event-heading-date">
        <time dateTime={competition2027.dateTime}>{competition2027.date}</time>
        {" · "}
        <span>{competition2027.venue}</span>
      </p>
      <p className="event-heading-hours">
        {competition2027.hours}{" · "}{competition2027.hoursNote}
      </p>
    </div>
  );
}
