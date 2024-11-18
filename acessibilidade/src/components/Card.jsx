
const Card = (({children, className, ...props}, ref) => {
    return (
        <div {...props} ref={ref} className={`${className} bg-white shadow-lg p-[12px] sm:rounded-3xl sm:p-[24px]`}>
            {children}
        </div>
    );
})

export default Card
