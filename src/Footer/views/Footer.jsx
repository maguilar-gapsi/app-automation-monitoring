import React from 'react';
import useStyles from './styles/Footer.style'
import { 
    Grid,
    Paper
} from '@material-ui/core';

const View = () => {
    const { root, paper } = useStyles();

    return(
        <div className={root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={paper}>&copy; Gapsi 2021</Paper>
                </Grid>
            </Grid> 
        </div>
    );
};

export default View;