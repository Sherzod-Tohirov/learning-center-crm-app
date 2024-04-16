export function FormGroup({ children, stylex = '' }) {
  return (
    <div className={`flex flex-col gap-4 ${stylex}`}>
        {children}
    </div>
  );
}
