import './thead.css';

export function Thead({children, stylex = '', ...rest}) {
    return (
        <thead className={`thead ${stylex}`} {...rest}>
            {children}
        </thead>
    )
}