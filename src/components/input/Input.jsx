import "./Input.css";

export default function Input(p_in) {  //p_in is a objects , for receive all props
    return(
        <>
            <input 
                type={p_in.type}
                placeholder={p_in.placeholder}
                value={p_in.value}
                onChange={p_in.onChange}
            />
        </>
    );
}