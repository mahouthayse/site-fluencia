import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Grid, Hidden} from "@material-ui/core";
import {Link} from 'react-router-dom';
import "./style.scss";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Hidden only={['lg', 'xl', 'md']}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            </Hidden>

            <Hidden only={['sm', 'xs']}>

            <Grid container className="menu-wrapper" sm={12} lg={12} md={12}>
                <Grid item className="menu-links-wrapper" sm={12} lg={7} md={9}>
                    <Link to="/" className="menu-link" >Home</Link>
                    <Link to="/" className="menu-link" >Sobre</Link>
                    <Link to="/" className="menu-link" >Blog</Link>
                    <Link to="/curso" className="menu-link" >Cursos</Link>
                    <Link to="/atendimento-individual" className="menu-link" >Atendimento</Link>
                    <Link to="/" className="menu-link" >Contato</Link>
                </Grid>

                <Grid item className="menu-button-wrapper" sm={12} lg={5} md={3}>
                    <Button className="menu-button"> Área da aluna</Button>
                </Grid>
            </Grid>
            </Hidden>


        </div>
    );
}