import styles from "./styles.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";

export function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <button>
        Criar
        <PlusIcon className={styles.plusIcon} />
      </button>
    </div>
  );
}
