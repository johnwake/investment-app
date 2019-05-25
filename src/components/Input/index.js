import React from 'react';

// Two types of react Components Statless, class based
// export default class Input extends React.Component {
//     render() {
//         return (
//             <input type='text'></input>
//         );
//     }
// }

// Will render on very change (Static component)
const Input = ({onChange, ...rest}) => {
    return (
        <input
            type="text"
            onChange={onChange}
            {...rest}
        />
    )
}

export default Input;
