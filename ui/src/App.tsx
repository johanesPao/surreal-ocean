import rute from "./rute";
import { useRoutes } from "react-router-dom";

const App = () => {
  const konten = useRoutes(rute);
  return konten;
};
export default App;
