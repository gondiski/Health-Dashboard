import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReactApexChart from "react-apexcharts";

class BreathingRate extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [75],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '12px'
                            },
                            value: {
                                formatter: function(val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#ABE5A1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 120]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Breaths/Minute'],
            },


        };
    }

    render() {
        return ( <
            Col md = "6" >
            <
            Card className = "bg-dark text-white shadow-lg" >
            <
            Card.Body >
            <
            div id = "chart" >
            <
            ReactApexChart options = { this.state.options }
            series = { this.state.series }
            type = "radialBar"
            height = { 200 }
            /> < /
            div > < p className = "text-bold text-uppercase" >
            Breathing Rate < /p> < /
            Card.Body > < /
            Card > < /
            Col >
        );
    }
}

export default BreathingRate;