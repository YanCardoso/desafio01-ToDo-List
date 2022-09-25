import styles from "./styles.module.scss";

import { ReactComponent as ListIcon } from "../../assets/clipboard.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import { useState } from "react";
import { datalist } from "../../data/datalistfake";
import { CheckBox } from "../CheckBox";

export function TaskList() {
  const [tasksList, setTaskList] = useState(datalist);

  function handleChangeCheck(id: string) {
    const newList = tasksList.map((tasks) => {
      if (id === tasks.id) {
        tasks.isCompleted = !tasks.isCompleted;
      }
      return tasks;
    });
    setTaskList(newList);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.completeTasks}>
          <span>Tarefas criadas</span>
          <span>4</span>
        </div>
        <div className={styles.completed}>
          <span>Concluídas</span>
          <span>2</span>
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
            {datalist.map((task) => {
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
