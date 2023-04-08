<template lang="">
    <div id="chart">
        <apexchart
        :options="options"
        :series="props.series"
        height="300"
        ></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  series: {
    type: Array,
    required: true,
  },
});

    const options = ref({
    "chart": {
        "animations": {
            "enabled": false,
            "easing": "swing"
        },
        "foreColor": "#333",
        "fontFamily": "Roboto",
        "height": 256,
        "id": "DLv9V",
        "stacked": true,
        "stackType": "100%",
        "toolbar": {
            "show": false
        },
        "type": "bar",
        "width": 400,
        "zoom": {
            "enabled": false
        }
    },
    "plotOptions": {
        "bar": {
            "horizontal": true,
            "barHeight": "17%",
            "borderRadius": 10,
            "dataLabels": {
                "position": "center"
            }
        },
        "radialBar": {
            "hollow": {
                "background": "#fff"
            },
            "dataLabels": {
                "name": {},
                "value": {},
                "total": {}
            }
        },
        "pie": {
            "donut": {
                "labels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            }
        }
    },
    "colors": [
        "#454D6A",
        "#00B3E6",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A"
    ],
    "dataLabels": {
        "style": {
            "fontWeight": 700,
            "colors": [
                "#fff"
            ]
        },
        "background": {
            "enabled": false
        }
    },
    "grid": {
        "padding": {
            "right": 25,
            "left": 15
        }
    },
    "legend": {
        "horizontalAlign": "left",
        "fontSize": 14,
        "offsetX": -51,
        "offsetY": 7,
        "markers": {
            "shape": "square",
            "size": 8
        },
        "itemMargin": {
            "horizontal": 50,
            "vertical": 3
        }
    },
    "series": [
        {
            "name": "Consumo acumulado",
            "data": [
                {
                    "x": "",
                    "y": 10
                }
            ]
        },
        {
            "name": "Consumo previsto",
            "data": [
                {
                    "x": "",
                    "y": 20
                }
            ]
        }
    ],
    "tooltip": {
        "shared": false,
        "intersect": true
    },
    "xaxis": {
        "labels": {
            "trim": true,
            "style": {}
        },
        "tickPlacement": "between",
        "title": {
            "style": {
                "fontWeight": 700
            }
        },
        "tooltip": {
            "enabled": false
        }
    },
    "yaxis": {
        "max": 100,
        "min": 0,
        "labels": {
            "style": {
                "colors": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        }
    },
    "theme": {
        "palette": "palette4"
    },
    "_chartInstances": [
        {
            "id": "YfzwE",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Projeção",
                            "data": [
                                {
                                    "x": "Janeiro",
                                    "y": 10
                                },
                                {
                                    "x": "Fevereiro",
                                    "y": 20
                                },
                                {
                                    "x": "Março",
                                    "y": 30
                                },
                                {
                                    "x": "Abril",
                                    "y": 40
                                },
                                {
                                    "x": "Maio",
                                    "y": "21"
                                },
                                {
                                    "x": "Junho",
                                    "y": "22"
                                },
                                {
                                    "x": "Julho",
                                    "y": "23"
                                },
                                {
                                    "x": "Agosto",
                                    "y": "18"
                                }
                            ]
                        },
                        {
                            "name": "Consumido",
                            "data": [
                                {
                                    "x": "Janeiro",
                                    "y": "5"
                                },
                                {
                                    "x": "Fevereiro",
                                    "y": "10"
                                },
                                {
                                    "x": "Março",
                                    "y": "20"
                                },
                                {
                                    "x": "Abril",
                                    "y": "15"
                                },
                                {
                                    "x": "Maio",
                                    "y": "17"
                                },
                                {
                                    "x": "Junho",
                                    "y": "20"
                                },
                                {
                                    "x": "Julho",
                                    "y": 10
                                },
                                {
                                    "x": "Agosto",
                                    "y": "5"
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "#fff",
                        "foreColor": "#373D3F",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 251,
                        "width": 464,
                        "id": "YfzwE"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "colors": [
                        "#454D6A",
                        "#00B3E6",
                        "#4caf50",
                        "#f9ce1d",
                        "#FF9800",
                        "#454D6A",
                        "#00B3E6",
                        "#4caf50",
                        "#f9ce1d",
                        "#FF9800",
                        "#454D6A",
                        "#00B3E6",
                        "#4caf50",
                        "#f9ce1d",
                        "#FF9800",
                        "#454D6A"
                    ],
                    "theme": {
                        "mode": "light",
                        "palette": "palette2"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400
                            }
                        },
                        "axisBorder": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "axisTicks": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            }
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": false
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": true,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.5
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 0,
                            "right": 25,
                            "bottom": 0,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "swing",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "#fff",
                            "locales": [
                                {
                                    "name": "en",
                                    "options": {
                                        "months": [
                                            "January",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                            "August",
                                            "September",
                                            "October",
                                            "November",
                                            "December"
                                        ],
                                        "shortMonths": [
                                            "Jan",
                                            "Feb",
                                            "Mar",
                                            "Apr",
                                            "May",
                                            "Jun",
                                            "Jul",
                                            "Aug",
                                            "Sep",
                                            "Oct",
                                            "Nov",
                                            "Dec"
                                        ],
                                        "days": [
                                            "Sunday",
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday",
                                            "Saturday"
                                        ],
                                        "shortDays": [
                                            "Sun",
                                            "Mon",
                                            "Tue",
                                            "Wed",
                                            "Thu",
                                            "Fri",
                                            "Sat"
                                        ],
                                        "toolbar": {
                                            "exportToSVG": "Download SVG",
                                            "exportToPNG": "Download PNG",
                                            "exportToCSV": "Download CSV",
                                            "menu": "Menu",
                                            "selection": "Selection",
                                            "selectionZoom": "Selection Zoom",
                                            "zoomIn": "Zoom In",
                                            "zoomOut": "Zoom Out",
                                            "pan": "Panning",
                                            "reset": "Reset Zoom"
                                        }
                                    }
                                }
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#373D3F",
                            "fontFamily": "Roboto",
                            "height": 251,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "YfzwE",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "bar",
                            "width": 464,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.85,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0,
                                "shape": "square",
                                "size": 8
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": false,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette2",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "YfzwE",
                        "cuid": "mwud8hqd",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "clientX": 956,
                        "clientY": 468,
                        "fill": {
                            "colors": [
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#454D6A",
                                "#454D6A",
                                "#00B3E6"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Projeção",
                                "data": [
                                    {
                                        "x": "Janeiro",
                                        "y": 10
                                    },
                                    {
                                        "x": "Fevereiro",
                                        "y": 20
                                    },
                                    {
                                        "x": "Março",
                                        "y": 30
                                    },
                                    {
                                        "x": "Abril",
                                        "y": 40
                                    },
                                    {
                                        "x": "Maio",
                                        "y": "21"
                                    },
                                    {
                                        "x": "Junho",
                                        "y": "22"
                                    },
                                    {
                                        "x": "Julho",
                                        "y": "23"
                                    },
                                    {
                                        "x": "Agosto",
                                        "y": "18"
                                    }
                                ]
                            },
                            {
                                "name": "Consumido",
                                "data": [
                                    {
                                        "x": "Janeiro",
                                        "y": "5"
                                    },
                                    {
                                        "x": "Fevereiro",
                                        "y": "10"
                                    },
                                    {
                                        "x": "Março",
                                        "y": "20"
                                    },
                                    {
                                        "x": "Abril",
                                        "y": "15"
                                    },
                                    {
                                        "x": "Maio",
                                        "y": "17"
                                    },
                                    {
                                        "x": "Junho",
                                        "y": "20"
                                    },
                                    {
                                        "x": "Julho",
                                        "y": 10
                                    },
                                    {
                                        "x": "Agosto",
                                        "y": "5"
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "lastYAxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "columnSeries": null,
                        "labels": [
                            "Janeiro",
                            "Fevereiro",
                            "Março",
                            "Abril",
                            "Maio",
                            "Junho",
                            "Julho",
                            "Agosto"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 94.48780487804879,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 464,
                        "svgHeight": 251,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "YfzwE"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elLegendForeign": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 409,
                        "gridHeight": 206,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1680812007452,
                            "xyRatios": {
                                "yRatio": [
                                    0.1941747572815534
                                ],
                                "invertedYRatio": 0.097799511002445,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 207,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                51.125,
                                102.25,
                                153.375,
                                204.5,
                                255.625,
                                306.75,
                                357.875,
                                409
                            ],
                            "dataPointsDividedHeight": 25.75,
                            "dataPointsDividedWidth": 51.125,
                            "tooltipTitle": {},
                            "legendLabels": {
                                "0": {},
                                "1": {}
                            },
                            "ttItems": [
                                {},
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40,
                                21,
                                22,
                                23,
                                18
                            ],
                            [
                                5,
                                10,
                                20,
                                15,
                                17,
                                20,
                                10,
                                5
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                66.66666666666667,
                                66.66666666666667,
                                60,
                                72.72727272727273,
                                55.26315789473684,
                                52.38095238095238,
                                69.6969696969697,
                                78.26086956521739
                            ],
                            [
                                33.333333333333336,
                                33.333333333333336,
                                40,
                                27.272727272727273,
                                44.73684210526316,
                                47.61904761904762,
                                30.303030303030305,
                                21.73913043478261
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ],
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null,
                            [
                                "Janeiro",
                                "Fevereiro",
                                "Março",
                                "Abril",
                                "Maio",
                                "Junho",
                                "Julho",
                                "Agosto"
                            ]
                        ],
                        "seriesZ": [
                            [],
                            []
                        ],
                        "seriesNames": [
                            "Projeção",
                            "Consumido"
                        ],
                        "seriesTotals": [
                            184,
                            102
                        ],
                        "seriesLog": [
                            null,
                            null
                        ],
                        "seriesColors": [
                            null,
                            null
                        ],
                        "stackedSeriesTotals": [
                            15,
                            30,
                            50,
                            55,
                            38,
                            42,
                            33,
                            23
                        ],
                        "seriesXvalues": [
                            [
                                16.615625,
                                118.86562500000001,
                                169.990625,
                                221.115625,
                                272.24062499999997,
                                323.36562499999997,
                                374.49062499999997,
                                425.61562499999997
                            ],
                            [
                                16.615625,
                                118.86562500000001,
                                169.990625,
                                221.115625,
                                272.24062499999997,
                                323.36562499999997,
                                374.49062499999997,
                                425.61562499999997
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                154.5,
                                103,
                                51.5,
                                0,
                                97.85,
                                92.7,
                                87.55,
                                113.3
                            ],
                            [
                                180.25,
                                154.5,
                                103,
                                128.75,
                                118.45,
                                103,
                                154.5,
                                180.25
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 8,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 40,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            40
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    10,
                                    20,
                                    30,
                                    40
                                ],
                                "niceMin": 0,
                                "niceMax": 40
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            40
                        ],
                        "zRange": null,
                        "dataPoints": 8,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsYfzwE",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "yLogRatio": [
                            0.1941747572815534
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Janeiro",
                        "Fevereiro",
                        "Março",
                        "Abril",
                        "Maio",
                        "Junho",
                        "Julho",
                        "Agosto"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "colors": [],
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 206,
                    "centerY": 103,
                    "centerX": 204.5,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 61.41707317073171,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.097799511002445,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "bar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.097799511002445,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 2,
                    "barHelpers": {},
                    "totalItems": 16,
                    "visibleI": 1,
                    "visibleItems": 8,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 1,
                    "isReversed": false
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 51.125
                }
            }
        },
        {
            "id": "DLv9V",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Bar 1"
                        },
                        {
                            "name": "Bar 2"
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 230,
                        "width": 400,
                        "stacked": true,
                        "stackType": "100%",
                        "id": "DLv9V"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": true,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "center"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": true,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": false,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "convertedCatToNumeric": false
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "forceNiceScale": false,
                            "max": 100,
                            "min": 0,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": true,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back"
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "globals": {
                        "chartID": "DLv9V",
                        "cuid": "2epddoc9",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "clientX": 789,
                        "clientY": 532,
                        "fill": {
                            "colors": [
                                "#454D6A",
                                "#00B3E6",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {
                                "colors": [
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff"
                                ]
                            }
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {
                            "annotations": {
                                "position": "front",
                                "texts": [],
                                "images": [],
                                "shapes": []
                            },
                            "fill": {
                                "type": "solid",
                                "opacity": 0.85,
                                "gradient": {
                                    "shade": "dark",
                                    "type": "horizontal",
                                    "shadeIntensity": 0.5,
                                    "inverseColors": true,
                                    "opacityFrom": 1,
                                    "opacityTo": 1
                                },
                                "image": {
                                    "src": []
                                },
                                "pattern": {
                                    "style": "squares",
                                    "width": 6,
                                    "height": 6,
                                    "strokeWidth": 2
                                }
                            },
                            "forecastDataPoints": {
                                "count": 0,
                                "fillOpacity": 0.5,
                                "dashArray": 4
                            },
                            "labels": [],
                            "markers": {
                                "discrete": [],
                                "size": 0,
                                "strokeColors": "#fff",
                                "strokeWidth": 2,
                                "strokeOpacity": 0.9,
                                "strokeDashArray": 0,
                                "fillOpacity": 1,
                                "shape": "circle",
                                "width": 8,
                                "height": 8,
                                "radius": 2,
                                "offsetX": 0,
                                "offsetY": 0,
                                "showNullDataPoints": true,
                                "hover": {
                                    "sizeOffset": 3
                                }
                            },
                            "noData": {
                                "align": "center",
                                "verticalAlign": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "14px"
                                }
                            },
                            "responsive": [],
                            "states": {
                                "normal": {
                                    "filter": {
                                        "type": "none",
                                        "value": 0
                                    }
                                },
                                "hover": {
                                    "filter": {
                                        "type": "lighten",
                                        "value": 0.1
                                    }
                                },
                                "active": {
                                    "allowMultipleDataPointsSelection": false,
                                    "filter": {
                                        "type": "darken",
                                        "value": 0.5
                                    }
                                }
                            },
                            "title": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 0,
                                "floating": false,
                                "style": {
                                    "fontSize": "14px",
                                    "fontWeight": 900
                                }
                            },
                            "subtitle": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 30,
                                "floating": false,
                                "style": {
                                    "fontSize": "12px",
                                    "fontWeight": 400
                                }
                            },
                            "stroke": {
                                "show": true,
                                "curve": "smooth",
                                "lineCap": "butt",
                                "width": 2,
                                "dashArray": 0
                            },
                            "yaxis": [
                                null
                            ]
                        },
                        "initialSeries": [
                            {
                                "name": "Consumo acumulado",
                                "data": [
                                    {
                                        "x": "",
                                        "y": 10
                                    }
                                ]
                            },
                            {
                                "name": "Consumo previsto",
                                "data": [
                                    {
                                        "x": "",
                                        "y": 20
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": [],
                        "lastYAxis": [],
                        "columnSeries": null,
                        "labels": [
                            ""
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 61.17112149959658,
                        "zoomEnabled": false,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 400,
                        "svgHeight": 256,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "DLv9V"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elLegendForeign": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": true,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 0.1 54.391815634298325L 115.1 54.391815634298325Q 115.1 54.391815634298325 115.1 54.391815634298325L 115.1 81.30898343987465Q 115.1 81.30898343987465 115.1 81.30898343987465L 115.1 81.30898343987465L 0.1 81.30898343987465L 0.1 81.30898343987465z"
                                    }
                                ],
                                "realIndex": "0"
                            },
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 115.1 54.391815634298325L 335.1 54.391815634298325Q 345.1 54.391815634298325 345.1 64.39181563429833L 345.1 71.30898343987465Q 345.1 81.30898343987465 335.1 81.30898343987465L 335.1 81.30898343987465L 115.1 81.30898343987465L 115.1 81.30898343987465z"
                                    }
                                ],
                                "realIndex": "1"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [
                            [
                                {
                                    "x": 57.599999999999994,
                                    "y": 73.05039982318878,
                                    "width": 22.27656364440918,
                                    "height": 14.40000057220459
                                }
                            ],
                            [
                                {
                                    "x": 230.10000000000002,
                                    "y": 73.05039982318878,
                                    "width": 22.27656364440918,
                                    "height": 14.40000057220459
                                }
                            ]
                        ],
                        "lastDrawnDataLabelsIndexes": [
                            [
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        ],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 345,
                        "gridHeight": 137.70079907417298,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 33.29920092582702,
                        "xAxisLabelsWidth": 29.01484489440918,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -8,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1680812977043,
                            "xyRatios": {
                                "yRatio": [
                                    0.7262121982758769
                                ],
                                "invertedYRatio": 0.2898550724637681,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 138.70079907417298,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 0,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                345
                            ],
                            "dataPointsDividedHeight": 137.70079907417298,
                            "dataPointsDividedWidth": 345,
                            "tooltipTitle": {},
                            "legendLabels": {
                                "0": {},
                                "1": {}
                            },
                            "ttItems": [
                                {},
                                {}
                            ],
                            "seriesBound": {
                                "x": 825.6000366210938,
                                "y": 291.6000061035156,
                                "width": 346.5,
                                "height": 144.70079040527344,
                                "top": 291.6000061035156,
                                "right": 1172.1000366210938,
                                "bottom": 436.30079650878906,
                                "left": 825.6000366210938
                            }
                        },
                        "series": [
                            [
                                10
                            ],
                            [
                                20
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                33.333333333333336
                            ],
                            [
                                66.66666666666667
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null
                            ],
                            [
                                null
                            ]
                        ],
                        "seriesX": [
                            null,
                            [
                                ""
                            ]
                        ],
                        "seriesZ": [
                            [],
                            []
                        ],
                        "seriesNames": [
                            "Consumo acumulado",
                            "Consumo previsto"
                        ],
                        "seriesTotals": [
                            10,
                            20
                        ],
                        "seriesLog": [
                            null,
                            null
                        ],
                        "seriesColors": [
                            null,
                            null
                        ],
                        "stackedSeriesTotals": [
                            30
                        ],
                        "seriesXvalues": [
                            [
                                115.1
                            ],
                            [
                                345.1
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                194.84663068995476
                            ],
                            [
                                194.84663068995476
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 0,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 100,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            100
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    20,
                                    40,
                                    60,
                                    80,
                                    100
                                ],
                                "niceMin": 0,
                                "niceMax": 100
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            100
                        ],
                        "zRange": null,
                        "dataPoints": 1,
                        "xTickAmount": 1,
                        "xyCharts": true,
                        "isBarHorizontal": true,
                        "chartClass": ".apexchartsDLv9V",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 33.29920092582702,
                        "yLogRatio": [
                            0.7262121982758769
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        ""
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "colors": [],
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "ev": {},
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 764.6000366210938,
                        "y": 469.20001220703125,
                        "height": 50,
                        "width": 431
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 10,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 33.29920092582702,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 29.01484489440918
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 137.70079907417298,
                    "centerY": 68.85039953708649,
                    "centerX": 172.5,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 39.761228974737776,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": true,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.2898550724637681,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "annotations": {
                    "graphics": {},
                    "invertAxis": true,
                    "helpers": {},
                    "xAxisAnnotations": {
                        "invertAxis": true
                    },
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 345
                },
                "bar": {
                    "barOptions": {
                        "horizontal": true,
                        "columnWidth": "70%",
                        "barHeight": "70%",
                        "distributed": false,
                        "borderRadius": 10,
                        "rangeBarOverlap": true,
                        "rangeBarGroupRows": false,
                        "colors": {
                            "backgroundBarOpacity": 1,
                            "backgroundBarRadius": 0
                        },
                        "dataLabels": {
                            "position": "center",
                            "maxItems": 100,
                            "hideOverflowingLabels": true,
                            "orientation": "horizontal"
                        }
                    },
                    "isHorizontal": true,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xyRatios": {
                        "yRatio": [
                            0.7262121982758769
                        ],
                        "invertedYRatio": 0.2898550724637681,
                        "zRatio": null,
                        "xRatio": null,
                        "initialXRatio": null,
                        "invertedXRatio": null,
                        "baseLineInvertedY": 0.1,
                        "baseLineY": [
                            0
                        ],
                        "baseLineX": 0
                    },
                    "xRatio": null,
                    "initialXRatio": null,
                    "yRatio": [
                        0.7262121982758769
                    ],
                    "invertedXRatio": null,
                    "invertedYRatio": 0.2898550724637681,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 2,
                    "barHelpers": {},
                    "series": [
                        [
                            10
                        ],
                        [
                            20
                        ]
                    ],
                    "totalItems": 2,
                    "visibleI": 1,
                    "visibleItems": 1,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 1,
                    "isReversed": false
                }
            }
        }
    ]
}) 
    
</script>
<style lang="">
    
</style>