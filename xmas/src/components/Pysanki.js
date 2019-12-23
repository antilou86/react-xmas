import React from 'react'

const Pysanki = (props) => {
    const pic = props.img

    // may have to strip the open & close quotes bits off the front and end of the string here.
    // i could turn the string into an array and reassemble it below.

    return (
        <div>
            <img src={require(`${pic}`)} alt="a hand dyed pysanki egg designed by Lealyn"></img>
        </div>
    )
}
export default Pysanki