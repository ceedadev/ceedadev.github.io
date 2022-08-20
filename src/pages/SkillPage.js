import SkillItem from "../components/SkillItem";

import reactIcon from "../img/reactjs.svg";
import flutterIcon from "../img/flutter.svg";
import nextIcon from "../img/next.svg";
import tailwindIcon from "../img/tailwind.svg";

export default function SkillPage(props) {
  const SKILL_DATA = [
    {
      title: "ReactJS",
      description:
        "React is the ultimate library for front-end developers today.",
      img: reactIcon,
      level: "Beginner",
    },
    {
      title: "Flutter",
      description:
        "Flutter is one of the best solutions to develop apps for Android and iOS, without having to write in a different codebase for each platform.",
      img: flutterIcon,
      level: "Intermediate",
    },
    {
      title: "Tailwind CSS",
      description:
        "Utility First CSS Framework. Better developer experience in dealing with CSS, IMO.",
      img: tailwindIcon,
      level: "Beginner",
    },
    {
      title: "NextJS",
      description: "React framework for Full Stack Application.",
      img: nextIcon,
      level: "Beginner",
    },
  ];

  return (
    <section class="dark:text-white dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">My Skills</h2>

          <p class="mt-4 dark:text-gray-300">
            Here is the tech stack that i have learned. My beginning of
            programming journey start from Python, where i built web scraping
            because of things. Being curious, i learned more programming
            languages and keen to become FullStack Developer.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_DATA.map((skill) => {
            return (
              <SkillItem
                title={skill.title}
                description={skill.description}
                img={skill.img}
                level={skill.level}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
