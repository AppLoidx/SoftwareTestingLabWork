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
        data: {"result": {"minY": 627.0, "minX": 0.0, "maxY": 822.0, "series": [{"data": [[0.0, 627.0], [0.1, 627.0], [0.2, 627.0], [0.3, 629.0], [0.4, 629.0], [0.5, 629.0], [0.6, 632.0], [0.7, 632.0], [0.8, 632.0], [0.9, 634.0], [1.0, 634.0], [1.1, 634.0], [1.2, 635.0], [1.3, 635.0], [1.4, 635.0], [1.5, 637.0], [1.6, 637.0], [1.7, 637.0], [1.8, 640.0], [1.9, 640.0], [2.0, 640.0], [2.1, 641.0], [2.2, 641.0], [2.3, 641.0], [2.4, 641.0], [2.5, 641.0], [2.6, 641.0], [2.7, 644.0], [2.8, 644.0], [2.9, 644.0], [3.0, 647.0], [3.1, 647.0], [3.2, 647.0], [3.3, 648.0], [3.4, 648.0], [3.5, 648.0], [3.6, 649.0], [3.7, 649.0], [3.8, 649.0], [3.9, 649.0], [4.0, 649.0], [4.1, 649.0], [4.2, 649.0], [4.3, 649.0], [4.4, 649.0], [4.5, 650.0], [4.6, 650.0], [4.7, 650.0], [4.8, 650.0], [4.9, 650.0], [5.0, 653.0], [5.1, 653.0], [5.2, 653.0], [5.3, 654.0], [5.4, 654.0], [5.5, 654.0], [5.6, 654.0], [5.7, 654.0], [5.8, 654.0], [5.9, 655.0], [6.0, 655.0], [6.1, 655.0], [6.2, 655.0], [6.3, 655.0], [6.4, 655.0], [6.5, 657.0], [6.6, 657.0], [6.7, 657.0], [6.8, 658.0], [6.9, 658.0], [7.0, 658.0], [7.1, 659.0], [7.2, 659.0], [7.3, 659.0], [7.4, 659.0], [7.5, 659.0], [7.6, 659.0], [7.7, 663.0], [7.8, 663.0], [7.9, 663.0], [8.0, 665.0], [8.1, 665.0], [8.2, 665.0], [8.3, 665.0], [8.4, 665.0], [8.5, 665.0], [8.6, 666.0], [8.7, 666.0], [8.8, 666.0], [8.9, 667.0], [9.0, 667.0], [9.1, 667.0], [9.2, 667.0], [9.3, 667.0], [9.4, 667.0], [9.5, 667.0], [9.6, 667.0], [9.7, 667.0], [9.8, 667.0], [9.9, 667.0], [10.0, 672.0], [10.1, 672.0], [10.2, 672.0], [10.3, 672.0], [10.4, 672.0], [10.5, 672.0], [10.6, 673.0], [10.7, 673.0], [10.8, 673.0], [10.9, 675.0], [11.0, 675.0], [11.1, 675.0], [11.2, 676.0], [11.3, 676.0], [11.4, 676.0], [11.5, 679.0], [11.6, 679.0], [11.7, 679.0], [11.8, 680.0], [11.9, 680.0], [12.0, 680.0], [12.1, 680.0], [12.2, 680.0], [12.3, 680.0], [12.4, 680.0], [12.5, 680.0], [12.6, 680.0], [12.7, 680.0], [12.8, 680.0], [12.9, 680.0], [13.0, 680.0], [13.1, 680.0], [13.2, 680.0], [13.3, 681.0], [13.4, 681.0], [13.5, 681.0], [13.6, 682.0], [13.7, 682.0], [13.8, 682.0], [13.9, 684.0], [14.0, 684.0], [14.1, 684.0], [14.2, 685.0], [14.3, 685.0], [14.4, 685.0], [14.5, 686.0], [14.6, 686.0], [14.7, 686.0], [14.8, 686.0], [14.9, 686.0], [15.0, 686.0], [15.1, 687.0], [15.2, 687.0], [15.3, 689.0], [15.4, 689.0], [15.5, 689.0], [15.6, 689.0], [15.7, 689.0], [15.8, 689.0], [15.9, 691.0], [16.0, 691.0], [16.1, 691.0], [16.2, 691.0], [16.3, 691.0], [16.4, 691.0], [16.5, 692.0], [16.6, 692.0], [16.7, 692.0], [16.8, 693.0], [16.9, 693.0], [17.0, 693.0], [17.1, 694.0], [17.2, 694.0], [17.3, 694.0], [17.4, 695.0], [17.5, 695.0], [17.6, 695.0], [17.7, 698.0], [17.8, 698.0], [17.9, 698.0], [18.0, 699.0], [18.1, 699.0], [18.2, 699.0], [18.3, 699.0], [18.4, 699.0], [18.5, 699.0], [18.6, 699.0], [18.7, 699.0], [18.8, 699.0], [18.9, 700.0], [19.0, 700.0], [19.1, 700.0], [19.2, 700.0], [19.3, 700.0], [19.4, 700.0], [19.5, 700.0], [19.6, 700.0], [19.7, 700.0], [19.8, 701.0], [19.9, 701.0], [20.0, 703.0], [20.1, 703.0], [20.2, 703.0], [20.3, 704.0], [20.4, 704.0], [20.5, 704.0], [20.6, 705.0], [20.7, 705.0], [20.8, 705.0], [20.9, 706.0], [21.0, 706.0], [21.1, 706.0], [21.2, 706.0], [21.3, 706.0], [21.4, 706.0], [21.5, 708.0], [21.6, 708.0], [21.7, 708.0], [21.8, 710.0], [21.9, 710.0], [22.0, 710.0], [22.1, 710.0], [22.2, 710.0], [22.3, 710.0], [22.4, 711.0], [22.5, 711.0], [22.6, 711.0], [22.7, 711.0], [22.8, 711.0], [22.9, 711.0], [23.0, 713.0], [23.1, 713.0], [23.2, 713.0], [23.3, 713.0], [23.4, 713.0], [23.5, 713.0], [23.6, 713.0], [23.7, 713.0], [23.8, 713.0], [23.9, 713.0], [24.0, 713.0], [24.1, 713.0], [24.2, 715.0], [24.3, 715.0], [24.4, 715.0], [24.5, 715.0], [24.6, 715.0], [24.7, 715.0], [24.8, 716.0], [24.9, 716.0], [25.0, 716.0], [25.1, 716.0], [25.2, 716.0], [25.3, 718.0], [25.4, 718.0], [25.5, 718.0], [25.6, 718.0], [25.7, 718.0], [25.8, 718.0], [25.9, 719.0], [26.0, 719.0], [26.1, 719.0], [26.2, 719.0], [26.3, 719.0], [26.4, 719.0], [26.5, 720.0], [26.6, 720.0], [26.7, 720.0], [26.8, 721.0], [26.9, 721.0], [27.0, 721.0], [27.1, 721.0], [27.2, 721.0], [27.3, 721.0], [27.4, 722.0], [27.5, 722.0], [27.6, 722.0], [27.7, 723.0], [27.8, 723.0], [27.9, 723.0], [28.0, 725.0], [28.1, 725.0], [28.2, 725.0], [28.3, 725.0], [28.4, 725.0], [28.5, 725.0], [28.6, 727.0], [28.7, 727.0], [28.8, 727.0], [28.9, 727.0], [29.0, 727.0], [29.1, 727.0], [29.2, 728.0], [29.3, 728.0], [29.4, 728.0], [29.5, 729.0], [29.6, 729.0], [29.7, 729.0], [29.8, 729.0], [29.9, 729.0], [30.0, 729.0], [30.1, 729.0], [30.2, 729.0], [30.3, 731.0], [30.4, 731.0], [30.5, 731.0], [30.6, 731.0], [30.7, 731.0], [30.8, 731.0], [30.9, 731.0], [31.0, 731.0], [31.1, 731.0], [31.2, 731.0], [31.3, 731.0], [31.4, 731.0], [31.5, 731.0], [31.6, 731.0], [31.7, 731.0], [31.8, 732.0], [31.9, 732.0], [32.0, 732.0], [32.1, 733.0], [32.2, 733.0], [32.3, 733.0], [32.4, 734.0], [32.5, 734.0], [32.6, 734.0], [32.7, 734.0], [32.8, 734.0], [32.9, 734.0], [33.0, 734.0], [33.1, 734.0], [33.2, 734.0], [33.3, 736.0], [33.4, 736.0], [33.5, 736.0], [33.6, 736.0], [33.7, 736.0], [33.8, 736.0], [33.9, 736.0], [34.0, 736.0], [34.1, 736.0], [34.2, 737.0], [34.3, 737.0], [34.4, 737.0], [34.5, 738.0], [34.6, 738.0], [34.7, 738.0], [34.8, 738.0], [34.9, 738.0], [35.0, 738.0], [35.1, 740.0], [35.2, 740.0], [35.3, 740.0], [35.4, 740.0], [35.5, 740.0], [35.6, 741.0], [35.7, 741.0], [35.8, 741.0], [35.9, 742.0], [36.0, 742.0], [36.1, 742.0], [36.2, 742.0], [36.3, 742.0], [36.4, 742.0], [36.5, 742.0], [36.6, 742.0], [36.7, 742.0], [36.8, 742.0], [36.9, 742.0], [37.0, 742.0], [37.1, 742.0], [37.2, 742.0], [37.3, 742.0], [37.4, 743.0], [37.5, 743.0], [37.6, 743.0], [37.7, 746.0], [37.8, 746.0], [37.9, 746.0], [38.0, 748.0], [38.1, 748.0], [38.2, 748.0], [38.3, 748.0], [38.4, 748.0], [38.5, 748.0], [38.6, 748.0], [38.7, 748.0], [38.8, 748.0], [38.9, 748.0], [39.0, 748.0], [39.1, 748.0], [39.2, 748.0], [39.3, 748.0], [39.4, 748.0], [39.5, 748.0], [39.6, 748.0], [39.7, 748.0], [39.8, 749.0], [39.9, 749.0], [40.0, 749.0], [40.1, 749.0], [40.2, 749.0], [40.3, 749.0], [40.4, 749.0], [40.5, 749.0], [40.6, 749.0], [40.7, 749.0], [40.8, 749.0], [40.9, 749.0], [41.0, 749.0], [41.1, 749.0], [41.2, 749.0], [41.3, 749.0], [41.4, 749.0], [41.5, 750.0], [41.6, 750.0], [41.7, 750.0], [41.8, 751.0], [41.9, 751.0], [42.0, 751.0], [42.1, 751.0], [42.2, 751.0], [42.3, 751.0], [42.4, 751.0], [42.5, 751.0], [42.6, 751.0], [42.7, 752.0], [42.8, 752.0], [42.9, 752.0], [43.0, 753.0], [43.1, 753.0], [43.2, 753.0], [43.3, 754.0], [43.4, 754.0], [43.5, 754.0], [43.6, 755.0], [43.7, 755.0], [43.8, 755.0], [43.9, 755.0], [44.0, 755.0], [44.1, 755.0], [44.2, 755.0], [44.3, 755.0], [44.4, 755.0], [44.5, 755.0], [44.6, 755.0], [44.7, 755.0], [44.8, 757.0], [44.9, 757.0], [45.0, 757.0], [45.1, 759.0], [45.2, 759.0], [45.3, 759.0], [45.4, 759.0], [45.5, 759.0], [45.6, 759.0], [45.7, 759.0], [45.8, 759.0], [45.9, 759.0], [46.0, 759.0], [46.1, 759.0], [46.2, 759.0], [46.3, 759.0], [46.4, 759.0], [46.5, 759.0], [46.6, 759.0], [46.7, 759.0], [46.8, 759.0], [46.9, 759.0], [47.0, 759.0], [47.1, 760.0], [47.2, 760.0], [47.3, 760.0], [47.4, 760.0], [47.5, 760.0], [47.6, 760.0], [47.7, 760.0], [47.8, 760.0], [47.9, 760.0], [48.0, 760.0], [48.1, 760.0], [48.2, 760.0], [48.3, 760.0], [48.4, 760.0], [48.5, 760.0], [48.6, 760.0], [48.7, 760.0], [48.8, 760.0], [48.9, 760.0], [49.0, 760.0], [49.1, 760.0], [49.2, 761.0], [49.3, 761.0], [49.4, 761.0], [49.5, 761.0], [49.6, 761.0], [49.7, 761.0], [49.8, 761.0], [49.9, 761.0], [50.0, 761.0], [50.1, 762.0], [50.2, 762.0], [50.3, 762.0], [50.4, 762.0], [50.5, 762.0], [50.6, 762.0], [50.7, 762.0], [50.8, 762.0], [50.9, 762.0], [51.0, 762.0], [51.1, 762.0], [51.2, 762.0], [51.3, 762.0], [51.4, 762.0], [51.5, 763.0], [51.6, 763.0], [51.7, 763.0], [51.8, 763.0], [51.9, 763.0], [52.0, 763.0], [52.1, 763.0], [52.2, 763.0], [52.3, 763.0], [52.4, 763.0], [52.5, 763.0], [52.6, 763.0], [52.7, 763.0], [52.8, 763.0], [52.9, 763.0], [53.0, 764.0], [53.1, 764.0], [53.2, 764.0], [53.3, 764.0], [53.4, 764.0], [53.5, 764.0], [53.6, 765.0], [53.7, 765.0], [53.8, 765.0], [53.9, 765.0], [54.0, 765.0], [54.1, 765.0], [54.2, 765.0], [54.3, 765.0], [54.4, 765.0], [54.5, 765.0], [54.6, 765.0], [54.7, 765.0], [54.8, 765.0], [54.9, 765.0], [55.0, 765.0], [55.1, 765.0], [55.2, 765.0], [55.3, 765.0], [55.4, 765.0], [55.5, 765.0], [55.6, 767.0], [55.7, 767.0], [55.8, 767.0], [55.9, 767.0], [56.0, 767.0], [56.1, 767.0], [56.2, 767.0], [56.3, 767.0], [56.4, 767.0], [56.5, 767.0], [56.6, 767.0], [56.7, 767.0], [56.8, 767.0], [56.9, 767.0], [57.0, 767.0], [57.1, 767.0], [57.2, 767.0], [57.3, 767.0], [57.4, 767.0], [57.5, 767.0], [57.6, 767.0], [57.7, 768.0], [57.8, 768.0], [57.9, 768.0], [58.0, 768.0], [58.1, 768.0], [58.2, 768.0], [58.3, 768.0], [58.4, 768.0], [58.5, 768.0], [58.6, 768.0], [58.7, 768.0], [58.8, 768.0], [58.9, 768.0], [59.0, 768.0], [59.1, 768.0], [59.2, 769.0], [59.3, 769.0], [59.4, 769.0], [59.5, 769.0], [59.6, 769.0], [59.7, 769.0], [59.8, 769.0], [59.9, 769.0], [60.0, 769.0], [60.1, 770.0], [60.2, 770.0], [60.3, 770.0], [60.4, 770.0], [60.5, 770.0], [60.6, 770.0], [60.7, 770.0], [60.8, 770.0], [60.9, 770.0], [61.0, 770.0], [61.1, 770.0], [61.2, 770.0], [61.3, 770.0], [61.4, 770.0], [61.5, 770.0], [61.6, 770.0], [61.7, 770.0], [61.8, 770.0], [61.9, 770.0], [62.0, 770.0], [62.1, 770.0], [62.2, 770.0], [62.3, 770.0], [62.4, 770.0], [62.5, 770.0], [62.6, 770.0], [62.7, 770.0], [62.8, 770.0], [62.9, 770.0], [63.0, 770.0], [63.1, 770.0], [63.2, 770.0], [63.3, 771.0], [63.4, 771.0], [63.5, 771.0], [63.6, 771.0], [63.7, 771.0], [63.8, 771.0], [63.9, 772.0], [64.0, 772.0], [64.1, 772.0], [64.2, 772.0], [64.3, 772.0], [64.4, 772.0], [64.5, 772.0], [64.6, 772.0], [64.7, 772.0], [64.8, 772.0], [64.9, 772.0], [65.0, 772.0], [65.1, 772.0], [65.2, 772.0], [65.3, 772.0], [65.4, 772.0], [65.5, 772.0], [65.6, 772.0], [65.7, 772.0], [65.8, 772.0], [65.9, 772.0], [66.0, 772.0], [66.1, 772.0], [66.2, 772.0], [66.3, 772.0], [66.4, 772.0], [66.5, 772.0], [66.6, 772.0], [66.7, 772.0], [66.8, 772.0], [66.9, 772.0], [67.0, 772.0], [67.1, 772.0], [67.2, 772.0], [67.3, 772.0], [67.4, 772.0], [67.5, 772.0], [67.6, 772.0], [67.7, 772.0], [67.8, 772.0], [67.9, 772.0], [68.0, 772.0], [68.1, 772.0], [68.2, 772.0], [68.3, 772.0], [68.4, 772.0], [68.5, 772.0], [68.6, 772.0], [68.7, 772.0], [68.8, 772.0], [68.9, 772.0], [69.0, 772.0], [69.1, 772.0], [69.2, 772.0], [69.3, 772.0], [69.4, 772.0], [69.5, 772.0], [69.6, 772.0], [69.7, 772.0], [69.8, 772.0], [69.9, 772.0], [70.0, 772.0], [70.1, 773.0], [70.2, 773.0], [70.3, 773.0], [70.4, 773.0], [70.5, 773.0], [70.6, 773.0], [70.7, 773.0], [70.8, 773.0], [70.9, 773.0], [71.0, 773.0], [71.1, 773.0], [71.2, 773.0], [71.3, 773.0], [71.4, 773.0], [71.5, 773.0], [71.6, 773.0], [71.7, 773.0], [71.8, 773.0], [71.9, 773.0], [72.0, 773.0], [72.1, 773.0], [72.2, 773.0], [72.3, 773.0], [72.4, 773.0], [72.5, 773.0], [72.6, 773.0], [72.7, 773.0], [72.8, 773.0], [72.9, 773.0], [73.0, 773.0], [73.1, 773.0], [73.2, 773.0], [73.3, 773.0], [73.4, 773.0], [73.5, 773.0], [73.6, 773.0], [73.7, 773.0], [73.8, 773.0], [73.9, 773.0], [74.0, 773.0], [74.1, 773.0], [74.2, 773.0], [74.3, 773.0], [74.4, 773.0], [74.5, 773.0], [74.6, 773.0], [74.7, 773.0], [74.8, 773.0], [74.9, 773.0], [75.0, 773.0], [75.1, 773.0], [75.2, 773.0], [75.3, 773.0], [75.4, 773.0], [75.5, 773.0], [75.6, 773.0], [75.7, 773.0], [75.8, 773.0], [75.9, 773.0], [76.0, 773.0], [76.1, 773.0], [76.2, 773.0], [76.3, 773.0], [76.4, 773.0], [76.5, 773.0], [76.6, 773.0], [76.7, 773.0], [76.8, 773.0], [76.9, 773.0], [77.0, 773.0], [77.1, 773.0], [77.2, 773.0], [77.3, 773.0], [77.4, 774.0], [77.5, 774.0], [77.6, 774.0], [77.7, 774.0], [77.8, 774.0], [77.9, 774.0], [78.0, 774.0], [78.1, 774.0], [78.2, 774.0], [78.3, 774.0], [78.4, 774.0], [78.5, 774.0], [78.6, 774.0], [78.7, 774.0], [78.8, 774.0], [78.9, 774.0], [79.0, 774.0], [79.1, 774.0], [79.2, 774.0], [79.3, 774.0], [79.4, 774.0], [79.5, 774.0], [79.6, 774.0], [79.7, 774.0], [79.8, 774.0], [79.9, 774.0], [80.0, 774.0], [80.1, 774.0], [80.2, 774.0], [80.3, 774.0], [80.4, 774.0], [80.5, 774.0], [80.6, 775.0], [80.7, 775.0], [80.8, 775.0], [80.9, 775.0], [81.0, 775.0], [81.1, 775.0], [81.2, 775.0], [81.3, 775.0], [81.4, 775.0], [81.5, 775.0], [81.6, 775.0], [81.7, 775.0], [81.8, 775.0], [81.9, 775.0], [82.0, 775.0], [82.1, 775.0], [82.2, 775.0], [82.3, 775.0], [82.4, 775.0], [82.5, 775.0], [82.6, 775.0], [82.7, 775.0], [82.8, 775.0], [82.9, 775.0], [83.0, 775.0], [83.1, 775.0], [83.2, 775.0], [83.3, 776.0], [83.4, 776.0], [83.5, 776.0], [83.6, 776.0], [83.7, 776.0], [83.8, 776.0], [83.9, 776.0], [84.0, 776.0], [84.1, 776.0], [84.2, 776.0], [84.3, 776.0], [84.4, 776.0], [84.5, 776.0], [84.6, 776.0], [84.7, 776.0], [84.8, 776.0], [84.9, 776.0], [85.0, 776.0], [85.1, 776.0], [85.2, 776.0], [85.3, 776.0], [85.4, 776.0], [85.5, 776.0], [85.6, 776.0], [85.7, 776.0], [85.8, 776.0], [85.9, 776.0], [86.0, 776.0], [86.1, 776.0], [86.2, 777.0], [86.3, 777.0], [86.4, 777.0], [86.5, 777.0], [86.6, 777.0], [86.7, 777.0], [86.8, 777.0], [86.9, 777.0], [87.0, 777.0], [87.1, 777.0], [87.2, 777.0], [87.3, 777.0], [87.4, 777.0], [87.5, 777.0], [87.6, 777.0], [87.7, 777.0], [87.8, 777.0], [87.9, 777.0], [88.0, 777.0], [88.1, 777.0], [88.2, 777.0], [88.3, 777.0], [88.4, 777.0], [88.5, 777.0], [88.6, 777.0], [88.7, 777.0], [88.8, 777.0], [88.9, 777.0], [89.0, 777.0], [89.1, 777.0], [89.2, 777.0], [89.3, 777.0], [89.4, 777.0], [89.5, 777.0], [89.6, 777.0], [89.7, 777.0], [89.8, 777.0], [89.9, 777.0], [90.0, 777.0], [90.1, 777.0], [90.2, 777.0], [90.3, 777.0], [90.4, 777.0], [90.5, 777.0], [90.6, 777.0], [90.7, 777.0], [90.8, 777.0], [90.9, 777.0], [91.0, 777.0], [91.1, 777.0], [91.2, 777.0], [91.3, 777.0], [91.4, 777.0], [91.5, 778.0], [91.6, 778.0], [91.7, 778.0], [91.8, 778.0], [91.9, 778.0], [92.0, 778.0], [92.1, 778.0], [92.2, 778.0], [92.3, 778.0], [92.4, 778.0], [92.5, 778.0], [92.6, 778.0], [92.7, 778.0], [92.8, 778.0], [92.9, 778.0], [93.0, 778.0], [93.1, 778.0], [93.2, 778.0], [93.3, 778.0], [93.4, 778.0], [93.5, 778.0], [93.6, 778.0], [93.7, 778.0], [93.8, 778.0], [93.9, 778.0], [94.0, 778.0], [94.1, 778.0], [94.2, 778.0], [94.3, 778.0], [94.4, 778.0], [94.5, 779.0], [94.6, 779.0], [94.7, 779.0], [94.8, 780.0], [94.9, 780.0], [95.0, 780.0], [95.1, 781.0], [95.2, 781.0], [95.3, 781.0], [95.4, 781.0], [95.5, 781.0], [95.6, 782.0], [95.7, 782.0], [95.8, 782.0], [95.9, 782.0], [96.0, 782.0], [96.1, 782.0], [96.2, 783.0], [96.3, 783.0], [96.4, 783.0], [96.5, 786.0], [96.6, 786.0], [96.7, 786.0], [96.8, 788.0], [96.9, 788.0], [97.0, 788.0], [97.1, 788.0], [97.2, 788.0], [97.3, 788.0], [97.4, 789.0], [97.5, 789.0], [97.6, 789.0], [97.7, 792.0], [97.8, 792.0], [97.9, 792.0], [98.0, 792.0], [98.1, 792.0], [98.2, 792.0], [98.3, 793.0], [98.4, 793.0], [98.5, 793.0], [98.6, 795.0], [98.7, 795.0], [98.8, 795.0], [98.9, 809.0], [99.0, 809.0], [99.1, 809.0], [99.2, 809.0], [99.3, 809.0], [99.4, 809.0], [99.5, 819.0], [99.6, 819.0], [99.7, 819.0], [99.8, 822.0], [99.9, 822.0], [100.0, 822.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 600.0, "maxY": 272.0, "series": [{"data": [[600.0, 64.0], [700.0, 272.0], [800.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 340.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 340.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 340.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.547058823529417, "minX": 1.61980728E12, "maxY": 14.547058823529417, "series": [{"data": [[1.61980728E12, 14.547058823529417]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980728E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 674.5, "minX": 1.0, "maxY": 757.522613065327, "series": [{"data": [[2.0, 674.5], [8.0, 700.875], [9.0, 704.1666666666667], [10.0, 723.8571428571429], [11.0, 725.8], [3.0, 686.3333333333334], [12.0, 684.2857142857142], [13.0, 732.7333333333332], [14.0, 735.578947368421], [15.0, 736.5384615384615], [4.0, 699.4], [16.0, 738.5789473684209], [1.0, 691.0], [17.0, 757.522613065327], [5.0, 692.5], [6.0, 707.625], [7.0, 709.1428571428572]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[14.547058823529417, 742.1382352941175]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 17.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 884.0, "minX": 1.61980728E12, "maxY": 2079.6666666666665, "series": [{"data": [[1.61980728E12, 2079.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61980728E12, 884.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980728E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 742.1382352941175, "minX": 1.61980728E12, "maxY": 742.1382352941175, "series": [{"data": [[1.61980728E12, 742.1382352941175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980728E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 742.1264705882357, "minX": 1.61980728E12, "maxY": 742.1264705882357, "series": [{"data": [[1.61980728E12, 742.1264705882357]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980728E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014705882352941171, "minX": 1.61980728E12, "maxY": 0.014705882352941171, "series": [{"data": [[1.61980728E12, 0.014705882352941171]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980728E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 627.0, "minX": 1.61980728E12, "maxY": 822.0, "series": [{"data": [[1.61980728E12, 822.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61980728E12, 777.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61980728E12, 809.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61980728E12, 780.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61980728E12, 627.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61980728E12, 761.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980728E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 651.5, "minX": 1.0, "maxY": 774.0, "series": [{"data": [[8.0, 721.0], [2.0, 713.5], [9.0, 732.5], [11.0, 689.0], [3.0, 688.0], [12.0, 767.5], [13.0, 774.0], [14.0, 771.5], [15.0, 726.0], [1.0, 670.0], [4.0, 651.5], [5.0, 738.0], [6.0, 723.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 651.5, "minX": 1.0, "maxY": 774.0, "series": [{"data": [[8.0, 721.0], [2.0, 713.0], [9.0, 732.0], [11.0, 689.0], [3.0, 688.0], [12.0, 767.5], [13.0, 774.0], [14.0, 771.5], [15.0, 726.0], [1.0, 670.0], [4.0, 651.5], [5.0, 738.0], [6.0, 723.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.61980728E12, "maxY": 5.666666666666667, "series": [{"data": [[1.61980728E12, 5.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980728E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.61980728E12, "maxY": 5.666666666666667, "series": [{"data": [[1.61980728E12, 5.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61980728E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.61980728E12, "maxY": 5.666666666666667, "series": [{"data": [[1.61980728E12, 5.666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980728E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.61980728E12, "maxY": 5.666666666666667, "series": [{"data": [[1.61980728E12, 5.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61980728E12, "title": "Total Transactions Per Second"}},
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

