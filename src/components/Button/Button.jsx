import "./Button.scss"

const Button = ({text, handleAction}) => {
    return(
        <>
        <button onClick={handleAction} className="button">
            {text}
        </button>
        </>
    )
}

export default Button;