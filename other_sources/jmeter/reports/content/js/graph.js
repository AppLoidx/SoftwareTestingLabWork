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
        data: {"result": {"minY": 627.0, "minX": 0.0, "maxY": 886.0, "series": [{"data": [[0.0, 627.0], [0.1, 627.0], [0.2, 627.0], [0.3, 627.0], [0.4, 627.0], [0.5, 627.0], [0.6, 628.0], [0.7, 628.0], [0.8, 628.0], [0.9, 628.0], [1.0, 628.0], [1.1, 629.0], [1.2, 629.0], [1.3, 629.0], [1.4, 629.0], [1.5, 629.0], [1.6, 630.0], [1.7, 630.0], [1.8, 630.0], [1.9, 630.0], [2.0, 630.0], [2.1, 630.0], [2.2, 632.0], [2.3, 632.0], [2.4, 632.0], [2.5, 632.0], [2.6, 632.0], [2.7, 633.0], [2.8, 633.0], [2.9, 633.0], [3.0, 633.0], [3.1, 633.0], [3.2, 634.0], [3.3, 634.0], [3.4, 634.0], [3.5, 634.0], [3.6, 634.0], [3.7, 634.0], [3.8, 634.0], [3.9, 634.0], [4.0, 634.0], [4.1, 634.0], [4.2, 634.0], [4.3, 635.0], [4.4, 635.0], [4.5, 635.0], [4.6, 635.0], [4.7, 635.0], [4.8, 637.0], [4.9, 637.0], [5.0, 637.0], [5.1, 637.0], [5.2, 637.0], [5.3, 637.0], [5.4, 637.0], [5.5, 637.0], [5.6, 637.0], [5.7, 637.0], [5.8, 638.0], [5.9, 638.0], [6.0, 638.0], [6.1, 638.0], [6.2, 638.0], [6.3, 638.0], [6.4, 641.0], [6.5, 641.0], [6.6, 641.0], [6.7, 641.0], [6.8, 641.0], [6.9, 641.0], [7.0, 641.0], [7.1, 641.0], [7.2, 641.0], [7.3, 641.0], [7.4, 641.0], [7.5, 641.0], [7.6, 641.0], [7.7, 641.0], [7.8, 641.0], [7.9, 641.0], [8.0, 641.0], [8.1, 641.0], [8.2, 641.0], [8.3, 641.0], [8.4, 641.0], [8.5, 643.0], [8.6, 643.0], [8.7, 643.0], [8.8, 643.0], [8.9, 643.0], [9.0, 645.0], [9.1, 645.0], [9.2, 645.0], [9.3, 645.0], [9.4, 645.0], [9.5, 645.0], [9.6, 645.0], [9.7, 645.0], [9.8, 645.0], [9.9, 645.0], [10.0, 646.0], [10.1, 646.0], [10.2, 646.0], [10.3, 646.0], [10.4, 646.0], [10.5, 646.0], [10.6, 648.0], [10.7, 648.0], [10.8, 648.0], [10.9, 648.0], [11.0, 648.0], [11.1, 649.0], [11.2, 649.0], [11.3, 649.0], [11.4, 649.0], [11.5, 649.0], [11.6, 650.0], [11.7, 650.0], [11.8, 650.0], [11.9, 650.0], [12.0, 650.0], [12.1, 650.0], [12.2, 650.0], [12.3, 650.0], [12.4, 650.0], [12.5, 650.0], [12.6, 650.0], [12.7, 650.0], [12.8, 650.0], [12.9, 650.0], [13.0, 650.0], [13.1, 650.0], [13.2, 652.0], [13.3, 652.0], [13.4, 652.0], [13.5, 652.0], [13.6, 652.0], [13.7, 652.0], [13.8, 652.0], [13.9, 652.0], [14.0, 652.0], [14.1, 652.0], [14.2, 652.0], [14.3, 652.0], [14.4, 652.0], [14.5, 652.0], [14.6, 652.0], [14.7, 652.0], [14.8, 653.0], [14.9, 653.0], [15.0, 653.0], [15.1, 653.0], [15.2, 653.0], [15.3, 653.0], [15.4, 653.0], [15.5, 653.0], [15.6, 653.0], [15.7, 653.0], [15.8, 655.0], [15.9, 655.0], [16.0, 655.0], [16.1, 655.0], [16.2, 655.0], [16.3, 655.0], [16.4, 655.0], [16.5, 655.0], [16.6, 655.0], [16.7, 655.0], [16.8, 655.0], [16.9, 657.0], [17.0, 657.0], [17.1, 657.0], [17.2, 657.0], [17.3, 657.0], [17.4, 658.0], [17.5, 658.0], [17.6, 658.0], [17.7, 658.0], [17.8, 658.0], [17.9, 659.0], [18.0, 659.0], [18.1, 659.0], [18.2, 659.0], [18.3, 659.0], [18.4, 659.0], [18.5, 659.0], [18.6, 659.0], [18.7, 659.0], [18.8, 659.0], [18.9, 659.0], [19.0, 660.0], [19.1, 660.0], [19.2, 660.0], [19.3, 660.0], [19.4, 660.0], [19.5, 660.0], [19.6, 660.0], [19.7, 660.0], [19.8, 660.0], [19.9, 660.0], [20.0, 660.0], [20.1, 660.0], [20.2, 660.0], [20.3, 660.0], [20.4, 660.0], [20.5, 660.0], [20.6, 660.0], [20.7, 660.0], [20.8, 660.0], [20.9, 660.0], [21.0, 660.0], [21.1, 661.0], [21.2, 661.0], [21.3, 661.0], [21.4, 661.0], [21.5, 661.0], [21.6, 662.0], [21.7, 662.0], [21.8, 662.0], [21.9, 662.0], [22.0, 662.0], [22.1, 662.0], [22.2, 662.0], [22.3, 662.0], [22.4, 662.0], [22.5, 662.0], [22.6, 662.0], [22.7, 665.0], [22.8, 665.0], [22.9, 665.0], [23.0, 665.0], [23.1, 665.0], [23.2, 666.0], [23.3, 666.0], [23.4, 666.0], [23.5, 666.0], [23.6, 666.0], [23.7, 666.0], [23.8, 666.0], [23.9, 666.0], [24.0, 666.0], [24.1, 666.0], [24.2, 666.0], [24.3, 667.0], [24.4, 667.0], [24.5, 667.0], [24.6, 667.0], [24.7, 667.0], [24.8, 669.0], [24.9, 669.0], [25.0, 669.0], [25.1, 669.0], [25.2, 669.0], [25.3, 670.0], [25.4, 670.0], [25.5, 670.0], [25.6, 670.0], [25.7, 670.0], [25.8, 672.0], [25.9, 672.0], [26.0, 672.0], [26.1, 672.0], [26.2, 672.0], [26.3, 672.0], [26.4, 672.0], [26.5, 672.0], [26.6, 672.0], [26.7, 672.0], [26.8, 672.0], [26.9, 674.0], [27.0, 674.0], [27.1, 674.0], [27.2, 674.0], [27.3, 674.0], [27.4, 675.0], [27.5, 675.0], [27.6, 675.0], [27.7, 675.0], [27.8, 675.0], [27.9, 676.0], [28.0, 676.0], [28.1, 676.0], [28.2, 676.0], [28.3, 676.0], [28.4, 676.0], [28.5, 676.0], [28.6, 676.0], [28.7, 676.0], [28.8, 676.0], [28.9, 676.0], [29.0, 680.0], [29.1, 680.0], [29.2, 680.0], [29.3, 680.0], [29.4, 680.0], [29.5, 681.0], [29.6, 681.0], [29.7, 681.0], [29.8, 681.0], [29.9, 681.0], [30.0, 681.0], [30.1, 683.0], [30.2, 683.0], [30.3, 683.0], [30.4, 683.0], [30.5, 683.0], [30.6, 683.0], [30.7, 683.0], [30.8, 683.0], [30.9, 683.0], [31.0, 683.0], [31.1, 686.0], [31.2, 686.0], [31.3, 686.0], [31.4, 686.0], [31.5, 686.0], [31.6, 689.0], [31.7, 689.0], [31.8, 689.0], [31.9, 689.0], [32.0, 689.0], [32.1, 689.0], [32.2, 689.0], [32.3, 689.0], [32.4, 689.0], [32.5, 689.0], [32.6, 689.0], [32.7, 689.0], [32.8, 689.0], [32.9, 689.0], [33.0, 689.0], [33.1, 689.0], [33.2, 691.0], [33.3, 691.0], [33.4, 691.0], [33.5, 691.0], [33.6, 691.0], [33.7, 692.0], [33.8, 692.0], [33.9, 692.0], [34.0, 692.0], [34.1, 692.0], [34.2, 692.0], [34.3, 692.0], [34.4, 692.0], [34.5, 692.0], [34.6, 692.0], [34.7, 692.0], [34.8, 692.0], [34.9, 692.0], [35.0, 692.0], [35.1, 692.0], [35.2, 692.0], [35.3, 695.0], [35.4, 695.0], [35.5, 695.0], [35.6, 695.0], [35.7, 695.0], [35.8, 696.0], [35.9, 696.0], [36.0, 696.0], [36.1, 696.0], [36.2, 696.0], [36.3, 696.0], [36.4, 697.0], [36.5, 697.0], [36.6, 697.0], [36.7, 697.0], [36.8, 697.0], [36.9, 697.0], [37.0, 697.0], [37.1, 697.0], [37.2, 697.0], [37.3, 697.0], [37.4, 698.0], [37.5, 698.0], [37.6, 698.0], [37.7, 698.0], [37.8, 698.0], [37.9, 700.0], [38.0, 700.0], [38.1, 700.0], [38.2, 700.0], [38.3, 700.0], [38.4, 700.0], [38.5, 700.0], [38.6, 700.0], [38.7, 700.0], [38.8, 700.0], [38.9, 700.0], [39.0, 701.0], [39.1, 701.0], [39.2, 701.0], [39.3, 701.0], [39.4, 701.0], [39.5, 702.0], [39.6, 702.0], [39.7, 702.0], [39.8, 702.0], [39.9, 702.0], [40.0, 702.0], [40.1, 703.0], [40.2, 703.0], [40.3, 703.0], [40.4, 703.0], [40.5, 703.0], [40.6, 704.0], [40.7, 704.0], [40.8, 704.0], [40.9, 704.0], [41.0, 704.0], [41.1, 704.0], [41.2, 704.0], [41.3, 704.0], [41.4, 704.0], [41.5, 704.0], [41.6, 708.0], [41.7, 708.0], [41.8, 708.0], [41.9, 708.0], [42.0, 708.0], [42.1, 708.0], [42.2, 710.0], [42.3, 710.0], [42.4, 710.0], [42.5, 710.0], [42.6, 710.0], [42.7, 713.0], [42.8, 713.0], [42.9, 713.0], [43.0, 713.0], [43.1, 713.0], [43.2, 713.0], [43.3, 713.0], [43.4, 713.0], [43.5, 713.0], [43.6, 713.0], [43.7, 715.0], [43.8, 715.0], [43.9, 715.0], [44.0, 715.0], [44.1, 715.0], [44.2, 715.0], [44.3, 715.0], [44.4, 715.0], [44.5, 715.0], [44.6, 715.0], [44.7, 715.0], [44.8, 716.0], [44.9, 716.0], [45.0, 716.0], [45.1, 716.0], [45.2, 716.0], [45.3, 716.0], [45.4, 716.0], [45.5, 716.0], [45.6, 716.0], [45.7, 716.0], [45.8, 716.0], [45.9, 716.0], [46.0, 716.0], [46.1, 716.0], [46.2, 716.0], [46.3, 716.0], [46.4, 718.0], [46.5, 718.0], [46.6, 718.0], [46.7, 718.0], [46.8, 718.0], [46.9, 719.0], [47.0, 719.0], [47.1, 719.0], [47.2, 719.0], [47.3, 719.0], [47.4, 721.0], [47.5, 721.0], [47.6, 721.0], [47.7, 721.0], [47.8, 721.0], [47.9, 721.0], [48.0, 721.0], [48.1, 721.0], [48.2, 721.0], [48.3, 721.0], [48.4, 721.0], [48.5, 722.0], [48.6, 722.0], [48.7, 722.0], [48.8, 722.0], [48.9, 722.0], [49.0, 722.0], [49.1, 722.0], [49.2, 722.0], [49.3, 722.0], [49.4, 722.0], [49.5, 722.0], [49.6, 722.0], [49.7, 722.0], [49.8, 722.0], [49.9, 722.0], [50.0, 722.0], [50.1, 723.0], [50.2, 723.0], [50.3, 723.0], [50.4, 723.0], [50.5, 723.0], [50.6, 725.0], [50.7, 725.0], [50.8, 725.0], [50.9, 725.0], [51.0, 725.0], [51.1, 729.0], [51.2, 729.0], [51.3, 729.0], [51.4, 729.0], [51.5, 729.0], [51.6, 729.0], [51.7, 729.0], [51.8, 729.0], [51.9, 729.0], [52.0, 729.0], [52.1, 729.0], [52.2, 734.0], [52.3, 734.0], [52.4, 734.0], [52.5, 734.0], [52.6, 734.0], [52.7, 736.0], [52.8, 736.0], [52.9, 736.0], [53.0, 736.0], [53.1, 736.0], [53.2, 739.0], [53.3, 739.0], [53.4, 739.0], [53.5, 739.0], [53.6, 739.0], [53.7, 740.0], [53.8, 740.0], [53.9, 740.0], [54.0, 740.0], [54.1, 740.0], [54.2, 740.0], [54.3, 740.0], [54.4, 740.0], [54.5, 740.0], [54.6, 740.0], [54.7, 740.0], [54.8, 741.0], [54.9, 741.0], [55.0, 741.0], [55.1, 741.0], [55.2, 741.0], [55.3, 741.0], [55.4, 741.0], [55.5, 741.0], [55.6, 741.0], [55.7, 741.0], [55.8, 745.0], [55.9, 745.0], [56.0, 745.0], [56.1, 745.0], [56.2, 745.0], [56.3, 745.0], [56.4, 745.0], [56.5, 745.0], [56.6, 745.0], [56.7, 745.0], [56.8, 745.0], [56.9, 745.0], [57.0, 745.0], [57.1, 745.0], [57.2, 745.0], [57.3, 745.0], [57.4, 745.0], [57.5, 745.0], [57.6, 745.0], [57.7, 745.0], [57.8, 745.0], [57.9, 747.0], [58.0, 747.0], [58.1, 747.0], [58.2, 747.0], [58.3, 747.0], [58.4, 747.0], [58.5, 748.0], [58.6, 748.0], [58.7, 748.0], [58.8, 748.0], [58.9, 748.0], [59.0, 749.0], [59.1, 749.0], [59.2, 749.0], [59.3, 749.0], [59.4, 749.0], [59.5, 749.0], [59.6, 749.0], [59.7, 749.0], [59.8, 749.0], [59.9, 749.0], [60.0, 749.0], [60.1, 754.0], [60.2, 754.0], [60.3, 754.0], [60.4, 754.0], [60.5, 754.0], [60.6, 755.0], [60.7, 755.0], [60.8, 755.0], [60.9, 755.0], [61.0, 755.0], [61.1, 759.0], [61.2, 759.0], [61.3, 759.0], [61.4, 759.0], [61.5, 759.0], [61.6, 761.0], [61.7, 761.0], [61.8, 761.0], [61.9, 761.0], [62.0, 761.0], [62.1, 761.0], [62.2, 762.0], [62.3, 762.0], [62.4, 762.0], [62.5, 762.0], [62.6, 762.0], [62.7, 767.0], [62.8, 767.0], [62.9, 767.0], [63.0, 767.0], [63.1, 767.0], [63.2, 768.0], [63.3, 768.0], [63.4, 768.0], [63.5, 768.0], [63.6, 768.0], [63.7, 768.0], [63.8, 768.0], [63.9, 768.0], [64.0, 768.0], [64.1, 768.0], [64.2, 768.0], [64.3, 768.0], [64.4, 768.0], [64.5, 768.0], [64.6, 768.0], [64.7, 768.0], [64.8, 768.0], [64.9, 768.0], [65.0, 768.0], [65.1, 768.0], [65.2, 768.0], [65.3, 768.0], [65.4, 768.0], [65.5, 768.0], [65.6, 768.0], [65.7, 768.0], [65.8, 769.0], [65.9, 769.0], [66.0, 769.0], [66.1, 769.0], [66.2, 769.0], [66.3, 769.0], [66.4, 771.0], [66.5, 771.0], [66.6, 771.0], [66.7, 771.0], [66.8, 771.0], [66.9, 775.0], [67.0, 775.0], [67.1, 775.0], [67.2, 775.0], [67.3, 775.0], [67.4, 776.0], [67.5, 776.0], [67.6, 776.0], [67.7, 776.0], [67.8, 776.0], [67.9, 776.0], [68.0, 776.0], [68.1, 776.0], [68.2, 776.0], [68.3, 776.0], [68.4, 776.0], [68.5, 778.0], [68.6, 778.0], [68.7, 778.0], [68.8, 778.0], [68.9, 778.0], [69.0, 778.0], [69.1, 778.0], [69.2, 778.0], [69.3, 778.0], [69.4, 778.0], [69.5, 778.0], [69.6, 778.0], [69.7, 778.0], [69.8, 778.0], [69.9, 778.0], [70.0, 778.0], [70.1, 778.0], [70.2, 778.0], [70.3, 778.0], [70.4, 778.0], [70.5, 778.0], [70.6, 779.0], [70.7, 779.0], [70.8, 779.0], [70.9, 779.0], [71.0, 779.0], [71.1, 782.0], [71.2, 782.0], [71.3, 782.0], [71.4, 782.0], [71.5, 782.0], [71.6, 784.0], [71.7, 784.0], [71.8, 784.0], [71.9, 784.0], [72.0, 784.0], [72.1, 784.0], [72.2, 785.0], [72.3, 785.0], [72.4, 785.0], [72.5, 785.0], [72.6, 785.0], [72.7, 788.0], [72.8, 788.0], [72.9, 788.0], [73.0, 788.0], [73.1, 788.0], [73.2, 794.0], [73.3, 794.0], [73.4, 794.0], [73.5, 794.0], [73.6, 794.0], [73.7, 794.0], [73.8, 794.0], [73.9, 794.0], [74.0, 794.0], [74.1, 794.0], [74.2, 794.0], [74.3, 794.0], [74.4, 794.0], [74.5, 794.0], [74.6, 794.0], [74.7, 794.0], [74.8, 794.0], [74.9, 794.0], [75.0, 794.0], [75.1, 794.0], [75.2, 794.0], [75.3, 796.0], [75.4, 796.0], [75.5, 796.0], [75.6, 796.0], [75.7, 796.0], [75.8, 797.0], [75.9, 797.0], [76.0, 797.0], [76.1, 797.0], [76.2, 797.0], [76.3, 797.0], [76.4, 798.0], [76.5, 798.0], [76.6, 798.0], [76.7, 798.0], [76.8, 798.0], [76.9, 798.0], [77.0, 798.0], [77.1, 798.0], [77.2, 798.0], [77.3, 798.0], [77.4, 799.0], [77.5, 799.0], [77.6, 799.0], [77.7, 799.0], [77.8, 799.0], [77.9, 800.0], [78.0, 800.0], [78.1, 800.0], [78.2, 800.0], [78.3, 800.0], [78.4, 800.0], [78.5, 802.0], [78.6, 802.0], [78.7, 802.0], [78.8, 802.0], [78.9, 802.0], [79.0, 807.0], [79.1, 807.0], [79.2, 807.0], [79.3, 807.0], [79.4, 807.0], [79.5, 812.0], [79.6, 812.0], [79.7, 812.0], [79.8, 812.0], [79.9, 812.0], [80.0, 812.0], [80.1, 812.0], [80.2, 812.0], [80.3, 812.0], [80.4, 812.0], [80.5, 812.0], [80.6, 812.0], [80.7, 812.0], [80.8, 812.0], [80.9, 812.0], [81.0, 812.0], [81.1, 812.0], [81.2, 812.0], [81.3, 812.0], [81.4, 812.0], [81.5, 812.0], [81.6, 812.0], [81.7, 812.0], [81.8, 812.0], [81.9, 812.0], [82.0, 812.0], [82.1, 812.0], [82.2, 812.0], [82.3, 812.0], [82.4, 812.0], [82.5, 812.0], [82.6, 812.0], [82.7, 812.0], [82.8, 812.0], [82.9, 812.0], [83.0, 812.0], [83.1, 812.0], [83.2, 815.0], [83.3, 815.0], [83.4, 815.0], [83.5, 815.0], [83.6, 815.0], [83.7, 816.0], [83.8, 816.0], [83.9, 816.0], [84.0, 816.0], [84.1, 816.0], [84.2, 816.0], [84.3, 816.0], [84.4, 816.0], [84.5, 816.0], [84.6, 816.0], [84.7, 816.0], [84.8, 817.0], [84.9, 817.0], [85.0, 817.0], [85.1, 817.0], [85.2, 817.0], [85.3, 818.0], [85.4, 818.0], [85.5, 818.0], [85.6, 818.0], [85.7, 818.0], [85.8, 819.0], [85.9, 819.0], [86.0, 819.0], [86.1, 819.0], [86.2, 819.0], [86.3, 819.0], [86.4, 819.0], [86.5, 819.0], [86.6, 819.0], [86.7, 819.0], [86.8, 819.0], [86.9, 819.0], [87.0, 819.0], [87.1, 819.0], [87.2, 819.0], [87.3, 819.0], [87.4, 819.0], [87.5, 819.0], [87.6, 819.0], [87.7, 819.0], [87.8, 819.0], [87.9, 819.0], [88.0, 819.0], [88.1, 819.0], [88.2, 819.0], [88.3, 819.0], [88.4, 819.0], [88.5, 820.0], [88.6, 820.0], [88.7, 820.0], [88.8, 820.0], [88.9, 820.0], [89.0, 820.0], [89.1, 820.0], [89.2, 820.0], [89.3, 820.0], [89.4, 820.0], [89.5, 821.0], [89.6, 821.0], [89.7, 821.0], [89.8, 821.0], [89.9, 821.0], [90.0, 821.0], [90.1, 825.0], [90.2, 825.0], [90.3, 825.0], [90.4, 825.0], [90.5, 825.0], [90.6, 825.0], [90.7, 825.0], [90.8, 825.0], [90.9, 825.0], [91.0, 825.0], [91.1, 826.0], [91.2, 826.0], [91.3, 826.0], [91.4, 826.0], [91.5, 826.0], [91.6, 830.0], [91.7, 830.0], [91.8, 830.0], [91.9, 830.0], [92.0, 830.0], [92.1, 830.0], [92.2, 831.0], [92.3, 831.0], [92.4, 831.0], [92.5, 831.0], [92.6, 831.0], [92.7, 833.0], [92.8, 833.0], [92.9, 833.0], [93.0, 833.0], [93.1, 833.0], [93.2, 833.0], [93.3, 833.0], [93.4, 833.0], [93.5, 833.0], [93.6, 833.0], [93.7, 834.0], [93.8, 834.0], [93.9, 834.0], [94.0, 834.0], [94.1, 834.0], [94.2, 834.0], [94.3, 834.0], [94.4, 834.0], [94.5, 834.0], [94.6, 834.0], [94.7, 834.0], [94.8, 834.0], [94.9, 834.0], [95.0, 834.0], [95.1, 834.0], [95.2, 834.0], [95.3, 836.0], [95.4, 836.0], [95.5, 836.0], [95.6, 836.0], [95.7, 836.0], [95.8, 841.0], [95.9, 841.0], [96.0, 841.0], [96.1, 841.0], [96.2, 841.0], [96.3, 841.0], [96.4, 845.0], [96.5, 845.0], [96.6, 845.0], [96.7, 845.0], [96.8, 845.0], [96.9, 845.0], [97.0, 845.0], [97.1, 845.0], [97.2, 845.0], [97.3, 845.0], [97.4, 846.0], [97.5, 846.0], [97.6, 846.0], [97.7, 846.0], [97.8, 846.0], [97.9, 852.0], [98.0, 852.0], [98.1, 852.0], [98.2, 852.0], [98.3, 852.0], [98.4, 852.0], [98.5, 855.0], [98.6, 855.0], [98.7, 855.0], [98.8, 855.0], [98.9, 855.0], [99.0, 857.0], [99.1, 857.0], [99.2, 857.0], [99.3, 857.0], [99.4, 857.0], [99.5, 886.0], [99.6, 886.0], [99.7, 886.0], [99.8, 886.0], [99.9, 886.0], [100.0, 886.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 42.0, "minX": 600.0, "maxY": 76.0, "series": [{"data": [[600.0, 72.0], [700.0, 76.0], [800.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 189.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 189.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.923076923076923, "minX": 1.61980644E12, "maxY": 20.13245033112583, "series": [{"data": [[1.6198065E12, 20.13245033112583], [1.61980644E12, 8.923076923076923]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6198065E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 643.5, "minX": 1.0, "maxY": 842.0, "series": [{"data": [[2.0, 733.0], [3.0, 738.0], [4.0, 714.0], [5.0, 700.0], [6.0, 680.75], [7.0, 687.5], [8.0, 675.6], [9.0, 643.5], [10.0, 646.8], [11.0, 644.75], [12.0, 715.0], [13.0, 666.1666666666666], [14.0, 676.5714285714286], [15.0, 695.5714285714286], [16.0, 679.25], [1.0, 817.0], [17.0, 707.875], [18.0, 700.2222222222222], [19.0, 722.2222222222222], [20.0, 720.7], [21.0, 743.8], [22.0, 756.4000000000001], [23.0, 750.2], [24.0, 797.0], [25.0, 785.2727272727273], [26.0, 819.9166666666666], [27.0, 813.0769230769231], [28.0, 842.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[17.831578947368428, 732.5315789473688]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 28.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 101.4, "minX": 1.61980644E12, "maxY": 923.6166666666667, "series": [{"data": [[1.6198065E12, 923.6166666666667], [1.61980644E12, 238.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6198065E12, 392.6], [1.61980644E12, 101.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6198065E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 648.8974358974358, "minX": 1.61980644E12, "maxY": 754.132450331126, "series": [{"data": [[1.6198065E12, 754.132450331126], [1.61980644E12, 648.8974358974358]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6198065E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 648.8974358974358, "minX": 1.61980644E12, "maxY": 754.1192052980127, "series": [{"data": [[1.6198065E12, 754.1192052980127], [1.61980644E12, 648.8974358974358]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6198065E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01324503311258279, "minX": 1.61980644E12, "maxY": 0.05128205128205131, "series": [{"data": [[1.6198065E12, 0.01324503311258279], [1.61980644E12, 0.05128205128205131]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6198065E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 627.0, "minX": 1.61980644E12, "maxY": 857.0, "series": [{"data": [[1.6198065E12, 857.0], [1.61980644E12, 721.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6198065E12, 829.6], [1.61980644E12, 662.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6198065E12, 855.98], [1.61980644E12, 721.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6198065E12, 838.25], [1.61980644E12, 719.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6198065E12, 657.0], [1.61980644E12, 627.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6198065E12, 751.5], [1.61980644E12, 646.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6198065E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 633.5, "minX": 1.0, "maxY": 886.0, "series": [{"data": [[9.0, 652.0], [10.0, 644.0], [11.0, 780.5], [3.0, 650.0], [13.0, 683.0], [14.0, 722.0], [1.0, 650.0], [16.0, 704.0], [17.0, 800.0], [18.0, 747.0], [19.0, 812.0], [5.0, 633.5], [6.0, 637.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[19.0, 886.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 633.5, "minX": 1.0, "maxY": 886.0, "series": [{"data": [[9.0, 652.0], [10.0, 644.0], [11.0, 780.5], [3.0, 650.0], [13.0, 683.0], [14.0, 722.0], [1.0, 650.0], [16.0, 704.0], [17.0, 800.0], [18.0, 747.0], [19.0, 812.0], [5.0, 633.5], [6.0, 637.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[19.0, 886.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.61980644E12, "maxY": 2.3833333333333333, "series": [{"data": [[1.6198065E12, 2.3833333333333333], [1.61980644E12, 0.7833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6198065E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.61980644E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.6198065E12, 2.5166666666666666], [1.61980644E12, 0.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6198065E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61980644E12, "maxY": 2.5, "series": [{"data": [[1.6198065E12, 2.5], [1.61980644E12, 0.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6198065E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6198065E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61980644E12, "maxY": 2.5, "series": [{"data": [[1.6198065E12, 2.5], [1.61980644E12, 0.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6198065E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6198065E12, "title": "Total Transactions Per Second"}},
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

