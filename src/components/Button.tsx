import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "textWithArrow";
  width?: string | number;
  style?: React.CSSProperties;
}

export default function Button({ text, onClick, variant = "primary", width, style }: ButtonProps) {
  if (variant === "textWithArrow") {
    return (
      <button className={styles.textWithArrow} onClick={onClick} style={width ? { ...style, width } : style}>
        <span>{text}</span>
        <span className={styles.arrow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 5L13 10L7 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 10H0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 10H0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        </span>
      </button>
    );
  }
  return (
    <button
      className={styles.button + ' ' + styles.primary + ' ' + styles.lg + ' '}
      onClick={onClick}
      style={width ? { ...style, width } : style}
    >
      <span className={styles.text + ' ' + (variant === 'secondary' ? styles.secondary : '')}>{text}</span>
    </button>
  );
} 