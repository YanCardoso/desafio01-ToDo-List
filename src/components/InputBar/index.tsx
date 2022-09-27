import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { useState } from "react";

interface TaskFormat {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface InputBarProps {
  addNewItemTask: (item: TaskFormat) => void;
}

export function InputBar({ addNewItemTask }: InputBarProps) {
  const [messageTask, setMessageTask] = useState('');

  function handleMessageCreate(e) {
    e.preventDefault;
    setMessageTask(e.target.value);
  }

  function handleTaskCreate() {
    const newTask = {
      id: uuidv4(),
      task: `${messageTask}`,
      isCompleted: false,
    };

    if (!messageTask) {
      return;
    }

    addNewItemTask(newTask);
    setMessageTask("");
  }

  return (
    <div className={styles.container}>
      <input type="text" value={messageTask} onChange={handleMessageCreate} />
      <button onClick={handleTaskCreate}>
        Criar
        <PlusIcon className={styles.plusIcon} />
      </button>
    </div>
  );
}
