import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReactApexChart from "react-apexcharts";

class OxygenLevel extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [80],
            options: {
                chart: {
                    height: 200,
                    type: 'radialBar',
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 80
                            },
                            value: {
                                offsetY: 46,
                                fontSize: '16px',
                                color: '#ffffff',
                                formatter: function(val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 1,
                    colors: ['red', 'yellow', 'green']
                },
                labels: ['SpO2'],
            },


        };
    }

    render() {
        return ( <
            Col md = "6" > <
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
            div > <
            p className = "text-uppercase" >
            <
            p > Oxygen Level < /p> < /
            p > < /
            Card.Body > < /
            Card > < /
            Col >
        );
    }
}
export default OxygenLevel;