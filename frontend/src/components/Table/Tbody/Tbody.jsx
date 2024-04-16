import './tbody.css';

export function Tbody({children, ...rest}) {
    return (<tbody className="tbody" {...rest}>{children}</tbody>)
}