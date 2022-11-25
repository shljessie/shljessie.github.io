google.setOnLoadCallback(drawCharts());

function drawCharts() {
  drawChart('temp_chart',
    'Temperature in Box Environment over Time',
    'Temperature (\xB0C)',
    [
      ['Time', 'Normal Glass', 'Static Tint', 'Dynamic Tint'],
      [new Date('2014-08-20T20:30:22.226Z'),  37.95,     38.81,  38.98],
      [new Date('2014-08-20T20:32:41.380Z'),  36.075,    37.395,   39.13],
      [new Date('2014-08-20T20:35:53.968Z'),  37.475,    39.64,   39.78],
      [new Date('2014-08-20T20:38:25.187Z'),  40.15,     40.39,   40.54],
      [new Date('2014-08-20T20:40:38.763Z'),  41.55,     41.03,   41.875],
      [new Date('2014-08-20T20:42:45.698Z'),  45.59,     41.7,   44.74],
      [new Date('2014-08-20T20:45:58.258Z'),  47.8,      44.69,   46.42],
      [new Date('2014-08-20T20:48:12.847Z'),  48.425,    46.1,   47.208],
      [new Date('2014-08-20T20:50:33.512Z'),  51.85,     46.85,   48.57],
      [new Date('2014-08-20T20:52:47.091Z'),  52.8,      47.3,   49.11]
    ]);

  drawChart('bright_chart',
    'Brightness in Box Environment over Time',
    'Brightness (lux)',
    [
      ['Time', 'Normal Glass', 'Static Tint', 'Dynamic Tint'],
      [new Date('2014-08-20T20:30:22.226Z'),  237.4,      86.84,   145.38],
      [new Date('2014-08-20T20:32:41.380Z'),  148.81,     77.18,   140.17],
      [new Date('2014-08-20T20:35:53.968Z'),  158.25,     80.3,    147.59],
      [new Date('2014-08-20T20:38:25.187Z'),  177.74,     81.98,   150.19],
      [new Date('2014-08-20T20:40:38.763Z'),  134.75,     79.91,   147.11],
      [new Date('2014-08-20T20:42:45.698Z'),  234.47,     61.51,   135.95],
      [new Date('2014-08-20T20:45:58.258Z'),  243.16,     94.88,   138.73],
      [new Date('2014-08-20T20:48:12.847Z'),  250.79,     97.89,   141.63],
      [new Date('2014-08-20T20:50:33.512Z'),  310.25,     99.66,   139.30],
      [new Date('2014-08-20T20:52:47.091Z'),  322.49,     86.96,   140.17]
    ]);
}

function drawChart(elementId, title, vAxisTitle, matrix) {
  var data = google.visualization.arrayToDataTable(matrix);
  var date_formatter = new google.visualization.DateFormat({ 
      pattern: "h:mm a"
  }); 
  date_formatter.format(data, 0);
  var options = {
    title: title,
    curveType: 'function',
    vAxis: {title: vAxisTitle},
    hAxis: {title: 'Time of Day'}
  };

  var chart = new google.visualization.LineChart(document.getElementById(elementId));

  chart.draw(data, options);
}
/*
     FILE ARCHIVED ON 04:09:40 Dec 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:16:31 Oct 27, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/