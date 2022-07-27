import React from "react";
import ReactDOM from "react-dom/client";
// import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App.jsx";
import EventDashboard from "./features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "./features/events/eventDetailed/EventDetailedPage";
import EventForm from "./features/events/eventForm/EventForm";
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";

// const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/events' element={<EventDashboard/>} />
      <Route path='/events/:id' element={<EventDetailedPage/>} />
      <Route path='/createEvent' element={<EventForm/>} />
    </Routes>
  </BrowserRouter>
);


// if (module.hot) {
//   module.hot.accept("./app/layout/App", function () {
//     setTimeout(render);
//   });
// }

// render();
