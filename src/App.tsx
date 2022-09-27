import { useState } from "react";
import styles from "./App.module.scss";
import { ReactComponent as LogoReact } from "./assets/logo.svg";
import { InputBar } from "./components/InputBar";
import { TaskList } from "./components/TaskList";
import "./styles/global.scss";

type Tasks = {
  id: string;
  task: string;
  isCompleted: boolean;
};

function App() {
  const [tasksList, setTaskList] = useState<Tasks[]>([]);

  function updateCheckItem(checkedList: Array<Tasks>) {
    setTaskList(checkedList);
  }

  function addNewItemTask(listItem: Tasks) {
    const updatedList = [...tasksList, listItem];
    setTaskList(updatedList);
  }

  return (
    <>
      <header className={styles.container}>
        <LogoReact className={styles.logo} />
      </header>
      <main className={styles.main}>
        <div className={styles.contentMain}>
          <InputBar addNewItemTask={addNewItemTask} />
          <TaskList dataList={tasksList} updateCheckItem={updateCheckItem} />
        </div>
      </main>
    </>
  );
}

export default App;
