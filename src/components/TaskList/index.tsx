import styles from "./styles.module.scss";
import { ReactComponent as ListIcon } from "../../assets/clipboard.svg";

export function TaskList() {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <span>Tarefas criadas</span>
          <span>4</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>2</span>
        </div>
      </header>
      <main>
        <div className={styles.emptyContent}>
          <ListIcon />
          <span>Você ainda não tem tarefas cadastradas</span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </div>
  );
}
