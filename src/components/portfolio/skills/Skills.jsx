import React from 'react';
import './skills.scss';

export default function Skills() {
    const skillset= ['Python','JavaScript','C & C++','AI and Advanced Algorithms','Dart']
  return <div className='skills'>
      {
        skillset.map(skill => <p><span>$></span>{skill}</p>)
      }
  </div>;
}
