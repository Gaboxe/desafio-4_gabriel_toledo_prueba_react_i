function Input({ type, state, setState, placeholder, label, idInput, required, classLabel, classInput, classDiv }) {

    const onChange = (e) => {
        setState(e.target.value);
    };

    return (
        <div className={classDiv}>
            <label htmlFor={idInput} className={classLabel}>{label}</label> {/* colocar htmlFor and id */}
            <input  id={idInput} type={type} placeholder={placeholder} onChange={onChange} value={state} required={required? 'required' : ''} className={classInput} />
        </div>
    );
};

export default Input;