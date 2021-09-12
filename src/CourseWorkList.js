import WorkCard from './WorkCard';

const CourseWorkList = ({ data }) => {
    return (
        <div>
            {data.map(work => {
                return <WorkCard key={work.id} data={work} />;
            })}
        </div>
    );
};

export default CourseWorkList;
