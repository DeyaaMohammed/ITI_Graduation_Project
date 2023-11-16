/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 4649.0, "series": [{"data": [[0.0, 8.0], [0.1, 8.0], [0.2, 8.0], [0.3, 8.0], [0.4, 8.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 15.0], [21.3, 15.0], [21.4, 15.0], [21.5, 15.0], [21.6, 15.0], [21.7, 15.0], [21.8, 15.0], [21.9, 15.0], [22.0, 15.0], [22.1, 15.0], [22.2, 15.0], [22.3, 15.0], [22.4, 15.0], [22.5, 95.0], [22.6, 95.0], [22.7, 95.0], [22.8, 95.0], [22.9, 95.0], [23.0, 95.0], [23.1, 95.0], [23.2, 95.0], [23.3, 95.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 95.0], [23.8, 95.0], [23.9, 95.0], [24.0, 95.0], [24.1, 95.0], [24.2, 95.0], [24.3, 95.0], [24.4, 95.0], [24.5, 95.0], [24.6, 95.0], [24.7, 95.0], [24.8, 95.0], [24.9, 95.0], [25.0, 114.0], [25.1, 114.0], [25.2, 114.0], [25.3, 114.0], [25.4, 114.0], [25.5, 114.0], [25.6, 114.0], [25.7, 114.0], [25.8, 114.0], [25.9, 114.0], [26.0, 114.0], [26.1, 114.0], [26.2, 114.0], [26.3, 114.0], [26.4, 114.0], [26.5, 114.0], [26.6, 114.0], [26.7, 114.0], [26.8, 114.0], [26.9, 114.0], [27.0, 114.0], [27.1, 114.0], [27.2, 114.0], [27.3, 114.0], [27.4, 114.0], [27.5, 252.0], [27.6, 252.0], [27.7, 252.0], [27.8, 252.0], [27.9, 252.0], [28.0, 252.0], [28.1, 252.0], [28.2, 252.0], [28.3, 252.0], [28.4, 252.0], [28.5, 252.0], [28.6, 252.0], [28.7, 252.0], [28.8, 252.0], [28.9, 252.0], [29.0, 252.0], [29.1, 252.0], [29.2, 252.0], [29.3, 252.0], [29.4, 252.0], [29.5, 252.0], [29.6, 252.0], [29.7, 252.0], [29.8, 252.0], [29.9, 252.0], [30.0, 315.0], [30.1, 315.0], [30.2, 315.0], [30.3, 315.0], [30.4, 315.0], [30.5, 315.0], [30.6, 315.0], [30.7, 315.0], [30.8, 315.0], [30.9, 315.0], [31.0, 315.0], [31.1, 315.0], [31.2, 315.0], [31.3, 315.0], [31.4, 315.0], [31.5, 315.0], [31.6, 315.0], [31.7, 315.0], [31.8, 315.0], [31.9, 315.0], [32.0, 315.0], [32.1, 315.0], [32.2, 315.0], [32.3, 315.0], [32.4, 315.0], [32.5, 598.0], [32.6, 598.0], [32.7, 598.0], [32.8, 598.0], [32.9, 598.0], [33.0, 598.0], [33.1, 598.0], [33.2, 598.0], [33.3, 598.0], [33.4, 598.0], [33.5, 598.0], [33.6, 598.0], [33.7, 598.0], [33.8, 598.0], [33.9, 598.0], [34.0, 598.0], [34.1, 598.0], [34.2, 598.0], [34.3, 598.0], [34.4, 598.0], [34.5, 598.0], [34.6, 598.0], [34.7, 598.0], [34.8, 598.0], [34.9, 598.0], [35.0, 604.0], [35.1, 604.0], [35.2, 604.0], [35.3, 604.0], [35.4, 604.0], [35.5, 604.0], [35.6, 604.0], [35.7, 604.0], [35.8, 604.0], [35.9, 604.0], [36.0, 604.0], [36.1, 604.0], [36.2, 604.0], [36.3, 604.0], [36.4, 604.0], [36.5, 604.0], [36.6, 604.0], [36.7, 604.0], [36.8, 604.0], [36.9, 604.0], [37.0, 604.0], [37.1, 604.0], [37.2, 604.0], [37.3, 604.0], [37.4, 604.0], [37.5, 790.0], [37.6, 790.0], [37.7, 790.0], [37.8, 790.0], [37.9, 790.0], [38.0, 790.0], [38.1, 790.0], [38.2, 790.0], [38.3, 790.0], [38.4, 790.0], [38.5, 790.0], [38.6, 790.0], [38.7, 790.0], [38.8, 790.0], [38.9, 790.0], [39.0, 790.0], [39.1, 790.0], [39.2, 790.0], [39.3, 790.0], [39.4, 790.0], [39.5, 790.0], [39.6, 790.0], [39.7, 790.0], [39.8, 790.0], [39.9, 790.0], [40.0, 800.0], [40.1, 800.0], [40.2, 800.0], [40.3, 800.0], [40.4, 800.0], [40.5, 800.0], [40.6, 800.0], [40.7, 800.0], [40.8, 800.0], [40.9, 800.0], [41.0, 800.0], [41.1, 800.0], [41.2, 800.0], [41.3, 800.0], [41.4, 800.0], [41.5, 800.0], [41.6, 800.0], [41.7, 800.0], [41.8, 800.0], [41.9, 800.0], [42.0, 800.0], [42.1, 800.0], [42.2, 800.0], [42.3, 800.0], [42.4, 800.0], [42.5, 1069.0], [42.6, 1069.0], [42.7, 1069.0], [42.8, 1069.0], [42.9, 1069.0], [43.0, 1069.0], [43.1, 1069.0], [43.2, 1069.0], [43.3, 1069.0], [43.4, 1069.0], [43.5, 1069.0], [43.6, 1069.0], [43.7, 1069.0], [43.8, 1069.0], [43.9, 1069.0], [44.0, 1069.0], [44.1, 1069.0], [44.2, 1069.0], [44.3, 1069.0], [44.4, 1069.0], [44.5, 1069.0], [44.6, 1069.0], [44.7, 1069.0], [44.8, 1069.0], [44.9, 1069.0], [45.0, 1086.0], [45.1, 1086.0], [45.2, 1086.0], [45.3, 1086.0], [45.4, 1086.0], [45.5, 1086.0], [45.6, 1086.0], [45.7, 1086.0], [45.8, 1086.0], [45.9, 1086.0], [46.0, 1086.0], [46.1, 1086.0], [46.2, 1086.0], [46.3, 1086.0], [46.4, 1086.0], [46.5, 1086.0], [46.6, 1086.0], [46.7, 1086.0], [46.8, 1086.0], [46.9, 1086.0], [47.0, 1086.0], [47.1, 1086.0], [47.2, 1086.0], [47.3, 1086.0], [47.4, 1086.0], [47.5, 1286.0], [47.6, 1286.0], [47.7, 1286.0], [47.8, 1286.0], [47.9, 1286.0], [48.0, 1286.0], [48.1, 1286.0], [48.2, 1286.0], [48.3, 1286.0], [48.4, 1286.0], [48.5, 1286.0], [48.6, 1286.0], [48.7, 1286.0], [48.8, 1286.0], [48.9, 1286.0], [49.0, 1286.0], [49.1, 1286.0], [49.2, 1286.0], [49.3, 1286.0], [49.4, 1286.0], [49.5, 1286.0], [49.6, 1286.0], [49.7, 1286.0], [49.8, 1286.0], [49.9, 1286.0], [50.0, 1342.0], [50.1, 1342.0], [50.2, 1342.0], [50.3, 1342.0], [50.4, 1342.0], [50.5, 1342.0], [50.6, 1342.0], [50.7, 1342.0], [50.8, 1342.0], [50.9, 1342.0], [51.0, 1342.0], [51.1, 1342.0], [51.2, 1342.0], [51.3, 1342.0], [51.4, 1342.0], [51.5, 1342.0], [51.6, 1342.0], [51.7, 1342.0], [51.8, 1342.0], [51.9, 1342.0], [52.0, 1342.0], [52.1, 1342.0], [52.2, 1342.0], [52.3, 1342.0], [52.4, 1342.0], [52.5, 1526.0], [52.6, 1526.0], [52.7, 1526.0], [52.8, 1526.0], [52.9, 1526.0], [53.0, 1526.0], [53.1, 1526.0], [53.2, 1526.0], [53.3, 1526.0], [53.4, 1526.0], [53.5, 1526.0], [53.6, 1526.0], [53.7, 1526.0], [53.8, 1526.0], [53.9, 1526.0], [54.0, 1526.0], [54.1, 1526.0], [54.2, 1526.0], [54.3, 1526.0], [54.4, 1526.0], [54.5, 1526.0], [54.6, 1526.0], [54.7, 1526.0], [54.8, 1526.0], [54.9, 1526.0], [55.0, 1583.0], [55.1, 1583.0], [55.2, 1583.0], [55.3, 1583.0], [55.4, 1583.0], [55.5, 1583.0], [55.6, 1583.0], [55.7, 1583.0], [55.8, 1583.0], [55.9, 1583.0], [56.0, 1583.0], [56.1, 1583.0], [56.2, 1583.0], [56.3, 1583.0], [56.4, 1583.0], [56.5, 1583.0], [56.6, 1583.0], [56.7, 1583.0], [56.8, 1583.0], [56.9, 1583.0], [57.0, 1583.0], [57.1, 1583.0], [57.2, 1583.0], [57.3, 1583.0], [57.4, 1583.0], [57.5, 1798.0], [57.6, 1798.0], [57.7, 1798.0], [57.8, 1798.0], [57.9, 1798.0], [58.0, 1798.0], [58.1, 1798.0], [58.2, 1798.0], [58.3, 1798.0], [58.4, 1798.0], [58.5, 1798.0], [58.6, 1798.0], [58.7, 1798.0], [58.8, 1798.0], [58.9, 1798.0], [59.0, 1798.0], [59.1, 1798.0], [59.2, 1798.0], [59.3, 1798.0], [59.4, 1798.0], [59.5, 1798.0], [59.6, 1798.0], [59.7, 1798.0], [59.8, 1798.0], [59.9, 1798.0], [60.0, 1830.0], [60.1, 1830.0], [60.2, 1830.0], [60.3, 1830.0], [60.4, 1830.0], [60.5, 1830.0], [60.6, 1830.0], [60.7, 1830.0], [60.8, 1830.0], [60.9, 1830.0], [61.0, 1830.0], [61.1, 1830.0], [61.2, 1830.0], [61.3, 1830.0], [61.4, 1830.0], [61.5, 1830.0], [61.6, 1830.0], [61.7, 1830.0], [61.8, 1830.0], [61.9, 1830.0], [62.0, 1830.0], [62.1, 1830.0], [62.2, 1830.0], [62.3, 1830.0], [62.4, 1830.0], [62.5, 2096.0], [62.6, 2096.0], [62.7, 2096.0], [62.8, 2096.0], [62.9, 2096.0], [63.0, 2096.0], [63.1, 2096.0], [63.2, 2096.0], [63.3, 2096.0], [63.4, 2096.0], [63.5, 2096.0], [63.6, 2096.0], [63.7, 2096.0], [63.8, 2096.0], [63.9, 2096.0], [64.0, 2096.0], [64.1, 2096.0], [64.2, 2096.0], [64.3, 2096.0], [64.4, 2096.0], [64.5, 2096.0], [64.6, 2096.0], [64.7, 2096.0], [64.8, 2096.0], [64.9, 2096.0], [65.0, 2105.0], [65.1, 2105.0], [65.2, 2105.0], [65.3, 2105.0], [65.4, 2105.0], [65.5, 2105.0], [65.6, 2105.0], [65.7, 2105.0], [65.8, 2105.0], [65.9, 2105.0], [66.0, 2105.0], [66.1, 2105.0], [66.2, 2105.0], [66.3, 2105.0], [66.4, 2105.0], [66.5, 2105.0], [66.6, 2105.0], [66.7, 2105.0], [66.8, 2105.0], [66.9, 2105.0], [67.0, 2105.0], [67.1, 2105.0], [67.2, 2105.0], [67.3, 2105.0], [67.4, 2105.0], [67.5, 2299.0], [67.6, 2299.0], [67.7, 2299.0], [67.8, 2299.0], [67.9, 2299.0], [68.0, 2299.0], [68.1, 2299.0], [68.2, 2299.0], [68.3, 2299.0], [68.4, 2299.0], [68.5, 2299.0], [68.6, 2299.0], [68.7, 2299.0], [68.8, 2299.0], [68.9, 2299.0], [69.0, 2299.0], [69.1, 2299.0], [69.2, 2299.0], [69.3, 2299.0], [69.4, 2299.0], [69.5, 2299.0], [69.6, 2299.0], [69.7, 2299.0], [69.8, 2299.0], [69.9, 2299.0], [70.0, 2391.0], [70.1, 2391.0], [70.2, 2391.0], [70.3, 2391.0], [70.4, 2391.0], [70.5, 2391.0], [70.6, 2391.0], [70.7, 2391.0], [70.8, 2391.0], [70.9, 2391.0], [71.0, 2391.0], [71.1, 2391.0], [71.2, 2391.0], [71.3, 2391.0], [71.4, 2391.0], [71.5, 2391.0], [71.6, 2391.0], [71.7, 2391.0], [71.8, 2391.0], [71.9, 2391.0], [72.0, 2391.0], [72.1, 2391.0], [72.2, 2391.0], [72.3, 2391.0], [72.4, 2391.0], [72.5, 2579.0], [72.6, 2579.0], [72.7, 2579.0], [72.8, 2579.0], [72.9, 2579.0], [73.0, 2579.0], [73.1, 2579.0], [73.2, 2579.0], [73.3, 2579.0], [73.4, 2579.0], [73.5, 2579.0], [73.6, 2579.0], [73.7, 2579.0], [73.8, 2579.0], [73.9, 2579.0], [74.0, 2579.0], [74.1, 2579.0], [74.2, 2579.0], [74.3, 2579.0], [74.4, 2579.0], [74.5, 2579.0], [74.6, 2579.0], [74.7, 2579.0], [74.8, 2579.0], [74.9, 2579.0], [75.0, 2590.0], [75.1, 2590.0], [75.2, 2590.0], [75.3, 2590.0], [75.4, 2590.0], [75.5, 2590.0], [75.6, 2590.0], [75.7, 2590.0], [75.8, 2590.0], [75.9, 2590.0], [76.0, 2590.0], [76.1, 2590.0], [76.2, 2590.0], [76.3, 2590.0], [76.4, 2590.0], [76.5, 2590.0], [76.6, 2590.0], [76.7, 2590.0], [76.8, 2590.0], [76.9, 2590.0], [77.0, 2590.0], [77.1, 2590.0], [77.2, 2590.0], [77.3, 2590.0], [77.4, 2590.0], [77.5, 2702.0], [77.6, 2702.0], [77.7, 2702.0], [77.8, 2702.0], [77.9, 2702.0], [78.0, 2702.0], [78.1, 2702.0], [78.2, 2702.0], [78.3, 2702.0], [78.4, 2702.0], [78.5, 2702.0], [78.6, 2702.0], [78.7, 2702.0], [78.8, 2702.0], [78.9, 2702.0], [79.0, 2702.0], [79.1, 2702.0], [79.2, 2702.0], [79.3, 2702.0], [79.4, 2702.0], [79.5, 2702.0], [79.6, 2702.0], [79.7, 2702.0], [79.8, 2702.0], [79.9, 2702.0], [80.0, 2832.0], [80.1, 2832.0], [80.2, 2832.0], [80.3, 2832.0], [80.4, 2832.0], [80.5, 2832.0], [80.6, 2832.0], [80.7, 2832.0], [80.8, 2832.0], [80.9, 2832.0], [81.0, 2832.0], [81.1, 2832.0], [81.2, 2832.0], [81.3, 2832.0], [81.4, 2832.0], [81.5, 2832.0], [81.6, 2832.0], [81.7, 2832.0], [81.8, 2832.0], [81.9, 2832.0], [82.0, 2832.0], [82.1, 2832.0], [82.2, 2832.0], [82.3, 2832.0], [82.4, 2832.0], [82.5, 2992.0], [82.6, 2992.0], [82.7, 2992.0], [82.8, 2992.0], [82.9, 2992.0], [83.0, 2992.0], [83.1, 2992.0], [83.2, 2992.0], [83.3, 2992.0], [83.4, 2992.0], [83.5, 2992.0], [83.6, 2992.0], [83.7, 2992.0], [83.8, 2992.0], [83.9, 2992.0], [84.0, 2992.0], [84.1, 2992.0], [84.2, 2992.0], [84.3, 2992.0], [84.4, 2992.0], [84.5, 2992.0], [84.6, 2992.0], [84.7, 2992.0], [84.8, 2992.0], [84.9, 2992.0], [85.0, 3161.0], [85.1, 3161.0], [85.2, 3161.0], [85.3, 3161.0], [85.4, 3161.0], [85.5, 3161.0], [85.6, 3161.0], [85.7, 3161.0], [85.8, 3161.0], [85.9, 3161.0], [86.0, 3161.0], [86.1, 3161.0], [86.2, 3161.0], [86.3, 3161.0], [86.4, 3161.0], [86.5, 3161.0], [86.6, 3161.0], [86.7, 3161.0], [86.8, 3161.0], [86.9, 3161.0], [87.0, 3161.0], [87.1, 3161.0], [87.2, 3161.0], [87.3, 3161.0], [87.4, 3161.0], [87.5, 3636.0], [87.6, 3636.0], [87.7, 3636.0], [87.8, 3636.0], [87.9, 3636.0], [88.0, 3636.0], [88.1, 3636.0], [88.2, 3636.0], [88.3, 3636.0], [88.4, 3636.0], [88.5, 3636.0], [88.6, 3636.0], [88.7, 3636.0], [88.8, 3636.0], [88.9, 3636.0], [89.0, 3636.0], [89.1, 3636.0], [89.2, 3636.0], [89.3, 3636.0], [89.4, 3636.0], [89.5, 3636.0], [89.6, 3636.0], [89.7, 3636.0], [89.8, 3636.0], [89.9, 3636.0], [90.0, 3828.0], [90.1, 3828.0], [90.2, 3828.0], [90.3, 3828.0], [90.4, 3828.0], [90.5, 3828.0], [90.6, 3828.0], [90.7, 3828.0], [90.8, 3828.0], [90.9, 3828.0], [91.0, 3828.0], [91.1, 3828.0], [91.2, 3828.0], [91.3, 3828.0], [91.4, 3828.0], [91.5, 3828.0], [91.6, 3828.0], [91.7, 3828.0], [91.8, 3828.0], [91.9, 3828.0], [92.0, 3828.0], [92.1, 3828.0], [92.2, 3828.0], [92.3, 3828.0], [92.4, 3828.0], [92.5, 3928.0], [92.6, 3928.0], [92.7, 3928.0], [92.8, 3928.0], [92.9, 3928.0], [93.0, 3928.0], [93.1, 3928.0], [93.2, 3928.0], [93.3, 3928.0], [93.4, 3928.0], [93.5, 3928.0], [93.6, 3928.0], [93.7, 3928.0], [93.8, 3928.0], [93.9, 3928.0], [94.0, 3928.0], [94.1, 3928.0], [94.2, 3928.0], [94.3, 3928.0], [94.4, 3928.0], [94.5, 3928.0], [94.6, 3928.0], [94.7, 3928.0], [94.8, 3928.0], [94.9, 3928.0], [95.0, 4345.0], [95.1, 4345.0], [95.2, 4345.0], [95.3, 4345.0], [95.4, 4345.0], [95.5, 4345.0], [95.6, 4345.0], [95.7, 4345.0], [95.8, 4345.0], [95.9, 4345.0], [96.0, 4345.0], [96.1, 4345.0], [96.2, 4345.0], [96.3, 4345.0], [96.4, 4345.0], [96.5, 4345.0], [96.6, 4345.0], [96.7, 4345.0], [96.8, 4345.0], [96.9, 4345.0], [97.0, 4345.0], [97.1, 4345.0], [97.2, 4345.0], [97.3, 4345.0], [97.4, 4345.0], [97.5, 4649.0], [97.6, 4649.0], [97.7, 4649.0], [97.8, 4649.0], [97.9, 4649.0], [98.0, 4649.0], [98.1, 4649.0], [98.2, 4649.0], [98.3, 4649.0], [98.4, 4649.0], [98.5, 4649.0], [98.6, 4649.0], [98.7, 4649.0], [98.8, 4649.0], [98.9, 4649.0], [99.0, 4649.0], [99.1, 4649.0], [99.2, 4649.0], [99.3, 4649.0], [99.4, 4649.0], [99.5, 4649.0], [99.6, 4649.0], [99.7, 4649.0], [99.8, 4649.0], [99.9, 4649.0]], "isOverall": false, "label": "SQLServer SELECT Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 10.0, "series": [{"data": [[0.0, 10.0], [600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [1000.0, 2.0], [1200.0, 1.0], [1300.0, 1.0], [1500.0, 2.0], [100.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2500.0, 2.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4300.0, 1.0], [4600.0, 1.0], [300.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "SQLServer SELECT Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19.0, "series": [{"data": [[0.0, 13.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.45, "minX": 1.69118156E12, "maxY": 9.399999999999999, "series": [{"data": [[1.69118156E12, 4.45], [1.69118222E12, 9.399999999999999]], "isOverall": false, "label": "TC9: Local Dataase Test (SQL Server)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.69118222E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 9.75, "minX": 1.0, "maxY": 4649.0, "series": [{"data": [[2.0, 205.0], [3.0, 1342.0], [4.0, 598.0], [5.0, 2096.0], [6.0, 2590.0], [103.0, 114.0], [102.0, 4345.0], [107.0, 604.0], [106.0, 1200.5], [105.0, 3636.0], [104.0, 4649.0], [111.0, 3828.0], [110.0, 2579.0], [109.0, 1086.0], [108.0, 2105.0], [7.0, 1583.0], [115.0, 2607.0], [114.0, 2217.6666666666665], [113.0, 1798.0], [112.0, 252.0], [116.0, 2259.0], [9.0, 2331.0], [10.0, 1069.0], [12.0, 1549.5], [1.0, 9.75]], "isOverall": false, "label": "SQLServer SELECT Request", "isController": false}, {"data": [[57.224999999999994, 1532.7250000000001]], "isOverall": false, "label": "SQLServer SELECT Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 116.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.69118156E12, "maxY": 296250.0, "series": [{"data": [[1.69118156E12, 296250.0], [1.69118222E12, 296250.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69118156E12, 0.0], [1.69118222E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.69118222E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 876.3500000000001, "minX": 1.69118156E12, "maxY": 2189.1000000000004, "series": [{"data": [[1.69118156E12, 876.3500000000001], [1.69118222E12, 2189.1000000000004]], "isOverall": false, "label": "SQLServer SELECT Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.69118222E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 692.05, "minX": 1.69118156E12, "maxY": 1901.0500000000002, "series": [{"data": [[1.69118156E12, 692.05], [1.69118222E12, 1901.0500000000002]], "isOverall": false, "label": "SQLServer SELECT Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.69118222E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 594.2500000000001, "minX": 1.69118156E12, "maxY": 1761.8499999999997, "series": [{"data": [[1.69118156E12, 594.2500000000001], [1.69118222E12, 1761.8499999999997]], "isOverall": false, "label": "SQLServer SELECT Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.69118222E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.69118156E12, "maxY": 4649.0, "series": [{"data": [[1.69118156E12, 2832.0], [1.69118222E12, 4649.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69118156E12, 8.0], [1.69118222E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69118156E12, 2560.9000000000005], [1.69118222E12, 4303.300000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69118156E12, 2832.0], [1.69118222E12, 4649.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69118156E12, 456.5], [1.69118222E12, 2248.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69118156E12, 2819.8999999999996], [1.69118222E12, 4633.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.69118222E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 8.5, "minX": 2.0, "maxY": 2248.0, "series": [{"data": [[4.0, 9.5], [2.0, 8.5], [20.0, 2248.0], [14.0, 1205.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 2.0, "maxY": 1809.0, "series": [{"data": [[4.0, 1.0], [2.0, 1.5], [20.0, 1809.0], [14.0, 915.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.69118156E12, "maxY": 1.0, "series": [{"data": [[1.69118156E12, 1.0], [1.6911822E12, 0.7], [1.69118222E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.69118222E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.69118156E12, "maxY": 1.0, "series": [{"data": [[1.69118156E12, 1.0], [1.69118222E12, 1.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.69118222E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.69118156E12, "maxY": 1.0, "series": [{"data": [[1.69118156E12, 1.0], [1.69118222E12, 1.0]], "isOverall": false, "label": "SQLServer SELECT Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.69118222E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.69118156E12, "maxY": 1.0, "series": [{"data": [[1.69118156E12, 1.0], [1.69118222E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.69118222E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
