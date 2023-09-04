const SIGN_IN = "SIGN_IN";
const LOGGED_IN = 'LOGGED_IN';
const LOG_OUT = 'LOG_OUT';
const USER_DETAIL = 'USER_DETAIL';
const USER_ADDRESS = "USER_ADDRESS";
const PRODUCT = "PRODUCT";

export const signIn = (value) => {
    return {
        type: SIGN_IN,
        payload: value
    }
}

export const loggedIn = (value) => {
    return {
        type: LOGGED_IN,
        payload: value
    }
}

export const logout = () => {
    return {
        type: LOG_OUT,

    }
}

export const userDetail = (value) => {
    return {
        type: USER_DETAIL,
        payload: {
            name: value.name,
            email: value.email,
            contact: value.contact

        }
    }
}

export const userAddress = (value) => {
    return {
        type: USER_ADDRESS,
        payload: {
            addressLine1: value.addressLine1,
            addressLine2: value.addressLine2,
            city: value.city,
            state: value.state,
            country: value.country.label,
            pin: value.pin
        }
    }
}

export const productData = (value) => {
    return {
        type: PRODUCT,
        payload: {
            productName: value.productName,
            price: value.price
        }
    }
}
