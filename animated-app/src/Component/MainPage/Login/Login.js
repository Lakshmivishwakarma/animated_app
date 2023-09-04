import * as React from 'react';
import Button from '@mui/material/Button';
import { Container, TextField, FormControlLabel, Checkbox, Box, Typography, FormControl } from '@mui/material';
import Link from '@mui/material/Link';
import styles from './style';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from "../../../Redux/Actions/action";
import { useState } from "react";

function LogIn() {

    const { register, handleSubmit, formState: { errors, } } = useForm();
    const navigate = useNavigate()

    const myStateForSignIn = useSelector((state) => state.signInReducer)
    let signUpData = myStateForSignIn.signIn

    const [errorForInvalidDetail, setErrorForInvalidDetail] = useState();

    const dispatch = useDispatch();

    const onSubmit = (userData) => {
        if (userData.email === signUpData.email && userData.password === signUpData.password) {
            dispatch(loggedIn(userData))
            navigate("/")
            alert("user login successfully");
        } else {
            setErrorForInvalidDetail("**Invalid user detail**")
        }
    }
    return (
        //main container for background image
        <div style={styles.MainContainer}>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
                <Container component="main" maxWidth="xs" style={styles.SubContainer}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                        <Typography component="h1" variant="h5" color="primary">
                            Log In
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 1 }}>

                            <TextField
                                {...register('email', {
                                    required: "**Email is required**",
                                    pattern: {
                                        //used reg exp. for email pattern
                                        value: /^(?!.*?\.\.)[a-z]+[a-z0-9._]+[@]{1}[a-z]+[\d]*[a-z.]+$/g, message: "**This is not a valid email**"
                                    }
                                })}
                                error={errors.email}
                                helperText={errors.email?.message}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                {...register('password', {
                                    required: "**Password is required**",
                                    minLength:
                                        { value: 4, message: "**Password must be more then 4 characters**" },
                                    maxLength: {
                                        value: 10,
                                        message: "**Password cannot be exceed 10 characters**"
                                    }
                                })}
                                error={errors.password}
                                helperText={errors.password?.message}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <div>
                                <FormControlLabel
                                    control={<Checkbox value="remember" />}
                                    label="Remember me"
                                />
                            </div>
                            <span style={styles.Error} id="invalidDetail">{errorForInvalidDetail}</span>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Log In
                            </Button>

                            <div >
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </div>

                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Box>
                        {/* Footer in Login form */}
                        <Typography variant="body2" align="center" sx={{ mt: 8, mb: 4 }}>
                            {'Copyright © '}
                            <Link color="inherit" href="#">
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                        {/* footer end */}
                    </Box>
                </Container>
            </FormControl>
        </div>
    );
}

export default LogIn;
