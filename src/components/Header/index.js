import React from 'react';

const Header = ({children, size = 1}) => {
    return React.createElement(`h${size}`, {children});
 };

// Hardcoded header value
// const Header = ({children, size = 1}) => {
//     return (
//         <h1>{children}</h1>
//     )
// }

// More dynamic component
// const Header = ({children}) => {
//     const HeaderElement = React.createElement (
//         type: `h${size}` 

//     )
//     return (
//         <h1>{children}</h1>
//     )
// }

export default Header;
// Children is used for nesting components
