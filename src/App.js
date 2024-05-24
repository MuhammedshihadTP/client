
import React, { useState } from 'react';

import { Button } from '@mui/material';
import SignupForm from './components/SignupForm';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <Button variant="contained" color="primary" onClick={openModal}>
                Sign Up
            </Button>
            <SignupForm open={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default App;
