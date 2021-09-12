import CourseWorkList from './CourseWorkList';
import './styles/Board.css';

const Board = ({ name, date, workData }) => {
    return (
        <div className="board">
            {date && <h1 className="board-date">{date}</h1>}
            <h2 className="board-title">{name}</h2>
            <div className="board-list">
                <CourseWorkList data={workData} />
            </div>
        </div>
    );
};

export default Board;
