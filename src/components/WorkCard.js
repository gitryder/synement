import './styles/WorkCard.css';

const WorkCard = ({ data, onCardClick, showSubtitle }) => {
    const title = data.subject;
    const subtitle = data.date_due;
    const type = getParsedWorkType(data.type);

    return (
        <div className="wrapper" onClick={onCardClick}>
            <div className={`indicator ${type.long}`}>
                <p>{type.short}</p>
            </div>
            <div className="details">
                <p className="title">{title}</p>
                {showSubtitle && <p className="subtitle">{subtitle}</p>}
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
