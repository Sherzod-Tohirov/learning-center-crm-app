import './tr.css';

export function Tr({children, ...rest}) {
    return (<tr className="tr" {...rest}>{children}</tr>)
}