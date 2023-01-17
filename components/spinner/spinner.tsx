import styles from "./spinner.module.css";

type Props = {
  isLoading: any;
  color: string;
};

export const Spinner = ({ isLoading, color }: Props) => {
  return (
    <div
      className={
        isLoading ? `${styles.spinner} ${styles.show}` : styles.spinner
      }
    >
      <div className={styles.container}>
        <p style={{ color: color }} className={styles.text}>
          Kushon Group
        </p>
        <div className={styles.ldsEllipsis}>
          <div style={{ backgroundColor: color }}></div>
          <div style={{ backgroundColor: color }}></div>
          <div style={{ backgroundColor: color }}></div>
          <div style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};
