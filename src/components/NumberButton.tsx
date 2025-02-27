
import Button from "./Button.tsx"
interface numbutton{
    value:string,
    onClick: () => void;
}

const NumberButton = ({value, onClick}:numbutton) => {
    return (
        <Button label={value} className="w-12  h-12 p-4 rounded-sm  text-lg bg-blue-100 hover:bg-blue-200 " onClick={onClick} />
    )
}
export default NumberButton;