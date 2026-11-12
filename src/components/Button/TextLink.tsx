import { Link, type LinkProps } from "react-router";
import { ArrowRightIcon } from "../icons";
import { buttonStyles } from "./button";

/* enlace interno de texto con flecha, por ejemplo "Conocer más sobre mí →" */
export const TextLink = ({ children, className = "", ...props }: LinkProps) => (
  <Link {...props} className={`${buttonStyles.textLink} ${className}`}>
    <span className={buttonStyles.textLabel}>{children}</span>
    <ArrowRightIcon size={16} className={buttonStyles.arrow} />
  </Link>
);
