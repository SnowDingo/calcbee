
import Button from "./Button.tsx"
interface numbutton{
    value:string,
    onClick: () => void;
}

const NumberButton = ({value, onClick}:numbutton) => {
    return (
        <div className="">
        <Button label={value} className="p-4 bg-blue-100 hover:bg-blue-200 " onClick={onClick} />
        </div>
    )
}
export default NumberButton;