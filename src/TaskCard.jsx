import React, { useState } from 'react'
import './TaskCard.css'

const TaskCard = ({title="", description=""}) => {

    return (
        <div className='TaskCard'>
            <h2>{title}</h2>
            <h3 className='DescriptionLabel'>Descripcion</h3>
            <p id='description' className='description'>
                {description}
            </p>
        </div>
    )
}

export default TaskCard