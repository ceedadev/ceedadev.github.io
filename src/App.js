import { Flowbite } from "flowbite-react";

import "./App.css";

import NavigationBar from "./components/Navigation";
import SkillPage from "./pages/SkillPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from "./pages/FooterPage";

function App() {
  return (
    <Flowbite>
      <NavigationBar />
      <div className="dark:bg-gray-800">
        <h1>Hello World</h1>
      </div>
      <SkillPage />
      <ContactPage />
      <FooterPage />
    </Flowbite>
  );
}

export default App;
