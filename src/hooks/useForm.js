import { useState } from "react";

const useForm = (initial = {}) => {
    const [formState, setFormState] = useState(initial);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initial)
    }

    return { ...formState, formState, onInputChange, onResetForm };
}

export default useForm