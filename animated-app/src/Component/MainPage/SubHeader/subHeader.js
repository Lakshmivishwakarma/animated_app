// import "../Component/Luck.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../SubHeader/style";
import { FaMobile, FaDesktop } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function SubHeader() {

    return (
        <div>
            <div className='d-flex justify-content-center' style={styles.SubHeader}>
                <div>
                    <Button variant="info" >
                        <Link to="Products/iphone" style={styles.FontDesignWithMargin}>
                            <FaMobile size={20} style={styles.FontDesign} /> iPhone
                        </Link>
                    </Button>
                </div>
                <div>
                    <Button variant="info">
                        < Link to="Products/mac" style={styles.FontDesignWithMargin}>
                            <FaDesktop size={20} style={styles.FontDesign} /> Mac
                        </Link>
                    </Button>
                </div>
                <div>
                    <Button variant="info">
                        <Link to="Products/iPad" style={styles.FontDesignWithMargin}>
                            <FaMobile size={20} style={styles.FontDesign} /> iPad
                        </Link>
                    </Button>
                </div>
                <div>
                    <Button variant="text" color="secondary">
                        <Typography style={styles.FontDesignWithMargin}>
                            <FaDesktop size={20} style={styles.FontDesign} /> TV
                        </Typography>
                    </Button>
                </div>
            </div>

            {/* for nesting router */}
            <Outlet />
        </div>
    );
}
export default SubHeader;
