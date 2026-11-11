import type { NavigationProps } from "../../types/navigation";
import { NAV_ITEMS } from "./navItems";
import styles from "./Navbar.module.css";

export const NavbarDesktop = (props: NavigationProps) => {
  return (
    <nav className={styles.linkPage_desktop}>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li
            key={item.ref}
            className={`${styles.link_btn} ${styles.bottom_line}`}
          >
            {/* se usa <button> para que se pueda usar con teclado (Tab + Enter) y lectores de pantalla */}
            <button
              type="button"
              className={styles.link_action}
              onClick={() =>
                props.handleScrollToSection(props.referencias[item.ref])
              }
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
