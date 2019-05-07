    
<template>
    <section class="chart-container">
        <el-row>
            <el-col >
                <div id="chartLine" style="width:800px; height:500px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data() {
            return {
                chartLine: null,   
            }
        },
        methods: {
         
     
            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    title: {
                        text: '影片占比'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['影片分类']
                    },
                 grid: {
                        left: '2%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    }, 
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['动画', '爱情', '动作', '喜剧', '奇幻', '剧情', '犯罪','冒险','战争','惊悚','悬疑','科幻','家庭','恐怖']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '影片分类',
                            type: 'line',
                            stack: '总量',
                            data: [2, 3, 5, 1, 4, 3, 5,2, 3, 5, 1, 4, 3, 5]
                        },
                       
                    ]
                });
            },
          
            drawCharts() {
                /* this.drawColumnChart()
                this.drawBarChart() */
                this.drawLineChart()
             /*    this.drawPieChart() */
            },
        },
        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/
    .el-col {
        padding: 30px 20px;
    }
</style>
