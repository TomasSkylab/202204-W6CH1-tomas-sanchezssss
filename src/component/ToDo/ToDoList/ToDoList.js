import toDoDataList from "../../../data/data";
import ToDo from "../ToDo";

const ToDoList = () => {
  return (
    <>
      <ul>
        {toDoDataList.map((item) => (
          <li key={item.id}>
            <ToDo toDo={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
