import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        console.log(lower.charAt(0));
        console.log(lower.slice(1));
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className="" style={{ height: '50px' }} >
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}

            </div>}

        </div>


    )
}

export default Alert
