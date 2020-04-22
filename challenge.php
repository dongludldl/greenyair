<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Challenge</title>
    <h1>Your challenge is to start at <?php echo $_SESSION['starttime']; ?> </h1>
    <input type="submit" value="Accept">
    <input type="submit" value="Decline">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Spring', 'Summer','Autumn','Winter'],
          ['1am',  0.897, 0.777, 0.865, 1.028],
          ['2am',  0.755, 0.667, 0.734, 0.847],
          ['3am',  0.596, 0.539, 0.555, 0.696],
          ['4am',  0.479, 0.463, 0.467, 0.605],
          ['5am',  0.538, 0.49,  0.498, 0.693],
          ['6am',  0.775, 0.572, 0.677, 1.408],
          ['7am',  0.899, 0.608, 0.848, 1.564],
          ['8am',  0.873,  0.642, 0.882, 1.711],
          ['9am',  0.832,  0.72,  0.82, 1.576],
          ['10am',  0.8,  0.812,  0.778,   1.405],
          ['11am',  0.795,  0.938, 0.805,  1.274],
          ['12pm',  0.79, 1.074,  0.826, 1.212],
          ['1pm',  0.797,  1.161, 0.845, 1.181],
          ['2pm',  0.808,  1.277, 0.856, 1.186],
          ['3pm', 0.863, 1.421,0.91,  1.238],
          ['4pm',  0.98, 1.558, 1.061, 1.53],
          ['5pm',  1.217, 1.732, 1.349, 2.175],
          ['6pm',  1.47,  1.709, 1.58, 2.642],
          ['7pm',  1.537, 1.509, 1.483, 2.586],
          ['8pm', 1.531, 1.332,  1.414, 2.522],
          ['9pm',  1.388,  1.149, 1.285, 2.321],
          ['10pm', 1.094, 0.915, 1.019, 1.766],
          ['11pm',  0.822, 0.701, 0.793,  1.231],
          ['12am',  0.779, 0.663, 0.791, 1.009]
        ]);

        var options = {
          title: 'Average electricity consumption in a day by seasons (kWh)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
    </script>
  </head>

  <body>
     <div id="curve_chart" class="chart"></div>
  </body>
</html>
