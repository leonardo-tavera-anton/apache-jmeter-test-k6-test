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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 1612.0, "series": [{"data": [[0.0, 170.0], [0.1, 175.0], [0.2, 176.0], [0.3, 178.0], [0.4, 179.0], [0.5, 180.0], [0.6, 180.0], [0.7, 181.0], [0.8, 181.0], [0.9, 182.0], [1.0, 182.0], [1.1, 183.0], [1.2, 183.0], [1.3, 184.0], [1.4, 184.0], [1.5, 185.0], [1.6, 185.0], [1.7, 186.0], [1.8, 186.0], [1.9, 186.0], [2.0, 187.0], [2.1, 187.0], [2.2, 187.0], [2.3, 188.0], [2.4, 188.0], [2.5, 189.0], [2.6, 189.0], [2.7, 190.0], [2.8, 190.0], [2.9, 191.0], [3.0, 191.0], [3.1, 191.0], [3.2, 192.0], [3.3, 193.0], [3.4, 193.0], [3.5, 194.0], [3.6, 194.0], [3.7, 195.0], [3.8, 196.0], [3.9, 197.0], [4.0, 197.0], [4.1, 198.0], [4.2, 199.0], [4.3, 200.0], [4.4, 202.0], [4.5, 202.0], [4.6, 204.0], [4.7, 205.0], [4.8, 207.0], [4.9, 208.0], [5.0, 210.0], [5.1, 211.0], [5.2, 212.0], [5.3, 214.0], [5.4, 216.0], [5.5, 218.0], [5.6, 219.0], [5.7, 221.0], [5.8, 224.0], [5.9, 226.0], [6.0, 228.0], [6.1, 229.0], [6.2, 231.0], [6.3, 233.0], [6.4, 235.0], [6.5, 237.0], [6.6, 239.0], [6.7, 240.0], [6.8, 241.0], [6.9, 243.0], [7.0, 246.0], [7.1, 248.0], [7.2, 252.0], [7.3, 254.0], [7.4, 257.0], [7.5, 260.0], [7.6, 261.0], [7.7, 263.0], [7.8, 265.0], [7.9, 266.0], [8.0, 268.0], [8.1, 269.0], [8.2, 271.0], [8.3, 273.0], [8.4, 274.0], [8.5, 275.0], [8.6, 277.0], [8.7, 279.0], [8.8, 280.0], [8.9, 282.0], [9.0, 284.0], [9.1, 286.0], [9.2, 287.0], [9.3, 289.0], [9.4, 290.0], [9.5, 292.0], [9.6, 294.0], [9.7, 295.0], [9.8, 297.0], [9.9, 299.0], [10.0, 300.0], [10.1, 303.0], [10.2, 305.0], [10.3, 307.0], [10.4, 309.0], [10.5, 311.0], [10.6, 313.0], [10.7, 315.0], [10.8, 316.0], [10.9, 318.0], [11.0, 319.0], [11.1, 321.0], [11.2, 323.0], [11.3, 324.0], [11.4, 326.0], [11.5, 329.0], [11.6, 331.0], [11.7, 335.0], [11.8, 341.0], [11.9, 345.0], [12.0, 349.0], [12.1, 352.0], [12.2, 354.0], [12.3, 357.0], [12.4, 360.0], [12.5, 363.0], [12.6, 369.0], [12.7, 374.0], [12.8, 378.0], [12.9, 380.0], [13.0, 382.0], [13.1, 384.0], [13.2, 386.0], [13.3, 387.0], [13.4, 389.0], [13.5, 390.0], [13.6, 391.0], [13.7, 392.0], [13.8, 394.0], [13.9, 395.0], [14.0, 396.0], [14.1, 398.0], [14.2, 399.0], [14.3, 401.0], [14.4, 403.0], [14.5, 405.0], [14.6, 407.0], [14.7, 409.0], [14.8, 411.0], [14.9, 414.0], [15.0, 416.0], [15.1, 418.0], [15.2, 420.0], [15.3, 422.0], [15.4, 424.0], [15.5, 426.0], [15.6, 427.0], [15.7, 429.0], [15.8, 431.0], [15.9, 433.0], [16.0, 435.0], [16.1, 439.0], [16.2, 442.0], [16.3, 446.0], [16.4, 449.0], [16.5, 453.0], [16.6, 456.0], [16.7, 458.0], [16.8, 461.0], [16.9, 463.0], [17.0, 465.0], [17.1, 467.0], [17.2, 469.0], [17.3, 471.0], [17.4, 473.0], [17.5, 476.0], [17.6, 478.0], [17.7, 480.0], [17.8, 482.0], [17.9, 483.0], [18.0, 484.0], [18.1, 485.0], [18.2, 486.0], [18.3, 488.0], [18.4, 489.0], [18.5, 489.0], [18.6, 490.0], [18.7, 491.0], [18.8, 492.0], [18.9, 493.0], [19.0, 493.0], [19.1, 494.0], [19.2, 495.0], [19.3, 495.0], [19.4, 496.0], [19.5, 496.0], [19.6, 497.0], [19.7, 498.0], [19.8, 498.0], [19.9, 499.0], [20.0, 499.0], [20.1, 500.0], [20.2, 500.0], [20.3, 501.0], [20.4, 501.0], [20.5, 502.0], [20.6, 502.0], [20.7, 503.0], [20.8, 503.0], [20.9, 504.0], [21.0, 504.0], [21.1, 504.0], [21.2, 505.0], [21.3, 505.0], [21.4, 506.0], [21.5, 506.0], [21.6, 507.0], [21.7, 507.0], [21.8, 507.0], [21.9, 508.0], [22.0, 508.0], [22.1, 508.0], [22.2, 509.0], [22.3, 509.0], [22.4, 509.0], [22.5, 510.0], [22.6, 510.0], [22.7, 510.0], [22.8, 511.0], [22.9, 511.0], [23.0, 512.0], [23.1, 512.0], [23.2, 512.0], [23.3, 512.0], [23.4, 513.0], [23.5, 513.0], [23.6, 513.0], [23.7, 514.0], [23.8, 514.0], [23.9, 514.0], [24.0, 514.0], [24.1, 515.0], [24.2, 515.0], [24.3, 515.0], [24.4, 516.0], [24.5, 516.0], [24.6, 516.0], [24.7, 517.0], [24.8, 517.0], [24.9, 517.0], [25.0, 517.0], [25.1, 518.0], [25.2, 518.0], [25.3, 518.0], [25.4, 518.0], [25.5, 519.0], [25.6, 519.0], [25.7, 519.0], [25.8, 520.0], [25.9, 520.0], [26.0, 520.0], [26.1, 521.0], [26.2, 521.0], [26.3, 521.0], [26.4, 521.0], [26.5, 522.0], [26.6, 522.0], [26.7, 522.0], [26.8, 522.0], [26.9, 523.0], [27.0, 523.0], [27.1, 523.0], [27.2, 524.0], [27.3, 524.0], [27.4, 524.0], [27.5, 524.0], [27.6, 525.0], [27.7, 525.0], [27.8, 525.0], [27.9, 525.0], [28.0, 526.0], [28.1, 526.0], [28.2, 526.0], [28.3, 526.0], [28.4, 527.0], [28.5, 527.0], [28.6, 527.0], [28.7, 527.0], [28.8, 528.0], [28.9, 528.0], [29.0, 528.0], [29.1, 528.0], [29.2, 529.0], [29.3, 529.0], [29.4, 529.0], [29.5, 529.0], [29.6, 529.0], [29.7, 530.0], [29.8, 530.0], [29.9, 530.0], [30.0, 530.0], [30.1, 530.0], [30.2, 531.0], [30.3, 531.0], [30.4, 531.0], [30.5, 531.0], [30.6, 531.0], [30.7, 532.0], [30.8, 532.0], [30.9, 532.0], [31.0, 532.0], [31.1, 532.0], [31.2, 533.0], [31.3, 533.0], [31.4, 533.0], [31.5, 533.0], [31.6, 533.0], [31.7, 533.0], [31.8, 534.0], [31.9, 534.0], [32.0, 534.0], [32.1, 534.0], [32.2, 534.0], [32.3, 535.0], [32.4, 535.0], [32.5, 535.0], [32.6, 535.0], [32.7, 535.0], [32.8, 536.0], [32.9, 536.0], [33.0, 536.0], [33.1, 536.0], [33.2, 536.0], [33.3, 537.0], [33.4, 537.0], [33.5, 537.0], [33.6, 537.0], [33.7, 537.0], [33.8, 538.0], [33.9, 538.0], [34.0, 538.0], [34.1, 538.0], [34.2, 538.0], [34.3, 539.0], [34.4, 539.0], [34.5, 539.0], [34.6, 539.0], [34.7, 539.0], [34.8, 540.0], [34.9, 540.0], [35.0, 540.0], [35.1, 540.0], [35.2, 540.0], [35.3, 541.0], [35.4, 541.0], [35.5, 541.0], [35.6, 541.0], [35.7, 541.0], [35.8, 542.0], [35.9, 542.0], [36.0, 542.0], [36.1, 542.0], [36.2, 542.0], [36.3, 543.0], [36.4, 543.0], [36.5, 543.0], [36.6, 543.0], [36.7, 543.0], [36.8, 544.0], [36.9, 544.0], [37.0, 544.0], [37.1, 544.0], [37.2, 544.0], [37.3, 545.0], [37.4, 545.0], [37.5, 545.0], [37.6, 545.0], [37.7, 545.0], [37.8, 546.0], [37.9, 546.0], [38.0, 546.0], [38.1, 546.0], [38.2, 546.0], [38.3, 547.0], [38.4, 547.0], [38.5, 547.0], [38.6, 547.0], [38.7, 547.0], [38.8, 548.0], [38.9, 548.0], [39.0, 548.0], [39.1, 548.0], [39.2, 549.0], [39.3, 549.0], [39.4, 549.0], [39.5, 549.0], [39.6, 549.0], [39.7, 550.0], [39.8, 550.0], [39.9, 550.0], [40.0, 550.0], [40.1, 551.0], [40.2, 551.0], [40.3, 551.0], [40.4, 551.0], [40.5, 551.0], [40.6, 552.0], [40.7, 552.0], [40.8, 552.0], [40.9, 552.0], [41.0, 553.0], [41.1, 553.0], [41.2, 553.0], [41.3, 553.0], [41.4, 553.0], [41.5, 554.0], [41.6, 554.0], [41.7, 554.0], [41.8, 554.0], [41.9, 555.0], [42.0, 555.0], [42.1, 555.0], [42.2, 556.0], [42.3, 556.0], [42.4, 556.0], [42.5, 556.0], [42.6, 557.0], [42.7, 557.0], [42.8, 557.0], [42.9, 557.0], [43.0, 557.0], [43.1, 558.0], [43.2, 558.0], [43.3, 558.0], [43.4, 558.0], [43.5, 559.0], [43.6, 559.0], [43.7, 559.0], [43.8, 559.0], [43.9, 560.0], [44.0, 560.0], [44.1, 560.0], [44.2, 560.0], [44.3, 560.0], [44.4, 561.0], [44.5, 561.0], [44.6, 561.0], [44.7, 561.0], [44.8, 562.0], [44.9, 562.0], [45.0, 562.0], [45.1, 562.0], [45.2, 562.0], [45.3, 563.0], [45.4, 563.0], [45.5, 563.0], [45.6, 563.0], [45.7, 563.0], [45.8, 564.0], [45.9, 564.0], [46.0, 564.0], [46.1, 564.0], [46.2, 564.0], [46.3, 565.0], [46.4, 565.0], [46.5, 565.0], [46.6, 565.0], [46.7, 566.0], [46.8, 566.0], [46.9, 566.0], [47.0, 566.0], [47.1, 566.0], [47.2, 567.0], [47.3, 567.0], [47.4, 567.0], [47.5, 567.0], [47.6, 567.0], [47.7, 568.0], [47.8, 568.0], [47.9, 568.0], [48.0, 568.0], [48.1, 568.0], [48.2, 568.0], [48.3, 569.0], [48.4, 569.0], [48.5, 569.0], [48.6, 569.0], [48.7, 569.0], [48.8, 569.0], [48.9, 569.0], [49.0, 570.0], [49.1, 570.0], [49.2, 570.0], [49.3, 570.0], [49.4, 570.0], [49.5, 570.0], [49.6, 571.0], [49.7, 571.0], [49.8, 571.0], [49.9, 571.0], [50.0, 571.0], [50.1, 571.0], [50.2, 572.0], [50.3, 572.0], [50.4, 572.0], [50.5, 572.0], [50.6, 572.0], [50.7, 572.0], [50.8, 572.0], [50.9, 573.0], [51.0, 573.0], [51.1, 573.0], [51.2, 573.0], [51.3, 573.0], [51.4, 573.0], [51.5, 573.0], [51.6, 574.0], [51.7, 574.0], [51.8, 574.0], [51.9, 574.0], [52.0, 574.0], [52.1, 574.0], [52.2, 574.0], [52.3, 575.0], [52.4, 575.0], [52.5, 575.0], [52.6, 575.0], [52.7, 575.0], [52.8, 575.0], [52.9, 575.0], [53.0, 576.0], [53.1, 576.0], [53.2, 576.0], [53.3, 576.0], [53.4, 576.0], [53.5, 576.0], [53.6, 576.0], [53.7, 576.0], [53.8, 577.0], [53.9, 577.0], [54.0, 577.0], [54.1, 577.0], [54.2, 577.0], [54.3, 577.0], [54.4, 577.0], [54.5, 578.0], [54.6, 578.0], [54.7, 578.0], [54.8, 578.0], [54.9, 578.0], [55.0, 578.0], [55.1, 578.0], [55.2, 578.0], [55.3, 578.0], [55.4, 579.0], [55.5, 579.0], [55.6, 579.0], [55.7, 579.0], [55.8, 579.0], [55.9, 579.0], [56.0, 579.0], [56.1, 579.0], [56.2, 580.0], [56.3, 580.0], [56.4, 580.0], [56.5, 580.0], [56.6, 580.0], [56.7, 580.0], [56.8, 580.0], [56.9, 580.0], [57.0, 580.0], [57.1, 581.0], [57.2, 581.0], [57.3, 581.0], [57.4, 581.0], [57.5, 581.0], [57.6, 581.0], [57.7, 581.0], [57.8, 581.0], [57.9, 581.0], [58.0, 582.0], [58.1, 582.0], [58.2, 582.0], [58.3, 582.0], [58.4, 582.0], [58.5, 582.0], [58.6, 582.0], [58.7, 582.0], [58.8, 582.0], [58.9, 583.0], [59.0, 583.0], [59.1, 583.0], [59.2, 583.0], [59.3, 583.0], [59.4, 583.0], [59.5, 583.0], [59.6, 583.0], [59.7, 583.0], [59.8, 583.0], [59.9, 584.0], [60.0, 584.0], [60.1, 584.0], [60.2, 584.0], [60.3, 584.0], [60.4, 584.0], [60.5, 584.0], [60.6, 584.0], [60.7, 584.0], [60.8, 584.0], [60.9, 585.0], [61.0, 585.0], [61.1, 585.0], [61.2, 585.0], [61.3, 585.0], [61.4, 585.0], [61.5, 585.0], [61.6, 585.0], [61.7, 585.0], [61.8, 585.0], [61.9, 586.0], [62.0, 586.0], [62.1, 586.0], [62.2, 586.0], [62.3, 586.0], [62.4, 586.0], [62.5, 586.0], [62.6, 586.0], [62.7, 586.0], [62.8, 586.0], [62.9, 586.0], [63.0, 587.0], [63.1, 587.0], [63.2, 587.0], [63.3, 587.0], [63.4, 587.0], [63.5, 587.0], [63.6, 587.0], [63.7, 587.0], [63.8, 587.0], [63.9, 587.0], [64.0, 588.0], [64.1, 588.0], [64.2, 588.0], [64.3, 588.0], [64.4, 588.0], [64.5, 588.0], [64.6, 588.0], [64.7, 588.0], [64.8, 588.0], [64.9, 588.0], [65.0, 589.0], [65.1, 589.0], [65.2, 589.0], [65.3, 589.0], [65.4, 589.0], [65.5, 589.0], [65.6, 589.0], [65.7, 589.0], [65.8, 589.0], [65.9, 589.0], [66.0, 590.0], [66.1, 590.0], [66.2, 590.0], [66.3, 590.0], [66.4, 590.0], [66.5, 590.0], [66.6, 590.0], [66.7, 590.0], [66.8, 590.0], [66.9, 590.0], [67.0, 591.0], [67.1, 591.0], [67.2, 591.0], [67.3, 591.0], [67.4, 591.0], [67.5, 591.0], [67.6, 591.0], [67.7, 591.0], [67.8, 591.0], [67.9, 591.0], [68.0, 592.0], [68.1, 592.0], [68.2, 592.0], [68.3, 592.0], [68.4, 592.0], [68.5, 592.0], [68.6, 592.0], [68.7, 592.0], [68.8, 592.0], [68.9, 592.0], [69.0, 592.0], [69.1, 593.0], [69.2, 593.0], [69.3, 593.0], [69.4, 593.0], [69.5, 593.0], [69.6, 593.0], [69.7, 593.0], [69.8, 593.0], [69.9, 593.0], [70.0, 593.0], [70.1, 593.0], [70.2, 594.0], [70.3, 594.0], [70.4, 594.0], [70.5, 594.0], [70.6, 594.0], [70.7, 594.0], [70.8, 594.0], [70.9, 594.0], [71.0, 594.0], [71.1, 594.0], [71.2, 595.0], [71.3, 595.0], [71.4, 595.0], [71.5, 595.0], [71.6, 595.0], [71.7, 595.0], [71.8, 595.0], [71.9, 595.0], [72.0, 595.0], [72.1, 595.0], [72.2, 596.0], [72.3, 596.0], [72.4, 596.0], [72.5, 596.0], [72.6, 596.0], [72.7, 596.0], [72.8, 596.0], [72.9, 596.0], [73.0, 596.0], [73.1, 596.0], [73.2, 597.0], [73.3, 597.0], [73.4, 597.0], [73.5, 597.0], [73.6, 597.0], [73.7, 597.0], [73.8, 597.0], [73.9, 597.0], [74.0, 597.0], [74.1, 597.0], [74.2, 598.0], [74.3, 598.0], [74.4, 598.0], [74.5, 598.0], [74.6, 598.0], [74.7, 598.0], [74.8, 598.0], [74.9, 598.0], [75.0, 598.0], [75.1, 599.0], [75.2, 599.0], [75.3, 599.0], [75.4, 599.0], [75.5, 599.0], [75.6, 599.0], [75.7, 599.0], [75.8, 599.0], [75.9, 600.0], [76.0, 600.0], [76.1, 600.0], [76.2, 600.0], [76.3, 600.0], [76.4, 600.0], [76.5, 600.0], [76.6, 600.0], [76.7, 600.0], [76.8, 600.0], [76.9, 601.0], [77.0, 601.0], [77.1, 601.0], [77.2, 601.0], [77.3, 601.0], [77.4, 601.0], [77.5, 601.0], [77.6, 601.0], [77.7, 601.0], [77.8, 602.0], [77.9, 602.0], [78.0, 602.0], [78.1, 602.0], [78.2, 602.0], [78.3, 602.0], [78.4, 602.0], [78.5, 602.0], [78.6, 602.0], [78.7, 603.0], [78.8, 603.0], [78.9, 603.0], [79.0, 603.0], [79.1, 603.0], [79.2, 603.0], [79.3, 603.0], [79.4, 603.0], [79.5, 604.0], [79.6, 604.0], [79.7, 604.0], [79.8, 604.0], [79.9, 604.0], [80.0, 604.0], [80.1, 604.0], [80.2, 604.0], [80.3, 605.0], [80.4, 605.0], [80.5, 605.0], [80.6, 605.0], [80.7, 605.0], [80.8, 605.0], [80.9, 605.0], [81.0, 605.0], [81.1, 606.0], [81.2, 606.0], [81.3, 606.0], [81.4, 606.0], [81.5, 606.0], [81.6, 606.0], [81.7, 606.0], [81.8, 607.0], [81.9, 607.0], [82.0, 607.0], [82.1, 607.0], [82.2, 607.0], [82.3, 607.0], [82.4, 607.0], [82.5, 608.0], [82.6, 608.0], [82.7, 608.0], [82.8, 608.0], [82.9, 608.0], [83.0, 608.0], [83.1, 608.0], [83.2, 609.0], [83.3, 609.0], [83.4, 609.0], [83.5, 609.0], [83.6, 609.0], [83.7, 609.0], [83.8, 610.0], [83.9, 610.0], [84.0, 610.0], [84.1, 610.0], [84.2, 610.0], [84.3, 610.0], [84.4, 610.0], [84.5, 611.0], [84.6, 611.0], [84.7, 611.0], [84.8, 611.0], [84.9, 611.0], [85.0, 611.0], [85.1, 612.0], [85.2, 612.0], [85.3, 612.0], [85.4, 612.0], [85.5, 612.0], [85.6, 613.0], [85.7, 613.0], [85.8, 613.0], [85.9, 613.0], [86.0, 613.0], [86.1, 613.0], [86.2, 614.0], [86.3, 614.0], [86.4, 614.0], [86.5, 614.0], [86.6, 614.0], [86.7, 614.0], [86.8, 615.0], [86.9, 615.0], [87.0, 615.0], [87.1, 615.0], [87.2, 615.0], [87.3, 616.0], [87.4, 616.0], [87.5, 616.0], [87.6, 616.0], [87.7, 616.0], [87.8, 616.0], [87.9, 617.0], [88.0, 617.0], [88.1, 617.0], [88.2, 617.0], [88.3, 617.0], [88.4, 618.0], [88.5, 618.0], [88.6, 618.0], [88.7, 618.0], [88.8, 619.0], [88.9, 619.0], [89.0, 619.0], [89.1, 619.0], [89.2, 620.0], [89.3, 620.0], [89.4, 620.0], [89.5, 621.0], [89.6, 621.0], [89.7, 621.0], [89.8, 621.0], [89.9, 622.0], [90.0, 622.0], [90.1, 622.0], [90.2, 622.0], [90.3, 623.0], [90.4, 623.0], [90.5, 623.0], [90.6, 624.0], [90.7, 624.0], [90.8, 624.0], [90.9, 625.0], [91.0, 625.0], [91.1, 625.0], [91.2, 626.0], [91.3, 626.0], [91.4, 626.0], [91.5, 627.0], [91.6, 627.0], [91.7, 628.0], [91.8, 628.0], [91.9, 629.0], [92.0, 629.0], [92.1, 630.0], [92.2, 630.0], [92.3, 630.0], [92.4, 631.0], [92.5, 631.0], [92.6, 632.0], [92.7, 633.0], [92.8, 633.0], [92.9, 634.0], [93.0, 635.0], [93.1, 635.0], [93.2, 636.0], [93.3, 637.0], [93.4, 638.0], [93.5, 638.0], [93.6, 639.0], [93.7, 640.0], [93.8, 641.0], [93.9, 641.0], [94.0, 642.0], [94.1, 643.0], [94.2, 644.0], [94.3, 644.0], [94.4, 645.0], [94.5, 646.0], [94.6, 646.0], [94.7, 647.0], [94.8, 648.0], [94.9, 648.0], [95.0, 649.0], [95.1, 650.0], [95.2, 650.0], [95.3, 651.0], [95.4, 652.0], [95.5, 653.0], [95.6, 653.0], [95.7, 654.0], [95.8, 654.0], [95.9, 655.0], [96.0, 656.0], [96.1, 656.0], [96.2, 657.0], [96.3, 658.0], [96.4, 658.0], [96.5, 659.0], [96.6, 660.0], [96.7, 661.0], [96.8, 662.0], [96.9, 662.0], [97.0, 663.0], [97.1, 664.0], [97.2, 665.0], [97.3, 666.0], [97.4, 667.0], [97.5, 667.0], [97.6, 669.0], [97.7, 670.0], [97.8, 671.0], [97.9, 673.0], [98.0, 674.0], [98.1, 675.0], [98.2, 677.0], [98.3, 679.0], [98.4, 681.0], [98.5, 683.0], [98.6, 686.0], [98.7, 688.0], [98.8, 691.0], [98.9, 695.0], [99.0, 698.0], [99.1, 703.0], [99.2, 708.0], [99.3, 716.0], [99.4, 725.0], [99.5, 738.0], [99.6, 753.0], [99.7, 768.0], [99.8, 779.0], [99.9, 812.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 22238.0, "series": [{"data": [[600.0, 9222.0], [700.0, 339.0], [800.0, 31.0], [200.0, 2273.0], [900.0, 9.0], [1000.0, 1.0], [300.0, 1702.0], [1300.0, 3.0], [1400.0, 1.0], [100.0, 1690.0], [400.0, 2328.0], [1600.0, 1.0], [500.0, 22238.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 23780.0, "series": [{"data": [[0.0, 2855.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13202.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 23780.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 150.1548763736262, "minX": 1.79428482E12, "maxY": 200.0, "series": [{"data": [[1.79428482E12, 150.1548763736262], [1.79428488E12, 200.0], [1.79428494E12, 195.38798701298694]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428494E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 188.4193548387097, "minX": 1.0, "maxY": 631.909090909091, "series": [{"data": [[2.0, 577.0], [3.0, 585.0], [4.0, 576.0], [5.0, 583.0], [6.0, 582.0], [7.0, 577.5714285714287], [8.0, 249.75], [9.0, 339.6666666666667], [10.0, 251.28571428571428], [11.0, 242.125], [12.0, 262.3], [13.0, 229.45454545454544], [14.0, 302.5], [15.0, 241.0], [16.0, 194.9230769230769], [17.0, 280.70588235294116], [18.0, 213.87500000000003], [19.0, 219.08333333333331], [20.0, 213.8], [21.0, 219.8888888888889], [22.0, 214.58823529411765], [23.0, 219.00000000000003], [24.0, 253.94444444444446], [25.0, 221.75], [26.0, 209.6315789473684], [27.0, 207.64999999999995], [28.0, 241.7037037037037], [29.0, 207.61904761904756], [30.0, 211.7], [31.0, 203.23999999999998], [32.0, 203.10344827586204], [33.0, 202.56666666666663], [34.0, 201.625], [35.0, 213.41666666666666], [36.0, 209.24137931034477], [37.0, 188.4193548387097], [38.0, 203.27027027027026], [39.0, 196.1], [40.0, 203.5185185185185], [41.0, 228.97222222222223], [42.0, 210.03448275862073], [43.0, 209.6538461538461], [44.0, 199.43243243243242], [45.0, 194.57142857142856], [46.0, 201.093023255814], [47.0, 198.1142857142857], [48.0, 200.2121212121212], [49.0, 201.1666666666667], [50.0, 198.0208333333333], [51.0, 194.38636363636365], [52.0, 197.28571428571428], [53.0, 198.69230769230768], [54.0, 196.18918918918916], [55.0, 194.18000000000004], [56.0, 197.14000000000004], [57.0, 200.93181818181813], [58.0, 205.17499999999998], [59.0, 207.0], [60.0, 200.81818181818187], [61.0, 195.73999999999998], [62.0, 197.33999999999997], [63.0, 195.55319148936167], [64.0, 202.22448979591834], [65.0, 195.7678571428572], [66.0, 203.89999999999998], [67.0, 201.9411764705882], [68.0, 216.31914893617017], [69.0, 207.03999999999996], [70.0, 202.7833333333333], [71.0, 206.18000000000006], [72.0, 217.71153846153842], [73.0, 224.06382978723408], [74.0, 210.09836065573768], [75.0, 221.90476190476187], [76.0, 239.7017543859649], [77.0, 248.36363636363637], [78.0, 221.8030303030303], [79.0, 224.60975609756102], [80.0, 246.09433962264154], [81.0, 256.19047619047626], [82.0, 263.11666666666673], [83.0, 247.68421052631578], [84.0, 271.37704918032784], [85.0, 250.77272727272722], [86.0, 250.63333333333333], [87.0, 261.93023255813955], [88.0, 249.16666666666666], [89.0, 266.3846153846154], [90.0, 235.8428571428572], [91.0, 243.86363636363635], [92.0, 252.09230769230777], [93.0, 266.2558139534883], [94.0, 260.5454545454545], [95.0, 261.3404255319149], [96.0, 257.81159420289845], [97.0, 261.22222222222223], [98.0, 262.20588235294105], [99.0, 275.8], [100.0, 286.55172413793105], [101.0, 292.03846153846155], [102.0, 275.2388059701494], [103.0, 277.1162790697674], [104.0, 292.32258064516117], [105.0, 296.4489795918367], [106.0, 277.43283582089566], [107.0, 284.2000000000001], [108.0, 300.1694915254238], [109.0, 302.1739130434782], [110.0, 298.86764705882354], [111.0, 302.14583333333326], [112.0, 302.60937499999994], [113.0, 320.67647058823525], [114.0, 322.87999999999994], [115.0, 314.9148936170212], [116.0, 324.5172413793104], [117.0, 338.04651162790697], [118.0, 339.1967213114754], [119.0, 343.063829787234], [120.0, 344.43548387096763], [121.0, 336.82978723404256], [122.0, 334.91379310344837], [123.0, 346.59999999999997], [124.0, 368.3802816901409], [125.0, 348.11363636363626], [126.0, 335.32812499999994], [127.0, 339.14], [128.0, 322.8787878787878], [129.0, 393.6315789473686], [130.0, 374.73437500000006], [131.0, 388.91111111111104], [132.0, 398.1186440677966], [133.0, 392.8260869565217], [134.0, 392.5090909090909], [135.0, 373.85365853658527], [136.0, 409.86956521739137], [137.0, 384.2], [138.0, 382.8947368421053], [139.0, 401.15094339622647], [140.0, 406.74545454545455], [141.0, 403.12195121951225], [142.0, 406.578125], [143.0, 412.219512195122], [144.0, 412.0333333333333], [145.0, 411.5185185185185], [146.0, 402.6984126984127], [147.0, 390.3877551020409], [148.0, 422.3529411764705], [149.0, 442.59523809523813], [150.0, 459.4363636363635], [151.0, 463.1599999999999], [152.0, 431.0967741935485], [153.0, 438.11904761904765], [154.0, 428.6440677966102], [155.0, 466.95833333333326], [156.0, 440.86885245901635], [157.0, 460.51351351351354], [158.0, 448.68115942028976], [159.0, 442.25], [160.0, 430.98437499999994], [161.0, 430.85714285714295], [162.0, 441.7241379310344], [163.0, 462.0384615384616], [164.0, 454.1166666666667], [165.0, 458.5111111111112], [166.0, 452.34999999999997], [167.0, 477.14999999999986], [168.0, 493.92063492063494], [169.0, 497.6739130434782], [170.0, 479.9545454545455], [171.0, 468.53846153846166], [172.0, 485.50877192982455], [173.0, 505.4200000000001], [174.0, 513.1935483870966], [175.0, 491.2325581395349], [176.0, 488.5806451612903], [177.0, 499.14634146341456], [178.0, 512.3333333333333], [179.0, 523.3170731707319], [180.0, 522.4705882352943], [181.0, 485.9183673469388], [182.0, 480.1964285714285], [183.0, 498.69565217391306], [184.0, 523.2622950819672], [185.0, 552.7959183673469], [186.0, 509.1044776119403], [187.0, 492.0612244897959], [188.0, 484.07812499999994], [189.0, 487.39583333333326], [190.0, 533.4901960784313], [191.0, 564.1351351351351], [192.0, 582.27868852459], [193.0, 597.5250000000001], [194.0, 607.4727272727274], [195.0, 582.4761904761905], [196.0, 610.8749999999999], [197.0, 631.909090909091], [198.0, 621.05], [199.0, 604.4375000000001], [200.0, 581.2864371817163], [1.0, 551.0]], "isOverall": false, "label": "GET Locales", "isController": false}, {"data": [[181.28339776093034, 529.095235704603]], "isOverall": false, "label": "GET Locales-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10564.4, "minX": 1.79428482E12, "maxY": 735386.0666666667, "series": [{"data": [[1.79428482E12, 493210.73333333334], [1.79428488E12, 735386.0666666667], [1.79428494E12, 163476.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79428482E12, 35672.0], [1.79428488E12, 51366.7], [1.79428494E12, 10564.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428494E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 443.7918269230764, "minX": 1.79428482E12, "maxY": 607.0002319109462, "series": [{"data": [[1.79428482E12, 443.7918269230764], [1.79428488E12, 572.3124105694937], [1.79428494E12, 607.0002319109462]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428494E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 443.59100274725347, "minX": 1.79428482E12, "maxY": 606.8320964749553, "series": [{"data": [[1.79428482E12, 443.59100274725347], [1.79428488E12, 572.1083182295139], [1.79428494E12, 606.8320964749553]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428494E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 0.0, "minX": 1.79428482E12, "maxY": 0.7875000000000048, "series": [{"data": [[1.79428482E12, 0.7875000000000048], [1.79428488E12, 0.2779738624439568], [1.79428494E12, 0.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428494E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 175.0, "minX": 1.79428482E12, "maxY": 1612.0, "series": [{"data": [[1.79428482E12, 1435.0], [1.79428488E12, 1612.0], [1.79428494E12, 864.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79428482E12, 620.0], [1.79428488E12, 623.0], [1.79428494E12, 672.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79428482E12, 675.8000000000002], [1.79428488E12, 703.2399999999943], [1.79428494E12, 719.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79428482E12, 644.0], [1.79428488E12, 647.1999999999998], [1.79428494E12, 695.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79428482E12, 175.0], [1.79428488E12, 461.0], [1.79428494E12, 525.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79428482E12, 508.0], [1.79428488E12, 580.0], [1.79428494E12, 602.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428494E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
    data: {"result": {"minY": 183.0, "minX": 21.0, "maxY": 720.0, "series": [{"data": [[21.0, 584.0], [22.0, 237.0], [68.0, 194.0], [97.0, 192.0], [141.0, 190.0], [175.0, 193.0], [209.0, 188.5], [238.0, 189.0], [278.0, 622.0], [297.0, 190.0], [298.0, 675.0], [290.0, 647.0], [311.0, 194.0], [313.0, 603.0], [319.0, 622.0], [316.0, 626.0], [307.0, 625.0], [318.0, 618.0], [332.0, 589.0], [335.0, 574.5], [327.0, 592.0], [334.0, 594.0], [323.0, 623.0], [321.0, 620.0], [324.0, 607.0], [325.0, 618.0], [328.0, 578.0], [329.0, 621.0], [348.0, 542.0], [347.0, 539.0], [337.0, 595.0], [343.0, 584.0], [336.0, 693.0], [346.0, 586.0], [341.0, 511.0], [342.0, 587.0], [340.0, 597.0], [349.0, 528.0], [339.0, 602.0], [338.0, 591.0], [345.0, 585.0], [344.0, 592.0], [351.0, 586.0], [350.0, 581.0], [352.0, 582.0], [364.0, 505.0], [357.0, 538.5], [365.0, 521.0], [366.0, 526.0], [360.0, 279.0], [361.0, 568.0], [363.0, 559.0], [367.0, 522.0], [359.0, 370.5], [358.0, 559.5], [356.0, 517.5], [354.0, 579.0], [353.0, 568.0], [374.0, 541.0], [369.0, 549.0], [370.0, 535.0], [371.0, 535.5], [382.0, 517.0], [381.0, 528.0], [397.0, 520.0], [386.0, 520.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 579.0], [22.0, 199.0], [68.0, 191.0], [97.0, 186.0], [141.0, 185.0], [175.0, 186.0], [209.0, 183.0], [238.0, 185.0], [278.0, 618.0], [297.0, 185.0], [298.0, 674.0], [290.0, 642.0], [311.0, 187.0], [313.0, 596.0], [319.0, 615.0], [316.0, 618.5], [307.0, 618.0], [318.0, 611.0], [332.0, 241.5], [335.0, 209.5], [327.0, 280.0], [334.0, 592.0], [323.0, 616.0], [321.0, 615.0], [324.0, 602.0], [325.0, 609.0], [328.0, 574.0], [329.0, 618.5], [348.0, 514.0], [347.0, 519.0], [337.0, 586.0], [343.0, 562.0], [336.0, 720.0], [346.0, 580.0], [341.0, 544.0], [342.0, 581.0], [340.0, 591.0], [349.0, 524.5], [339.0, 597.0], [338.0, 587.0], [345.0, 580.0], [344.0, 589.0], [351.0, 583.0], [350.0, 575.0], [352.0, 576.0], [364.0, 478.0], [357.0, 531.0], [365.0, 281.0], [366.0, 514.0], [360.0, 275.0], [361.0, 563.0], [363.0, 555.0], [367.0, 326.5], [359.0, 509.5], [358.0, 554.0], [356.0, 495.0], [354.0, 574.0], [353.0, 561.5], [374.0, 535.0], [369.0, 546.0], [370.0, 528.0], [371.0, 539.0], [382.0, 515.5], [381.0, 521.0], [397.0, 508.0], [386.0, 515.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 397.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 183.0, "minX": 21.0, "maxY": 720.0, "series": [{"data": [[21.0, 584.0], [22.0, 237.0], [68.0, 193.0], [97.0, 191.0], [141.0, 189.0], [175.0, 193.0], [209.0, 188.0], [238.0, 189.0], [278.0, 621.0], [297.0, 190.0], [298.0, 675.0], [290.0, 647.0], [311.0, 193.5], [313.0, 603.0], [319.0, 622.0], [316.0, 626.0], [307.0, 625.0], [318.0, 618.0], [332.0, 588.5], [335.0, 574.0], [327.0, 591.0], [334.0, 594.0], [323.0, 622.5], [321.0, 620.0], [324.0, 607.0], [325.0, 618.0], [328.0, 577.0], [329.0, 621.0], [348.0, 541.5], [347.0, 539.0], [337.0, 594.5], [343.0, 584.0], [336.0, 693.0], [346.0, 586.0], [341.0, 510.0], [342.0, 587.0], [340.0, 597.0], [349.0, 528.0], [339.0, 602.0], [338.0, 591.0], [345.0, 584.0], [344.0, 591.5], [351.0, 586.0], [350.0, 581.0], [352.0, 582.0], [364.0, 504.5], [357.0, 538.5], [365.0, 521.0], [366.0, 525.0], [360.0, 279.0], [361.0, 568.0], [363.0, 559.0], [367.0, 522.0], [359.0, 370.0], [358.0, 559.0], [356.0, 517.5], [354.0, 579.0], [353.0, 567.0], [374.0, 541.0], [369.0, 549.0], [370.0, 534.5], [371.0, 534.5], [382.0, 517.0], [381.0, 527.5], [397.0, 520.0], [386.0, 520.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 578.0], [22.0, 198.0], [68.0, 191.0], [97.0, 185.0], [141.0, 185.0], [175.0, 186.0], [209.0, 183.0], [238.0, 185.0], [278.0, 618.0], [297.0, 185.0], [298.0, 674.0], [290.0, 642.0], [311.0, 187.0], [313.0, 595.5], [319.0, 615.0], [316.0, 618.0], [307.0, 618.0], [318.0, 611.0], [332.0, 241.5], [335.0, 209.0], [327.0, 280.0], [334.0, 592.0], [323.0, 615.0], [321.0, 615.0], [324.0, 602.0], [325.0, 609.0], [328.0, 574.0], [329.0, 618.0], [348.0, 514.0], [347.0, 519.0], [337.0, 586.0], [343.0, 562.0], [336.0, 720.0], [346.0, 579.0], [341.0, 544.0], [342.0, 580.5], [340.0, 591.0], [349.0, 524.0], [339.0, 597.0], [338.0, 587.0], [345.0, 580.0], [344.0, 589.0], [351.0, 583.0], [350.0, 575.0], [352.0, 576.0], [364.0, 477.5], [357.0, 531.0], [365.0, 281.0], [366.0, 514.0], [360.0, 275.0], [361.0, 563.0], [363.0, 555.0], [367.0, 326.5], [359.0, 509.5], [358.0, 553.5], [356.0, 495.0], [354.0, 574.0], [353.0, 561.0], [374.0, 535.0], [369.0, 545.5], [370.0, 528.0], [371.0, 539.0], [382.0, 515.5], [381.0, 521.0], [397.0, 508.0], [386.0, 515.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 397.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 68.53333333333333, "minX": 1.79428482E12, "maxY": 349.43333333333334, "series": [{"data": [[1.79428482E12, 246.0], [1.79428488E12, 349.43333333333334], [1.79428494E12, 68.53333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428494E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 32.4, "minX": 1.79428482E12, "maxY": 207.85, "series": [{"data": [[1.79428482E12, 93.65], [1.79428488E12, 141.58333333333334], [1.79428494E12, 32.4]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79428482E12, 149.01666666666668], [1.79428488E12, 207.85], [1.79428494E12, 39.46666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428494E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 32.4, "minX": 1.79428482E12, "maxY": 207.85, "series": [{"data": [[1.79428482E12, 93.65], [1.79428488E12, 141.58333333333334], [1.79428494E12, 32.4]], "isOverall": false, "label": "GET Locales-success", "isController": false}, {"data": [[1.79428482E12, 149.01666666666668], [1.79428488E12, 207.85], [1.79428494E12, 39.46666666666667]], "isOverall": false, "label": "GET Locales-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428494E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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
        data: {"result": {"minY": 32.4, "minX": 1.79428482E12, "maxY": 207.85, "series": [{"data": [[1.79428482E12, 93.65], [1.79428488E12, 141.58333333333334], [1.79428494E12, 32.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79428482E12, 149.01666666666668], [1.79428488E12, 207.85], [1.79428494E12, 39.46666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428494E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -18000000);
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

