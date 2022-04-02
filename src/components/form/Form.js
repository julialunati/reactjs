import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { fontWeight } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import './Form.styles.css';
import { MyButton } from '../example/Example';

export const Form = ({ onSubmit }) => {
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
    
    // componentDidMount() {
    //     this.refs.searchInput.value = this.refs.searchInput.value;
    //   }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} autoFocus={true} ref={inputRef}/> 
            <Button className="mybtn" type="submit" variant="contained">submit</Button>
        </form>
    );
}