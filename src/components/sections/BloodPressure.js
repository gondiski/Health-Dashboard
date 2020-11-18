import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReactApexChart from "react-apexcharts";

class BloodPressure extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [120, 80],
            options: {
                chart: {
                    height: 300,
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
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function(val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '24px',
                                show: true,
                            },
                            total: {
                                show: true,
                                label: 'mmHG',
                                formatter: function(w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return '120/80'
                                }
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['systolic', 'diastolic'],
            },


        };
    }

    render() {
        return ( <
            Col md = "6" > < Card className = "bg-dark text-white shadow-lg" >
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
            div >
            <
            p className = " text-uppercase" > Blood Pressure < /p>  < /
            Card.Body > <
            /Card> < /
            Col >
        );
    }
}
export default BloodPressure;