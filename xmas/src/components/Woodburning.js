import React from 'react'

const Woodburning = (props) => {
    const pic = props.img

    // may have to strip the open & close quotes bits off the front and end of the string here.
    // i could turn the string into an array and reassemble it below.

    return (
        <div>
            <img src={require(`${pic}`)} alt="a hand burned design in wood, created by Lealyn"></img>
        </div>
    )
}
export default Woodburning