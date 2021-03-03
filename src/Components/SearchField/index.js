import React from 'react';
import './style.css';

// class SearchField extends React.Component {
//     state = {inputValue: '',completed: false};

//     //event handler
//     inputChangeHandler = (event) => {
//         this.setState({inputValue:event.target.value});
//     };
//     render() {
//         return (
//             <div>
//                 <input 
//                     type="text" 
//                     className="search" 
//                     placeholder="Search here..." 
//                     onChange={ this.inputChangeHandler } 
//                 />
//             </div>
//         );
//     };
// };

const SearchField = (props) => {
    return (
        <div>
            <input 
                type="text" 
                className="search" 
                placeholder="Search here..." 
                onChange={ props.onSearchChanged } 
            />
        </div>
    );
}

export default SearchField;