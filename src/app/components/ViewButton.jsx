import classNames from "../js/classNames";

export default function ViewButton({
  currentView,
  setCurrentView,
  title,
  number,
  planet,
}) {
  let planetColor;

  switch (planet) {
    case "mercury":
      planetColor = "border-mercury bg-mercury";
      break;

    case "venus":
      planetColor = "border-venus bg-venus";
      break;

    case "earth":
      planetColor = "border-earth bg-earth";
      break;

    case "mars":
      planetColor = "border-mars bg-mars";
      break;

    case "jupiter":
      planetColor = "border-jupiter bg-jupiter";
      break;

    case "saturn":
      planetColor = "border-saturn bg-saturn";
      break;

    case "uranus":
      planetColor = "border-uranus bg-uranus";
      break;

    case "neptune":
      planetColor = "border-neptune bg-neptune";
      break;

    default:
      break;
  }

  return (
    <button
      onClick={() => setCurrentView(title)}
      className={classNames(
        currentView === title
          ? planetColor
          : "border-white bg-main-black hover:border-dark-gray hover:bg-dark-gray",
        "flex gap-8 border border-solid px-8 py-4 text-left font-spartan",
      )}
    >
      <span className="text-light-gray">{number}</span>
      <span className="text-sm font-semibold uppercase tracking-widest md:text-base lg:text-lg">
        {title}
      </span>
    </button>
  );
}
