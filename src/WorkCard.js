import "./styles/WorkCard.css";

const WorkCard = ({ data }) => {
  const title = data.subject;
  const subtitle = data.date_due;
  const type = getParsedWorkType(data.type);
  const indicatorText = getIndicatorText(type);

  return (
    <div className="wrapper">
      <div className={"indicator " + type}>
        <p>{indicatorText}</p>
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

function getParsedWorkType(type) {
  switch (type) {
    case "Assignment":
      return "assignment";
    case "Experiment":
      return "experiment";
    case "Quiz":
      return "quiz";
    default:
      return "other";
  }
}

function getIndicatorText(type) {
  switch (type) {
    case "assignment":
      return "A";
    case "experiment":
      return "E";
    case "quiz":
      return "Q";
    default:
      return "O";
  }
}

export default WorkCard;
