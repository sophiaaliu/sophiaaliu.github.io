import cls from "classnames";
import styles from "./index.module.css";

export type NameBoxProps = {
  name: string;
  className?: string;
};

export const NameBox = (props: NameBoxProps) => {
  const { name, className } = props ?? {};

  return <div className={cls(styles.name, className)}>{name}</div>;
};
