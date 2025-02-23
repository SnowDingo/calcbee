
import Button from "./Button.tsx"
interface operationbutton{
    value:string,
    onClick: () => void;
}

const OperationButton = ({value, onClick}:operationbutton) => {
    return (
        <div className="">
        <Button label={value} className="p-4 text-lg max-w-sm max-h-sm bg-blue-100 hover:bg-blue-200 " onClick={onClick} />
        </div>
    )
}
export default OperationButton;