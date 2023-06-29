import React from 'react'

const Alert = (props) => {
    return (
        <div className="h-5">
            {props.alert && <div className={` text-center text-sm text-${props.alert.type}-800 bg-${props.alert.type}-50 dark:bg-black dark:text-${props.alert.type}-300`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

export default Alert