import styles from "./styles.module.scss";

import { ReactComponent as ListIcon } from "../../assets/clipboard.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import { useState } from "react";
import { CheckBox } from "../CheckBox";

interface TaskListProps {
  dataList: Tasks[];
  updateCheckItem: (newList: Tasks[]) => void;
}

type Tasks = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export function TaskList({ dataList, updateCheckItem, ...props }: TaskListProps) {
  const [completedCount, setCompletedCount] = useState(0);

  function handleChangeCheck(id: string) {
    const newList = dataList.map((tasks) => {
      if (id === tasks.id) {
        tasks.isCompleted = !tasks.isCompleted;
      }
      return tasks;
    });
    updateCheckItem(newList);
    completeTasks();
  }

  function completeTasks() {
    const completedTasksCount = dataList.filter((task) => {
      return task.isCompleted;
    });

    setCompletedCount(completedTasksCount.length);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.completeTasks}>
          <span>Tarefas criadas</span>
          <span>{dataList.length}</span>
        </div>
        <div className={styles.completed}>
          <span>Concluídas</span>
          <span>{`${completedCount} de ${dataList.length}`}</span>
        </div>
      </header>
      <main>
        {false ? (
          <div className={styles.emptyContent}>
            <ListIcon />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className={styles.taskList}>
            {dataList.map((task) => {
              return (
                <div key={task.id} className={styles.taskElementContent}>
                  <CheckBox
                    checked={task.isCompleted}
                    onChange={() => handleChangeCheck(task.id)}
                  />
                  <p
                    className={
                      task.isCompleted ? styles.checkboxMarkup : "none"
                    }
                  >
                    {task.task}
                  </p>
                  <TrashIcon />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
