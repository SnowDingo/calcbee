

interface button{
    label:string,
    onClick:()=>void,
    className:string,
}

const Button = ({label, onClick, className}:button) => {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}

export default Button;