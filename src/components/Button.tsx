import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonType = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

export default function Button({ 
  type = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = "left",
  target,
  rel
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[type],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
} 