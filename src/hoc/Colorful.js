import React from 'react'

const Colorful = (WrappedComponent) => {
    const colors = [
        "text-primary",
        "text-secondary",
        "text-success",
        "text-danger",
        "text-warning",
        "text-info",
    ]


    const color = colors[Math.floor(Math.random() * 5)]
    return (props) => {
        return (
            <div className={color}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Colorful
