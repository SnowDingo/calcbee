
import Button from "./Button.tsx"
interface operationbutton{
    value:string,
    onClick: () => void;
}

const OperationButton = ({value, onClick}:operationbutton) => {
    return (
        <Button label={value} className="p-4 w-12 rounded-sm  h-12 text-lg  bg-blue-100 hover:bg-blue-200 " onClick={onClick} />
    )
}
export default OperationButton;