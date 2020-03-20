import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {ExpansionPanel, ListItem, ListItemText, Grid} from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.scss"
import api from '../../../services/api';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#FFF'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        textAlign: 'right',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '10%',
        fontWeight: 700
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        width: '90%'
    },
}));

export default function SideVideoaula() {
    const [cont, setCont] = useState(0);
    const { course } = useSelector( state => (state.course));
    const dispatch = useDispatch();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        async function countLessons(){
            const count =  await api.get(`/lessons/count`);
            await setCont(count.data.count);
            console.log('cont')
            console.log(count)
        }

        countLessons();
    }, [])
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    async function handleLesson(id){
        const response =  await api.get(`/lessons/${id}`);
        
        await dispatch({ type: 'SET_TODAY', today: response.data});
    }
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="center"className="" xs={12} style={{margin: '30px 0'}}>
                <Grid alignItems="center" justify="center" xs={3}>
                    <CircularProgressbar style={{path: {stroke: `rgba(242, 201, 137, 9)`}}} value={0} maxValue={1} text={`${0 * 100}%`} />
                </Grid> 
                <Grid className="pl-5 description-video" alignItems="center" justify="center" xs={8}>
                    <strong>Curso Online de Percepção de Fertilidade</strong>
                    <p style={{margin: 0}}>0 de {cont} aulas completas</p>
                </Grid> 
            </Grid>
        
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon style={{color: '#ce474d'}} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.secondaryHeading}>Parte 1</Typography>
                    <Typography className={classes.heading}>00/0{cont}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid item className="lista-aulas" xs={12} lg={12}>
                        {course.lesson.map(index => {
                            return(
                                <ListItem style={(course.today.title == index.title) ? {background: 'rgb(146, 145, 145)'} : {}} className="btnCursor" key={index.id} onClick={() => handleLesson(index.id)}>
                                    {(index.isCompleted) ? <CheckCircleIcon style={(course.today.title == index.title) ? {color: 'white'} : {color: '#74BB55'}} /> : <CheckCircleOutlineIcon style={(course.today.title == index.title) ? {color: 'white'} : {color: 'gray'}}/> }
                                    <ListItemText style={(course.today.title == index.title) ? {marginLeft: 10, color: 'white'} : {marginLeft: 10}} primary={index.title}/>
                                </ListItem>
                            )
                        })}
                        
                        {/* <ListItem>
                            <CheckCircleOutlineIcon style={{color: 'gray'}} />
                            <ListItemText style={{marginLeft: 10}} primary="Sent mail" />
                        </ListItem> */}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>






        </div>
    );
}