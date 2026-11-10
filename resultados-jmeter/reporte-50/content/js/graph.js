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
        data: {"result": {"minY": 166.0, "minX": 0.0, "maxY": 23613.0, "series": [{"data": [[0.0, 166.0], [0.1, 170.0], [0.2, 171.0], [0.3, 172.0], [0.4, 173.0], [0.5, 173.0], [0.6, 173.0], [0.7, 174.0], [0.8, 174.0], [0.9, 174.0], [1.0, 174.0], [1.1, 175.0], [1.2, 175.0], [1.3, 175.0], [1.4, 175.0], [1.5, 176.0], [1.6, 176.0], [1.7, 176.0], [1.8, 176.0], [1.9, 176.0], [2.0, 176.0], [2.1, 177.0], [2.2, 177.0], [2.3, 177.0], [2.4, 177.0], [2.5, 177.0], [2.6, 177.0], [2.7, 177.0], [2.8, 178.0], [2.9, 178.0], [3.0, 178.0], [3.1, 178.0], [3.2, 178.0], [3.3, 178.0], [3.4, 178.0], [3.5, 178.0], [3.6, 179.0], [3.7, 179.0], [3.8, 179.0], [3.9, 179.0], [4.0, 179.0], [4.1, 179.0], [4.2, 179.0], [4.3, 180.0], [4.4, 180.0], [4.5, 180.0], [4.6, 180.0], [4.7, 180.0], [4.8, 180.0], [4.9, 180.0], [5.0, 180.0], [5.1, 180.0], [5.2, 181.0], [5.3, 181.0], [5.4, 181.0], [5.5, 181.0], [5.6, 181.0], [5.7, 181.0], [5.8, 181.0], [5.9, 181.0], [6.0, 181.0], [6.1, 181.0], [6.2, 182.0], [6.3, 182.0], [6.4, 182.0], [6.5, 182.0], [6.6, 182.0], [6.7, 182.0], [6.8, 182.0], [6.9, 182.0], [7.0, 182.0], [7.1, 182.0], [7.2, 182.0], [7.3, 183.0], [7.4, 183.0], [7.5, 183.0], [7.6, 183.0], [7.7, 183.0], [7.8, 183.0], [7.9, 183.0], [8.0, 183.0], [8.1, 183.0], [8.2, 183.0], [8.3, 184.0], [8.4, 184.0], [8.5, 184.0], [8.6, 184.0], [8.7, 184.0], [8.8, 184.0], [8.9, 184.0], [9.0, 184.0], [9.1, 184.0], [9.2, 184.0], [9.3, 185.0], [9.4, 185.0], [9.5, 185.0], [9.6, 185.0], [9.7, 185.0], [9.8, 185.0], [9.9, 185.0], [10.0, 185.0], [10.1, 185.0], [10.2, 185.0], [10.3, 185.0], [10.4, 186.0], [10.5, 186.0], [10.6, 186.0], [10.7, 186.0], [10.8, 186.0], [10.9, 186.0], [11.0, 186.0], [11.1, 186.0], [11.2, 186.0], [11.3, 186.0], [11.4, 186.0], [11.5, 187.0], [11.6, 187.0], [11.7, 187.0], [11.8, 187.0], [11.9, 187.0], [12.0, 187.0], [12.1, 187.0], [12.2, 187.0], [12.3, 187.0], [12.4, 188.0], [12.5, 188.0], [12.6, 188.0], [12.7, 188.0], [12.8, 188.0], [12.9, 188.0], [13.0, 188.0], [13.1, 188.0], [13.2, 188.0], [13.3, 188.0], [13.4, 188.0], [13.5, 189.0], [13.6, 189.0], [13.7, 189.0], [13.8, 189.0], [13.9, 189.0], [14.0, 189.0], [14.1, 189.0], [14.2, 189.0], [14.3, 189.0], [14.4, 189.0], [14.5, 189.0], [14.6, 189.0], [14.7, 190.0], [14.8, 190.0], [14.9, 190.0], [15.0, 190.0], [15.1, 190.0], [15.2, 190.0], [15.3, 190.0], [15.4, 190.0], [15.5, 190.0], [15.6, 190.0], [15.7, 191.0], [15.8, 191.0], [15.9, 191.0], [16.0, 191.0], [16.1, 191.0], [16.2, 191.0], [16.3, 191.0], [16.4, 191.0], [16.5, 191.0], [16.6, 191.0], [16.7, 191.0], [16.8, 192.0], [16.9, 192.0], [17.0, 192.0], [17.1, 192.0], [17.2, 192.0], [17.3, 192.0], [17.4, 192.0], [17.5, 192.0], [17.6, 192.0], [17.7, 192.0], [17.8, 192.0], [17.9, 192.0], [18.0, 193.0], [18.1, 193.0], [18.2, 193.0], [18.3, 193.0], [18.4, 193.0], [18.5, 193.0], [18.6, 193.0], [18.7, 193.0], [18.8, 193.0], [18.9, 193.0], [19.0, 193.0], [19.1, 193.0], [19.2, 194.0], [19.3, 194.0], [19.4, 194.0], [19.5, 194.0], [19.6, 194.0], [19.7, 194.0], [19.8, 194.0], [19.9, 194.0], [20.0, 194.0], [20.1, 194.0], [20.2, 194.0], [20.3, 195.0], [20.4, 195.0], [20.5, 195.0], [20.6, 195.0], [20.7, 195.0], [20.8, 195.0], [20.9, 195.0], [21.0, 195.0], [21.1, 195.0], [21.2, 195.0], [21.3, 195.0], [21.4, 195.0], [21.5, 196.0], [21.6, 196.0], [21.7, 196.0], [21.8, 196.0], [21.9, 196.0], [22.0, 196.0], [22.1, 196.0], [22.2, 196.0], [22.3, 196.0], [22.4, 196.0], [22.5, 196.0], [22.6, 197.0], [22.7, 197.0], [22.8, 197.0], [22.9, 197.0], [23.0, 197.0], [23.1, 197.0], [23.2, 197.0], [23.3, 197.0], [23.4, 197.0], [23.5, 197.0], [23.6, 197.0], [23.7, 198.0], [23.8, 198.0], [23.9, 198.0], [24.0, 198.0], [24.1, 198.0], [24.2, 198.0], [24.3, 198.0], [24.4, 198.0], [24.5, 198.0], [24.6, 198.0], [24.7, 198.0], [24.8, 199.0], [24.9, 199.0], [25.0, 199.0], [25.1, 199.0], [25.2, 199.0], [25.3, 199.0], [25.4, 199.0], [25.5, 199.0], [25.6, 199.0], [25.7, 199.0], [25.8, 199.0], [25.9, 200.0], [26.0, 200.0], [26.1, 200.0], [26.2, 200.0], [26.3, 200.0], [26.4, 200.0], [26.5, 200.0], [26.6, 200.0], [26.7, 200.0], [26.8, 200.0], [26.9, 201.0], [27.0, 201.0], [27.1, 201.0], [27.2, 201.0], [27.3, 201.0], [27.4, 201.0], [27.5, 201.0], [27.6, 201.0], [27.7, 201.0], [27.8, 201.0], [27.9, 201.0], [28.0, 201.0], [28.1, 202.0], [28.2, 202.0], [28.3, 202.0], [28.4, 202.0], [28.5, 202.0], [28.6, 202.0], [28.7, 202.0], [28.8, 202.0], [28.9, 202.0], [29.0, 202.0], [29.1, 202.0], [29.2, 203.0], [29.3, 203.0], [29.4, 203.0], [29.5, 203.0], [29.6, 203.0], [29.7, 203.0], [29.8, 203.0], [29.9, 203.0], [30.0, 203.0], [30.1, 203.0], [30.2, 203.0], [30.3, 203.0], [30.4, 204.0], [30.5, 204.0], [30.6, 204.0], [30.7, 204.0], [30.8, 204.0], [30.9, 204.0], [31.0, 204.0], [31.1, 204.0], [31.2, 204.0], [31.3, 204.0], [31.4, 204.0], [31.5, 205.0], [31.6, 205.0], [31.7, 205.0], [31.8, 205.0], [31.9, 205.0], [32.0, 205.0], [32.1, 205.0], [32.2, 205.0], [32.3, 205.0], [32.4, 205.0], [32.5, 205.0], [32.6, 205.0], [32.7, 206.0], [32.8, 206.0], [32.9, 206.0], [33.0, 206.0], [33.1, 206.0], [33.2, 206.0], [33.3, 206.0], [33.4, 206.0], [33.5, 206.0], [33.6, 206.0], [33.7, 206.0], [33.8, 207.0], [33.9, 207.0], [34.0, 207.0], [34.1, 207.0], [34.2, 207.0], [34.3, 207.0], [34.4, 207.0], [34.5, 207.0], [34.6, 207.0], [34.7, 207.0], [34.8, 208.0], [34.9, 208.0], [35.0, 208.0], [35.1, 208.0], [35.2, 208.0], [35.3, 208.0], [35.4, 208.0], [35.5, 208.0], [35.6, 208.0], [35.7, 208.0], [35.8, 209.0], [35.9, 209.0], [36.0, 209.0], [36.1, 209.0], [36.2, 209.0], [36.3, 209.0], [36.4, 209.0], [36.5, 209.0], [36.6, 209.0], [36.7, 209.0], [36.8, 210.0], [36.9, 210.0], [37.0, 210.0], [37.1, 210.0], [37.2, 210.0], [37.3, 210.0], [37.4, 210.0], [37.5, 210.0], [37.6, 210.0], [37.7, 210.0], [37.8, 211.0], [37.9, 211.0], [38.0, 211.0], [38.1, 211.0], [38.2, 211.0], [38.3, 211.0], [38.4, 211.0], [38.5, 211.0], [38.6, 211.0], [38.7, 211.0], [38.8, 212.0], [38.9, 212.0], [39.0, 212.0], [39.1, 212.0], [39.2, 212.0], [39.3, 212.0], [39.4, 212.0], [39.5, 212.0], [39.6, 212.0], [39.7, 212.0], [39.8, 213.0], [39.9, 213.0], [40.0, 213.0], [40.1, 213.0], [40.2, 213.0], [40.3, 213.0], [40.4, 213.0], [40.5, 213.0], [40.6, 213.0], [40.7, 213.0], [40.8, 214.0], [40.9, 214.0], [41.0, 214.0], [41.1, 214.0], [41.2, 214.0], [41.3, 214.0], [41.4, 214.0], [41.5, 214.0], [41.6, 214.0], [41.7, 215.0], [41.8, 215.0], [41.9, 215.0], [42.0, 215.0], [42.1, 215.0], [42.2, 215.0], [42.3, 215.0], [42.4, 215.0], [42.5, 215.0], [42.6, 216.0], [42.7, 216.0], [42.8, 216.0], [42.9, 216.0], [43.0, 216.0], [43.1, 216.0], [43.2, 216.0], [43.3, 216.0], [43.4, 216.0], [43.5, 217.0], [43.6, 217.0], [43.7, 217.0], [43.8, 217.0], [43.9, 217.0], [44.0, 217.0], [44.1, 217.0], [44.2, 217.0], [44.3, 217.0], [44.4, 218.0], [44.5, 218.0], [44.6, 218.0], [44.7, 218.0], [44.8, 218.0], [44.9, 218.0], [45.0, 218.0], [45.1, 218.0], [45.2, 218.0], [45.3, 219.0], [45.4, 219.0], [45.5, 219.0], [45.6, 219.0], [45.7, 219.0], [45.8, 219.0], [45.9, 219.0], [46.0, 219.0], [46.1, 219.0], [46.2, 220.0], [46.3, 220.0], [46.4, 220.0], [46.5, 220.0], [46.6, 220.0], [46.7, 220.0], [46.8, 220.0], [46.9, 220.0], [47.0, 220.0], [47.1, 220.0], [47.2, 221.0], [47.3, 221.0], [47.4, 221.0], [47.5, 221.0], [47.6, 221.0], [47.7, 221.0], [47.8, 221.0], [47.9, 221.0], [48.0, 222.0], [48.1, 222.0], [48.2, 222.0], [48.3, 222.0], [48.4, 222.0], [48.5, 222.0], [48.6, 222.0], [48.7, 222.0], [48.8, 223.0], [48.9, 223.0], [49.0, 223.0], [49.1, 223.0], [49.2, 223.0], [49.3, 223.0], [49.4, 223.0], [49.5, 223.0], [49.6, 224.0], [49.7, 224.0], [49.8, 224.0], [49.9, 224.0], [50.0, 224.0], [50.1, 224.0], [50.2, 224.0], [50.3, 224.0], [50.4, 225.0], [50.5, 225.0], [50.6, 225.0], [50.7, 225.0], [50.8, 225.0], [50.9, 225.0], [51.0, 226.0], [51.1, 226.0], [51.2, 226.0], [51.3, 226.0], [51.4, 226.0], [51.5, 226.0], [51.6, 226.0], [51.7, 227.0], [51.8, 227.0], [51.9, 227.0], [52.0, 227.0], [52.1, 227.0], [52.2, 227.0], [52.3, 227.0], [52.4, 227.0], [52.5, 228.0], [52.6, 228.0], [52.7, 228.0], [52.8, 228.0], [52.9, 228.0], [53.0, 228.0], [53.1, 229.0], [53.2, 229.0], [53.3, 229.0], [53.4, 229.0], [53.5, 229.0], [53.6, 229.0], [53.7, 230.0], [53.8, 230.0], [53.9, 230.0], [54.0, 230.0], [54.1, 230.0], [54.2, 230.0], [54.3, 230.0], [54.4, 231.0], [54.5, 231.0], [54.6, 231.0], [54.7, 231.0], [54.8, 231.0], [54.9, 231.0], [55.0, 231.0], [55.1, 231.0], [55.2, 232.0], [55.3, 232.0], [55.4, 232.0], [55.5, 232.0], [55.6, 232.0], [55.7, 232.0], [55.8, 232.0], [55.9, 233.0], [56.0, 233.0], [56.1, 233.0], [56.2, 233.0], [56.3, 233.0], [56.4, 233.0], [56.5, 234.0], [56.6, 234.0], [56.7, 234.0], [56.8, 234.0], [56.9, 234.0], [57.0, 234.0], [57.1, 235.0], [57.2, 235.0], [57.3, 235.0], [57.4, 235.0], [57.5, 235.0], [57.6, 235.0], [57.7, 236.0], [57.8, 236.0], [57.9, 236.0], [58.0, 236.0], [58.1, 236.0], [58.2, 237.0], [58.3, 237.0], [58.4, 237.0], [58.5, 237.0], [58.6, 237.0], [58.7, 238.0], [58.8, 238.0], [58.9, 238.0], [59.0, 238.0], [59.1, 238.0], [59.2, 238.0], [59.3, 239.0], [59.4, 239.0], [59.5, 239.0], [59.6, 239.0], [59.7, 239.0], [59.8, 239.0], [59.9, 240.0], [60.0, 240.0], [60.1, 240.0], [60.2, 240.0], [60.3, 240.0], [60.4, 241.0], [60.5, 241.0], [60.6, 241.0], [60.7, 241.0], [60.8, 241.0], [60.9, 242.0], [61.0, 242.0], [61.1, 242.0], [61.2, 242.0], [61.3, 242.0], [61.4, 243.0], [61.5, 243.0], [61.6, 243.0], [61.7, 243.0], [61.8, 243.0], [61.9, 244.0], [62.0, 244.0], [62.1, 244.0], [62.2, 244.0], [62.3, 244.0], [62.4, 244.0], [62.5, 245.0], [62.6, 245.0], [62.7, 245.0], [62.8, 245.0], [62.9, 245.0], [63.0, 246.0], [63.1, 246.0], [63.2, 246.0], [63.3, 246.0], [63.4, 246.0], [63.5, 247.0], [63.6, 247.0], [63.7, 247.0], [63.8, 247.0], [63.9, 247.0], [64.0, 248.0], [64.1, 248.0], [64.2, 248.0], [64.3, 248.0], [64.4, 249.0], [64.5, 249.0], [64.6, 249.0], [64.7, 249.0], [64.8, 249.0], [64.9, 250.0], [65.0, 250.0], [65.1, 250.0], [65.2, 250.0], [65.3, 251.0], [65.4, 251.0], [65.5, 251.0], [65.6, 251.0], [65.7, 252.0], [65.8, 252.0], [65.9, 252.0], [66.0, 252.0], [66.1, 252.0], [66.2, 253.0], [66.3, 253.0], [66.4, 253.0], [66.5, 253.0], [66.6, 254.0], [66.7, 254.0], [66.8, 254.0], [66.9, 255.0], [67.0, 255.0], [67.1, 255.0], [67.2, 255.0], [67.3, 255.0], [67.4, 256.0], [67.5, 256.0], [67.6, 256.0], [67.7, 256.0], [67.8, 256.0], [67.9, 257.0], [68.0, 257.0], [68.1, 257.0], [68.2, 257.0], [68.3, 257.0], [68.4, 258.0], [68.5, 258.0], [68.6, 258.0], [68.7, 258.0], [68.8, 259.0], [68.9, 259.0], [69.0, 259.0], [69.1, 259.0], [69.2, 260.0], [69.3, 260.0], [69.4, 260.0], [69.5, 261.0], [69.6, 261.0], [69.7, 261.0], [69.8, 261.0], [69.9, 262.0], [70.0, 262.0], [70.1, 262.0], [70.2, 263.0], [70.3, 263.0], [70.4, 263.0], [70.5, 264.0], [70.6, 264.0], [70.7, 264.0], [70.8, 265.0], [70.9, 265.0], [71.0, 265.0], [71.1, 265.0], [71.2, 266.0], [71.3, 266.0], [71.4, 266.0], [71.5, 267.0], [71.6, 267.0], [71.7, 267.0], [71.8, 268.0], [71.9, 268.0], [72.0, 268.0], [72.1, 269.0], [72.2, 269.0], [72.3, 269.0], [72.4, 270.0], [72.5, 270.0], [72.6, 270.0], [72.7, 270.0], [72.8, 270.0], [72.9, 271.0], [73.0, 271.0], [73.1, 271.0], [73.2, 272.0], [73.3, 272.0], [73.4, 272.0], [73.5, 272.0], [73.6, 273.0], [73.7, 273.0], [73.8, 273.0], [73.9, 274.0], [74.0, 274.0], [74.1, 274.0], [74.2, 274.0], [74.3, 274.0], [74.4, 275.0], [74.5, 275.0], [74.6, 275.0], [74.7, 275.0], [74.8, 276.0], [74.9, 276.0], [75.0, 276.0], [75.1, 277.0], [75.2, 277.0], [75.3, 277.0], [75.4, 278.0], [75.5, 278.0], [75.6, 278.0], [75.7, 278.0], [75.8, 279.0], [75.9, 279.0], [76.0, 280.0], [76.1, 280.0], [76.2, 281.0], [76.3, 281.0], [76.4, 282.0], [76.5, 282.0], [76.6, 283.0], [76.7, 283.0], [76.8, 283.0], [76.9, 284.0], [77.0, 284.0], [77.1, 284.0], [77.2, 285.0], [77.3, 285.0], [77.4, 285.0], [77.5, 286.0], [77.6, 286.0], [77.7, 286.0], [77.8, 287.0], [77.9, 287.0], [78.0, 287.0], [78.1, 288.0], [78.2, 288.0], [78.3, 289.0], [78.4, 289.0], [78.5, 290.0], [78.6, 290.0], [78.7, 290.0], [78.8, 291.0], [78.9, 291.0], [79.0, 291.0], [79.1, 292.0], [79.2, 292.0], [79.3, 293.0], [79.4, 293.0], [79.5, 293.0], [79.6, 294.0], [79.7, 294.0], [79.8, 294.0], [79.9, 295.0], [80.0, 295.0], [80.1, 295.0], [80.2, 296.0], [80.3, 296.0], [80.4, 296.0], [80.5, 297.0], [80.6, 297.0], [80.7, 298.0], [80.8, 298.0], [80.9, 299.0], [81.0, 299.0], [81.1, 299.0], [81.2, 300.0], [81.3, 300.0], [81.4, 300.0], [81.5, 300.0], [81.6, 301.0], [81.7, 301.0], [81.8, 302.0], [81.9, 302.0], [82.0, 303.0], [82.1, 303.0], [82.2, 304.0], [82.3, 304.0], [82.4, 305.0], [82.5, 305.0], [82.6, 305.0], [82.7, 306.0], [82.8, 306.0], [82.9, 307.0], [83.0, 307.0], [83.1, 308.0], [83.2, 308.0], [83.3, 309.0], [83.4, 309.0], [83.5, 309.0], [83.6, 310.0], [83.7, 311.0], [83.8, 311.0], [83.9, 312.0], [84.0, 312.0], [84.1, 312.0], [84.2, 313.0], [84.3, 313.0], [84.4, 314.0], [84.5, 315.0], [84.6, 315.0], [84.7, 316.0], [84.8, 317.0], [84.9, 317.0], [85.0, 318.0], [85.1, 319.0], [85.2, 320.0], [85.3, 321.0], [85.4, 322.0], [85.5, 323.0], [85.6, 324.0], [85.7, 325.0], [85.8, 325.0], [85.9, 326.0], [86.0, 327.0], [86.1, 328.0], [86.2, 329.0], [86.3, 330.0], [86.4, 331.0], [86.5, 333.0], [86.6, 333.0], [86.7, 334.0], [86.8, 335.0], [86.9, 335.0], [87.0, 336.0], [87.1, 337.0], [87.2, 338.0], [87.3, 339.0], [87.4, 340.0], [87.5, 341.0], [87.6, 341.0], [87.7, 342.0], [87.8, 342.0], [87.9, 343.0], [88.0, 344.0], [88.1, 345.0], [88.2, 345.0], [88.3, 346.0], [88.4, 347.0], [88.5, 348.0], [88.6, 349.0], [88.7, 351.0], [88.8, 352.0], [88.9, 352.0], [89.0, 354.0], [89.1, 354.0], [89.2, 356.0], [89.3, 357.0], [89.4, 358.0], [89.5, 358.0], [89.6, 359.0], [89.7, 360.0], [89.8, 361.0], [89.9, 362.0], [90.0, 363.0], [90.1, 364.0], [90.2, 366.0], [90.3, 367.0], [90.4, 368.0], [90.5, 370.0], [90.6, 372.0], [90.7, 374.0], [90.8, 376.0], [90.9, 378.0], [91.0, 380.0], [91.1, 382.0], [91.2, 383.0], [91.3, 383.0], [91.4, 384.0], [91.5, 385.0], [91.6, 386.0], [91.7, 388.0], [91.8, 390.0], [91.9, 392.0], [92.0, 393.0], [92.1, 394.0], [92.2, 395.0], [92.3, 396.0], [92.4, 397.0], [92.5, 399.0], [92.6, 399.0], [92.7, 400.0], [92.8, 402.0], [92.9, 403.0], [93.0, 405.0], [93.1, 407.0], [93.2, 409.0], [93.3, 411.0], [93.4, 412.0], [93.5, 414.0], [93.6, 416.0], [93.7, 418.0], [93.8, 420.0], [93.9, 426.0], [94.0, 429.0], [94.1, 430.0], [94.2, 432.0], [94.3, 434.0], [94.4, 435.0], [94.5, 437.0], [94.6, 440.0], [94.7, 442.0], [94.8, 444.0], [94.9, 446.0], [95.0, 448.0], [95.1, 451.0], [95.2, 453.0], [95.3, 455.0], [95.4, 457.0], [95.5, 459.0], [95.6, 463.0], [95.7, 466.0], [95.8, 470.0], [95.9, 472.0], [96.0, 474.0], [96.1, 475.0], [96.2, 477.0], [96.3, 478.0], [96.4, 480.0], [96.5, 482.0], [96.6, 486.0], [96.7, 489.0], [96.8, 492.0], [96.9, 494.0], [97.0, 498.0], [97.1, 507.0], [97.2, 511.0], [97.3, 513.0], [97.4, 516.0], [97.5, 521.0], [97.6, 525.0], [97.7, 535.0], [97.8, 540.0], [97.9, 547.0], [98.0, 552.0], [98.1, 559.0], [98.2, 566.0], [98.3, 576.0], [98.4, 582.0], [98.5, 593.0], [98.6, 597.0], [98.7, 607.0], [98.8, 618.0], [98.9, 636.0], [99.0, 656.0], [99.1, 663.0], [99.2, 679.0], [99.3, 699.0], [99.4, 709.0], [99.5, 717.0], [99.6, 742.0], [99.7, 904.0], [99.8, 2509.0], [99.9, 13749.0], [100.0, 23613.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 10338.0, "series": [{"data": [[600.0, 128.0], [700.0, 63.0], [800.0, 9.0], [900.0, 8.0], [1000.0, 2.0], [1100.0, 1.0], [1200.0, 4.0], [1300.0, 1.0], [1400.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [2500.0, 2.0], [3400.0, 2.0], [4300.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [7300.0, 1.0], [8300.0, 1.0], [8500.0, 1.0], [9600.0, 2.0], [10400.0, 1.0], [11400.0, 2.0], [12400.0, 1.0], [12500.0, 1.0], [13700.0, 1.0], [14200.0, 1.0], [14700.0, 1.0], [15200.0, 1.0], [15700.0, 1.0], [16900.0, 1.0], [16500.0, 1.0], [17600.0, 1.0], [18300.0, 1.0], [19300.0, 1.0], [18900.0, 1.0], [20100.0, 1.0], [20700.0, 1.0], [21400.0, 1.0], [22300.0, 1.0], [22000.0, 1.0], [23300.0, 1.0], [22900.0, 1.0], [23600.0, 1.0], [100.0, 4830.0], [200.0, 10338.0], [300.0, 2155.0], [400.0, 821.0], [500.0, 300.0]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10962.0, "series": [{"data": [[0.0, 7487.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 234.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 10962.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.61654770848997, "minX": 1.79427114E12, "maxY": 49.8879920526512, "series": [{"data": [[1.7942712E12, 49.8879920526512], [1.79427114E12, 49.61654770848997]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7942712E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 224.0, "minX": 1.0, "maxY": 7784.8793103448315, "series": [{"data": [[8.0, 330.5], [40.0, 4686.5], [41.0, 7784.8793103448315], [10.0, 298.5], [42.0, 545.0254237288132], [43.0, 254.1904761904763], [44.0, 250.33333333333331], [45.0, 338.0769230769231], [46.0, 300.86486486486484], [47.0, 264.25], [48.0, 425.77777777777766], [49.0, 315.4653465346533], [3.0, 347.0], [50.0, 253.42590725806386], [13.0, 300.0], [14.0, 305.0], [15.0, 298.0], [16.0, 287.0], [1.0, 481.0], [21.0, 240.0], [22.0, 232.0], [24.0, 232.0], [6.0, 350.75], [25.0, 224.0]], "isOverall": false, "label": "GET Locales", "isController": false}, {"data": [[49.73343671461435, 281.2486498048224]], "isOverall": false, "label": "GET Locales-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 19729.85, "minX": 1.79427114E12, "maxY": 377628.63333333336, "series": [{"data": [[1.7942712E12, 288306.3], [1.79427114E12, 377628.63333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7942712E12, 19729.85], [1.79427114E12, 26087.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7942712E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 248.3873090773624, "minX": 1.79427114E12, "maxY": 306.10142749812286, "series": [{"data": [[1.7942712E12, 248.3873090773624], [1.79427114E12, 306.10142749812286]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7942712E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 247.0429653545257, "minX": 1.79427114E12, "maxY": 304.3403456048084, "series": [{"data": [[1.7942712E12, 247.0429653545257], [1.79427114E12, 304.3403456048084]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7942712E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.25977896436110737, "minX": 1.79427114E12, "maxY": 12.674305033809166, "series": [{"data": [[1.7942712E12, 0.25977896436110737], [1.79427114E12, 12.674305033809166]], "isOverall": false, "label": "GET Locales", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7942712E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.79427114E12, "maxY": 22988.0, "series": [{"data": [[1.7942712E12, 898.0], [1.79427114E12, 22988.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7942712E12, 347.0], [1.79427114E12, 394.7000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7942712E12, 684.3600000000006], [1.79427114E12, 612.1700000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7942712E12, 420.1999999999998], [1.79427114E12, 473.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7942712E12, 173.0], [1.79427114E12, 171.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7942712E12, 224.0], [1.79427114E12, 234.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7942712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 180.0, "minX": 14.0, "maxY": 6009.0, "series": [{"data": [[14.0, 345.0], [19.0, 6009.0], [102.0, 338.0], [101.0, 359.5], [106.0, 394.0], [107.0, 283.0], [135.0, 372.5], [138.0, 326.0], [137.0, 333.0], [141.0, 344.0], [139.0, 256.0], [136.0, 407.0], [142.0, 281.0], [149.0, 237.5], [151.0, 388.5], [147.0, 297.5], [145.0, 283.0], [148.0, 452.5], [150.0, 309.0], [154.0, 286.0], [158.0, 311.0], [166.0, 213.0], [167.0, 316.0], [161.0, 262.0], [165.0, 236.0], [160.0, 335.0], [162.0, 230.5], [163.0, 240.0], [168.0, 286.0], [174.0, 295.0], [169.0, 253.0], [170.0, 295.0], [182.0, 232.0], [178.0, 296.0], [176.0, 264.0], [190.0, 298.5], [188.0, 266.5], [186.0, 246.0], [199.0, 270.0], [195.0, 263.5], [193.0, 215.0], [203.0, 215.5], [204.0, 224.0], [206.0, 210.0], [202.0, 217.5], [200.0, 230.0], [214.0, 221.0], [215.0, 241.5], [208.0, 266.0], [213.0, 221.0], [222.0, 246.0], [216.0, 239.0], [220.0, 220.5], [219.0, 231.5], [221.0, 218.0], [223.0, 201.0], [226.0, 201.5], [231.0, 202.0], [228.0, 234.0], [230.0, 214.5], [224.0, 220.0], [225.0, 222.0], [233.0, 229.0], [234.0, 212.0], [237.0, 203.0], [240.0, 202.0], [242.0, 204.0], [247.0, 201.5], [243.0, 202.0], [251.0, 206.5], [263.0, 189.0], [259.0, 185.0], [264.0, 191.0], [258.0, 187.0], [267.0, 190.0], [272.0, 185.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 298.5], [19.0, 4375.0], [102.0, 379.0], [101.0, 675.0], [106.0, 399.0], [107.0, 627.0], [135.0, 352.0], [138.0, 296.0], [137.0, 293.5], [141.0, 342.5], [139.0, 250.0], [136.0, 361.5], [142.0, 286.0], [149.0, 232.0], [151.0, 326.0], [147.0, 288.0], [145.0, 277.0], [148.0, 417.5], [150.0, 300.0], [154.0, 264.0], [158.0, 300.0], [166.0, 211.0], [167.0, 294.0], [161.0, 244.0], [165.0, 233.5], [160.0, 295.0], [162.0, 223.0], [163.0, 243.0], [168.0, 275.0], [174.0, 297.0], [169.0, 254.5], [170.0, 262.0], [182.0, 225.0], [178.0, 295.0], [176.0, 264.0], [190.0, 285.0], [188.0, 257.0], [186.0, 226.0], [199.0, 259.0], [195.0, 272.0], [193.0, 217.0], [203.0, 209.0], [204.0, 214.5], [206.0, 205.0], [202.0, 214.0], [200.0, 223.0], [214.0, 215.0], [215.0, 239.5], [208.0, 209.0], [213.0, 218.0], [222.0, 243.0], [216.0, 236.0], [220.0, 216.0], [219.0, 225.5], [221.0, 208.0], [223.0, 199.5], [226.0, 190.0], [231.0, 189.0], [228.0, 230.0], [230.0, 207.0], [224.0, 218.0], [225.0, 214.0], [233.0, 221.0], [234.0, 205.0], [237.0, 198.0], [240.0, 197.0], [242.0, 200.0], [247.0, 196.0], [243.0, 195.0], [251.0, 200.5], [263.0, 182.0], [259.0, 181.0], [264.0, 188.0], [258.0, 183.0], [267.0, 188.0], [272.0, 180.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 272.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 179.0, "minX": 14.0, "maxY": 5975.5, "series": [{"data": [[14.0, 344.5], [19.0, 5975.5], [102.0, 338.0], [101.0, 359.5], [106.0, 392.5], [107.0, 283.0], [135.0, 367.5], [138.0, 324.0], [137.0, 332.5], [141.0, 343.0], [139.0, 256.0], [136.0, 400.5], [142.0, 277.0], [149.0, 234.5], [151.0, 359.0], [147.0, 296.5], [145.0, 281.0], [148.0, 452.5], [150.0, 309.0], [154.0, 286.0], [158.0, 306.0], [166.0, 208.0], [167.0, 315.0], [161.0, 257.0], [165.0, 235.0], [160.0, 335.0], [162.0, 229.5], [163.0, 240.0], [168.0, 284.0], [174.0, 294.5], [169.0, 252.0], [170.0, 295.0], [182.0, 228.0], [178.0, 288.0], [176.0, 264.0], [190.0, 297.5], [188.0, 265.0], [186.0, 241.0], [199.0, 270.0], [195.0, 263.5], [193.0, 215.0], [203.0, 213.5], [204.0, 223.0], [206.0, 208.0], [202.0, 217.0], [200.0, 226.0], [214.0, 218.0], [215.0, 232.5], [208.0, 266.0], [213.0, 220.0], [222.0, 244.0], [216.0, 237.0], [220.0, 220.5], [219.0, 230.0], [221.0, 218.0], [223.0, 199.0], [226.0, 201.0], [231.0, 202.0], [228.0, 234.0], [230.0, 212.5], [224.0, 220.0], [225.0, 220.0], [233.0, 227.0], [234.0, 212.0], [237.0, 201.0], [240.0, 201.0], [242.0, 202.5], [247.0, 201.0], [243.0, 201.0], [251.0, 206.0], [263.0, 188.0], [259.0, 184.0], [264.0, 190.0], [258.0, 185.0], [267.0, 190.0], [272.0, 185.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 296.5], [19.0, 4375.0], [102.0, 379.0], [101.0, 675.0], [106.0, 399.0], [107.0, 627.0], [135.0, 352.0], [138.0, 296.0], [137.0, 292.0], [141.0, 342.5], [139.0, 250.0], [136.0, 361.5], [142.0, 285.0], [149.0, 232.0], [151.0, 317.0], [147.0, 287.0], [145.0, 276.5], [148.0, 417.0], [150.0, 300.0], [154.0, 254.0], [158.0, 300.0], [166.0, 211.0], [167.0, 287.0], [161.0, 244.0], [165.0, 233.0], [160.0, 295.0], [162.0, 223.0], [163.0, 242.0], [168.0, 275.0], [174.0, 295.5], [169.0, 254.5], [170.0, 262.0], [182.0, 225.0], [178.0, 295.0], [176.0, 264.0], [190.0, 281.5], [188.0, 257.0], [186.0, 226.0], [199.0, 254.0], [195.0, 272.0], [193.0, 216.0], [203.0, 209.0], [204.0, 211.0], [206.0, 204.0], [202.0, 212.0], [200.0, 221.0], [214.0, 213.5], [215.0, 238.0], [208.0, 208.0], [213.0, 216.0], [222.0, 243.0], [216.0, 235.0], [220.0, 214.0], [219.0, 225.0], [221.0, 206.0], [223.0, 199.0], [226.0, 190.0], [231.0, 188.0], [228.0, 228.0], [230.0, 206.0], [224.0, 214.0], [225.0, 212.0], [233.0, 219.5], [234.0, 204.5], [237.0, 197.0], [240.0, 197.0], [242.0, 197.0], [247.0, 195.0], [243.0, 193.0], [251.0, 199.0], [263.0, 181.0], [259.0, 180.0], [264.0, 187.0], [258.0, 183.0], [267.0, 188.0], [272.0, 179.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 272.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.79427108E12, "maxY": 177.73333333333332, "series": [{"data": [[1.79427108E12, 0.5666666666666667], [1.7942712E12, 133.38333333333333], [1.79427114E12, 177.73333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7942712E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 55.95, "minX": 1.79427114E12, "maxY": 104.43333333333334, "series": [{"data": [[1.7942712E12, 55.95], [1.79427114E12, 73.03333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7942712E12, 78.26666666666667], [1.79427114E12, 104.43333333333334]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7942712E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 55.95, "minX": 1.79427114E12, "maxY": 104.43333333333334, "series": [{"data": [[1.7942712E12, 55.95], [1.79427114E12, 73.03333333333333]], "isOverall": false, "label": "GET Locales-success", "isController": false}, {"data": [[1.7942712E12, 78.26666666666667], [1.79427114E12, 104.43333333333334]], "isOverall": false, "label": "GET Locales-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7942712E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 55.95, "minX": 1.79427114E12, "maxY": 104.43333333333334, "series": [{"data": [[1.7942712E12, 55.95], [1.79427114E12, 73.03333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7942712E12, 78.26666666666667], [1.79427114E12, 104.43333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7942712E12, "title": "Total Transactions Per Second"}},
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

