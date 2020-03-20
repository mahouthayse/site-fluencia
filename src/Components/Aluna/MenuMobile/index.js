import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

                <ListItem button>
                    <ListItemIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                    </ListItemIcon>
                    <ListItemText><Link to="/" className="menu-link-primario" >Início</Link></ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <i className="far fa-caret-square-right" style={{ fontSize: '1.5em' }} />
                    </ListItemIcon>
                    <ListItemText><Link to="/" className="menu-link-primario" >Videoaulas</Link></ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <i className= "far fa-copy" style={{ fontSize: '1.5em' }} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link to="/" className="menu-link-primario" >Materiais de apoio</Link>
                    </ListItemText>
                </ListItem>

                {/*<ListItem button>*/}
                {/*    <ListItemIcon>*/}
                {/*        <i className="far fa-file-alt" style={{ fontSize: '1.5em' }} />*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText>*/}
                {/*        <Link to="/" className="menu-link-primario" >Material complementar</Link>*/}
                {/*    </ListItemText>*/}
                {/*</ListItem>*/}

                {/*<ListItem button>*/}
                {/*    <ListItemIcon>*/}
                {/*        <i className="far fa-hand-lizard" style={{ fontSize: '1.5em' }} />*/}
                {/*    </ListItemIcon>*/}
                {/*    /!*<ListItemText>*!/*/}
                {/*    /!*    <Link to="/" className="menu-link-primario" >Museu do muco</Link>*!/*/}
                {/*    /!*</ListItemText>*!/*/}
                {/*</ListItem>*/}

                {/*<ListItem button>*/}
                {/*    <ListItemIcon>*/}
                {/*        <i className="far fa-user-circle" style={{ fontSize: '1.5em' }} />*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText>*/}
                {/*        <Link to="/minha-conta" className="menu-link-primario" >Minha conta</Link>*/}
                {/*    </ListItemText>*/}
                {/*</ListItem>*/}



            </List>


        </div>
    );


    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><i className="fas fa-bars fa-3x"></i></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>

        </div>
    );
}