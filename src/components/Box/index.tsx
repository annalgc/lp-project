import React from "react";
import styles from "./styles.module.css";

interface IBox {
  children: React.ReactNode
}

export const Box: React.FC<IBox> = ({ children }) => {
  return (
    <div className={styles['box-container']}>
      {children}
    </div>
  );
}