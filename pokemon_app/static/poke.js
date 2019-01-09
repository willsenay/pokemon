
function createChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
    
        // The data for our dataset
        data: {
            labels: ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"],
            datasets: [{
                label: "Base Stat Value",
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgb(0, 0, 0, .5)',
                data: [45, 49, 49, 65, 65, 45],
            }]
        },
    
        // Configuration options go here
        options: {
            scale: {
                ticks: {
                    min: 1,
                    max: 255
                }
            }
        }
    });
};

createChart();