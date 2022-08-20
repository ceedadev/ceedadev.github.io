export default function SkillItem(props) {
  return (
    <div
      class="block p-8 transition border-2 border-teal-500 dark:border-teal-500 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10"
      href=""
    >
      <img className="w-10 h-10" src={props.img} alt={props.title} />
      <div className="flex items-baseline mb-2">
        <h3 class="mt-2 text-xl font-bold ">{props.title}</h3>
        <p className="align-text-bottom flex-1 text-right italic text-gray-600 text-sm font-bold dark:text-white">
          {props.level}
        </p>
      </div>
      <hr />
      <p class="mt-1 text-sm ">{props.description}</p>
    </div>
  );
}
