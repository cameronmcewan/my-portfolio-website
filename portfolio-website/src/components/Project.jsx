import React from 'react';

function Project(props) {

    return (
        <section className='projectSection'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.imgSrc} alt={props.title} />
        </section>
    )
};

export default Project;