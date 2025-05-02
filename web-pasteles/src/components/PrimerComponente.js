import React from 'react'

export const PrimerComponente = () => {
  return (
    <div>PrimerComponente

        <MyButton/>

    </div>
    
  )
}

function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }