import React from 'react';

function JustInfo(props) {
    console.log("RENDER JUSTINFO");

    const {
        showLabel,
        testValue
    } = props;

    return (
        <div>
            JUST INFO {showLabel} {testValue.activeState}
        </div>
    );
}

export default React.memo(JustInfo);