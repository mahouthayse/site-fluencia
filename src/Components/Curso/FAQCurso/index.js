import React from 'react';
import {Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


export default function FAQCurso() {

    return (
        <Grid container className="faq-wrapper" xs={12} md={12}>

            <Grid container className="faq-content" xs={12} md={8}>

        <div className="expansion-panel-faq">
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="faq-expansion-header">Homem pode fazer o curso?</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <span className="faq-expansion-text">
                        Sim! O curso é voltado para pessoas que menstruam, mas se você tem interesse em aprender, é muito bem-vindo!
                    </span>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="faq-expansion-header">Homem pode fazer o curso?</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <span className="faq-expansion-text">
                        Sim! O curso é voltado para pessoas que menstruam, mas se você tem interesse em aprender, é muito bem-vindo!
                    </span>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<FontAwesomeIcon className="faq-icon-primary" icon={faAngleDown} size="1.5x" color="#CA4B49"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="faq-expansion-header">Homem pode fazer o curso?</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <span className="faq-expansion-text">
                        Sim! O curso é voltado para pessoas que menstruam, mas se você tem interesse em aprender, é muito bem-vindo!
                    </span>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
            </Grid>
        </Grid>
    );
}