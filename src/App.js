import { Flowbite } from "flowbite-react";

import "./App.css";
import FooterComponent from "./components/Footer";

import NavigationBar from "./components/Navigation";
import SkillCard from "./components/SkillCard";

import reactIcon from "./img/reactjs.svg";
import pythonIcon from "./img/python.svg";
import tailwindIcon from "./img/tailwind.svg";
import nextIcon from "./img/next.svg";

function App() {
  return (
    <Flowbite>
      <NavigationBar />
      <div className="dark:bg-gray-800">
        <h1>Hello World</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 p-4 gap-4 md:grid-cols-4 md:p-8  ">
        <SkillCard
          skill="React"
          description=" is a Front End Javascript Library"
          img={reactIcon}
        />
        <SkillCard
          skill="Python"
          description=" is a General, Beginner Friendly Programming Language"
          img={pythonIcon}
        />
        <SkillCard
          skill="Tailwind"
          description=" is a Utility First CSS Library"
          img={tailwindIcon}
        />
        <SkillCard
          skill="Next"
          description=" is a Fullstact Javascript Library ready for production"
          img={nextIcon}
        />
      </div>
      <FooterComponent />
    </Flowbite>
  );
}

export default App;
