import styles from "./App.module.scss";
import { ReactComponent as LogoReact } from "./assets/logo.svg";
import { SearchBar } from "./components/SearchBar";
import { TaskList } from "./components/TaskList";
import "./styles/global.scss";


function App() {
  return (
    <>
      <header className={styles.container}>
        <LogoReact className={styles.logo} />
      </header>
      <main className={styles.main}>
        <div className={styles.contentMain}>
          <SearchBar />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
