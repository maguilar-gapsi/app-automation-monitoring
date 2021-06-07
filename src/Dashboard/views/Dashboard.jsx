import React from 'react';
import { Grid, Toolbar } from '@material-ui/core';
import Chart from "react-apexcharts";

const View = (props) => {
    const { 
        pie,
        donut,
        monochromepie,
        gradientdount,
        polarArea,
        bar
    } = props.charts;

    return(
        <>
            <Toolbar />
            <Grid container spacing={3}>
                <Grid item xs={4}> 
                    <Chart 
                        options={pie.options} 
                        series={pie.series} 
                        type="pie" 
                        width="380" 
                    />
                </Grid>
                <Grid item xs={4}>
                    <Chart 
                        options={donut.options} 
                        series={donut.series} 
                        type="donut" 
                        width="380" 
                    />
                </Grid>
                <Grid item xs={4}>
                    <Chart 
                        options={monochromepie.options} 
                        series={monochromepie.series} 
                        type="pie" 
                        width="380" 
                    />
                </Grid>
                <Grid item xs={4}>
                    <Chart 
                        options={gradientdount.options} 
                        series={gradientdount.series} 
                        type="donut" 
                        width="380" 
                    />
                </Grid>
                <Grid item xs={4}>
                    <Chart 
                        options={polarArea.options} 
                        series={polarArea.series} 
                        type="polarArea" 
                        width="380" 
                    />
                </Grid>
                <Grid item xs={4}>
                    <Chart 
                        options={bar.options} 
                        series={bar.series} 
                        type="bar" 
                        width="380" 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default View;