import ReactDOM from "npm:react-dom/client";
import Home from "./Home.tsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<Home />);
}
