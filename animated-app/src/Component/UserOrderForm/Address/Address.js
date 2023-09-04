import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from "./style";
import { FormControl } from '@mui/material';
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo } from "react";
import { userAddress } from "../../../Redux/Actions/action";
import { useForm, Controller } from "react-hook-form";
import countryList from 'react-select-country-list'
import Select from 'react-select';

function Address(props) {

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    // user address detail
    const myState = useSelector((state) => state.addressReducer)
    let detail = myState.userAddress

    //fix input value for back step
    const [address, setAddress] = useState({
        addressLine1: detail.addressLine1,
        addressLine2: detail.addressLine2,
        city: detail.city,
        state: detail.state,
        pin: detail.pin,
        country: detail.country,
    })
    const onSubmit = (data) => {
        setAddress(data)
        dispatch(userAddress(data))
        props.onSubmitNext();
        props.onClickNext();
        props.disablePayment();
    }

    const onBack = () => {
        props.onClickBack()
        return false;

    }
    const options = useMemo(() => countryList().getData(), [])

    return (

        <FormControl onSubmit={handleSubmit(onSubmit)}>
            <Container component="main" maxWidth="xs" style={styles.Container}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography component="h1" variant="h5">
                        Address
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>

                        <TextField
                            //Email validation
                            {...register('addressLine1', {
                                required: "**Please Enter Address**",
                            })}
                            error={!!errors.addressLine1}
                            helperText={errors.addressLine1?.message}
                            margin="normal"
                            required
                            fullWidth
                            id="addressLine1"
                            label="Address-Line1"
                            autoComplete="Address-Line1"
                            autoFocus
                            onChange={data => setAddress({
                                addressLine1: data.addressLine1
                            })}
                            value={address.addressLine1}
                        />

                        <TextField
                            //Email validation
                            {...register('addressLine2', {
                                required: "**Please Enter Address**",
                            })}
                            error={!!errors.addressLine2}
                            helperText={errors.addressLine2?.message}
                            margin="normal"
                            required
                            fullWidth
                            id="addressLine2"
                            label="Address-Line2"
                            autoComplete="Address-Line2"
                            autoFocus
                            onChange={data => setAddress({
                                addressLine2: data.addressLine2
                            })}
                            value={address.addressLine2}
                        />

                        <TextField
                            //Email validation
                            {...register('city', {
                                required: "**Please Enter City**",

                            })}
                            error={!!errors.city}
                            helperText={errors.city?.message}
                            margin="normal"
                            required
                            fullWidth
                            id="city"
                            label="city"
                            autoComplete="city"
                            autoFocus
                            onChange={data => setAddress({
                                city: data.city
                            })}
                            value={address.city}
                        />

                        <TextField
                            //contact detail validation
                            {...register('state', {
                                required: "**Please Enter State name**",
                            })}
                            error={!!errors.state}
                            helperText={errors.state?.message}
                            margin="normal"
                            type="text"
                            required
                            fullWidth
                            id="state"
                            label="state"
                            autoComplete="state"
                            autoFocus
                            onChange={data => setAddress({
                                state: data.state
                            })}
                            value={address.state}
                        />

                        <TextField
                            //contact detail validation
                            {...register('pin', {
                                required: "**Please Enter Pin-code**",

                            })}
                            error={!!errors.pin}
                            helperText={errors.pin?.message}
                            margin="normal"
                            type="number"
                            required
                            fullWidth
                            id="Pin"
                            label="Pin"
                            autoComplete="Pin"
                            autoFocus
                            onChange={data => setAddress({
                                pin: data.pin
                            })}
                            value={address.pin}
                        />

                        <div style={styles.Country}>
                            <Controller
                                name="country"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isClearable
                                        options={options}
                                        onSelect={data => setAddress({
                                            country: data.Country
                                        })}
                                    />
                                )}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <Button variant="contained" onClick={onBack} style={styles.BackButton} return false >Back</Button>
                            <Button
                                type="submit"
                                variant="contained"
                                style={styles.BackButton}
                            >Next</Button>
                        </div>
                    </Box>
                </Box>
            </Container>
        </FormControl>

    )
}

export default Address;
