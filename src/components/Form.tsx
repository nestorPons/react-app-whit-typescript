import { Sub } from "../types";
import useNewSubForm from "../hooks/useNewSubForm";


interface FormProps{
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}:FormProps) => {
    
    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onNewSub(inputValues);
        handleClear()
    }

    const handleChange = 
    (evt:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = evt.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({ type: "clear" })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick}type="text" name="nick" placeholder="Nick"/>
            <input onChange={handleChange} value={inputValues.subMonths}type="number" name="subMonths" placeholder="subMonths"/>
            <input onChange={handleChange} value={inputValues.avatar}type="text" name="avatar" placeholder="Avatar"/>
            <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="Description"/>
            <button onClick={handleClear}>Clear this form!</button>
            <button>Save new sub!</button>
        </form>
    )
}   
export default Form;