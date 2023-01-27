import {
  json /* , useParams */ /* , useLoaderData */,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  /* const params = useParams(); */
  /* const data = useLoaderData(); */
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const eventID = params.eventID; //eventID je parametar iz App.js
  const response = await fetch("http://localhost:8080/events/" + eventID);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};
