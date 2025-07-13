import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMessage } from './store/actions';

function App() {
    const dispatch = useDispatch();

    const handleChangeMessage = () => {
        dispatch(updateMessage('Hello Redux!'));
    };

    return (
        <div>
            <button onClick={handleChangeMessage}>
                Change Message
            </button>
        </div>
    );
}

export default App;