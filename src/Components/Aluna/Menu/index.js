import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, {Component} from "react";
import "./style.scss"
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default class Menu extends Component{
    render(){

        return(

            <SideNav>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home" >
                        <NavIcon className="d-flex">
                            <Link className="d-flex" to="/home"> <HomeIcon style={{ fontSize: '2em' }}/></Link>

                        </NavIcon>
                        <NavText className="d-flex">
                            <Link to="/home" className="menu-link-primario" >Início</Link>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="videoaulas">
                        <NavIcon className="d-flex">
                            <Link className="d-flex" to="/videoaulas"><VideoLibraryIcon style={{ fontSize: '2em' }} /></Link>

                        </NavIcon>
                        <NavText>
                            <Link to="/videoaulas" className="menu-link-primario" >Videoaulas</Link>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="materiais-apoio">
                        <NavIcon className="d-flex">
                            <Link className="d-flex" to="/materiais-de-apoio"><MenuBookIcon style={{ fontSize: '2em' }} /></Link>

                        </NavIcon>
                        <NavText>
                            <Link to="/materiais-de-apoio" className="menu-link-primario" >Materiais de apoio</Link>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="materiais-apoio">
                        <NavIcon className="d-flex">
                            <Link className="d-flex" to="/entrar"><ExitToAppIcon style={{ fontSize: '2em' }} /></Link>

                        </NavIcon>
                        <NavText>
                            <Link to="/entrar" className="menu-link-primario" >Sair</Link>
                        </NavText>
                    </NavItem>

                    {/*<NavItem eventKey="materiais-complementar">*/}
                    {/*    <NavIcon>*/}
                    {/*        <Link to="/"> <i className="far fa-file-alt" style={{ fontSize: '1.75em' }} /></Link>*/}

                    {/*    </NavIcon>*/}
                    {/*    <NavText>*/}
                    {/*        <Link to="/" className="menu-link-primario" >Material complementar</Link>*/}
                    {/*    </NavText>*/}
                    {/*</NavItem>*/}

                    {/*<NavItem eventKey="museu">*/}
                    {/*    <NavIcon>*/}
                    {/*        <Link to="/">  <i className="far fa-hand-lizard" style={{ fontSize: '1.75em' }} /></Link>*/}

                    {/*    </NavIcon>*/}
                    {/*    <NavText>*/}
                    {/*        <Link to="/" className="menu-link-primario" > Museu do muco</Link>*/}
                    {/*    </NavText>*/}
                    {/*</NavItem>*/}

                    {/*<NavItem eventKey="conta">*/}
                    {/*    <NavIcon>*/}
                    {/*        <Link to="/minha-conta">  <i className="far fa-user-circle" style={{ fontSize: '1.75em' }} /></Link>*/}

                    {/*    </NavIcon>*/}
                    {/*    <NavText>*/}
                    {/*        <Link to="/minha-conta" className="menu-link-primario" > Minha conta</Link>*/}
                    {/*    </NavText>*/}
                    {/*</NavItem>*/}







                </SideNav.Nav>
            </SideNav>

        );
    }

}