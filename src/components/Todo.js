import React, { useState } from 'react';

const todo = props => {
     // REM: useState() 
     /**    
      *     argument (eg: 'someValue'):  can be anything ('', 0, null, [], {},...)
      *     return value (eg: inputState): an array
      *         [0]: argument received
      *         [1]: function can be used to manipulate the state
     */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [todoName, setTodoName] = useState('someValue');
    // console.log('todoName: ', todoName);
    // const inputState = useState('someValue');
    // console.log('inputState: ', inputState);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [todoList, setTodoList] = useState([]);
    // console.log('todoList: ', todoList);

    const inputChangeHandler = (evt) => {
        // console.log('evt: ', evt.target.value);
        setTodoName(evt.target.value);
        // inputState[1](evt.target.value);
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName)); // add new element (todoName) to the todoList state array
    };

    return (
        // React.Fragment: allows top level siblings 
        <React.Fragment>
            <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName} /> {/* functional component */}
            {/* <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={inputState[0]} /> */} {/* functional component */}
            {/* <input type="text" placeholder="Todo" onChange={this.inputUserHandler} value={this.state.todoValue} /> */} {/* class-based component */}
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
        </React.Fragment>
    );
};

export default todo;