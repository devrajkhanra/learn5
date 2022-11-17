import React from 'react'
import Button from '../Buttoncomponent/Button'

const Form = ({ reqType, setReqType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex flex-row grow'>
                <Button buttonText='users' reqType={reqType} setReqType={setReqType} />
                <Button buttonText='posts' reqType={reqType} setReqType={setReqType} />
                <Button buttonText='comments' reqType={reqType} setReqType={setReqType} />
            </div>

        </form>
    )
}

export default Form