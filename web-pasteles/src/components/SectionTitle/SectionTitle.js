import React from 'react'
import './SectionTitle.css'
function SectionTitle({ title, keyP }) {
    return (
        <div className="father-box" id={keyP}>
            <div className="upper-box-deco">
            </div>
            <h3 >{title}</h3>
            <div className="lower-box-deco">
            </div>
        </div>
    )
}

export default SectionTitle