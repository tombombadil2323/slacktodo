import firebase from './firebase';

//gets data of user from database and sets state
const dataHandler = (user)=>{
    const rootRef = firebase.database().ref(`user/${user.uid}/tasks`);
    let taskArray = [];
    rootRef.on("value", snapshot => {
        let tasks = snapshot.val();
        for (let task in tasks){
            taskArray.push({
                id: task,
                task: tasks[task].task,
                step: tasks[task].step,
                priority: tasks[task].priority,
                dueDate: tasks[task].dueDate,
                state: tasks[task].state,
            });
        }
    });
    return taskArray;
}
export const deleteTaskButtonHandler = (taskId, user) =>{
    const taskRef = firebase.database().ref(`/user/${user.uid}/tasks/${taskId}`);
    taskRef.remove();
}
export default dataHandler;
