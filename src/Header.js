import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <AppBar className="header-navigation" position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >

                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6"
                            component="div" sx={{flexGrow: 1}}>
                    Amer On Database Lab 3
                </Typography>
                {
                    props.next.map((next) => (
                            <Link className="transition" to={next[0]}>
                                <Button color="inherit">{next[1]}</Button>
                            </Link>
                        )
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;
