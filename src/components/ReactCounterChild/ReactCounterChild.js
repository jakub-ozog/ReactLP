import React, {memo, useMemo} from 'react';
import "./style.scss"

const ReactCounterChild = (props) => {
    console.log('Child is rendering!')
    const {counter, updateCounter} = props;

    return (
        <>
            <div className="counterChild">
                <h2>Child - {counter} </h2>
            </div>
            <button onClick={updateCounter}>
                Click
            </button>
        </>
    )
}

export default memo(ReactCounterChild);