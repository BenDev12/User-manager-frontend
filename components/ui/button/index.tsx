import React from 'react'

type props={
    children:string
    className:string
    onClick ?:string
}

function index({children}:props):JSX.Element {
    return (
        <button>
            {children}
        </button>
    )
}

export default index
