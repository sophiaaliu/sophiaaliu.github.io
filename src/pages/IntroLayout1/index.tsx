import cls from "classnames";
import styles from "./index.module.css";
import { NameBox } from "../../components/NameBox";
import { Dropdown } from "../../components/Dropdown";
import { DO_OPTIONS, ROLE_OPTIONS } from "../../lib/constants";
import { useWindowSize } from "../../lib/hooks";

export const IntroLayout1 = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className={cls(styles.prompt, styles.bluePrompt)}>
        Hello! My name is...
      </div>
      <div className={styles.row}>
        <NameBox name="Sophia" className={cls(styles.name)} />
        <NameBox name="Liu" className={styles.name} />
      </div>
      <div className={cls(styles.row, styles.lastRow)}>
        <div className={cls(styles.role, styles.leftColumn)}>
          <div className={cls(styles.prompt)}>I am a...</div>
          <Dropdown
            options={ROLE_OPTIONS}
            wrapperClassName={cls(styles.dropdown)}
            selectedClassName={cls(styles.dropdownSelected, styles.orange)}
            optionsClassName={cls(styles.dropdownOptions, styles.orange)}
            optionClassName={cls(styles.dropdownOption, styles.orange)}
            arrowColor="rgba(255, 92, 4, 1)"
          />
        </div>
        <div className={styles.do}>
          <div className={cls(styles.prompt)}>who...</div>
          <Dropdown
            options={DO_OPTIONS}
            wrapperClassName={cls(styles.dropdown)}
            selectedClassName={cls(styles.dropdownSelected, styles.purple)}
            optionsClassName={cls(styles.dropdownOptions, styles.purple)}
            optionClassName={cls(styles.dropdownOption, styles.purple)}
            arrowColor="rgba(164, 0, 234, 1)"
          />
        </div>
      </div>
    </>
  );
};
