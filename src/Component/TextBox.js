import React, { useRef, useEffect } from 'react'
import './TextBox.css'
function TextBox() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
        <div className='content'>
            <div className='focus-input'>
            <label>Focused State</label>
                <input className='focus' placeholder="Click me!" ref={inputRef} type="text" /> <br/>
            <label>Normal State</label>
                <input className='normal' placeholder="Click me!" type="text" />
            </div>
		</div>
    )
}

export default TextBox

  
