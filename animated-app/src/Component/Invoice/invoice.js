import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "./style";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'
import { format } from 'date-fns'

function Invoice() {

    // user current State 
    const stateForUserDetail = useSelector((state) => state.userReducer)
    let personalData = stateForUserDetail.userDetail
    //current product DETAIL
    const productState = useSelector((state) => state.productReducer)
    let productDetail = productState.ProductDetail
    //current address
    const stateForAddress = useSelector((state) => state.addressReducer)
    let address = stateForAddress.userAddress
    //current date for pdf
    const current = new Date();
    const date = format(current, "dd/MM/yyyy")

    return (
        <>
            <Card variant="outlined" style={styles.container}>
                <Grid container spacing={1} style={styles.Gridcontainer}>
                    <Grid item sm={7} xs={12}>
                        <Typography component="h6" variant='h6'> ABC Furniture Co.</Typography>
                        <Typography component="p" variant='p'> #101 tree street, Leaf vale , delhi 110001</Typography>
                        <Typography component="p" variant='p'>Contact:-9896369856</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography component="h6" variant='h6'> Invoice</Typography>
                        <Typography component="p" variant='p'> Date:-{date}</Typography>
                        <Typography component="p" variant='p'></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={styles.container}>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>BILL TO:-</Typography>
                        <Typography component="p" variant='p'> Name :- {personalData.name}</Typography>
                        <Typography component="p" variant='p'>Contact :- {personalData.contact}</Typography>
                        <Typography component="p" variant='p'>Email :- {personalData.email}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>SHIP TO:-</Typography>
                        <Typography component="p" variant='p'> Name :- {personalData.name}</Typography>
                        <Typography component="p" variant='p'>Address :- {address.addressLine1} </Typography>
                        <Typography component="p" variant='p'>Pin :- {address.pin} </Typography>
                        <Typography component="p" variant='p'>City :- {address.state}</Typography>
                        <Typography component="p" variant='p'>Country :- {address.country}</Typography>
                    </Grid>
                </Grid>
            </Card>
            <Card variant="outlined" style={styles.container}>
                <CardContent >
                    <CTable>
                        <CTableHead>
                            <CTableRow style={styles.Table}>
                                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Product</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        <CTableBody>
                            <CTableRow style={styles.Table}>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>{productDetail.productName}</CTableDataCell>
                                <CTableDataCell>{productDetail.price} /-</CTableDataCell>
                            </CTableRow>

                            <CTableRow style={styles.Table}>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>

                            <CTableRow style={styles.Table}>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell >Total</CTableDataCell>
                                <CTableDataCell>{productDetail.price} /-.</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CardContent>
            </Card>
        </>
    )
}

export default Invoice;
