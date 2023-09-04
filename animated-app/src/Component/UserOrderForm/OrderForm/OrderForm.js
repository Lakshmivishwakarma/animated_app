import { Stepper, Step } from "react-form-stepper";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import CardContent from '@mui/material/CardContent';
import Address from "../Address/Address";
import PersonalDetail from "../PersonalDetail/PersonalDetail";
import Payment from "../Payment/Payment";
import OrderSummary from "../OrderSummary/OrderSummary";
import styles from "./style";

const OrderForm = (props) => {
    const { handleSubmit, formState: { errors } } = useForm();
    const [goSteps, setGoSteps] = useState(0);

    const onSubmit = (data) => {
        console.log(data);
    }
    const [order, setOrder] = useState("Your order has been successful");

    const [disablePersonalDetail, setDisablePersonalDetail] = useState(true);
    const [disableAddress, setdisableAddress] = useState(true);
    const [disablePayment, setDisablePayment] = useState(true);

    // enable personal detail on page load 
    function enablePersonalDetailButton() {
        setDisablePersonalDetail(false)
    }

    useEffect(() => {
        enablePersonalDetailButton();
    }, []);

    return (
        <div>
            <div style={styles.BorderLine}></div>
            <Stepper activeStep={goSteps} style={styles.Steps}>
                <Step label="PERSONAL DETAILS" onClick={() => setGoSteps(0)} disabled={disablePersonalDetail} />
                <Step label="ADDRESS" onClick={() => setGoSteps(1)} disabled={disableAddress} />
                <Step label="PAYMENT" onClick={() => setGoSteps(2)} disabled={disablePayment} />
                <Step label="ORDER SUMMARY" />
            </Stepper>

            {/* Personal details */}
            {goSteps === 0 && (
                <CardContent>
                    <PersonalDetail
                        disableAddress={() => setdisableAddress(false)}
                        onClick={() => setGoSteps(1)}
                        onSubmit={() => handleSubmit(onSubmit)}
                    />
                </CardContent>
            )}
            {/* Address  */}
            {goSteps === 1 && (
                <div>
                    <Address
                        disablePayment={() => setDisablePayment(false)}
                        onClickNext={() => setGoSteps(2)}
                        onSubmitNext={() => handleSubmit(onSubmit)}
                        onClickBack={() => setGoSteps(0)}
                        onSubmitBack={() => handleSubmit(onSubmit)}
                    />
                </div>
            )}
            {goSteps === 2 && (
                <div>
                    <Payment
                        disableAddress={() => setdisableAddress(true)}
                        disablePayment={() => setDisablePayment(true)}
                        disablePersonalDetail={() => setDisablePersonalDetail(true)}
                        onClickNext={() => setGoSteps(3)}
                        onSubmitNext={() => handleSubmit(onSubmit)}
                        onClickBack={() => setGoSteps(1)}
                        onSubmitBack={() => handleSubmit(onSubmit)}

                    />
                </div>
            )}
            {/* Order Summary */}
            {goSteps === 3 && (
                // setdisable(false)
                <div>
                    <OrderSummary
                        orderMessage={order}
                    />
                </div>
            )
            }
        </div>
    );
};

export default OrderForm;
