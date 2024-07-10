const BaseButton = ({ children, onClick, className = '', }) => {
    return (
        <button onClick = { onClick } className = { className } { ...others }>
            { children }
        </button >
    );
}

const PrimaryButtton = ({ children, onClick, className = '', ...others}) =>{
    return(
        <BaseButton onClick={onClick} className={'btn-primary $(className)'}{...others}>
            {children}
        </BaseButton> 
    );
}

export default BaseButton;
