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
        data: {"result": {"minY": 635.0, "minX": 0.0, "maxY": 762.0, "series": [{"data": [[0.0, 635.0], [0.1, 635.0], [0.2, 635.0], [0.3, 635.0], [0.4, 639.0], [0.5, 639.0], [0.6, 639.0], [0.7, 639.0], [0.8, 639.0], [0.9, 639.0], [1.0, 639.0], [1.1, 639.0], [1.2, 639.0], [1.3, 639.0], [1.4, 639.0], [1.5, 639.0], [1.6, 639.0], [1.7, 639.0], [1.8, 639.0], [1.9, 639.0], [2.0, 642.0], [2.1, 642.0], [2.2, 642.0], [2.3, 642.0], [2.4, 642.0], [2.5, 642.0], [2.6, 642.0], [2.7, 642.0], [2.8, 642.0], [2.9, 642.0], [3.0, 642.0], [3.1, 642.0], [3.2, 642.0], [3.3, 642.0], [3.4, 642.0], [3.5, 644.0], [3.6, 644.0], [3.7, 644.0], [3.8, 644.0], [3.9, 645.0], [4.0, 645.0], [4.1, 645.0], [4.2, 645.0], [4.3, 645.0], [4.4, 645.0], [4.5, 645.0], [4.6, 645.0], [4.7, 645.0], [4.8, 645.0], [4.9, 645.0], [5.0, 645.0], [5.1, 645.0], [5.2, 645.0], [5.3, 645.0], [5.4, 645.0], [5.5, 645.0], [5.6, 645.0], [5.7, 645.0], [5.8, 645.0], [5.9, 645.0], [6.0, 645.0], [6.1, 645.0], [6.2, 645.0], [6.3, 645.0], [6.4, 645.0], [6.5, 645.0], [6.6, 645.0], [6.7, 645.0], [6.8, 645.0], [6.9, 645.0], [7.0, 645.0], [7.1, 645.0], [7.2, 645.0], [7.3, 645.0], [7.4, 645.0], [7.5, 645.0], [7.6, 645.0], [7.7, 645.0], [7.8, 645.0], [7.9, 645.0], [8.0, 645.0], [8.1, 645.0], [8.2, 645.0], [8.3, 645.0], [8.4, 645.0], [8.5, 645.0], [8.6, 645.0], [8.7, 645.0], [8.8, 645.0], [8.9, 645.0], [9.0, 645.0], [9.1, 645.0], [9.2, 645.0], [9.3, 646.0], [9.4, 646.0], [9.5, 646.0], [9.6, 646.0], [9.7, 646.0], [9.8, 646.0], [9.9, 646.0], [10.0, 646.0], [10.1, 646.0], [10.2, 646.0], [10.3, 646.0], [10.4, 646.0], [10.5, 646.0], [10.6, 646.0], [10.7, 646.0], [10.8, 646.0], [10.9, 646.0], [11.0, 646.0], [11.1, 646.0], [11.2, 646.0], [11.3, 646.0], [11.4, 646.0], [11.5, 646.0], [11.6, 646.0], [11.7, 646.0], [11.8, 646.0], [11.9, 646.0], [12.0, 646.0], [12.1, 646.0], [12.2, 646.0], [12.3, 646.0], [12.4, 646.0], [12.5, 646.0], [12.6, 646.0], [12.7, 646.0], [12.8, 646.0], [12.9, 646.0], [13.0, 646.0], [13.1, 646.0], [13.2, 646.0], [13.3, 646.0], [13.4, 646.0], [13.5, 646.0], [13.6, 646.0], [13.7, 646.0], [13.8, 646.0], [13.9, 649.0], [14.0, 649.0], [14.1, 649.0], [14.2, 649.0], [14.3, 649.0], [14.4, 649.0], [14.5, 649.0], [14.6, 649.0], [14.7, 649.0], [14.8, 649.0], [14.9, 649.0], [15.0, 649.0], [15.1, 649.0], [15.2, 649.0], [15.3, 649.0], [15.4, 649.0], [15.5, 649.0], [15.6, 649.0], [15.7, 649.0], [15.8, 649.0], [15.9, 649.0], [16.0, 649.0], [16.1, 649.0], [16.2, 649.0], [16.3, 649.0], [16.4, 649.0], [16.5, 649.0], [16.6, 649.0], [16.7, 649.0], [16.8, 649.0], [16.9, 649.0], [17.0, 649.0], [17.1, 649.0], [17.2, 649.0], [17.3, 649.0], [17.4, 649.0], [17.5, 649.0], [17.6, 649.0], [17.7, 649.0], [17.8, 649.0], [17.9, 649.0], [18.0, 649.0], [18.1, 649.0], [18.2, 649.0], [18.3, 649.0], [18.4, 649.0], [18.5, 649.0], [18.6, 649.0], [18.7, 649.0], [18.8, 649.0], [18.9, 649.0], [19.0, 649.0], [19.1, 649.0], [19.2, 649.0], [19.3, 649.0], [19.4, 649.0], [19.5, 649.0], [19.6, 649.0], [19.7, 649.0], [19.8, 649.0], [19.9, 649.0], [20.0, 649.0], [20.1, 649.0], [20.2, 649.0], [20.3, 649.0], [20.4, 649.0], [20.5, 649.0], [20.6, 649.0], [20.7, 649.0], [20.8, 649.0], [20.9, 649.0], [21.0, 649.0], [21.1, 649.0], [21.2, 649.0], [21.3, 649.0], [21.4, 649.0], [21.5, 649.0], [21.6, 649.0], [21.7, 649.0], [21.8, 649.0], [21.9, 649.0], [22.0, 649.0], [22.1, 649.0], [22.2, 649.0], [22.3, 649.0], [22.4, 649.0], [22.5, 649.0], [22.6, 649.0], [22.7, 649.0], [22.8, 649.0], [22.9, 649.0], [23.0, 649.0], [23.1, 649.0], [23.2, 649.0], [23.3, 649.0], [23.4, 649.0], [23.5, 649.0], [23.6, 649.0], [23.7, 649.0], [23.8, 649.0], [23.9, 649.0], [24.0, 649.0], [24.1, 649.0], [24.2, 649.0], [24.3, 649.0], [24.4, 649.0], [24.5, 649.0], [24.6, 649.0], [24.7, 649.0], [24.8, 649.0], [24.9, 649.0], [25.0, 649.0], [25.1, 649.0], [25.2, 649.0], [25.3, 649.0], [25.4, 649.0], [25.5, 649.0], [25.6, 649.0], [25.7, 649.0], [25.8, 649.0], [25.9, 649.0], [26.0, 649.0], [26.1, 649.0], [26.2, 649.0], [26.3, 649.0], [26.4, 649.0], [26.5, 649.0], [26.6, 649.0], [26.7, 649.0], [26.8, 649.0], [26.9, 649.0], [27.0, 649.0], [27.1, 649.0], [27.2, 649.0], [27.3, 649.0], [27.4, 649.0], [27.5, 649.0], [27.6, 649.0], [27.7, 649.0], [27.8, 649.0], [27.9, 649.0], [28.0, 649.0], [28.1, 649.0], [28.2, 649.0], [28.3, 649.0], [28.4, 649.0], [28.5, 649.0], [28.6, 649.0], [28.7, 649.0], [28.8, 649.0], [28.9, 649.0], [29.0, 649.0], [29.1, 649.0], [29.2, 649.0], [29.3, 650.0], [29.4, 650.0], [29.5, 650.0], [29.6, 650.0], [29.7, 650.0], [29.8, 650.0], [29.9, 650.0], [30.0, 650.0], [30.1, 650.0], [30.2, 650.0], [30.3, 650.0], [30.4, 650.0], [30.5, 650.0], [30.6, 650.0], [30.7, 650.0], [30.8, 650.0], [30.9, 650.0], [31.0, 650.0], [31.1, 650.0], [31.2, 650.0], [31.3, 650.0], [31.4, 650.0], [31.5, 650.0], [31.6, 650.0], [31.7, 650.0], [31.8, 650.0], [31.9, 650.0], [32.0, 650.0], [32.1, 650.0], [32.2, 650.0], [32.3, 650.0], [32.4, 650.0], [32.5, 650.0], [32.6, 650.0], [32.7, 650.0], [32.8, 650.0], [32.9, 650.0], [33.0, 650.0], [33.1, 650.0], [33.2, 650.0], [33.3, 650.0], [33.4, 650.0], [33.5, 650.0], [33.6, 650.0], [33.7, 650.0], [33.8, 650.0], [33.9, 650.0], [34.0, 650.0], [34.1, 650.0], [34.2, 650.0], [34.3, 650.0], [34.4, 650.0], [34.5, 650.0], [34.6, 650.0], [34.7, 650.0], [34.8, 650.0], [34.9, 650.0], [35.0, 650.0], [35.1, 650.0], [35.2, 650.0], [35.3, 650.0], [35.4, 650.0], [35.5, 650.0], [35.6, 650.0], [35.7, 650.0], [35.8, 650.0], [35.9, 650.0], [36.0, 650.0], [36.1, 650.0], [36.2, 650.0], [36.3, 650.0], [36.4, 650.0], [36.5, 650.0], [36.6, 651.0], [36.7, 651.0], [36.8, 651.0], [36.9, 651.0], [37.0, 651.0], [37.1, 651.0], [37.2, 651.0], [37.3, 651.0], [37.4, 651.0], [37.5, 651.0], [37.6, 651.0], [37.7, 651.0], [37.8, 651.0], [37.9, 651.0], [38.0, 651.0], [38.1, 651.0], [38.2, 651.0], [38.3, 651.0], [38.4, 651.0], [38.5, 652.0], [38.6, 652.0], [38.7, 652.0], [38.8, 652.0], [38.9, 652.0], [39.0, 652.0], [39.1, 652.0], [39.2, 652.0], [39.3, 652.0], [39.4, 652.0], [39.5, 652.0], [39.6, 652.0], [39.7, 652.0], [39.8, 652.0], [39.9, 652.0], [40.0, 652.0], [40.1, 652.0], [40.2, 652.0], [40.3, 652.0], [40.4, 652.0], [40.5, 652.0], [40.6, 652.0], [40.7, 652.0], [40.8, 653.0], [40.9, 653.0], [41.0, 653.0], [41.1, 653.0], [41.2, 653.0], [41.3, 653.0], [41.4, 653.0], [41.5, 653.0], [41.6, 653.0], [41.7, 653.0], [41.8, 653.0], [41.9, 653.0], [42.0, 653.0], [42.1, 653.0], [42.2, 653.0], [42.3, 653.0], [42.4, 653.0], [42.5, 653.0], [42.6, 653.0], [42.7, 653.0], [42.8, 653.0], [42.9, 653.0], [43.0, 653.0], [43.1, 653.0], [43.2, 653.0], [43.3, 653.0], [43.4, 653.0], [43.5, 653.0], [43.6, 653.0], [43.7, 653.0], [43.8, 653.0], [43.9, 653.0], [44.0, 653.0], [44.1, 653.0], [44.2, 653.0], [44.3, 653.0], [44.4, 653.0], [44.5, 653.0], [44.6, 653.0], [44.7, 653.0], [44.8, 653.0], [44.9, 653.0], [45.0, 653.0], [45.1, 653.0], [45.2, 653.0], [45.3, 653.0], [45.4, 653.0], [45.5, 653.0], [45.6, 653.0], [45.7, 653.0], [45.8, 653.0], [45.9, 653.0], [46.0, 653.0], [46.1, 653.0], [46.2, 653.0], [46.3, 653.0], [46.4, 653.0], [46.5, 653.0], [46.6, 653.0], [46.7, 653.0], [46.8, 653.0], [46.9, 653.0], [47.0, 653.0], [47.1, 653.0], [47.2, 653.0], [47.3, 653.0], [47.4, 653.0], [47.5, 653.0], [47.6, 653.0], [47.7, 653.0], [47.8, 653.0], [47.9, 653.0], [48.0, 653.0], [48.1, 653.0], [48.2, 653.0], [48.3, 653.0], [48.4, 653.0], [48.5, 653.0], [48.6, 653.0], [48.7, 653.0], [48.8, 653.0], [48.9, 653.0], [49.0, 653.0], [49.1, 653.0], [49.2, 653.0], [49.3, 653.0], [49.4, 653.0], [49.5, 653.0], [49.6, 653.0], [49.7, 653.0], [49.8, 653.0], [49.9, 653.0], [50.0, 653.0], [50.1, 653.0], [50.2, 653.0], [50.3, 653.0], [50.4, 653.0], [50.5, 653.0], [50.6, 653.0], [50.7, 653.0], [50.8, 653.0], [50.9, 653.0], [51.0, 653.0], [51.1, 653.0], [51.2, 653.0], [51.3, 653.0], [51.4, 653.0], [51.5, 653.0], [51.6, 653.0], [51.7, 653.0], [51.8, 653.0], [51.9, 653.0], [52.0, 653.0], [52.1, 653.0], [52.2, 653.0], [52.3, 653.0], [52.4, 653.0], [52.5, 653.0], [52.6, 653.0], [52.7, 653.0], [52.8, 653.0], [52.9, 653.0], [53.0, 653.0], [53.1, 653.0], [53.2, 653.0], [53.3, 653.0], [53.4, 653.0], [53.5, 653.0], [53.6, 653.0], [53.7, 653.0], [53.8, 653.0], [53.9, 653.0], [54.0, 653.0], [54.1, 653.0], [54.2, 653.0], [54.3, 653.0], [54.4, 653.0], [54.5, 653.0], [54.6, 653.0], [54.7, 653.0], [54.8, 653.0], [54.9, 653.0], [55.0, 654.0], [55.1, 654.0], [55.2, 654.0], [55.3, 654.0], [55.4, 654.0], [55.5, 654.0], [55.6, 654.0], [55.7, 654.0], [55.8, 654.0], [55.9, 654.0], [56.0, 654.0], [56.1, 654.0], [56.2, 654.0], [56.3, 654.0], [56.4, 654.0], [56.5, 654.0], [56.6, 654.0], [56.7, 654.0], [56.8, 654.0], [56.9, 654.0], [57.0, 654.0], [57.1, 654.0], [57.2, 654.0], [57.3, 654.0], [57.4, 654.0], [57.5, 654.0], [57.6, 654.0], [57.7, 654.0], [57.8, 654.0], [57.9, 654.0], [58.0, 654.0], [58.1, 654.0], [58.2, 654.0], [58.3, 654.0], [58.4, 654.0], [58.5, 654.0], [58.6, 654.0], [58.7, 654.0], [58.8, 654.0], [58.9, 654.0], [59.0, 654.0], [59.1, 654.0], [59.2, 654.0], [59.3, 654.0], [59.4, 654.0], [59.5, 654.0], [59.6, 654.0], [59.7, 654.0], [59.8, 654.0], [59.9, 654.0], [60.0, 654.0], [60.1, 654.0], [60.2, 654.0], [60.3, 654.0], [60.4, 654.0], [60.5, 654.0], [60.6, 654.0], [60.7, 654.0], [60.8, 654.0], [60.9, 654.0], [61.0, 654.0], [61.1, 654.0], [61.2, 654.0], [61.3, 654.0], [61.4, 654.0], [61.5, 654.0], [61.6, 654.0], [61.7, 654.0], [61.8, 654.0], [61.9, 654.0], [62.0, 654.0], [62.1, 654.0], [62.2, 654.0], [62.3, 654.0], [62.4, 654.0], [62.5, 654.0], [62.6, 654.0], [62.7, 654.0], [62.8, 654.0], [62.9, 654.0], [63.0, 654.0], [63.1, 654.0], [63.2, 654.0], [63.3, 654.0], [63.4, 654.0], [63.5, 654.0], [63.6, 654.0], [63.7, 654.0], [63.8, 654.0], [63.9, 654.0], [64.0, 654.0], [64.1, 654.0], [64.2, 654.0], [64.3, 654.0], [64.4, 654.0], [64.5, 654.0], [64.6, 654.0], [64.7, 654.0], [64.8, 654.0], [64.9, 654.0], [65.0, 654.0], [65.1, 654.0], [65.2, 654.0], [65.3, 654.0], [65.4, 654.0], [65.5, 654.0], [65.6, 654.0], [65.7, 654.0], [65.8, 654.0], [65.9, 654.0], [66.0, 654.0], [66.1, 654.0], [66.2, 654.0], [66.3, 654.0], [66.4, 654.0], [66.5, 654.0], [66.6, 654.0], [66.7, 654.0], [66.8, 654.0], [66.9, 654.0], [67.0, 654.0], [67.1, 654.0], [67.2, 654.0], [67.3, 654.0], [67.4, 654.0], [67.5, 654.0], [67.6, 654.0], [67.7, 654.0], [67.8, 654.0], [67.9, 654.0], [68.0, 654.0], [68.1, 654.0], [68.2, 654.0], [68.3, 654.0], [68.4, 654.0], [68.5, 654.0], [68.6, 654.0], [68.7, 654.0], [68.8, 654.0], [68.9, 655.0], [69.0, 655.0], [69.1, 655.0], [69.2, 655.0], [69.3, 655.0], [69.4, 655.0], [69.5, 655.0], [69.6, 655.0], [69.7, 655.0], [69.8, 655.0], [69.9, 655.0], [70.0, 655.0], [70.1, 655.0], [70.2, 655.0], [70.3, 655.0], [70.4, 655.0], [70.5, 655.0], [70.6, 655.0], [70.7, 655.0], [70.8, 655.0], [70.9, 655.0], [71.0, 655.0], [71.1, 655.0], [71.2, 655.0], [71.3, 655.0], [71.4, 655.0], [71.5, 655.0], [71.6, 655.0], [71.7, 655.0], [71.8, 655.0], [71.9, 655.0], [72.0, 655.0], [72.1, 655.0], [72.2, 655.0], [72.3, 655.0], [72.4, 655.0], [72.5, 655.0], [72.6, 655.0], [72.7, 655.0], [72.8, 655.0], [72.9, 655.0], [73.0, 655.0], [73.1, 655.0], [73.2, 655.0], [73.3, 655.0], [73.4, 655.0], [73.5, 656.0], [73.6, 656.0], [73.7, 656.0], [73.8, 656.0], [73.9, 656.0], [74.0, 656.0], [74.1, 656.0], [74.2, 656.0], [74.3, 656.0], [74.4, 656.0], [74.5, 656.0], [74.6, 656.0], [74.7, 656.0], [74.8, 656.0], [74.9, 656.0], [75.0, 656.0], [75.1, 656.0], [75.2, 656.0], [75.3, 656.0], [75.4, 656.0], [75.5, 656.0], [75.6, 656.0], [75.7, 656.0], [75.8, 656.0], [75.9, 656.0], [76.0, 656.0], [76.1, 656.0], [76.2, 656.0], [76.3, 656.0], [76.4, 656.0], [76.5, 656.0], [76.6, 656.0], [76.7, 656.0], [76.8, 656.0], [76.9, 656.0], [77.0, 656.0], [77.1, 656.0], [77.2, 656.0], [77.3, 656.0], [77.4, 656.0], [77.5, 656.0], [77.6, 656.0], [77.7, 656.0], [77.8, 656.0], [77.9, 656.0], [78.0, 656.0], [78.1, 656.0], [78.2, 656.0], [78.3, 656.0], [78.4, 656.0], [78.5, 656.0], [78.6, 656.0], [78.7, 656.0], [78.8, 656.0], [78.9, 658.0], [79.0, 658.0], [79.1, 658.0], [79.2, 658.0], [79.3, 658.0], [79.4, 658.0], [79.5, 658.0], [79.6, 658.0], [79.7, 658.0], [79.8, 658.0], [79.9, 658.0], [80.0, 658.0], [80.1, 658.0], [80.2, 658.0], [80.3, 658.0], [80.4, 658.0], [80.5, 658.0], [80.6, 658.0], [80.7, 658.0], [80.8, 658.0], [80.9, 658.0], [81.0, 658.0], [81.1, 658.0], [81.2, 658.0], [81.3, 658.0], [81.4, 658.0], [81.5, 658.0], [81.6, 658.0], [81.7, 658.0], [81.8, 658.0], [81.9, 658.0], [82.0, 659.0], [82.1, 659.0], [82.2, 659.0], [82.3, 659.0], [82.4, 661.0], [82.5, 661.0], [82.6, 661.0], [82.7, 661.0], [82.8, 661.0], [82.9, 661.0], [83.0, 661.0], [83.1, 662.0], [83.2, 662.0], [83.3, 662.0], [83.4, 662.0], [83.5, 666.0], [83.6, 666.0], [83.7, 666.0], [83.8, 666.0], [83.9, 666.0], [84.0, 666.0], [84.1, 666.0], [84.2, 666.0], [84.3, 666.0], [84.4, 666.0], [84.5, 666.0], [84.6, 666.0], [84.7, 669.0], [84.8, 669.0], [84.9, 669.0], [85.0, 669.0], [85.1, 670.0], [85.2, 670.0], [85.3, 670.0], [85.4, 670.0], [85.5, 670.0], [85.6, 670.0], [85.7, 670.0], [85.8, 670.0], [85.9, 670.0], [86.0, 670.0], [86.1, 670.0], [86.2, 673.0], [86.3, 673.0], [86.4, 673.0], [86.5, 673.0], [86.6, 673.0], [86.7, 673.0], [86.8, 673.0], [86.9, 673.0], [87.0, 673.0], [87.1, 673.0], [87.2, 673.0], [87.3, 673.0], [87.4, 674.0], [87.5, 674.0], [87.6, 674.0], [87.7, 674.0], [87.8, 674.0], [87.9, 674.0], [88.0, 674.0], [88.1, 674.0], [88.2, 674.0], [88.3, 674.0], [88.4, 674.0], [88.5, 684.0], [88.6, 684.0], [88.7, 684.0], [88.8, 684.0], [88.9, 684.0], [89.0, 684.0], [89.1, 684.0], [89.2, 684.0], [89.3, 684.0], [89.4, 684.0], [89.5, 684.0], [89.6, 684.0], [89.7, 687.0], [89.8, 687.0], [89.9, 687.0], [90.0, 687.0], [90.1, 689.0], [90.2, 689.0], [90.3, 689.0], [90.4, 691.0], [90.5, 691.0], [90.6, 691.0], [90.7, 691.0], [90.8, 692.0], [90.9, 692.0], [91.0, 692.0], [91.1, 692.0], [91.2, 692.0], [91.3, 692.0], [91.4, 692.0], [91.5, 692.0], [91.6, 693.0], [91.7, 693.0], [91.8, 693.0], [91.9, 693.0], [92.0, 693.0], [92.1, 693.0], [92.2, 693.0], [92.3, 693.0], [92.4, 695.0], [92.5, 695.0], [92.6, 695.0], [92.7, 695.0], [92.8, 695.0], [92.9, 695.0], [93.0, 695.0], [93.1, 695.0], [93.2, 695.0], [93.3, 695.0], [93.4, 695.0], [93.5, 695.0], [93.6, 695.0], [93.7, 695.0], [93.8, 695.0], [93.9, 699.0], [94.0, 699.0], [94.1, 699.0], [94.2, 699.0], [94.3, 699.0], [94.4, 699.0], [94.5, 699.0], [94.6, 699.0], [94.7, 716.0], [94.8, 716.0], [94.9, 716.0], [95.0, 716.0], [95.1, 716.0], [95.2, 716.0], [95.3, 716.0], [95.4, 716.0], [95.5, 716.0], [95.6, 716.0], [95.7, 716.0], [95.8, 720.0], [95.9, 720.0], [96.0, 720.0], [96.1, 720.0], [96.2, 720.0], [96.3, 720.0], [96.4, 720.0], [96.5, 720.0], [96.6, 723.0], [96.7, 723.0], [96.8, 723.0], [96.9, 723.0], [97.0, 729.0], [97.1, 729.0], [97.2, 729.0], [97.3, 729.0], [97.4, 729.0], [97.5, 729.0], [97.6, 729.0], [97.7, 731.0], [97.8, 731.0], [97.9, 731.0], [98.0, 731.0], [98.1, 739.0], [98.2, 739.0], [98.3, 739.0], [98.4, 739.0], [98.5, 747.0], [98.6, 747.0], [98.7, 747.0], [98.8, 747.0], [98.9, 762.0], [99.0, 762.0], [99.1, 762.0], [99.2, 762.0], [99.3, 762.0], [99.4, 762.0], [99.5, 762.0], [99.6, 762.0], [99.7, 762.0], [99.8, 762.0], [99.9, 762.0], [100.0, 762.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 14.0, "minX": 600.0, "maxY": 246.0, "series": [{"data": [[600.0, 246.0], [700.0, 14.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 260.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 260.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 260.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.538461538461539, "minX": 1.61980746E12, "maxY": 13.0, "series": [{"data": [[1.61980758E12, 7.538461538461539], [1.61980752E12, 13.0], [1.61980746E12, 13.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980758E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 645.0, "minX": 1.0, "maxY": 674.0, "series": [{"data": [[4.0, 674.0], [2.0, 654.0], [1.0, 654.0], [10.0, 662.0], [5.0, 651.0], [11.0, 646.0], [12.0, 645.0], [6.0, 651.0], [13.0, 659.185483870968]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.726923076923075, 659.1346153846155]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 13.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 33.8, "minX": 1.61980746E12, "maxY": 1351.7833333333333, "series": [{"data": [[1.61980758E12, 79.51666666666667], [1.61980752E12, 1351.7833333333333], [1.61980746E12, 159.03333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61980758E12, 33.8], [1.61980752E12, 574.6], [1.61980746E12, 67.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980758E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 657.1538461538461, "minX": 1.61980746E12, "maxY": 659.2760180995475, "series": [{"data": [[1.61980758E12, 657.1538461538461], [1.61980752E12, 659.2760180995475], [1.61980746E12, 658.923076923077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980758E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 657.0769230769231, "minX": 1.61980746E12, "maxY": 659.2624434389141, "series": [{"data": [[1.61980758E12, 657.0769230769231], [1.61980752E12, 659.2624434389141], [1.61980746E12, 658.923076923077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980758E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.0, "minX": 1.61980746E12, "maxY": 0.30769230769230765, "series": [{"data": [[1.61980758E12, 0.0], [1.61980752E12, 0.022624434389140267], [1.61980746E12, 0.30769230769230765]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980758E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 635.0, "minX": 1.61980746E12, "maxY": 762.0, "series": [{"data": [[1.61980758E12, 674.0], [1.61980752E12, 762.0], [1.61980746E12, 693.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61980758E12, 674.0], [1.61980752E12, 688.6], [1.61980746E12, 692.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61980758E12, 674.0], [1.61980752E12, 762.0], [1.61980746E12, 693.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61980758E12, 674.0], [1.61980752E12, 719.5999999999999], [1.61980746E12, 693.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61980758E12, 645.0], [1.61980752E12, 644.0], [1.61980746E12, 635.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61980758E12, 654.0], [1.61980752E12, 653.0], [1.61980746E12, 648.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980758E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
    data: {"result": {"minY": 646.0, "minX": 1.0, "maxY": 657.5, "series": [{"data": [[1.0, 646.0], [8.0, 655.0], [4.0, 657.5], [9.0, 649.0], [5.0, 649.0], [10.0, 650.0], [12.0, 654.0], [3.0, 654.5], [6.0, 654.0], [13.0, 653.0], [7.0, 650.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 646.0, "minX": 1.0, "maxY": 657.5, "series": [{"data": [[1.0, 646.0], [8.0, 655.0], [4.0, 657.5], [9.0, 649.0], [5.0, 649.0], [10.0, 650.0], [12.0, 653.5], [3.0, 654.5], [6.0, 654.0], [13.0, 653.0], [7.0, 650.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.61980746E12, "maxY": 3.683333333333333, "series": [{"data": [[1.61980758E12, 0.21666666666666667], [1.61980752E12, 3.683333333333333], [1.61980746E12, 0.43333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980758E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.61980746E12, "maxY": 3.683333333333333, "series": [{"data": [[1.61980758E12, 0.21666666666666667], [1.61980752E12, 3.683333333333333], [1.61980746E12, 0.43333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980758E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.61980746E12, "maxY": 3.683333333333333, "series": [{"data": [[1.61980758E12, 0.21666666666666667], [1.61980752E12, 3.683333333333333], [1.61980746E12, 0.43333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980758E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.61980746E12, "maxY": 3.683333333333333, "series": [{"data": [[1.61980758E12, 0.21666666666666667], [1.61980752E12, 3.683333333333333], [1.61980746E12, 0.43333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980758E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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

