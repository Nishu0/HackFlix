import React from "react";
import ReactDOMClient from "react-dom/client";
import { Hackflix } from "./screens/Hackflix";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Hackflix />);
