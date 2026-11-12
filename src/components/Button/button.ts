import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

/* clases de botón para usar en <Link>, <a> o <button> */
export const buttonClass = (
  variant: ButtonVariant = "primary",
  { small = false, className = "" }: { small?: boolean; className?: string } = {},
) =>
  [styles.btn, styles[variant], small && styles.small, className]
    .filter(Boolean)
    .join(" ");

export { styles as buttonStyles };
