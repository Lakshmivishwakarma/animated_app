const initialStateForSignIn = {
    signIn: {
        name: "",
        contact: "",
        email: "",
        password: "",

    },
}

export const signInReducer = (state = initialStateForSignIn, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                signIn: action.payload
            }
        default: return state;
    }
}

const initialState = {
    loggedInUser: {
        name: "",
        contact: "",
        email: "",
        password: "",
    },
}
export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                loggedInUser: action.payload
            }
        case "LOG_OUT":
            return {
                ...state,
                loggedInUser: {
                    name: "",
                    contact: "",
                    email: "",
                    password: "",
                }
            }

        default: return state
    }
}

const initialState1 = {
    userDetail: {
        name: "",
        email: "",
        contact: "",
        productName: "",
        price: ""

    },
}
export const userReducer = (state = initialState1, action) => {
    switch (action.type) {
        case "USER_DETAIL":
            return {
                ...state,
                userDetail: action.payload,
            }
        default: return state
    }
}

const initialStateForProduct = {
    ProductDetail: {
        productName: "iphone",
        price: "50000"

    },
}
export const productReducer = (state = initialStateForProduct, action) => {
    switch (action.type) {
        case "PRODUCT":

            return {
                ...state,
                ProductDetail: action.payload,
            }
        default: return state
    }
}


const initialState2 = {
    userAddress: {

        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        pin: ""

    },
}
export const addressReducer = (state = initialState2, action) => {
    switch (action.type) {
        case "USER_ADDRESS":
            return {

                ...state,
                userAddress: action.payload,
            }
        default: return state
    }
}
