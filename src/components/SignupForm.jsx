
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const SignupForm = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', { email, password, name });
            console.log(response.data);
            onClose(); 
        } catch (error) {
            console.error('Error signing up', error);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Sign Up
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
        
    );
};

export default SignupForm;
