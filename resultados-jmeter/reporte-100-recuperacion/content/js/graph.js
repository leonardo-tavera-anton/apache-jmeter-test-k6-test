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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 1324.0, "series": [{"data": [[0.0, 170.0], [0.1, 174.0], [0.2, 174.0], [0.3, 175.0], [0.4, 176.0], [0.5, 176.0], [0.6, 177.0], [0.7, 177.0], [0.8, 177.0], [0.9, 177.0], [1.0, 178.0], [1.1, 178.0], [1.2, 178.0], [1.3, 179.0], [1.4, 179.0], [1.5, 179.0], [1.6, 179.0], [1.7, 180.0], [1.8, 180.0], [1.9, 180.0], [2.0, 180.0], [2.1, 180.0], [2.2, 181.0], [2.3, 181.0], [2.4, 181.0], [2.5, 181.0], [2.6, 181.0], [2.7, 182.0], [2.8, 182.0], [2.9, 182.0], [3.0, 182.0], [3.1, 182.0], [3.2, 182.0], [3.3, 183.0], [3.4, 183.0], [3.5, 183.0], [3.6, 183.0], [3.7, 183.0], [3.8, 184.0], [3.9, 184.0], [4.0, 184.0], [4.1, 184.0], [4.2, 184.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 185.0], [4.9, 186.0], [5.0, 186.0], [5.1, 186.0], [5.2, 186.0], [5.3, 186.0], [5.4, 187.0], [5.5, 187.0], [5.6, 187.0], [5.7, 187.0], [5.8, 187.0], [5.9, 187.0], [6.0, 188.0], [6.1, 188.0], [6.2, 188.0], [6.3, 188.0], [6.4, 188.0], [6.5, 189.0], [6.6, 189.0], [6.7, 189.0], [6.8, 189.0], [6.9, 190.0], [7.0, 190.0], [7.1, 190.0], [7.2, 190.0], [7.3, 191.0], [7.4, 191.0], [7.5, 191.0], [7.6, 191.0], [7.7, 192.0], [7.8, 192.0], [7.9, 192.0], [8.0, 192.0], [8.1, 193.0], [8.2, 193.0], [8.3, 193.0], [8.4, 193.0], [8.5, 194.0], [8.6, 194.0], [8.7, 195.0], [8.8, 195.0], [8.9, 195.0], [9.0, 196.0], [9.1, 196.0], [9.2, 196.0], [9.3, 197.0], [9.4, 197.0], [9.5, 198.0], [9.6, 198.0], [9.7, 198.0], [9.8, 199.0], [9.9, 200.0], [10.0, 200.0], [10.1, 201.0], [10.2, 201.0], [10.3, 202.0], [10.4, 203.0], [10.5, 203.0], [10.6, 204.0], [10.7, 204.0], [10.8, 205.0], [10.9, 206.0], [11.0, 207.0], [11.1, 207.0], [11.2, 208.0], [11.3, 209.0], [11.4, 210.0], [11.5, 210.0], [11.6, 211.0], [11.7, 212.0], [11.8, 213.0], [11.9, 213.0], [12.0, 214.0], [12.1, 215.0], [12.2, 216.0], [12.3, 216.0], [12.4, 217.0], [12.5, 218.0], [12.6, 218.0], [12.7, 219.0], [12.8, 220.0], [12.9, 220.0], [13.0, 221.0], [13.1, 221.0], [13.2, 222.0], [13.3, 223.0], [13.4, 223.0], [13.5, 224.0], [13.6, 224.0], [13.7, 225.0], [13.8, 225.0], [13.9, 225.0], [14.0, 226.0], [14.1, 226.0], [14.2, 227.0], [14.3, 227.0], [14.4, 227.0], [14.5, 228.0], [14.6, 228.0], [14.7, 228.0], [14.8, 229.0], [14.9, 229.0], [15.0, 229.0], [15.1, 230.0], [15.2, 230.0], [15.3, 230.0], [15.4, 231.0], [15.5, 231.0], [15.6, 231.0], [15.7, 231.0], [15.8, 232.0], [15.9, 232.0], [16.0, 232.0], [16.1, 233.0], [16.2, 233.0], [16.3, 233.0], [16.4, 233.0], [16.5, 234.0], [16.6, 234.0], [16.7, 234.0], [16.8, 234.0], [16.9, 235.0], [17.0, 235.0], [17.1, 235.0], [17.2, 235.0], [17.3, 236.0], [17.4, 236.0], [17.5, 236.0], [17.6, 236.0], [17.7, 236.0], [17.8, 237.0], [17.9, 237.0], [18.0, 237.0], [18.1, 237.0], [18.2, 238.0], [18.3, 238.0], [18.4, 238.0], [18.5, 238.0], [18.6, 238.0], [18.7, 239.0], [18.8, 239.0], [18.9, 239.0], [19.0, 239.0], [19.1, 239.0], [19.2, 240.0], [19.3, 240.0], [19.4, 240.0], [19.5, 240.0], [19.6, 240.0], [19.7, 241.0], [19.8, 241.0], [19.9, 241.0], [20.0, 241.0], [20.1, 242.0], [20.2, 242.0], [20.3, 242.0], [20.4, 242.0], [20.5, 242.0], [20.6, 243.0], [20.7, 243.0], [20.8, 243.0], [20.9, 243.0], [21.0, 243.0], [21.1, 244.0], [21.2, 244.0], [21.3, 244.0], [21.4, 244.0], [21.5, 244.0], [21.6, 245.0], [21.7, 245.0], [21.8, 245.0], [21.9, 245.0], [22.0, 245.0], [22.1, 246.0], [22.2, 246.0], [22.3, 246.0], [22.4, 246.0], [22.5, 246.0], [22.6, 247.0], [22.7, 247.0], [22.8, 247.0], [22.9, 247.0], [23.0, 247.0], [23.1, 248.0], [23.2, 248.0], [23.3, 248.0], [23.4, 248.0], [23.5, 249.0], [23.6, 249.0], [23.7, 249.0], [23.8, 249.0], [23.9, 249.0], [24.0, 250.0], [24.1, 250.0], [24.2, 250.0], [24.3, 250.0], [24.4, 251.0], [24.5, 251.0], [24.6, 251.0], [24.7, 251.0], [24.8, 252.0], [24.9, 252.0], [25.0, 252.0], [25.1, 252.0], [25.2, 252.0], [25.3, 253.0], [25.4, 253.0], [25.5, 253.0], [25.6, 253.0], [25.7, 254.0], [25.8, 254.0], [25.9, 254.0], [26.0, 255.0], [26.1, 255.0], [26.2, 255.0], [26.3, 255.0], [26.4, 255.0], [26.5, 256.0], [26.6, 256.0], [26.7, 256.0], [26.8, 257.0], [26.9, 257.0], [27.0, 257.0], [27.1, 258.0], [27.2, 258.0], [27.3, 258.0], [27.4, 259.0], [27.5, 259.0], [27.6, 259.0], [27.7, 260.0], [27.8, 260.0], [27.9, 260.0], [28.0, 261.0], [28.1, 261.0], [28.2, 261.0], [28.3, 262.0], [28.4, 262.0], [28.5, 262.0], [28.6, 263.0], [28.7, 263.0], [28.8, 263.0], [28.9, 263.0], [29.0, 264.0], [29.1, 264.0], [29.2, 264.0], [29.3, 264.0], [29.4, 265.0], [29.5, 265.0], [29.6, 265.0], [29.7, 265.0], [29.8, 266.0], [29.9, 266.0], [30.0, 266.0], [30.1, 266.0], [30.2, 267.0], [30.3, 267.0], [30.4, 267.0], [30.5, 267.0], [30.6, 267.0], [30.7, 268.0], [30.8, 268.0], [30.9, 268.0], [31.0, 268.0], [31.1, 269.0], [31.2, 269.0], [31.3, 269.0], [31.4, 269.0], [31.5, 269.0], [31.6, 270.0], [31.7, 270.0], [31.8, 270.0], [31.9, 270.0], [32.0, 270.0], [32.1, 270.0], [32.2, 271.0], [32.3, 271.0], [32.4, 271.0], [32.5, 271.0], [32.6, 271.0], [32.7, 271.0], [32.8, 272.0], [32.9, 272.0], [33.0, 272.0], [33.1, 272.0], [33.2, 272.0], [33.3, 272.0], [33.4, 273.0], [33.5, 273.0], [33.6, 273.0], [33.7, 273.0], [33.8, 273.0], [33.9, 273.0], [34.0, 273.0], [34.1, 274.0], [34.2, 274.0], [34.3, 274.0], [34.4, 274.0], [34.5, 274.0], [34.6, 274.0], [34.7, 274.0], [34.8, 275.0], [34.9, 275.0], [35.0, 275.0], [35.1, 275.0], [35.2, 275.0], [35.3, 275.0], [35.4, 275.0], [35.5, 275.0], [35.6, 276.0], [35.7, 276.0], [35.8, 276.0], [35.9, 276.0], [36.0, 276.0], [36.1, 276.0], [36.2, 276.0], [36.3, 276.0], [36.4, 277.0], [36.5, 277.0], [36.6, 277.0], [36.7, 277.0], [36.8, 277.0], [36.9, 277.0], [37.0, 277.0], [37.1, 277.0], [37.2, 277.0], [37.3, 278.0], [37.4, 278.0], [37.5, 278.0], [37.6, 278.0], [37.7, 278.0], [37.8, 278.0], [37.9, 278.0], [38.0, 278.0], [38.1, 278.0], [38.2, 278.0], [38.3, 278.0], [38.4, 279.0], [38.5, 279.0], [38.6, 279.0], [38.7, 279.0], [38.8, 279.0], [38.9, 279.0], [39.0, 279.0], [39.1, 279.0], [39.2, 279.0], [39.3, 279.0], [39.4, 279.0], [39.5, 280.0], [39.6, 280.0], [39.7, 280.0], [39.8, 280.0], [39.9, 280.0], [40.0, 280.0], [40.1, 280.0], [40.2, 280.0], [40.3, 280.0], [40.4, 280.0], [40.5, 280.0], [40.6, 280.0], [40.7, 281.0], [40.8, 281.0], [40.9, 281.0], [41.0, 281.0], [41.1, 281.0], [41.2, 281.0], [41.3, 281.0], [41.4, 281.0], [41.5, 281.0], [41.6, 281.0], [41.7, 281.0], [41.8, 282.0], [41.9, 282.0], [42.0, 282.0], [42.1, 282.0], [42.2, 282.0], [42.3, 282.0], [42.4, 282.0], [42.5, 282.0], [42.6, 282.0], [42.7, 282.0], [42.8, 282.0], [42.9, 282.0], [43.0, 282.0], [43.1, 283.0], [43.2, 283.0], [43.3, 283.0], [43.4, 283.0], [43.5, 283.0], [43.6, 283.0], [43.7, 283.0], [43.8, 283.0], [43.9, 283.0], [44.0, 283.0], [44.1, 283.0], [44.2, 283.0], [44.3, 283.0], [44.4, 283.0], [44.5, 284.0], [44.6, 284.0], [44.7, 284.0], [44.8, 284.0], [44.9, 284.0], [45.0, 284.0], [45.1, 284.0], [45.2, 284.0], [45.3, 284.0], [45.4, 284.0], [45.5, 284.0], [45.6, 284.0], [45.7, 284.0], [45.8, 284.0], [45.9, 284.0], [46.0, 285.0], [46.1, 285.0], [46.2, 285.0], [46.3, 285.0], [46.4, 285.0], [46.5, 285.0], [46.6, 285.0], [46.7, 285.0], [46.8, 285.0], [46.9, 285.0], [47.0, 285.0], [47.1, 285.0], [47.2, 285.0], [47.3, 285.0], [47.4, 285.0], [47.5, 286.0], [47.6, 286.0], [47.7, 286.0], [47.8, 286.0], [47.9, 286.0], [48.0, 286.0], [48.1, 286.0], [48.2, 286.0], [48.3, 286.0], [48.4, 286.0], [48.5, 286.0], [48.6, 286.0], [48.7, 286.0], [48.8, 286.0], [48.9, 286.0], [49.0, 286.0], [49.1, 287.0], [49.2, 287.0], [49.3, 287.0], [49.4, 287.0], [49.5, 287.0], [49.6, 287.0], [49.7, 287.0], [49.8, 287.0], [49.9, 287.0], [50.0, 287.0], [50.1, 287.0], [50.2, 287.0], [50.3, 287.0], [50.4, 287.0], [50.5, 287.0], [50.6, 287.0], [50.7, 288.0], [50.8, 288.0], [50.9, 288.0], [51.0, 288.0], [51.1, 288.0], [51.2, 288.0], [51.3, 288.0], [51.4, 288.0], [51.5, 288.0], [51.6, 288.0], [51.7, 288.0], [51.8, 288.0], [51.9, 288.0], [52.0, 288.0], [52.1, 288.0], [52.2, 288.0], [52.3, 289.0], [52.4, 289.0], [52.5, 289.0], [52.6, 289.0], [52.7, 289.0], [52.8, 289.0], [52.9, 289.0], [53.0, 289.0], [53.1, 289.0], [53.2, 289.0], [53.3, 289.0], [53.4, 289.0], [53.5, 289.0], [53.6, 289.0], [53.7, 289.0], [53.8, 289.0], [53.9, 290.0], [54.0, 290.0], [54.1, 290.0], [54.2, 290.0], [54.3, 290.0], [54.4, 290.0], [54.5, 290.0], [54.6, 290.0], [54.7, 290.0], [54.8, 290.0], [54.9, 290.0], [55.0, 290.0], [55.1, 290.0], [55.2, 290.0], [55.3, 290.0], [55.4, 290.0], [55.5, 290.0], [55.6, 290.0], [55.7, 291.0], [55.8, 291.0], [55.9, 291.0], [56.0, 291.0], [56.1, 291.0], [56.2, 291.0], [56.3, 291.0], [56.4, 291.0], [56.5, 291.0], [56.6, 291.0], [56.7, 291.0], [56.8, 291.0], [56.9, 291.0], [57.0, 291.0], [57.1, 291.0], [57.2, 291.0], [57.3, 291.0], [57.4, 291.0], [57.5, 292.0], [57.6, 292.0], [57.7, 292.0], [57.8, 292.0], [57.9, 292.0], [58.0, 292.0], [58.1, 292.0], [58.2, 292.0], [58.3, 292.0], [58.4, 292.0], [58.5, 292.0], [58.6, 292.0], [58.7, 292.0], [58.8, 292.0], [58.9, 292.0], [59.0, 292.0], [59.1, 292.0], [59.2, 293.0], [59.3, 293.0], [59.4, 293.0], [59.5, 293.0], [59.6, 293.0], [59.7, 293.0], [59.8, 293.0], [59.9, 293.0], [60.0, 293.0], [60.1, 293.0], [60.2, 293.0], [60.3, 293.0], [60.4, 293.0], [60.5, 293.0], [60.6, 293.0], [60.7, 293.0], [60.8, 293.0], [60.9, 293.0], [61.0, 293.0], [61.1, 294.0], [61.2, 294.0], [61.3, 294.0], [61.4, 294.0], [61.5, 294.0], [61.6, 294.0], [61.7, 294.0], [61.8, 294.0], [61.9, 294.0], [62.0, 294.0], [62.1, 294.0], [62.2, 294.0], [62.3, 294.0], [62.4, 294.0], [62.5, 294.0], [62.6, 294.0], [62.7, 294.0], [62.8, 295.0], [62.9, 295.0], [63.0, 295.0], [63.1, 295.0], [63.2, 295.0], [63.3, 295.0], [63.4, 295.0], [63.5, 295.0], [63.6, 295.0], [63.7, 295.0], [63.8, 295.0], [63.9, 295.0], [64.0, 295.0], [64.1, 295.0], [64.2, 295.0], [64.3, 295.0], [64.4, 295.0], [64.5, 295.0], [64.6, 296.0], [64.7, 296.0], [64.8, 296.0], [64.9, 296.0], [65.0, 296.0], [65.1, 296.0], [65.2, 296.0], [65.3, 296.0], [65.4, 296.0], [65.5, 296.0], [65.6, 296.0], [65.7, 296.0], [65.8, 296.0], [65.9, 296.0], [66.0, 296.0], [66.1, 296.0], [66.2, 296.0], [66.3, 296.0], [66.4, 297.0], [66.5, 297.0], [66.6, 297.0], [66.7, 297.0], [66.8, 297.0], [66.9, 297.0], [67.0, 297.0], [67.1, 297.0], [67.2, 297.0], [67.3, 297.0], [67.4, 297.0], [67.5, 297.0], [67.6, 297.0], [67.7, 297.0], [67.8, 297.0], [67.9, 297.0], [68.0, 297.0], [68.1, 297.0], [68.2, 298.0], [68.3, 298.0], [68.4, 298.0], [68.5, 298.0], [68.6, 298.0], [68.7, 298.0], [68.8, 298.0], [68.9, 298.0], [69.0, 298.0], [69.1, 298.0], [69.2, 298.0], [69.3, 298.0], [69.4, 298.0], [69.5, 298.0], [69.6, 298.0], [69.7, 298.0], [69.8, 299.0], [69.9, 299.0], [70.0, 299.0], [70.1, 299.0], [70.2, 299.0], [70.3, 299.0], [70.4, 299.0], [70.5, 299.0], [70.6, 299.0], [70.7, 299.0], [70.8, 299.0], [70.9, 299.0], [71.0, 299.0], [71.1, 299.0], [71.2, 299.0], [71.3, 299.0], [71.4, 299.0], [71.5, 300.0], [71.6, 300.0], [71.7, 300.0], [71.8, 300.0], [71.9, 300.0], [72.0, 300.0], [72.1, 300.0], [72.2, 300.0], [72.3, 300.0], [72.4, 300.0], [72.5, 300.0], [72.6, 300.0], [72.7, 300.0], [72.8, 300.0], [72.9, 300.0], [73.0, 300.0], [73.1, 301.0], [73.2, 301.0], [73.3, 301.0], [73.4, 301.0], [73.5, 301.0], [73.6, 301.0], [73.7, 301.0], [73.8, 301.0], [73.9, 301.0], [74.0, 301.0], [74.1, 301.0], [74.2, 301.0], [74.3, 301.0], [74.4, 301.0], [74.5, 301.0], [74.6, 302.0], [74.7, 302.0], [74.8, 302.0], [74.9, 302.0], [75.0, 302.0], [75.1, 302.0], [75.2, 302.0], [75.3, 302.0], [75.4, 302.0], [75.5, 302.0], [75.6, 302.0], [75.7, 302.0], [75.8, 302.0], [75.9, 302.0], [76.0, 302.0], [76.1, 302.0], [76.2, 303.0], [76.3, 303.0], [76.4, 303.0], [76.5, 303.0], [76.6, 303.0], [76.7, 303.0], [76.8, 303.0], [76.9, 303.0], [77.0, 303.0], [77.1, 303.0], [77.2, 303.0], [77.3, 303.0], [77.4, 303.0], [77.5, 303.0], [77.6, 303.0], [77.7, 303.0], [77.8, 304.0], [77.9, 304.0], [78.0, 304.0], [78.1, 304.0], [78.2, 304.0], [78.3, 304.0], [78.4, 304.0], [78.5, 304.0], [78.6, 304.0], [78.7, 304.0], [78.8, 304.0], [78.9, 304.0], [79.0, 304.0], [79.1, 304.0], [79.2, 305.0], [79.3, 305.0], [79.4, 305.0], [79.5, 305.0], [79.6, 305.0], [79.7, 305.0], [79.8, 305.0], [79.9, 305.0], [80.0, 305.0], [80.1, 305.0], [80.2, 305.0], [80.3, 305.0], [80.4, 305.0], [80.5, 305.0], [80.6, 305.0], [80.7, 306.0], [80.8, 306.0], [80.9, 306.0], [81.0, 306.0], [81.1, 306.0], [81.2, 306.0], [81.3, 306.0], [81.4, 306.0], [81.5, 306.0], [81.6, 306.0], [81.7, 306.0], [81.8, 306.0], [81.9, 306.0], [82.0, 307.0], [82.1, 307.0], [82.2, 307.0], [82.3, 307.0], [82.4, 307.0], [82.5, 307.0], [82.6, 307.0], [82.7, 307.0], [82.8, 307.0], [82.9, 307.0], [83.0, 308.0], [83.1, 308.0], [83.2, 308.0], [83.3, 308.0], [83.4, 308.0], [83.5, 308.0], [83.6, 308.0], [83.7, 308.0], [83.8, 308.0], [83.9, 308.0], [84.0, 308.0], [84.1, 308.0], [84.2, 308.0], [84.3, 309.0], [84.4, 309.0], [84.5, 309.0], [84.6, 309.0], [84.7, 309.0], [84.8, 309.0], [84.9, 309.0], [85.0, 309.0], [85.1, 309.0], [85.2, 309.0], [85.3, 310.0], [85.4, 310.0], [85.5, 310.0], [85.6, 310.0], [85.7, 310.0], [85.8, 310.0], [85.9, 310.0], [86.0, 310.0], [86.1, 310.0], [86.2, 311.0], [86.3, 311.0], [86.4, 311.0], [86.5, 311.0], [86.6, 311.0], [86.7, 311.0], [86.8, 311.0], [86.9, 311.0], [87.0, 311.0], [87.1, 312.0], [87.2, 312.0], [87.3, 312.0], [87.4, 312.0], [87.5, 312.0], [87.6, 312.0], [87.7, 312.0], [87.8, 313.0], [87.9, 313.0], [88.0, 313.0], [88.1, 313.0], [88.2, 313.0], [88.3, 313.0], [88.4, 313.0], [88.5, 313.0], [88.6, 314.0], [88.7, 314.0], [88.8, 314.0], [88.9, 314.0], [89.0, 314.0], [89.1, 314.0], [89.2, 315.0], [89.3, 315.0], [89.4, 315.0], [89.5, 315.0], [89.6, 315.0], [89.7, 315.0], [89.8, 315.0], [89.9, 316.0], [90.0, 316.0], [90.1, 316.0], [90.2, 316.0], [90.3, 316.0], [90.4, 316.0], [90.5, 317.0], [90.6, 317.0], [90.7, 317.0], [90.8, 317.0], [90.9, 318.0], [91.0, 318.0], [91.1, 318.0], [91.2, 318.0], [91.3, 319.0], [91.4, 319.0], [91.5, 319.0], [91.6, 319.0], [91.7, 320.0], [91.8, 320.0], [91.9, 320.0], [92.0, 321.0], [92.1, 321.0], [92.2, 321.0], [92.3, 322.0], [92.4, 322.0], [92.5, 322.0], [92.6, 323.0], [92.7, 323.0], [92.8, 323.0], [92.9, 324.0], [93.0, 324.0], [93.1, 325.0], [93.2, 325.0], [93.3, 326.0], [93.4, 327.0], [93.5, 327.0], [93.6, 328.0], [93.7, 329.0], [93.8, 330.0], [93.9, 330.0], [94.0, 331.0], [94.1, 332.0], [94.2, 333.0], [94.3, 334.0], [94.4, 336.0], [94.5, 337.0], [94.6, 338.0], [94.7, 339.0], [94.8, 340.0], [94.9, 341.0], [95.0, 342.0], [95.1, 343.0], [95.2, 344.0], [95.3, 345.0], [95.4, 345.0], [95.5, 346.0], [95.6, 347.0], [95.7, 348.0], [95.8, 348.0], [95.9, 349.0], [96.0, 350.0], [96.1, 351.0], [96.2, 351.0], [96.3, 352.0], [96.4, 353.0], [96.5, 354.0], [96.6, 354.0], [96.7, 355.0], [96.8, 356.0], [96.9, 356.0], [97.0, 357.0], [97.1, 358.0], [97.2, 359.0], [97.3, 360.0], [97.4, 360.0], [97.5, 361.0], [97.6, 362.0], [97.7, 363.0], [97.8, 364.0], [97.9, 365.0], [98.0, 367.0], [98.1, 368.0], [98.2, 370.0], [98.3, 371.0], [98.4, 373.0], [98.5, 375.0], [98.6, 378.0], [98.7, 381.0], [98.8, 385.0], [98.9, 388.0], [99.0, 392.0], [99.1, 396.0], [99.2, 402.0], [99.3, 407.0], [99.4, 415.0], [99.5, 425.0], [99.6, 435.0], [99.7, 453.0], [99.8, 477.0], [99.9, 518.0], [100.0, 1324.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 23401.0, "series": [{"data": [[300.0, 10515.0], [1200.0, 1.0], [600.0, 8.0], [1300.0, 2.0], [700.0, 1.0], [200.0, 23401.0], [100.0, 3758.0], [800.0, 1.0], [400.0, 271.0], [900.0, 1.0], [500.0, 36.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 24423.0, "series": [{"data": [[0.0, 13556.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 16.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 24423.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.640000000000002, "minX": 1.79428434E12, "maxY": 99.74677187948355, "series": [{"data": [[1.79428434E12, 9.640000000000002], [1.7942844E12, 87.0244088482077], [1.79428446E12, 99.74677187948355]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428446E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 185.03260869565216, "minX": 1.0, "maxY": 434.0, "series": [{"data": [[2.0, 304.0], [3.0, 434.0], [4.0, 354.8], [5.0, 211.125], [6.0, 209.9], [7.0, 211.75], [8.0, 234.2857142857143], [9.0, 195.2857142857143], [10.0, 197.62500000000003], [11.0, 201.875], [12.0, 200.16666666666666], [13.0, 193.55555555555554], [14.0, 234.79999999999998], [15.0, 191.38095238095238], [16.0, 204.71428571428567], [17.0, 193.56], [18.0, 189.6333333333333], [19.0, 193.27586206896555], [20.0, 203.53333333333333], [21.0, 211.25], [22.0, 209.11428571428576], [23.0, 191.00000000000003], [24.0, 190.51282051282047], [25.0, 200.35897435897434], [26.0, 188.7209302325581], [27.0, 191.88636363636363], [28.0, 187.99999999999997], [29.0, 186.6888888888889], [30.0, 192.2884615384615], [31.0, 192.40476190476193], [32.0, 188.62500000000003], [33.0, 190.26785714285717], [34.0, 189.76470588235298], [35.0, 188.1016949152542], [36.0, 191.80701754385964], [37.0, 187.0166666666666], [38.0, 189.4603174603175], [39.0, 187.4310344827586], [40.0, 210.21311475409834], [41.0, 191.27272727272722], [42.0, 187.8461538461538], [43.0, 190.90140845070428], [44.0, 189.95588235294116], [45.0, 190.3589743589744], [46.0, 189.16000000000005], [47.0, 188.4571428571429], [48.0, 187.6463414634146], [49.0, 195.27999999999997], [50.0, 187.6463414634147], [51.0, 188.51219512195127], [52.0, 189.60975609756102], [53.0, 189.3139534883722], [54.0, 187.1573033707866], [55.0, 191.10588235294117], [56.0, 186.58333333333334], [57.0, 186.6333333333332], [58.0, 187.8791208791209], [59.0, 189.06730769230768], [60.0, 185.03260869565216], [61.0, 186.27272727272725], [62.0, 190.21428571428567], [63.0, 188.77450980392157], [64.0, 189.15533980582532], [65.0, 191.86274509803914], [66.0, 197.27083333333331], [67.0, 197.9433962264151], [68.0, 199.39423076923086], [69.0, 196.0952380952381], [70.0, 193.1875], [71.0, 194.95370370370372], [72.0, 199.96190476190472], [73.0, 221.38461538461536], [74.0, 233.39423076923063], [75.0, 234.12121212121207], [76.0, 232.43434343434348], [77.0, 231.3958333333334], [78.0, 230.64077669902917], [79.0, 241.69791666666666], [80.0, 220.04310344827584], [81.0, 217.76576576576568], [82.0, 240.39215686274514], [83.0, 228.42718446601938], [84.0, 244.68181818181813], [85.0, 223.2660550458715], [86.0, 212.4609375000001], [87.0, 249.93939393939402], [88.0, 251.2201834862386], [89.0, 250.26262626262633], [90.0, 279.44329896907203], [91.0, 277.31428571428563], [92.0, 278.8842105263157], [93.0, 275.1028037383177], [94.0, 258.4363636363636], [95.0, 243.856], [96.0, 245.06930693069302], [97.0, 288.05714285714276], [98.0, 262.58260869565225], [99.0, 282.89565217391305], [100.0, 291.3405525789157], [1.0, 323.0]], "isOverall": false, "label": "GET Locales", "isController": false}, {"data": [[93.30461902881957, 277.15033557046786]], "isOverall": false, "label": "GET Locales-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 306.25, "minX": 1.79428434E12, "maxY": 625407.8666666667, "series": [{"data": [[1.79428434E12, 3160.3], [1.7942844E12, 590794.55], [1.79428446E12, 625407.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79428434E12, 306.25], [1.7942844E12, 44967.3], [1.79428446E12, 47814.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428446E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 214.824, "minX": 1.79428434E12, "maxY": 288.7611190817783, "series": [{"data": [[1.79428434E12, 214.824], [1.7942844E12, 265.22894192001695], [1.79428446E12, 288.7611190817783]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428446E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 214.616, "minX": 1.79428434E12, "maxY": 288.5450912072164, "series": [{"data": [[1.79428434E12, 214.616], [1.7942844E12, 265.06657949220966], [1.79428446E12, 288.5450912072164]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428446E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.16540274646444125, "minX": 1.79428434E12, "maxY": 17.744000000000003, "series": [{"data": [[1.79428434E12, 17.744000000000003], [1.7942844E12, 0.2091097308488608], [1.79428446E12, 0.16540274646444125]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428446E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.79428434E12, "maxY": 924.0, "series": [{"data": [[1.79428434E12, 524.0], [1.7942844E12, 612.0], [1.79428446E12, 924.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79428434E12, 250.60000000000002], [1.7942844E12, 321.40000000000055], [1.79428446E12, 322.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79428434E12, 524.0], [1.7942844E12, 373.0], [1.79428446E12, 412.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79428434E12, 369.19999999999965], [1.7942844E12, 348.0], [1.79428446E12, 353.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79428434E12, 179.0], [1.7942844E12, 174.0], [1.79428446E12, 212.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79428434E12, 191.0], [1.7942844E12, 287.0], [1.79428446E12, 293.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428446E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 182.0, "minX": 2.0, "maxY": 500.0, "series": [{"data": [[43.0, 203.0], [57.0, 189.0], [78.0, 189.0], [95.0, 189.0], [110.0, 190.0], [119.0, 311.0], [130.0, 188.0], [155.0, 186.0], [168.0, 186.0], [187.0, 187.0], [200.0, 187.0], [219.0, 189.0], [241.0, 191.0], [259.0, 187.0], [274.0, 186.5], [302.0, 187.0], [298.0, 320.0], [303.0, 319.0], [289.0, 315.0], [309.0, 188.0], [319.0, 307.0], [308.0, 324.0], [318.0, 315.0], [316.0, 309.0], [317.0, 304.0], [314.0, 345.5], [312.0, 303.0], [305.0, 316.0], [332.0, 298.0], [330.0, 196.0], [326.0, 233.0], [327.0, 305.0], [321.0, 312.5], [320.0, 312.0], [331.0, 304.0], [325.0, 308.0], [334.0, 299.0], [333.0, 305.5], [335.0, 300.0], [349.0, 265.0], [341.0, 268.5], [340.0, 292.0], [346.0, 289.0], [347.0, 291.0], [338.0, 300.0], [348.0, 292.0], [336.0, 302.0], [350.0, 291.0], [342.0, 296.0], [344.0, 296.0], [345.0, 303.0], [351.0, 292.0], [367.0, 220.5], [352.0, 285.0], [363.0, 285.0], [358.0, 286.0], [362.0, 279.0], [353.0, 281.0], [357.0, 293.0], [355.0, 300.0], [365.0, 286.0], [373.0, 259.0], [371.0, 275.0], [377.0, 281.0], [368.0, 274.0], [374.0, 280.0], [375.0, 285.0], [381.0, 267.5], [376.0, 268.0], [384.0, 272.0], [388.0, 266.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 500.0], [23.0, 197.0], [43.0, 186.5], [57.0, 187.0], [78.0, 184.0], [95.0, 184.5], [110.0, 182.0], [119.0, 310.0], [130.0, 183.0], [155.0, 183.0], [168.0, 185.0], [187.0, 184.0], [200.0, 185.0], [219.0, 185.0], [241.0, 185.0], [259.0, 183.0], [274.0, 184.0], [302.0, 183.0], [298.0, 315.0], [303.0, 312.0], [289.0, 304.0], [309.0, 183.0], [319.0, 303.0], [308.0, 316.0], [318.0, 308.0], [316.0, 307.0], [317.0, 297.0], [314.0, 355.0], [312.0, 289.0], [305.0, 310.0], [332.0, 294.0], [330.0, 194.0], [326.0, 224.0], [327.0, 300.0], [321.0, 307.5], [320.0, 310.0], [331.0, 299.0], [325.0, 304.0], [334.0, 294.5], [333.0, 302.0], [335.0, 297.0], [349.0, 257.0], [341.0, 254.0], [340.0, 288.0], [346.0, 282.0], [347.0, 285.0], [338.0, 294.0], [348.0, 288.0], [336.0, 297.0], [350.0, 285.0], [342.0, 293.0], [344.0, 291.0], [345.0, 299.0], [351.0, 290.5], [367.0, 215.0], [352.0, 280.0], [363.0, 279.0], [358.0, 283.0], [362.0, 274.0], [353.0, 278.5], [357.0, 286.0], [355.0, 294.0], [365.0, 280.0], [373.0, 259.0], [371.0, 269.0], [377.0, 276.0], [368.0, 270.0], [374.0, 274.0], [375.0, 275.0], [381.0, 266.0], [376.0, 254.0], [384.0, 263.0], [388.0, 265.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 388.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 182.0, "minX": 2.0, "maxY": 497.0, "series": [{"data": [[43.0, 203.0], [57.0, 188.5], [78.0, 189.0], [95.0, 189.0], [110.0, 189.0], [119.0, 311.0], [130.0, 188.0], [155.0, 185.0], [168.0, 186.0], [187.0, 187.0], [200.0, 186.5], [219.0, 188.5], [241.0, 190.0], [259.0, 187.0], [274.0, 186.5], [302.0, 187.0], [298.0, 320.0], [303.0, 319.0], [289.0, 315.0], [309.0, 187.0], [319.0, 306.0], [308.0, 323.5], [318.0, 315.0], [316.0, 309.0], [317.0, 304.0], [314.0, 345.0], [312.0, 302.0], [305.0, 316.0], [332.0, 298.0], [330.0, 196.0], [326.0, 233.0], [327.0, 304.5], [321.0, 312.5], [320.0, 312.0], [331.0, 304.0], [325.0, 307.0], [334.0, 299.0], [333.0, 305.0], [335.0, 300.0], [349.0, 265.0], [341.0, 268.5], [340.0, 291.0], [346.0, 289.0], [347.0, 291.0], [338.0, 300.0], [348.0, 291.0], [336.0, 302.0], [350.0, 290.0], [342.0, 296.0], [344.0, 296.0], [345.0, 303.0], [351.0, 291.0], [367.0, 220.5], [352.0, 285.0], [363.0, 285.0], [358.0, 286.0], [362.0, 279.0], [353.0, 281.0], [357.0, 292.0], [355.0, 300.0], [365.0, 286.0], [373.0, 259.0], [371.0, 275.0], [377.0, 281.0], [368.0, 274.0], [374.0, 280.0], [375.0, 285.0], [381.0, 266.5], [376.0, 268.0], [384.0, 272.0], [388.0, 266.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 497.0], [23.0, 197.0], [43.0, 186.5], [57.0, 187.0], [78.0, 183.0], [95.0, 184.5], [110.0, 182.0], [119.0, 309.0], [130.0, 183.0], [155.0, 183.0], [168.0, 185.0], [187.0, 184.0], [200.0, 184.0], [219.0, 185.0], [241.0, 185.0], [259.0, 183.0], [274.0, 184.0], [302.0, 183.0], [298.0, 315.0], [303.0, 312.0], [289.0, 304.0], [309.0, 183.0], [319.0, 303.0], [308.0, 316.0], [318.0, 308.0], [316.0, 307.0], [317.0, 297.0], [314.0, 355.0], [312.0, 289.0], [305.0, 310.0], [332.0, 294.0], [330.0, 194.0], [326.0, 224.0], [327.0, 300.0], [321.0, 307.0], [320.0, 310.0], [331.0, 299.0], [325.0, 303.0], [334.0, 294.0], [333.0, 302.0], [335.0, 297.0], [349.0, 257.0], [341.0, 254.0], [340.0, 288.0], [346.0, 281.0], [347.0, 285.0], [338.0, 294.0], [348.0, 287.0], [336.0, 297.0], [350.0, 285.0], [342.0, 293.0], [344.0, 291.0], [345.0, 299.0], [351.0, 290.0], [367.0, 215.0], [352.0, 279.5], [363.0, 279.0], [358.0, 283.0], [362.0, 274.0], [353.0, 278.0], [357.0, 286.0], [355.0, 293.0], [365.0, 280.0], [373.0, 259.0], [371.0, 269.0], [377.0, 276.0], [368.0, 270.0], [374.0, 274.0], [375.0, 275.0], [381.0, 265.0], [376.0, 254.0], [384.0, 263.0], [388.0, 264.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 388.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.79428434E12, "maxY": 323.6, "series": [{"data": [[1.79428434E12, 2.316666666666667], [1.7942844E12, 307.3333333333333], [1.79428446E12, 323.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428446E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.79428434E12, "maxY": 209.33333333333334, "series": [{"data": [[1.79428434E12, 0.5166666666666667], [1.7942844E12, 109.75], [1.79428446E12, 115.93333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.79428434E12, 1.5666666666666667], [1.7942844E12, 196.15], [1.79428446E12, 209.33333333333334]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79428446E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.79428434E12, "maxY": 209.33333333333334, "series": [{"data": [[1.79428434E12, 1.5666666666666667], [1.7942844E12, 196.15], [1.79428446E12, 209.33333333333334]], "isOverall": false, "label": "GET Locales-failure", "isController": false}, {"data": [[1.79428434E12, 0.5166666666666667], [1.7942844E12, 109.75], [1.79428446E12, 115.93333333333334]], "isOverall": false, "label": "GET Locales-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428446E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.79428434E12, "maxY": 209.33333333333334, "series": [{"data": [[1.79428434E12, 0.5166666666666667], [1.7942844E12, 109.75], [1.79428446E12, 115.93333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79428434E12, 1.5666666666666667], [1.7942844E12, 196.15], [1.79428446E12, 209.33333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79428446E12, "title": "Total Transactions Per Second"}},
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

