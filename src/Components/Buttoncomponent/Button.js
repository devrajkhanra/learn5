import React from 'react'

const Button = ({ buttonText, reqType, setReqType }) => {
    return (
        <button
            // {buttonText === reqType ? 'selected' : null}
            className={`bg-gray-800 text-gray-500 hover:text-gray-50 text-4xl font-thin basis-1/2 border py-6 ${buttonText === reqType ? "selected" : null}`}
            type='button'
            onClick={() => setReqType(buttonText)}>{buttonText}</button>
    )
}

export default Button