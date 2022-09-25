import styles from "./styles.module.scss";

interface PropsCheckBox extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CheckBox({ ...props }: PropsCheckBox) {
  return (
    <div className={styles.container}>
      <input type="checkbox" {...props} />
    </div>
  );
}
