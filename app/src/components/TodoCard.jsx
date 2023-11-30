import Button from "./ui/Button";

export default function TodoCard({ task, moveToInProgress, moveToDone }){
    const handleMoveToInProgress = () => {
      if (moveToInProgress) {
        moveToInProgress(task._id);
      }
    };
  
    const handleMoveToDone = () => {
      if (moveToDone) {
        moveToDone(task._id);
      }
    };
  
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        marginTop: '1rem',
        padding: '5px',
        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
      }}>
        <p style={{
          fontSize: '1.2rem',
          fontWeight: 'medium',
          color: 'black',
        }}>{task.title}</p>
        <p style={{
          color: 'gray',
        }}>{task.description}</p>
        {task.status === 'TODO' && (
         <Button text="Move to In Progress" handleClick={handleMoveToInProgress} />
        )}
        {task.status === 'IN-PROGRESS' && (
          <Button text="Move to Done" handleClick={handleMoveToDone} />
        )}
      </div>
    );
  };