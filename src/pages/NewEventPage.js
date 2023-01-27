import { json } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  // params uzimamo kada imamo već podatke (a tu nemamo pošto tek stvaramo novi objekt)
  // a request nam je zahtjev koji šaljemo našoj bazi da spremi novi objekt u bazu
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log("tu sam");
  console.log(eventData);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }
};
