import React, {useState} from 'react'

const Form = (props) => {

    //  We destructure props into "inputs" and "setInputs" (Lifting state variables boxes and setBoxes)
    const {inputs, setInputs} = props;

    // We create two state variables "color" and "height" for setting the property of a box
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    // We create handlers for updating the values of "color" and "height" state variables
    const colorHandler = (e) => {
        setColor(e.target.value);
        
    };
    const heightHandler = (e) => {
        setHeight(e.target.value);
    };

    // We create a Form handler when properties of a box is sent
    const formHandler = (e) => {
        // Prevent to refresh the page when submitting
        e.preventDefault();
        // Add a new box to array with the color and height added in the form
        // IMPORTANT: The key and values of a JSON object must ALWAYS be between quotes
        setInputs([...inputs, {
                "color": color, 
                "height": height,
                "style": {
                    "display": "inline-block",
                    "background": color,
                    "height": `${height}px`,
                    "width": `${height}px`
                }
            }]);
        
        // Once the new box is added, set values of color and height in the form to empty strings
        setColor("");
        setHeight("");
    }

    return (
        <div>
            <form onSubmit = { formHandler }>
                <h2>Box Form</h2>
                <div className="form-group">
                    <label htmlFor="color">Color: </label> 
                    <input type="text" className="form-control" onChange={ colorHandler } name="color" value={color}/>
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height: </label> 
                    <input type="text" className="form-control" onChange={ heightHandler } name="height" value={height}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form
