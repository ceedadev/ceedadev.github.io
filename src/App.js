import { Flowbite } from "flowbite-react";

import "./App.css";

import NavigationBar from "./components/Navigation";
import SkillPage from "./pages/SkillPage";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <Flowbite>
      <NavigationBar />
      <div className="dark:bg-gray-800">
        <h1>Hello World</h1>
      </div>
      <SkillPage />
      <FooterComponent />
    </Flowbite>
  );
}

export default App;
