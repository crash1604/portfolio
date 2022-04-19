import React from 'react';
import '../skills/skills.scss';

export default function Frameworks() {
    const frameworks = ['Django (Python)','Node JS npm (JavaScript)','React JS (JavaScript)','Django Rest Framework','StageXL'];
    return <div className='skills'>
     {
        frameworks.map(skill => <p><span>$> </span>{skill}</p>)
     }
     </div>;
}
