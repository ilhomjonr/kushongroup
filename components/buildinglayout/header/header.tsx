import styles from "./header.module.css";

type Props = {
  translations: any;
};

export const Header = ({ translations }: Props) => {
  return (
    <header className={styles.header}>
      <div>Header</div>
    </header>
  );
};
