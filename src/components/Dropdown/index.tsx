import cls from "classnames";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "./icons/ArrowDown";

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  wrapperClassName?: string;
  selectedClassName?: string;
  optionsClassName?: string;
  optionClassName?: string;
  arrowColor: string;
  options: DropdownOption[];
  size?: "default" | "large" | "small" | "smallVertical";
  dropdownZIndex?: number;
};

const getDisplayedOptions = (
  options: DropdownOption[],
  selectedOption: DropdownOption,
) => {
  const displayedOptions = [];
  for (const option of options) {
    if (option.value !== selectedOption.value) displayedOptions.push(option);
  }
  return displayedOptions;
};

export const Dropdown = (props: DropdownProps) => {
  const {
    wrapperClassName,
    selectedClassName,
    optionsClassName,
    optionClassName,
    arrowColor,
    options: propOptions,
    size = "default",
    dropdownZIndex = 0,
  } = props ?? {};
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    propOptions[0],
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const displayedOptions = getDisplayedOptions(propOptions, selectedOption);
  const selectedRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !selectedRef.current?.contains(e.target as any) &&
      !dropdownRef.current?.contains(e.target as any)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={cls(styles.dropdown, wrapperClassName)}>
      <div
        className={cls(styles.selected, selectedClassName, {
          [styles.isDropdownOpen]: isDropdownOpen,
        })}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        ref={selectedRef}
      >
        <div className={styles.label}>{selectedOption.label}</div>
        <ArrowDown
          color={arrowColor}
          className={cls(styles.arrow, {
            [styles.inverted]: isDropdownOpen,
          })}
        />
        {isDropdownOpen && (
          <div
            className={cls(styles.options, optionsClassName)}
            ref={dropdownRef}
            style={{ zIndex: dropdownZIndex }}
          >
            {displayedOptions.map(({ label, value }) => (
              <div
                className={cls(styles.option, optionClassName)}
                onClick={() => {
                  setSelectedOption({ label, value });
                  setIsDropdownOpen(false);
                }}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
