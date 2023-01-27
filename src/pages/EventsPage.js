import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();

  /*  if (data.isError) {
    return <p>{data.message}</p>;
  } */
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export const loader = async () => {
  //localStorage..cookies...
  //CANT USE HOOKS IN loader
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    /*  return { isError: true, message: "Could not fetch events." }; */
    /*  throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    }); */
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    /*  const resData = await response.json();
    return resData.events; */
    return response;
  }
};

/* import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "event-1",
    title: "Concert",
  },
  {
    id: "event-2",
    title: "Football match",
  },
  {
    id: "event-3",
    title: "Stand-up comedy",
  },
  {
    id: "event-4",
    title: "Knowledge quiz",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>This is page where you can find every events!</h1>
      <p>Search for some...</p>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
 */
