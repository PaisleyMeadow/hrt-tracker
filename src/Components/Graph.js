var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('../canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }

mapDatapoint (xValue, yValue) {
    var yMap = ['Terrible', 'Bad', 'Meh', 'Ok', 'Good', 'Awesome'];
    return {
        x: xValue,
        y: yMap.indexOf(yValue)
    };
};

    render() {
        const options = {
            theme: "light2",
            animationEnabled: true,
            title: {
                text: "Mood VS Testosterone"
            },
            subtitles: [{
                text: "Click Legend to Hide or Unhide Data Series"
            }],
            axisX: {
                title: "Month"
            },
            axisY: {
                title: "Dosage (mg)",
                titleFontColor: "#6D78AD",
                lineColor: "#6D78AD",
                labelFontColor: "#6D78AD",
                tickColor: "#6D78AD"
            },
            axisY2: {
                title: "Mood",
                titleFontColor: "#51CDA0",
                lineColor: "#51CDA0",
                labelFontColor: "#51CDA0",
                tickColor: "#51CDA0"
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            data: [{
                type: "spline",
                name: "Dosage (mg)",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#,##0 mg",
                dataPoints: [
                    { x: new Date(2019, 0, 1), y: 50 },
                    { x: new Date(2019, 1, 1), y: 50 },
                    { x: new Date(2019, 2, 1), y: 50 },
                    { x: new Date(2019, 3, 1), y: 75 },
                    { x: new Date(2019, 4, 1), y: 75 },
                    { x: new Date(2019, 5, 1), y: 100 },
                    { x: new Date(2019, 6, 1), y: 124 },
                    { x: new Date(2019, 7, 1), y: 150 },
                    { x: new Date(2019, 8, 1), y: 150 },
                    { x: new Date(2019, 9, 1), y: 150 },
                    { x: new Date(2019, 10, 1), y: 175 },
                    { x: new Date(2019, 11, 1), y: 175 }
                ]
            },
            {
                type: "spline",
                name: "Average Mood",
                axisYType: "secondary",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                dataPoints: [
                    this.mapDatapoint(new Date(2019, 0, 1), 'Bad' ),
                    this.mapDatapoint(new Date(2019, 1, 1), 'Bad'),
                    this.mapDatapoint(new Date(2019, 2, 1), 'Meh'),
                    this.mapDatapoint(new Date(2019, 3, 1), 'Bad'),
                    this.mapDatapoint(new Date(2019, 4, 1), 'Ok'),
                    this.mapDatapoint(new Date(2019, 5, 1), 'Good'),
                    this.mapDatapoint(new Date(2019, 6, 1), 'Meh'),
                    this.mapDatapoint(new Date(2019, 7, 1), 'Ok'),
                    this.mapDatapoint(new Date(2019, 8, 1), 'Good'),
                    this. mapDatapoint(new Date(2019, 9, 1), 'Awesome'),
                    this. mapDatapoint(new Date(2019, 10, 1), 'Awesome'),
                    this. mapDatapoint(new Date(2019, 11, 1), 'Good'),
                ]
            }]
        }


        return (
            <div>
                <CanvasJSChart options={options}
                    onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }

}

export default Graph; 