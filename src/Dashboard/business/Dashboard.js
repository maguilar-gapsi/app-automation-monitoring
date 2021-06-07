import React from 'react';
import Header from '../../Header/business/Header';
import Footer from '../../Footer/business/Footer';
import View from '../views/Dashboard';

const Dashboard = () => {
    const charts = {
        pie: {
            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        },
        donut: {
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        },
        monochromepie: {
            series: [25, 15, 44, 55, 41, 17],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                theme: {
                    monochrome: {
                      enabled: true
                    }
                },
                plotOptions: {
                    pie: {
                      dataLabels: {
                        offset: -5
                      }
                    }
                },
                dataLabels: {
                    formatter(val, opts) {
                      const name = opts.w.globals.labels[opts.seriesIndex]
                      return [name, val.toFixed(1) + '%']
                    }
                },
                legend: {
                    show: false
                }
            }
        },
        gradientdount: {
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                      startAngle: -90,
                      endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function(val, opts) {
                      return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                }]
            }
        },
        polarArea: {
            series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
            options: {
                chart: {
                    type: 'polarArea',
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                }]
            }
        },
        bar: {
            series: [{
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                      borderRadius: 10,
                      dataLabels: {
                        position: 'top', // top, center, bottom
                      },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                      return val + "%";
                    },
                    offsetY: -20,
                    style: {
                      fontSize: '12px',
                      colors: ["#304758"]
                    }
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'top',
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      fill: {
                        type: 'gradient',
                        gradient: {
                          colorFrom: '#D8E3F0',
                          colorTo: '#BED1E6',
                          stops: [0, 100],
                          opacityFrom: 0.4,
                          opacityTo: 0.5,
                        }
                      }
                    },
                    tooltip: {
                      enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false,
                    },
                    labels: {
                      show: false,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                },
                title: {
                    text: 'Monthly Inflation in Argentina, 2002',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                      color: '#444'
                    }
                }
            }
        }  
    };

    return(
        <>
            <Header />
            <View charts={charts} />
            <Footer />
        </>
    );
};

export default Dashboard;