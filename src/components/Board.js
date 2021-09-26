import { useState } from 'react';
import WorkCard from './WorkCard';
import Modal from './Modal';
import './styles/Board.css';

const Board = ({ name, date, workData, showDateOnCards = false }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModelData] = useState({});

    return (
        <div className="board">
            {date && <h1 className="board-date">{date}</h1>}
            <h2 className="board-title">{name}</h2>
            <div className="board-list">
                {workData.map(work => {
                    return (
                        <WorkCard
                            key={work.id}
                            data={work}
                            onCardClick={() => {
                                setModelData(work);
                                setIsModalOpen(true);
                            }}
                            showSubtitle={showDateOnCards}
                        />
                    );
                })}
            </div>
            <Modal
                data={modalData}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Board;
