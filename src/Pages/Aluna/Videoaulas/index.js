import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../services/api';
import {Grid, Button} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SideVideoaula from "../../../Components/Aluna/SideVideoaula";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.scss";
import ReactPlayer from 'react-player';

export default function Videoaulas(){
    const [cont, setCont] = useState(0);
    const { course } = useSelector( state => (state.course));
    const dispatch = useDispatch();
    useEffect(() => {
        
        async function loadLessons(){
            const count =  await api.get(`/lessons/count`);
            await setCont(count.data.count);

            const response =  await api.get('/lessons');
            await dispatch({ type: 'SET_LESSON', lesson: response.data});
            console.log(response.data)
            if(Object.keys(course.today) == 0){
               await dispatch({ type: 'SET_TODAY', today: response.data[0]});
            }
        }

        loadLessons();
    }, [])

    async function handleLesson(value){
        let id = '';
        if(value == 'anterior'){
            id = Number(course.today.numberLesson);
            id = (id > 1) ? id-- : id;
            // id = id.toString();
            
            // console.log(id)
        } else {
            id = Number(course.today.numberLesson);
            id = (id < cont) ? id-- : id;
            // id = id.toString();
            // console.log('id')
            // console.log(id)
        }

        const response =  await api.get(`/lessons/${id.toString()}`);
        
        await dispatch({ type: 'SET_TODAY', today: response.data});
    }
    
    return(
        <Grid container className="videoaulas" xs={12} lg={12} spacing={2} style={{height: '100%', padding: '2%'}}>
            <Grid container className="videoaula-side" xs={12} md={3}>
                <SideVideoaula/>
            </Grid>
            <Grid container className="videoaula-conteudo" xs={12} md={9} >
                {console.log('course')}
                {console.log(course)}
                <Grid container className="videoaula-conteudo-topo" xs={12} lg={12}>
                    <Grid onClick={() => handleLesson('anterior')} item direction="row" className="videoaula-conteudo-topo-previous btnCursor" xs={6} lg={6} style={{padding: '2%', display: 'flex', border: '1px solid #F5F5F5'}}>
                        <div style={{width: '15%', display: 'flex', justifyContent: 'flex-start'}}>
                            <div className="btnControl">
                                <NavigateBeforeIcon style={{fontSize: '2.5rem', textAlign: 'right', color: '#FFF'}}/>
                            </div>
                        </div>
                        <div style={{width: '80%'}} >
                            <p className="btn-subtitle-aula">Anterior</p>
                            <p className="btn-title-aula">{(Number(course.today.numberLesson) > 1) ? `Aula ${Number(course.today.numberLesson)-1}` : 'Inicio'}</p>
                        </div>
                    </Grid>
                    <Grid onClick={() => handleLesson('proximo')} item className="videoaula-conteudo-topo-next btnCursor" xs={6} lg={6} style={{padding: '2%', display: 'flex', border: '1px solid #F5F5F5'}}>
                        <div style={{width: '80%'}}>
                            <p style={{textAlign: 'right'}}className="btn-subtitle-aula">Próximo</p>
                            <p style={{textAlign: 'right'}}className="btn-title-aula">{(Number(course.today.numberLesson) < cont) ? `Aula ${Number(course.today.numberLesson)+1}` : 'Fim'}</p>
                        </div>
                        <div style={{width: '15%',display: 'flex', justifyContent: 'flex-end'}}>
                            <div className="btnControl">
                                <NavigateNextIcon style={{fontSize: '2.5rem', textAlign: 'right', color: '#FFF'}}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid container className="videoaula-conteudo-video" xs={12} lg={12}>
                        <Grid item className="videoaula-conteudo-video d-flex" xs={12} lg={12}>
                            {/* GRID DO VIDEO */}
                            {(course.today.url) ? 
                                <Grid xs={12} item lg={8} className="video-container" style={{height: '350px', background: '#000', margin: '40px'}}>
                                    <ReactPlayer style={{width: '100% !important'}} url={course.today.url} playing/> 
                                </Grid>
                                
                            : <Grid xs={12} item lg={8} style={{height: '350px', background: '#000', margin: '40px'}}></Grid>}
                            
                            <Grid lg={4} item className="videoaula-resumo">
                                <ul className="list">
                                    <li style={{marginBottom: 20}}><strong className="titulo-resumo"> O que você vai aprender?</strong></li>
                                    {(course.today.resume) ? course.today.resume.map(index => {
                                        return(
                                            <li><span className="texto-resumo">{index}</span></li>
                                        )
                                    }) : ''}
                                    <li><span className="texto-resumo"> O que é o método de percepção de fertilidade</span></li>
                                    <li><span className="texto-resumo"> A história do método de percepção de fertilidade</span></li>
                                    <li><span className="texto-resumo"> Diferenças filosóficas e metodológicas dos vários métodos</span></li>
                                    <li><span className="texto-resumo"> As vantagens de praticar percepção de fertilidade </span></li>
                                </ul>
                            </Grid>
                        </Grid>
                        {/* DESCRIÇÃO DA AULA */}
                        <Grid item className="videoaula-conteudo-video d-flex" xs={12} md={12}>
                            <Grid item className="videoaula-conteudo-video-main" xs={12} sm={12} md={8} style={{margin: '0 40px'}}>
                                <h1 className="titulo-primario">{course.today.title}</h1>
                                <p className="texto-primario text-justify">{course.today.description}</p><br/>
                            </Grid>
                            <Grid xs={12} sm={12} md={4} item className="videoaula-resumo">
                                <ul className="list">
                                    <strong style={{marginBottom: 20}} className="titulo-resumo"> Dicionario</strong>
                                    {/* {course.today.terms.map(index => {
                                        return(<li><a className="texto-resumo">{index.name}</a></li>)
                                    })} */}
                                    {(course.today.terms) ? course.today.terms.map(index => {
                                        return(<li><a className="texto-resumo">{index.name}</a></li>)
                                    }) : ''}
                                    {console.log(course.today.terms)}
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    

}