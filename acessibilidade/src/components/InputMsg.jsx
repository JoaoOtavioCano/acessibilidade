const InputMsg = ({ type, name, placeholder, className, onBlur , span, errorMsg, onChange, ...props}) => {

    if (span) {
        return (
            <>
                <input
                className={`${className} flex bg-claro min-w-80 w-full border-red-600 border-2 rounded-full py-[8px] px-[16px] items-center gap-x-1`}
                type={type}
                name={name}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                {...props}
                />
                <span className="bg-red-600 text-white rounded-b-lg px-4 mb-4">{errorMsg}</span>
            </>
        );
    }
    return (
        <input
            className={`${className} flex bg-claro min-w-80 w-full border-cinza border-2 rounded-full py-[8px] px-[16px] items-center mb-4 gap-x-1`}
            type={type}
            name={name}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            {...props}
        />
    );
}

export default InputMsg;
