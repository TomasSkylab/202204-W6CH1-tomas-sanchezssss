import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoList from "./component/ToDo/ToDoList/ToDoList";
import toDoDataList from "./data/data";
import { loadToDoActionCreator } from "./redux/features/projects/projectsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDoActionCreator(toDoDataList));
  }, [dispatch]);

  return (
    <div>
      <ToDoList />
    </div>
  );
}

export default App;
