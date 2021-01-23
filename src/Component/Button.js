import React from 'react'
import './Button.css'

function Button() {
    return (
        <div className='Content'>
            <button className='Normal'>Click me!</button> 
            <label className='Label'>Normal State</label>
            <button className='Focused'>Click me!</button><label>Focused State</label><br/>
            <button className='Pressed'>Click me!</button><label>Pressed State</label><br/>
            <button className="Disabled">Click me!</button><label>Disabled State</label><br/>
        <div className='clear'></div>            
        </div>
    )
}

export default Button
