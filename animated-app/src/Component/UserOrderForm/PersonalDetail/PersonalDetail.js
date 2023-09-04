import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from "./style";
import { RadioGroup, FormLabel, FormControlLabel, Radio, FormControl } from '@mui/material';
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { userDetail } from "../../../Redux/Actions/action";
import { useForm } from "react-hook-form"

function PersonalDetail(props) {

    const { handleSubmit, register, formState: { errors } } = useForm();

    // user detail
    const myState = useSelector((state) => state.userReducer)
    let detail = myState.userDetail

    // signup detail
    const myStateForSignIn = useSelector((state) => state.signInReducer)
    let signUpData = myStateForSignIn.signIn

    //User logged in or not
    const myStateForLogin = useSelector((state) => state.sessionReducer)
    let loggedInEmail = myStateForLogin.loggedInUser.email

    //fix input value for back step
    const [person, setPerson] = useState({
        name: detail.name,
        contact: detail.contact,
        email: detail.email,
    })
    // if user is logged in get default user detail 
    const isLoggedIn = () => {
        if (loggedInEmail) {
            setPerson({
                name: signUpData.name,
                contact: signUpData.contact,
                email: signUpData.email
            })
        }
    }

    useEffect(() => {
        isLoggedIn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Change default user detail
    const newDetail = () => {
        setPerson({
            name: "",
            contact: "",
            email: ""
        })
    }
    const sameDetail = () => {
        setPerson({
            name: signUpData.name,
            contact: signUpData.contact,
            email: signUpData.email
        })
    }
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        setPerson(data)
        dispatch(userDetail(data))
        props.onClick();
        props.disableAddress();
    }
    
    return (
        <div style={styles.MainContainer}>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
                <Container component="main" maxWidth="xs" style={styles.Container}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography component="h1" variant="h5">
                            Personal Details
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {/* radio button  */}
                            {loggedInEmail && <div style={styles.Radio}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Do you want to continue with below details ?</FormLabel>
                                <RadioGroup
                                    defaultValue="Yes"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel onClick={sameDetail} id="1" value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel onClick={newDetail} id="2" value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </div>}
                            {/* radio button end */}
                            <TextField
                                // name validation
                                {...register('name', {
                                    required: "**Please enter full name**",
                                    pattern: {
                                        //used reg exp. for email pattern
                                        value: /([A-Za-z]){4,}([\s]){1}([A-Za-z]){4,}/, message: "**Please enter full name **"
                                    }
                                })}
                                error={!!errors?.name}
                                helperText={errors.name?.message}
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                onChange={data => setPerson({
                                    name: data.name
                                })}
                                value={person.name}

                            />
                            {/* radio button for Gender */}
                            <div style={styles.Radio}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    defaultValue="female"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel id="1" value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel id="2" value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel id="3" value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                            {/* radio button end */}

                            <TextField
                                //Email validation
                                {...register('email', {
                                    required: "**Please Enter Valid Email Id**",
                                    pattern: {
                                        //used reg exp. for email pattern
                                        value: /^(?!.*?\.\.)[a-z]+[a-z0-9._]+[@]{1}[a-z]+[\d]*[a-z.]+$/g, message: "**This is not a valid email**"
                                    }
                                })}
                                error={!!errors?.email}
                                helperText={errors.email?.message}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                onChange={data => setPerson({
                                    email: data.email
                                })}
                                value={person.email}
                            />

                            <TextField
                                //contact detail validation
                                {...register('contact', {
                                    required: "**Please Enter Mobile No.**",
                                    minLength:
                                        { value: 10, message: "**Mobile number should be 10 digit**" },
                                    maxLength: {
                                        value: 10,
                                        message: "**Mobile number should be 10 digit**"
                                    }
                                })}
                                error={!!errors?.contact}
                                helperText={errors.contact?.message}
                                margin="normal"
                                type="text"
                                required
                                fullWidth
                                id="contact"
                                label="Contact Number"
                                autoComplete="contact"

                                autoFocus
                                onChange={data => setPerson({
                                    contact: data.contact
                                })}
                                value={person.contact}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >Next</Button>
                        </Box>
                    </Box>
                </Container>
            </FormControl>
        </div>
    )
}

export default PersonalDetail;
