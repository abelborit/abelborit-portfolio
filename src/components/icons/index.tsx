/* iconos de trazo (24x24). Son decorativos: el texto o el aria-label del botón describe la acción */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const Icon = ({ size = 18, children, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {children}
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Icon>
);

export const DownloadIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </Icon>
);

export const CheckIcon = (props: IconProps) => (
  <Icon strokeWidth={2.4} {...props}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);

export const SunIcon = (props: IconProps) => (
  <Icon size={20} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Icon>
);

export const MoonIcon = (props: IconProps) => (
  <Icon size={20} {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Icon>
);

export const MenuIcon = (props: IconProps) => (
  <Icon size={20} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (props: IconProps) => (
  <Icon size={20} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const BadgeIcon = (props: IconProps) => (
  <Icon size={22} {...props}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 13.8L7 22l5-3 5 3-1.5-8.2" />
  </Icon>
);
