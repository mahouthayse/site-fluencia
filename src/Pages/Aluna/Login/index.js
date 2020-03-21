import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import "./style.scss"
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../services/api';

export default function Login({history}){
    const { user } = useSelector( state => (state.user));
    const {email, password} = user;
    const dispatch = useDispatch();
    const [err, setErr] = useState(false);
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        localStorage.clear();
        setTimeout(() => setErr(false), 5000);

        // pegando roles
        async function getRoles(){
            const response = await api.get('/roles');
            await setRoles(response.data);
        }

        getRoles();
    }, [])

    async function handleSubmitLogin(event){
        let perfis = [];
        let top = [];
        api.post('/users/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                localStorage.setItem('authorization', response.data.token);
                localStorage.setItem('id', response.data.id);
                response.data.roles.map(index => perfis.push(index.roleId));
                perfis.map(index => {
                    roles.map(rolesIndex => {
                        if(index == rolesIndex.id) top.push(rolesIndex.name)
                    })
                });
                localStorage.setItem('roles', top);
            })
            .then( () => {
                api.get('/user-roles/count', {userId: localStorage.getItem('id')})
                .then(function(response){
                    if(response.data.count > 0){
                        history.push('/home')
                    } else {
                        setErr('Ainda não identificamos seu pagamento. Não é possivel efetuar o login!');
                    }
                })
                .catch(function (error) {
                    setErr('Ainda não identificamos seu pagamento. Não é possivel efetuar o login!');
                }); 
               
            })
            .catch(function (error) {
                setErr('Usuário e/ou senha inválido(s)!');
            });
    }

    return(
        <Grid container className="login" xs={12} sm={12} md={12} lg={12}>
            <Grid item className="login-card" xs={12} lg={6}>
                <h1 className="titulo-primario"> Login</h1>
                <label htmlFor="minhaContaSenhaNovaRepetir" className="login-label" >Email:</label>
                <input className="login-input" id="minhaContaSenhaNovaRepetir" type="text" placeholder="Insira seu e-mail" required value={email} onChange={e => dispatch({ type: 'setEmail', email: e.target.value})}/>
                <label htmlFor="minhaContaSenhaNovaRepetir" className="login-label" >Senha:</label>
                <input className="login-input" id="minhaContaSenhaNovaRepetir" type="text" placeholder="******" required value={password} onChange={e => dispatch({ type: 'setPassword', password: e.target.value})}/>
                <Link to="/" className="login-link" >Esqueceu sua senha?</Link>
                <button className="button-login btnCursor" onClick={handleSubmitLogin}>Fazer login</button>
                {(err) ? <span style={{color: '#d32f2f', textAlign: 'center', width: '100%', fontSize: '0.9rem', marginTop: 20}}>{err}</span> : ''}
            </Grid>
        </Grid>
    );
    
}