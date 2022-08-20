// import { Card, Button } from "flowbite-react";

export default function SkillCard(props) {
  return (
    <div className=" dark:bg-gray-600">
      <div className="p-4 flex flex-col border shadow-sm rounded-md">
        <span className="flex gap-2">
          <img
            src={props.img}
            alt="logo"
            width={32}
            height={32}
            className="object-contain h-8 w-8"
          />
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white align-text-bottom">
            {props.skill}
          </h5>
        </span>
        <hr className="my-2" />
        <p className="flex-1 text-gray-700 dark:text-white">
          {props.description}
        </p>
      </div>
    </div>
  );
}
