import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { fontWeight } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import '../form/Form.styles.css';
import { MyButton } from '../example/Example';

export const ExampleForm = ({ onSubmit, children }) => {
    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue('');
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        console.log('like mounted', inputRef);
        inputRef.current?.focus();

        return () => {
          console.log('unmounted');
        }
      }, []);

    return (
        <form onSubmit={handleSubmit}>

            {children({value, handleChange})}
        </form>
    );
}