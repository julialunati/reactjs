import { useEffect, useState, useRef } from "react";
import './Profile.styles.css';

const user = 'Julia';

export const Profile = () => {
    const [value, setValue] = useState(user);

    useEffect(() => {
        console.log('mounted');

        return () => {
          console.log('unmounted');
        }
      }, []);

    return (
        <>
            <div className="my-profile">
                <image src="./img.png" alt="my foto"/>
                <span> This profile belongs to { value }</span>    
            </div>
        </>
    );
}