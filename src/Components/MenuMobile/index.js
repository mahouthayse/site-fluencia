import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import "./style.scss"
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function MenuMobile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
            <List>
                   <ListItem>
                    <ListItemText><Link to="/" className="menu-link-primario" >Home</Link></ListItemText>
                    </ListItem>

                {/*<ListItem>*/}
                {/*    <ListItemText><Link to="/" className="menu-link-primario" >Sobre</Link></ListItemText>*/}
                {/*</ListItem>*/}

                <ListItem>
                    <ListItemText><Link to="/curso" className="menu-link-primario" >Curso</Link></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText><Link to="/atendimento-individual" className="menu-link-primario" >Atendimento Individual</Link></ListItemText>
                </ListItem>

                {/*<ListItem>*/}
                {/*    <ListItemText><Link to="/" className="menu-link-primario" >Contato</Link></ListItemText>*/}
                {/*</ListItem>*/}

                <ListItem>
                    <ListItemText><a href="https://aluna.fluenciacorporal.com" className="menu-link-primario" >Área da aluna</a></ListItemText>
                </ListItem>

            </List>

        </div>
    );


    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>

        </div>
    );
}