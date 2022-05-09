import { useSelector } from "react-redux";
import ToDo from "../ToDo";

const ToDoList = () => {
  const toDoDataList = useSelector((state) => state.toDo);

  return (
    <>
      <ul>
        {toDoDataList.map((item) => {
          return (
            <li key={item.id}>
              <ToDo todo={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
