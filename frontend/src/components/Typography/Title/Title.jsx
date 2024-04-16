import "./title.css";

export function Title({ children, variant, stylex = "" }) {
  return (
    <h2
      className={(() => {
        let defaultStyle = stylex;
        if (variant === "h2") defaultStyle += " h2";
        return defaultStyle;
      })()}
    >
      {children}
    </h2>
  );
}
