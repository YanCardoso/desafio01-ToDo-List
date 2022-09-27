import styles from "./styles.module.scss";

interface TrashButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export const TrashIconButton = ({...props}: TrashButtonProps) => (
  <button className={styles.container} {...props}>
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.202 9.985h-1.33v5.522h1.33V9.985ZM11.462 9.985h-1.33v5.522h1.33V9.985Z"
        fill="gray"
      />
      <path
        d="M18.478 7.167a.644.644 0 0 0-.46-.605.62.62 0 0 0-.184-.045h-3.547a2.144 2.144 0 0 0-4.1 0H6.638a.641.641 0 0 0-.172.027h-.015a.641.641 0 0 0 .09 1.246l.711 9.743A1.512 1.512 0 0 0 8.683 19h7.104a1.512 1.512 0 0 0 1.433-1.467l.708-9.734a.638.638 0 0 0 .55-.632Zm-6.242-.952a.937.937 0 0 1 .69.302h-1.379a.932.932 0 0 1 .69-.302Zm3.55 11.575H8.684c-.081 0-.208-.133-.223-.344L7.758 7.81h8.957l-.701 9.635c-.016.211-.143.344-.227.344Z"
        fill="gray"
      />
    </svg>
  </button>
);
