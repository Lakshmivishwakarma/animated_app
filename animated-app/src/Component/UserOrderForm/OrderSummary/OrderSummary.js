import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from "./style";
import Link from '@mui/material/Link';
import Invoice from "../../Invoice/invoice";
import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf"
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { userAddress } from "../../../Redux/Actions/action";
import { userDetail } from "../../../Redux/Actions/action";

function OrderSummary(props) {
    const dispatch = useDispatch();

    //clear input detail after submission  
    let personalData = {
        name: "",
        contact: " ",
        email: " ",
    }
    let address = {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pin: "",
        country: ""
    }

    //export pdf
    const pdfExportComponent = useRef(null);
    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
        dispatch(userDetail(personalData))
        dispatch(userAddress(address))
    }

    return (
        <div style={styles.FormContainer}>
            <Container component="main" maxWidth="xs" style={styles.DetailContainer}>
                <Typography component="h1" variant="h5" color="primary">
                    {props.orderMessage}
                </Typography>
            </Container>

            <div className="example-config">
                <button onClick={handleExportWithComponent}>
                    Download Invoice
                </button>
            </div>

            <div style={styles.Pdf} >
                <Link href="/" variant="body2">Go to Main Page </Link>
            </div>

            <div style={styles.PdfExport}>
                <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
                    <Invoice />
                </PDFExport>
            </div>
        </div>

    )
}
export default OrderSummary;
