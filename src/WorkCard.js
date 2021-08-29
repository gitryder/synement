import "./styles/WorkCard.css"

const WorkCard = ({ data }) => {
    const title = data.subject;
    const subtitle = data.date_due;
    const type = data.type.toLowerCase();

    return (
        <div className="wrapper">
            <div className={"indicator " + type}></div>
            <div className="details">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
        </div>
    );
}

export default WorkCard;