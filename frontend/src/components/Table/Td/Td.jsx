import './td.css';

export function Td({children, bolder = false, stylex = '',  ...rest}) {
    return (<td className={`td ${bolder && 'bolder'} ${stylex}`} {...rest}>{children}</td>)
}