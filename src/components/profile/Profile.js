import { useEffect, useState, useRef } from "react";
import './Profile.styles.css';

export const Profile = (value) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log('mounted');
        inputRef.current?.focus();

        return () => {
          console.log('unmounted');
        }
      }, []);

    return (
        <>
            <div className="my-profile">
                <image src="./img.png" alt="my foto"/>
            </div>
        </>
    );
}