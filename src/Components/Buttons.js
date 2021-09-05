import React from 'react'
import Button from './Button'

const Buttons = () => {
    return (
        <div className='button-container'>
            <Button className='cancel-button' text='Cancel'/>
            <Button type='submit' text='Create Order'/>
        </div>
    )
}

export default Buttons
