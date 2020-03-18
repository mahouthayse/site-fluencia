import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Grid, Hidden} from "@material-ui/core";
import {Link} from 'react-router-dom';
import "./style.scss";
import MenuMobile from "../MenuMobile";

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
            <Hidden only={['md', 'lg']}>
                <MenuMobile/>
            </Hidden>

            <Hidden only={['xs', 'sm']}>

                <Grid container className="menu-wrapper" sm={12} lg={12} md={12}>
                    <Grid item className="menu-links-wrapper" sm={12} lg={7} md={9}>
                        <Link to="/" className="menu-link" >Home</Link>
                        {/*<Link to="/" className="menu-link" >Sobre</Link>*/}
                        {/*<Link to="/" className="menu-link" >Blog</Link>*/}
                        <Link to="/curso" className="menu-link" >Curso</Link>
                        <Link to="/atendimento-individual" className="menu-link" >Atendimento Individual</Link>

                        {/*<div>*/}
                        {/*    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>*/}
                        {/*        <span className="menu-link">Atendimentos</span>*/}
                        {/*    </Button>*/}
                        {/*    <Menu*/}
                        {/*        id="simple-menu"*/}
                        {/*        anchorEl={anchorEl}*/}
                        {/*        keepMounted*/}
                        {/*        open={Boolean(anchorEl)}*/}
                        {/*        onClose={handleClose}*/}
                        {/*    >*/}
                        {/*        <MenuItem onClick={handleClose}><Link to="/atendimento-individual" className="menu-link" >Atendimento Individual</Link></MenuItem>*/}
                        {/*        <MenuItem onClick={handleClose}><Link to="/atendimento-em-grupo" className="menu-link" >Atendimento em Grupo</Link></MenuItem>*/}
                        {/*    </Menu>*/}
                        {/*</div>*/}

                        {/*<Link to="/" className="menu-link" >Contato</Link>*/}
                    </Grid>

                    <Grid item className="menu-button-wrapper" sm={12} lg={5} md={3}>
                        <a href="https://aluna.fluenciacorporal.com" className="menu-button"> Área da aluna</a>
                    </Grid>
                </Grid>
            </Hidden>


        </div>
    );
}