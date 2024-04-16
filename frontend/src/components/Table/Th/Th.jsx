import './th.css';

export function Th({children, ...rest}) {
    return (<th className="th" {...rest}>{children}</th>)
}