<template lang="">
    <div id="content">

        <Card class="card-graph">
            <template #title>
                <div id="title-graph">Análise mensal</div>
                <div id="subtitle-graph">Acompanhe seu consumo dos últimos 6 meses</div>
            </template>
            <template #content>
                <BarChart :series="seriesMensal" />
            </template>
        </Card>

        <Card class="card-graph">
            <template #title>
                <div id="title-graph">Dispositivos ativos</div>
                <div id="subtitle-graph">Dispositivos que emitiram sinal nas últimas 48 horas</div>
            </template>
            <template #content>
                <DonutChart />
            </template>
        </Card>

        <Card class="card-graph">
            <template #title>
                <div id="title-graph">Análise diária</div>
                <div id="subtitle-graph">Acompanhe seu consumo dos últimos 7 dias</div>
            </template>
            <template #content>
                <BarChart :series="seriesDiario" />
            </template>
        </Card>
        
        <Card class="card-graph">
            <template #title>
                <div id="title-graph">Consumo acumulado</div>
                <div id="subtitle-graph">Acompanhe seu consumo do mês acumulado até o dia de hoje</div>
            </template>
            <template #content>
                <BarStackedChart :series="seriesBarStacked" />
            </template>
        </Card>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BarChart from '@/components/common/BarChart.vue';
import DonutChart from '@/components/common/DonutChart.vue';
import BarStackedChart from '@/components/common/BarStackedChart.vue';

const seriesMensal = [
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
    ]

    const seriesDiario = [
        {
            "name": "Projeção",
            "data": [
                {
                    "x": "01/04",
                    "y": 10
                },
                {
                    "x": "02/04",
                    "y": 20
                },
                {
                    "x": "03/04",
                    "y": 30
                },
                {
                    "x": "04/04",
                    "y": 40
                },
                {
                    "x": "05/04",
                    "y": "21"
                },
                {
                    "x": "06/04",
                    "y": "22"
                },
                {
                    "x": "07/04",
                    "y": "23"
                }
            ]
        },
        {
            "name": "Consumido",
            "data": [
                {
                    "x": "01/04",
                    "y": "5"
                },
                {
                    "x": "02/04",
                    "y": "10"
                },
                {
                    "x": "03/04",
                    "y": "20"
                },
                {
                    "x": "04/04",
                    "y": "15"
                },
                {
                    "x": "05/04",
                    "y": "17"
                },
                {
                    "x": "06/04",
                    "y": "20"
                },
                {
                    "x": "07/04",
                    "y": "10"
                }
            ]
        }
    ]

    const seriesBarStacked = [
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
    ]

</script>

<style>
    #content {
        display: flex;
        flex-wrap: wrap;
    }

    .card-graph {
        margin-right: 10px;
        margin-top: 20px;
        width: 48%;
    }

    #title-graph {
        font-size: 16px;
        font-weight: bold;
    }

    #subtitle-graph {
        font-size: 14px;
    }

    @media only screen and (max-width: 700px) {
        .card-graph {
            width: 100%;
            margin-right: 0px;
        }
    }
</style>