import React from 'react'

const Box = (props) => {

    //  We destructure props into "data" (Lifting state variable boxes!)
    const {data} = props;
    // We destructure data and create the variable style
    const {style, ...others} = data;

    return (
        <div className="m-2" style={style}>
    
        </div>
    )
}

export default Box
