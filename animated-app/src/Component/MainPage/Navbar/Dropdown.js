import Dropdown from 'react-bootstrap/Dropdown';
import styles from "../Navbar/style";
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button } from "@mui/material";
import { logout } from "../../../Redux/Actions/action";
import { useNavigate } from 'react-router-dom';
function DropDown() {
    //state for signIn
    const myStateForSignIn = useSelector((state) => state.signInReducer)
    let signUpData = myStateForSignIn.signIn
    let capitalLetter = signUpData.name.toUpperCase();

    //state for login and logout 
    const myStateForLogin = useSelector((state) => state.sessionReducer)
    let login = myStateForLogin.loggedInUser
    let isLoggedIn = login.email;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // function for user logout
    const logOut = () => {
        if (isLoggedIn) {
            dispatch(logout());
            navigate("/")
        }
    }
    //function for getting first character of each word
    const getFirstChar = (str) => {
        let splitWords = str.split(" ")
        let fisrtCharacter = splitWords[0].charAt(0) + splitWords[1].charAt(0)
        return fisrtCharacter;
    };

    return (
        <Dropdown>
            <Button variant="info"><Avatar sx={{ width: 40, height: 40 }}>{getFirstChar(capitalLetter)}</Avatar></Button>
            <Dropdown.Toggle split variant="" id="dropdown-custom-2" style={styles.UserFont}>
            </Dropdown.Toggle>
            <Dropdown.Menu style={styles.DropdownMenu}>
                <Dropdown.Item onClick={logOut}>LogOut</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default DropDown;
