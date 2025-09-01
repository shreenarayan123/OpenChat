import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const initilizeChatBot = ({
  initialFirstMessage = "How Can i Help ?",
  token,
  initiatorId
}: {
  initialFirstMessage?: string;
  token?: string;
  initiatorId?:string
}) => {
  const container = document.createElement("div");
  container.id = "chat-modal-container";
  document.body.appendChild(container);
  ReactDOM.createRoot(container).render(
    <App initiatorId={initiatorId} initialFirstMessage={initialFirstMessage} token={token} />
  );
};

declare global {
  interface Window {
    initilizeChatBot: typeof initilizeChatBot;
  }
}

window.initilizeChatBot = initilizeChatBot;

// comment next before building the application
// initilizeChatBot({initiato5u n rId:"intiator"});