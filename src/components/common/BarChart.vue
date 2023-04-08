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
        "background": "#fff",
        "foreColor": "#373D3F",
        "fontFamily": "Roboto",
        "height": 251,
        "id": "YfzwE",
        "toolbar": {
            "show": false
        },
        "type": "bar",
        "width": 464
    },
    "plotOptions": {
        "bar": {
            "borderRadius": 10
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
    "dataLabels": {
        "enabled": false,
        "style": {
            "fontWeight": 700
        }
    },
    "grid": {
        "padding": {
            "right": 25,
            "left": 15
        }
    },
    "legend": {
        "fontSize": 14,
        "offsetY": 0,
        "markers": {
            "shape": "square",
            "size": 8
        },
        "itemMargin": {
            "vertical": 0
        }
    },
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
        "labels": {
            "style": {}
        },
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "theme": {
        "palette": "palette2"
    },
    "_chartInstances": [
        {
            "id": "60sWE",
            "chart": {
                "opts": {
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
                        "id": "60sWE"
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
                            "id": "60sWE",
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
                        "chartID": "60sWE",
                        "cuid": "3k2su2my",
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
                        "clientX": 1104,
                        "clientY": 433,
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
                                "#00B3E6",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800"
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
                                "_prevClass": "60sWE"
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
                            "lastHoverTime": 1680792238304,
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
                        "chartClass": ".apexcharts60sWE",
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
            "id": "YfzwE",
            "chart": {
                "opts": {
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
                    "yaxis": [
                        null
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
                        "chartID": "YfzwE",
                        "cuid": "9riyralm",
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
                        "clientX": 868,
                        "clientY": 277,
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
                            }
                        },
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
                        "lastXAxis": [],
                        "lastYAxis": [],
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
                        "radialSize": 74.82965808496243,
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
                        "dataChanged": true,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 7.43293578028679 165.70079907417298L 7.43293578028679 134.27559930562973Q 7.43293578028679 124.27559930562973 17.43293578028679 124.27559930562973L 12.776452600955963 124.27559930562973Q 22.776452600955963 124.27559930562973 22.776452600955963 134.27559930562973L 22.776452600955963 134.27559930562973L 22.776452600955963 165.70079907417298L 22.776452600955963 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 56.98584098219872 165.70079907417298L 56.98584098219872 92.85039953708649Q 56.98584098219872 82.85039953708649 66.98584098219871 82.85039953708649L 62.32935780286789 82.85039953708649Q 72.32935780286789 82.85039953708649 72.32935780286789 92.85039953708649L 72.32935780286789 92.85039953708649L 72.32935780286789 165.70079907417298L 72.32935780286789 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 106.53874618411064 165.70079907417298L 106.53874618411064 51.42519976854325Q 106.53874618411064 41.42519976854325 116.53874618411064 41.42519976854325L 111.88226300477982 41.42519976854325Q 121.88226300477982 41.42519976854325 121.88226300477982 51.42519976854325L 121.88226300477982 51.42519976854325L 121.88226300477982 165.70079907417298L 121.88226300477982 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 156.09165138602256 165.70079907417298L 156.09165138602256 10Q 156.09165138602256 0 166.09165138602256 0L 161.43516820669174 0Q 171.43516820669174 0 171.43516820669174 10L 171.43516820669174 10L 171.43516820669174 165.70079907417298L 171.43516820669174 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 205.6445565879345 165.70079907417298L 205.6445565879345 88.70787956023217Q 205.6445565879345 78.70787956023217 215.6445565879345 78.70787956023217L 210.98807340860367 78.70787956023217Q 220.98807340860367 78.70787956023217 220.98807340860367 88.70787956023217L 220.98807340860367 88.70787956023217L 220.98807340860367 165.70079907417298L 220.98807340860367 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 255.19746178984641 165.70079907417298L 255.19746178984641 84.56535958337784Q 255.19746178984641 74.56535958337784 265.19746178984644 74.56535958337784L 260.5409786105156 74.56535958337784Q 270.5409786105156 74.56535958337784 270.5409786105156 84.56535958337784L 270.5409786105156 84.56535958337784L 270.5409786105156 165.70079907417298L 270.5409786105156 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 304.75036699175837 165.70079907417298L 304.75036699175837 80.42283960652351Q 304.75036699175837 70.42283960652351 314.75036699175837 70.42283960652351L 310.0938838124275 70.42283960652351Q 320.0938838124275 70.42283960652351 320.0938838124275 80.42283960652351L 320.0938838124275 80.42283960652351L 320.0938838124275 165.70079907417298L 320.0938838124275 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 354.3032721936703 165.70079907417298L 354.3032721936703 101.13543949079514Q 354.3032721936703 91.13543949079514 364.3032721936703 91.13543949079514L 359.64678901433945 91.13543949079514Q 369.64678901433945 91.13543949079514 369.64678901433945 101.13543949079514L 369.64678901433945 101.13543949079514L 369.64678901433945 165.70079907417298L 369.64678901433945 165.70079907417298z"
                                    }
                                ],
                                "realIndex": "0"
                            },
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 24.776452600955963 165.70079907417298L 24.776452600955963 154.98819918990137Q 24.776452600955963 144.98819918990137 34.77645260095596 144.98819918990137L 30.119969421625136 144.98819918990137Q 40.119969421625136 144.98819918990137 40.119969421625136 154.98819918990137L 40.119969421625136 154.98819918990137L 40.119969421625136 165.70079907417298L 40.119969421625136 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 74.32935780286789 165.70079907417298L 74.32935780286789 134.27559930562973Q 74.32935780286789 124.27559930562973 84.32935780286789 124.27559930562973L 79.67287462353707 124.27559930562973Q 89.67287462353707 124.27559930562973 89.67287462353707 134.27559930562973L 89.67287462353707 134.27559930562973L 89.67287462353707 165.70079907417298L 89.67287462353707 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 123.88226300477982 165.70079907417298L 123.88226300477982 92.85039953708649Q 123.88226300477982 82.85039953708649 133.88226300477982 82.85039953708649L 129.225779825449 82.85039953708649Q 139.225779825449 82.85039953708649 139.225779825449 92.85039953708649L 139.225779825449 92.85039953708649L 139.225779825449 165.70079907417298L 139.225779825449 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 173.43516820669174 165.70079907417298L 173.43516820669174 113.56299942135811Q 173.43516820669174 103.56299942135811 183.43516820669174 103.56299942135811L 178.77868502736092 103.56299942135811Q 188.77868502736092 103.56299942135811 188.77868502736092 113.56299942135811L 188.77868502736092 113.56299942135811L 188.77868502736092 165.70079907417298L 188.77868502736092 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 222.98807340860367 165.70079907417298L 222.98807340860367 105.27795946764947Q 222.98807340860367 95.27795946764947 232.98807340860367 95.27795946764947L 228.33159022927285 95.27795946764947Q 238.33159022927285 95.27795946764947 238.33159022927285 105.27795946764947L 238.33159022927285 105.27795946764947L 238.33159022927285 165.70079907417298L 238.33159022927285 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 272.5409786105156 165.70079907417298L 272.5409786105156 92.85039953708649Q 272.5409786105156 82.85039953708649 282.5409786105156 82.85039953708649L 277.88449543118475 82.85039953708649Q 287.88449543118475 82.85039953708649 287.88449543118475 92.85039953708649L 287.88449543118475 92.85039953708649L 287.88449543118475 165.70079907417298L 287.88449543118475 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 322.0938838124275 165.70079907417298L 322.0938838124275 134.27559930562973Q 322.0938838124275 124.27559930562973 332.0938838124275 124.27559930562973L 327.4374006330967 124.27559930562973Q 337.4374006330967 124.27559930562973 337.4374006330967 134.27559930562973L 337.4374006330967 134.27559930562973L 337.4374006330967 165.70079907417298L 337.4374006330967 165.70079907417298z"
                                    },
                                    {
                                        "d": "M 371.64678901433945 165.70079907417298L 371.64678901433945 154.98819918990137Q 371.64678901433945 144.98819918990137 381.64678901433945 144.98819918990137L 376.9903058350086 144.98819918990137Q 386.9903058350086 144.98819918990137 386.9903058350086 154.98819918990137L 386.9903058350086 154.98819918990137L 386.9903058350086 165.70079907417298L 386.9903058350086 165.70079907417298z"
                                    }
                                ],
                                "realIndex": "1"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 396.4232416152954,
                        "gridHeight": 165.70079907417298,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 33.29920092582702,
                        "xAxisLabelsWidth": 49.24687576293945,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 42.57675838470459,
                        "translateY": 30,
                        "translateYAxisX": [
                            9.57675838470459
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
                            "lastHoverTime": 1680792251844,
                            "xyRatios": {
                                "yRatio": [
                                    0.2413989565741003
                                ],
                                "invertedYRatio": 0.10090225748877146,
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
                            "xaxisOffY": 166.70079907417298,
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
                                49.552905201911926,
                                99.10581040382385,
                                148.65871560573578,
                                198.2116208076477,
                                247.76452600955963,
                                297.31743121147156,
                                346.8703364133835,
                                396.4232416152954
                            ],
                            "dataPointsDividedHeight": 20.712599884271622,
                            "dataPointsDividedWidth": 49.552905201911926,
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
                                "x": 774.1767578125,
                                "y": 280.6000061035156,
                                "width": 396.4232482910156,
                                "height": 172.70079040527344,
                                "top": 280.6000061035156,
                                "right": 1170.6000061035156,
                                "bottom": 453.30079650878906,
                                "left": 774.1767578125
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
                                16.104694190621377,
                                115.21050459444523,
                                164.76340979635714,
                                214.31631499826906,
                                263.869220200181,
                                313.42212540209295,
                                362.97503060400487,
                                412.5279358059168
                            ],
                            [
                                16.104694190621377,
                                115.21050459444523,
                                164.76340979635714,
                                214.31631499826906,
                                263.869220200181,
                                313.42212540209295,
                                362.97503060400487,
                                412.5279358059168
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                124.27559930562973,
                                82.85039953708649,
                                41.42519976854325,
                                0,
                                78.70787956023217,
                                74.56535958337784,
                                70.42283960652351,
                                91.13543949079514
                            ],
                            [
                                144.98819918990137,
                                124.27559930562973,
                                82.85039953708649,
                                103.56299942135811,
                                95.27795946764947,
                                82.85039953708649,
                                124.27559930562973,
                                144.98819918990137
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
                                "width": 22.57675838470459,
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
                        "xAxisHeight": 33.29920092582702,
                        "yLogRatio": [
                            0.2413989565741003
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
                    "ev": {},
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 731.6000366210938,
                        "y": 479.8000183105469,
                        "height": 17,
                        "width": 464
                    },
                    "yAxisWidth": 27.57675838470459,
                    "yAxisWidthLeft": 27.57675838470459,
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
                    "xAxisWidth": 49.24687576293945
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
                    "defaultSize": 165.70079907417298,
                    "centerY": 82.85039953708649,
                    "centerX": 198.2116208076477,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 48.639277755225585,
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
                    "invertedYRatio": 0.10090225748877146,
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
                    "invertedYRatio": 0.10090225748877146,
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
                    "xDivision": 49.552905201911926
                }
            }
        }
    ]
}) 
    
</script>
<style lang="">
    
</style>