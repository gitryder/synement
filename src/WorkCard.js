import './styles/WorkCard.css';

const WorkCard = ({ data }) => {
    const title = data.subject;
    const subtitle = data.date_due;
    const type = getParsedWorkType(data.type);

    return (
        <div className="wrapper">
            <div className={`indicator ${type.long}`}>
                <p>{type.short}</p>
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
        case 'Assignment':
            return {
                long: 'assignment',
                short: 'A'
            };
        case 'Experiment':
            return {
                long: 'experiment',
                short: 'E'
            };
        case 'Quiz':
            return {
                long: 'quiz',
                short: 'Q'
            };
        default:
            return {
                long: 'other',
                short: 'O'
            };
    }
}

export default WorkCard;
