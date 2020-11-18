import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReactApexChart from "react-apexcharts";

class HeartRate extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [74],
            options: {
                chart: {
                    height: 200,
                    type: 'radialBar',
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 80
                            },
                            value: {
                                offsetY: 46,
                                fontSize: '16px',
                                color: "white",
                                formatter: function(val) {
                                    return val;
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 0
                },
                labels: ['BPM'],
            },


        };
    }
    render() {
        return ( <
            Col md = "6 mb-3" >
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
            height = { 180 }
            /> < /
            div >

            <
            p className = "text-bold text-uppercase" >
            Heart Rate <
            /p>    < /
            Card.Body > < /
            Card > < /Col >
        );
    }
}

export default HeartRate;