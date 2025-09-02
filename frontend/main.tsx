import ReactDOM from "npm:react-dom/client";
import Index from "./routes/index.tsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<Index />);
}
