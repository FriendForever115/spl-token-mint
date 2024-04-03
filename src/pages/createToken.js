import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Paper, Avatar, Stack, FormControlLabel, Checkbox } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const CreateTokenPage = () => {
    const [tokenImage, setTokenImage] = useState(null);

    // Function to handle image upload
    const handleImageUpload = event => {
        const file = event.target.files[0];
        if (file) {
            setTokenImage(URL.createObjectURL(file));
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: '#161616',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
            }}
        >
            {/* Upload Image Group */}
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: '#232323',
                    padding: 2,
                    marginBottom: 4,
                    width: '80%',
                }}
            >
                <Typography variant="h6" color="#fff">
                    Upload an image of your SPL Token
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2} mt={2}>
                    <Avatar
                        src={tokenImage}
                        sx={{ width: 56, height: 56, bgcolor: 'grey.900' }}
                        variant="rounded"
                    >
                        {!tokenImage && <AddPhotoAlternateIcon />}
                    </Avatar>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload
                        <input
                            type="file"
                            hidden
                            onChange={handleImageUpload}
                        />
                    </Button>
                </Stack>
            </Paper>

            {/* Data of SPL Token Group */}
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: '#232323',
                    padding: 2,
                    width: '80%',
                }}
            >
                {/* Tell More About Your SPL Token */}
                <Typography variant="h6" color="#fff">
                    Tell more about your SPL Token
                </Typography>
                <Box mt={2}>
                    <TextField
                        label="Token Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: {
                                backgroundColor: '#161616',
                                color: "#FFFFFF",
                            },
                        }}
                    />
                    <TextField
                        label="Symbol"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: {
                                backgroundColor: '#161616',
                                color: "#FFFFFF",
                            },
                        }}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        InputProps={{
                            style: {
                                backgroundColor: '#161616',
                                color: "#FFFFFF",
                            },
                        }}
                    />
                    <TextField
                        label="Total Supply"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: {
                                backgroundColor: '#161616',
                            },
                        }}
                    />
                    <TextField
                        label="Decimals"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: {
                                backgroundColor: '#161616',
                            },
                        }}
                    />
                </Box>

                {/* Revoke Settings */}
                <Typography variant="h6" color="#fff" mt={2}>
                    Revoke Settings
                </Typography>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Immutable" sx={{ color: "#fff" }} />
                <FormControlLabel control={<Checkbox />} label="Revoke Freeze" sx={{ color: "#fff" }} />
                <FormControlLabel control={<Checkbox />} label="Revoke Mint" sx={{ color: "#fff" }} />

                {/* Action Buttons */}
                <Stack direction="row" spacing={2} mt={2} justifyContent="flex-end">
                    <Button variant="outlined" color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                        Create Token
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default CreateTokenPage;