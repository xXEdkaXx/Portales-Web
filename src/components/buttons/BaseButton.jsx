export const BaseButton = ({ children, onClick, className = '', ...others }) => {
    return (
        <button onClick = { onClick } className = { className } {...others}>
            {children}
        </button >
    )
}

export const PrimaryButton = ({ children, onClick, className = '', ...others}) =>{
    return(
        <BaseButton onClick={onClick} className={'btn-primary ${className}'}{...others}>
            {children}
        </BaseButton> 
    )
}

export const SecundaryButton = ({ children, onClick, className = '', ...others}) =>{
    return(
        <BaseButton onClick={onClick} className={'btn-secundary ${className}'}{...others}>
            {children}
        </BaseButton> 
    )
}

export default BaseButton;
