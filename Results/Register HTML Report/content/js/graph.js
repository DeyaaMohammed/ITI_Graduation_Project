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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 100.0, "series": [{"data": [[200.0, 20.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0", "isController": false}, {"data": [[700.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1", "isController": false}, {"data": [[600.0, 35.0], [700.0, 39.0], [400.0, 1.0], [800.0, 11.0], [900.0, 1.0], [500.0, 13.0]], "isOverall": false, "label": "POST Add to Cart", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117", "isController": false}, {"data": [[300.0, 5.0], [600.0, 3.0], [200.0, 7.0], [400.0, 2.0], [500.0, 3.0]], "isOverall": false, "label": "GET Register Page 2", "isController": false}, {"data": [[200.0, 100.0]], "isOverall": false, "label": "Post Search Site Data", "isController": false}, {"data": [[300.0, 2.0], [600.0, 3.0], [700.0, 1.0], [400.0, 5.0], [500.0, 9.0]], "isOverall": false, "label": "GET Billing Details", "isController": false}, {"data": [[600.0, 7.0], [700.0, 4.0], [800.0, 1.0], [400.0, 2.0], [500.0, 6.0]], "isOverall": false, "label": "POST Remove Iphone", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211", "isController": false}, {"data": [[600.0, 48.0], [700.0, 9.0], [400.0, 10.0], [500.0, 33.0]], "isOverall": false, "label": "GET Add to Cart", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203", "isController": false}, {"data": [[600.0, 5.0], [700.0, 1.0], [400.0, 2.0], [800.0, 1.0], [500.0, 11.0]], "isOverall": false, "label": "GET Payment Confirmation", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com", "isController": false}, {"data": [[2000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com", "isController": false}, {"data": [[1500.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com", "isController": false}, {"data": [[2600.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0", "isController": false}, {"data": [[1900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com", "isController": false}, {"data": [[2300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com", "isController": false}, {"data": [[2100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1", "isController": false}, {"data": [[600.0, 5.0], [700.0, 3.0], [400.0, 6.0], [500.0, 6.0]], "isOverall": false, "label": "GET Billing Info", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1", "isController": false}, {"data": [[600.0, 7.0], [700.0, 9.0], [800.0, 1.0], [900.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "GET Confirmation Sucess", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 9", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 8", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 7", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 6", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 5", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 4", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 3", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 2", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 1", "isController": false}, {"data": [[600.0, 5.0], [300.0, 2.0], [700.0, 2.0], [800.0, 1.0], [400.0, 2.0], [500.0, 8.0]], "isOverall": false, "label": "GET Open Cart", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0", "isController": false}, {"data": [[600.0, 36.0], [700.0, 33.0], [400.0, 5.0], [800.0, 9.0], [900.0, 2.0], [500.0, 15.0]], "isOverall": false, "label": "GET Cart Info", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1", "isController": false}, {"data": [[1100.0, 1.0], [1200.0, 1.0], [1300.0, 2.0], [1400.0, 7.0], [1500.0, 1.0], [900.0, 1.0], [1000.0, 7.0]], "isOverall": false, "label": "GET Logout Page-1", "isController": false}, {"data": [[1100.0, 1.0], [1200.0, 2.0], [1300.0, 3.0], [1400.0, 7.0], [1500.0, 4.0], [1600.0, 3.0]], "isOverall": false, "label": "GET Cart", "isController": false}, {"data": [[300.0, 3.0], [600.0, 1.0], [400.0, 9.0], [200.0, 5.0], [500.0, 2.0]], "isOverall": false, "label": "GET Logout Page-0", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0", "isController": false}, {"data": [[200.0, 100.0]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1", "isController": false}, {"data": [[1100.0, 9.0], [1200.0, 2.0], [1300.0, 1.0], [900.0, 2.0], [1000.0, 6.0]], "isOverall": false, "label": "GET Home Page", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106", "isController": false}, {"data": [[1100.0, 4.0], [1200.0, 2.0], [1400.0, 4.0], [1600.0, 1.0], [1700.0, 1.0], [900.0, 6.0], [1000.0, 2.0]], "isOverall": false, "label": "Open Website", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0", "isController": false}, {"data": [[1100.0, 4.0], [700.0, 2.0], [800.0, 6.0], [900.0, 5.0], [1000.0, 3.0]], "isOverall": false, "label": "GET Cart After Removal", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1", "isController": false}, {"data": [[600.0, 3.0], [700.0, 1.0], [400.0, 10.0], [500.0, 6.0]], "isOverall": false, "label": "GET Billing Info 3", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com", "isController": false}, {"data": [[2000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com", "isController": false}, {"data": [[1700.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120", "isController": false}, {"data": [[2300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com", "isController": false}, {"data": [[2000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com", "isController": false}, {"data": [[600.0, 5.0], [300.0, 2.0], [700.0, 1.0], [400.0, 5.0], [500.0, 7.0]], "isOverall": false, "label": "GET Billing Info 2", "isController": false}, {"data": [[1100.0, 8.0], [1200.0, 1.0], [1300.0, 1.0], [700.0, 4.0], [800.0, 25.0], [900.0, 40.0], [1000.0, 21.0]], "isOverall": false, "label": "GET Product Selection", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1", "isController": false}, {"data": [[1100.0, 1.0], [800.0, 1.0], [1000.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 17", "isController": false}, {"data": [[700.0, 1.0], [800.0, 1.0], [900.0, 2.0], [1000.0, 1.0]], "isOverall": false, "label": "Get Search Thread no. 16", "isController": false}, {"data": [[1100.0, 1.0], [1200.0, 1.0], [800.0, 1.0], [1000.0, 2.0]], "isOverall": false, "label": "Get Search Thread no. 19", "isController": false}, {"data": [[1100.0, 2.0], [1200.0, 1.0], [900.0, 1.0], [1000.0, 1.0]], "isOverall": false, "label": "Get Search Thread no. 18", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0", "isController": false}, {"data": [[200.0, 100.0]], "isOverall": false, "label": "POST Selection Site Data", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1", "isController": false}, {"data": [[300.0, 5.0], [600.0, 1.0], [700.0, 2.0], [200.0, 3.0], [400.0, 2.0], [800.0, 3.0], [900.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "Open Register Page", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206", "isController": false}, {"data": [[600.0, 2.0], [700.0, 4.0], [800.0, 5.0], [900.0, 7.0], [500.0, 1.0], [1000.0, 1.0]], "isOverall": false, "label": "GET Account Page", "isController": false}, {"data": [[900.0, 3.0], [1000.0, 2.0]], "isOverall": false, "label": "Get Search Thread no. 20", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0", "isController": false}, {"data": [[600.0, 6.0], [700.0, 2.0], [400.0, 5.0], [500.0, 7.0]], "isOverall": false, "label": "GET Checkout 2", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1", "isController": false}, {"data": [[1200.0, 1.0], [1300.0, 7.0], [1500.0, 1.0], [1600.0, 1.0], [1800.0, 5.0], [1900.0, 5.0]], "isOverall": false, "label": "GET Logout Page", "isController": false}, {"data": [[600.0, 1.0], [300.0, 6.0], [700.0, 3.0], [800.0, 2.0], [400.0, 4.0], [200.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "GET Home After Logout", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233", "isController": false}, {"data": [[600.0, 33.0], [700.0, 11.0], [400.0, 12.0], [800.0, 2.0], [500.0, 42.0]], "isOverall": false, "label": "GET Product Selection 2", "isController": false}, {"data": [[800.0, 1.0], [1000.0, 4.0]], "isOverall": false, "label": "Get Search Thread no. 13", "isController": false}, {"data": [[800.0, 1.0], [900.0, 4.0]], "isOverall": false, "label": "Get Search Thread no. 12", "isController": false}, {"data": [[800.0, 3.0], [900.0, 1.0], [1000.0, 1.0]], "isOverall": false, "label": "Get Search Thread no. 15", "isController": false}, {"data": [[900.0, 2.0], [1000.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 14", "isController": false}, {"data": [[300.0, 1.0], [700.0, 2.0], [400.0, 6.0], [500.0, 11.0]], "isOverall": false, "label": "POST Payment Method", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214", "isController": false}, {"data": [[800.0, 1.0], [900.0, 3.0], [1000.0, 1.0]], "isOverall": false, "label": "Get Search Thread no. 11", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213", "isController": false}, {"data": [[700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 2.0]], "isOverall": false, "label": "Get Search Thread no. 10", "isController": false}, {"data": [[600.0, 3.0], [300.0, 4.0], [700.0, 3.0], [800.0, 4.0], [400.0, 2.0], [200.0, 4.0]], "isOverall": false, "label": "GET Logout Page 2", "isController": false}, {"data": [[600.0, 5.0], [700.0, 1.0], [400.0, 5.0], [500.0, 9.0]], "isOverall": false, "label": "GET Confirm Order", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 19", "isController": false}, {"data": [[700.0, 4.0], [400.0, 3.0], [800.0, 6.0], [900.0, 7.0]], "isOverall": false, "label": "GET Sucess Page", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 16", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 15", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 18", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 17", "isController": false}, {"data": [[800.0, 1.0], [900.0, 3.0], [1000.0, 1.0]], "isOverall": false, "label": "Get Search Thread no. 2", "isController": false}, {"data": [[800.0, 2.0], [1000.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 1", "isController": false}, {"data": [[1100.0, 1.0], [600.0, 4.0], [700.0, 4.0], [800.0, 4.0], [900.0, 5.0], [1000.0, 2.0]], "isOverall": false, "label": "GET Chekout", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 20", "isController": false}, {"data": [[800.0, 1.0], [900.0, 1.0], [1000.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 8", "isController": false}, {"data": [[600.0, 3.0], [300.0, 3.0], [400.0, 5.0], [500.0, 9.0]], "isOverall": false, "label": "GET 1st Checkout", "isController": false}, {"data": [[1100.0, 1.0], [900.0, 2.0], [1000.0, 2.0]], "isOverall": false, "label": "Get Search Thread no. 7", "isController": false}, {"data": [[800.0, 2.0], [900.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 9", "isController": false}, {"data": [[1100.0, 1.0], [800.0, 1.0], [900.0, 2.0], [1000.0, 1.0]], "isOverall": false, "label": "Get Search Thread no. 4", "isController": false}, {"data": [[800.0, 2.0], [900.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 3", "isController": false}, {"data": [[700.0, 1.0], [900.0, 1.0], [1000.0, 3.0]], "isOverall": false, "label": "Get Search Thread no. 6", "isController": false}, {"data": [[1100.0, 1.0], [1000.0, 4.0]], "isOverall": false, "label": "Get Search Thread no. 5", "isController": false}, {"data": [[700.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com", "isController": false}, {"data": [[1500.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 12", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 11", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 14", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 13", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "POST Billing Info Thread no. 10", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com", "isController": false}, {"data": [[2300.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com", "isController": false}, {"data": [[2100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1", "isController": false}, {"data": [[600.0, 4.0], [300.0, 2.0], [700.0, 7.0], [800.0, 5.0], [400.0, 1.0], [900.0, 1.0]], "isOverall": false, "label": "GET Home After Confirm", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1010.0, "series": [{"data": [[0.0, 753.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1010.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 37.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.092511013215866, "minX": 1.69118694E12, "maxY": 20.0, "series": [{"data": [[1.69118694E12, 17.17934782608695], [1.69118696E12, 20.0], [1.69118698E12, 19.998535871156662], [1.691187E12, 14.092511013215866]], "isOverall": false, "label": "TC1: Register and 1st Purshase", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.691187E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 229.0, "minX": 1.0, "maxY": 2662.0, "series": [{"data": [[16.0, 231.0], [17.0, 234.5], [20.0, 233.54545454545453], [11.0, 234.0], [12.0, 231.0], [15.0, 230.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119", "isController": false}, {"data": [[17.550000000000008, 232.79999999999995]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119-Aggregated", "isController": false}, {"data": [[20.0, 1135.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0", "isController": false}, {"data": [[20.0, 1135.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0-Aggregated", "isController": false}, {"data": [[16.0, 453.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0", "isController": false}, {"data": [[16.0, 453.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0-Aggregated", "isController": false}, {"data": [[16.0, 756.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1", "isController": false}, {"data": [[16.0, 756.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1228.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1", "isController": false}, {"data": [[20.0, 1228.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1-Aggregated", "isController": false}, {"data": [[20.0, 696.0199999999999]], "isOverall": false, "label": "POST Add to Cart", "isController": false}, {"data": [[20.0, 696.0199999999999]], "isOverall": false, "label": "POST Add to Cart-Aggregated", "isController": false}, {"data": [[16.0, 229.66666666666666], [17.0, 236.0], [18.0, 229.5], [20.0, 230.08333333333331]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117", "isController": false}, {"data": [[18.749999999999996, 230.85]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117-Aggregated", "isController": false}, {"data": [[8.0, 246.0], [17.0, 359.0], [9.0, 266.0], [18.0, 314.0], [19.0, 399.0], [10.0, 253.0], [20.0, 522.7777777777777], [11.0, 265.0], [12.0, 284.0], [13.0, 285.0], [14.0, 305.0], [15.0, 299.0]], "isOverall": false, "label": "GET Register Page 2", "isController": false}, {"data": [[16.3, 399.0]], "isOverall": false, "label": "GET Register Page 2-Aggregated", "isController": false}, {"data": [[20.0, 231.09]], "isOverall": false, "label": "Post Search Site Data", "isController": false}, {"data": [[20.0, 231.09]], "isOverall": false, "label": "Post Search Site Data-Aggregated", "isController": false}, {"data": [[20.0, 534.5999999999999]], "isOverall": false, "label": "GET Billing Details", "isController": false}, {"data": [[20.0, 534.5999999999999]], "isOverall": false, "label": "GET Billing Details-Aggregated", "isController": false}, {"data": [[20.0, 622.1499999999999]], "isOverall": false, "label": "POST Remove Iphone", "isController": false}, {"data": [[20.0, 622.1499999999999]], "isOverall": false, "label": "POST Remove Iphone-Aggregated", "isController": false}, {"data": [[17.0, 230.0], [19.0, 231.0], [20.0, 232.05555555555551]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211", "isController": false}, {"data": [[19.8, 231.9]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211-Aggregated", "isController": false}, {"data": [[20.0, 605.0400000000001]], "isOverall": false, "label": "GET Add to Cart", "isController": false}, {"data": [[20.0, 605.0400000000001]], "isOverall": false, "label": "GET Add to Cart-Aggregated", "isController": false}, {"data": [[8.0, 229.0], [9.0, 230.0], [10.0, 230.0], [11.0, 230.0], [12.0, 230.0], [13.0, 230.0], [14.0, 231.0], [16.0, 231.0], [17.0, 230.0], [18.0, 231.0], [19.0, 232.0], [20.0, 232.125], [7.0, 230.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203", "isController": false}, {"data": [[15.700000000000001, 231.05]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203-Aggregated", "isController": false}, {"data": [[17.0, 542.0], [18.0, 598.5], [20.0, 589.8235294117648]], "isOverall": false, "label": "GET Payment Confirmation", "isController": false}, {"data": [[19.650000000000002, 588.3000000000001]], "isOverall": false, "label": "GET Payment Confirmation-Aggregated", "isController": false}, {"data": [[14.0, 647.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1", "isController": false}, {"data": [[14.0, 647.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1-Aggregated", "isController": false}, {"data": [[11.0, 816.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com", "isController": false}, {"data": [[11.0, 816.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-Aggregated", "isController": false}, {"data": [[14.0, 976.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com", "isController": false}, {"data": [[14.0, 976.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-Aggregated", "isController": false}, {"data": [[20.0, 2066.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com", "isController": false}, {"data": [[20.0, 2066.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-Aggregated", "isController": false}, {"data": [[17.0, 1328.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com", "isController": false}, {"data": [[17.0, 1328.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-Aggregated", "isController": false}, {"data": [[20.0, 2209.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com", "isController": false}, {"data": [[20.0, 2209.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-Aggregated", "isController": false}, {"data": [[20.0, 1508.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com", "isController": false}, {"data": [[20.0, 1508.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-Aggregated", "isController": false}, {"data": [[20.0, 2662.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com", "isController": false}, {"data": [[20.0, 2662.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-Aggregated", "isController": false}, {"data": [[20.0, 230.4]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145", "isController": false}, {"data": [[20.0, 230.4]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145-Aggregated", "isController": false}, {"data": [[20.0, 1085.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1", "isController": false}, {"data": [[20.0, 1085.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0", "isController": false}, {"data": [[20.0, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0-Aggregated", "isController": false}, {"data": [[19.0, 479.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0", "isController": false}, {"data": [[19.0, 479.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0-Aggregated", "isController": false}, {"data": [[20.0, 1951.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com", "isController": false}, {"data": [[20.0, 1951.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-Aggregated", "isController": false}, {"data": [[20.0, 2354.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com", "isController": false}, {"data": [[20.0, 2354.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-Aggregated", "isController": false}, {"data": [[20.0, 2149.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com", "isController": false}, {"data": [[20.0, 2149.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-Aggregated", "isController": false}, {"data": [[19.0, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1", "isController": false}, {"data": [[19.0, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1-Aggregated", "isController": false}, {"data": [[20.0, 575.8499999999999]], "isOverall": false, "label": "GET Billing Info", "isController": false}, {"data": [[20.0, 575.8499999999999]], "isOverall": false, "label": "GET Billing Info-Aggregated", "isController": false}, {"data": [[20.0, 1304.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1", "isController": false}, {"data": [[20.0, 1304.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1-Aggregated", "isController": false}, {"data": [[16.0, 749.5], [17.0, 803.3333333333334], [18.0, 681.0], [20.0, 681.1538461538461]], "isOverall": false, "label": "GET Confirmation Sucess", "isController": false}, {"data": [[18.949999999999996, 706.3000000000001]], "isOverall": false, "label": "GET Confirmation Sucess-Aggregated", "isController": false}, {"data": [[20.0, 866.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0", "isController": false}, {"data": [[20.0, 866.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0-Aggregated", "isController": false}, {"data": [[14.0, 328.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0", "isController": false}, {"data": [[14.0, 328.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0-Aggregated", "isController": false}, {"data": [[11.0, 514.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1", "isController": false}, {"data": [[11.0, 514.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1282.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1", "isController": false}, {"data": [[20.0, 1282.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1-Aggregated", "isController": false}, {"data": [[20.0, 675.0]], "isOverall": false, "label": "POST Billing Info Thread no. 9", "isController": false}, {"data": [[20.0, 675.0]], "isOverall": false, "label": "POST Billing Info Thread no. 9-Aggregated", "isController": false}, {"data": [[20.0, 603.0]], "isOverall": false, "label": "POST Billing Info Thread no. 8", "isController": false}, {"data": [[20.0, 603.0]], "isOverall": false, "label": "POST Billing Info Thread no. 8-Aggregated", "isController": false}, {"data": [[20.0, 538.0]], "isOverall": false, "label": "POST Billing Info Thread no. 7", "isController": false}, {"data": [[20.0, 538.0]], "isOverall": false, "label": "POST Billing Info Thread no. 7-Aggregated", "isController": false}, {"data": [[20.0, 431.0]], "isOverall": false, "label": "POST Billing Info Thread no. 6", "isController": false}, {"data": [[20.0, 431.0]], "isOverall": false, "label": "POST Billing Info Thread no. 6-Aggregated", "isController": false}, {"data": [[20.0, 591.0]], "isOverall": false, "label": "POST Billing Info Thread no. 5", "isController": false}, {"data": [[20.0, 591.0]], "isOverall": false, "label": "POST Billing Info Thread no. 5-Aggregated", "isController": false}, {"data": [[20.0, 816.0]], "isOverall": false, "label": "POST Billing Info Thread no. 4", "isController": false}, {"data": [[20.0, 816.0]], "isOverall": false, "label": "POST Billing Info Thread no. 4-Aggregated", "isController": false}, {"data": [[20.0, 693.0]], "isOverall": false, "label": "POST Billing Info Thread no. 3", "isController": false}, {"data": [[20.0, 693.0]], "isOverall": false, "label": "POST Billing Info Thread no. 3-Aggregated", "isController": false}, {"data": [[20.0, 671.0]], "isOverall": false, "label": "POST Billing Info Thread no. 2", "isController": false}, {"data": [[20.0, 671.0]], "isOverall": false, "label": "POST Billing Info Thread no. 2-Aggregated", "isController": false}, {"data": [[20.0, 655.0]], "isOverall": false, "label": "POST Billing Info Thread no. 1", "isController": false}, {"data": [[20.0, 655.0]], "isOverall": false, "label": "POST Billing Info Thread no. 1-Aggregated", "isController": false}, {"data": [[20.0, 585.65]], "isOverall": false, "label": "GET Open Cart", "isController": false}, {"data": [[20.0, 585.65]], "isOverall": false, "label": "GET Open Cart-Aggregated", "isController": false}, {"data": [[20.0, 1379.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0", "isController": false}, {"data": [[20.0, 1379.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0-Aggregated", "isController": false}, {"data": [[20.0, 682.7699999999999]], "isOverall": false, "label": "GET Cart Info", "isController": false}, {"data": [[20.0, 682.7699999999999]], "isOverall": false, "label": "GET Cart Info-Aggregated", "isController": false}, {"data": [[11.0, 301.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0", "isController": false}, {"data": [[11.0, 301.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0-Aggregated", "isController": false}, {"data": [[20.0, 894.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1", "isController": false}, {"data": [[20.0, 894.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1-Aggregated", "isController": false}, {"data": [[16.0, 1508.0], [8.0, 1055.0], [17.0, 1441.75], [18.0, 1423.0], [9.0, 1042.5], [19.0, 1316.0], [20.0, 1396.0], [12.0, 970.0], [13.0, 1069.0], [7.0, 1063.0]], "isOverall": false, "label": "GET Logout Page-1", "isController": false}, {"data": [[14.200000000000003, 1249.4000000000003]], "isOverall": false, "label": "GET Logout Page-1-Aggregated", "isController": false}, {"data": [[20.0, 1446.8999999999999]], "isOverall": false, "label": "GET Cart", "isController": false}, {"data": [[20.0, 1446.8999999999999]], "isOverall": false, "label": "GET Cart-Aggregated", "isController": false}, {"data": [[16.0, 447.0], [8.0, 247.0], [17.0, 460.0], [18.0, 450.0], [9.0, 295.75], [19.0, 644.0], [20.0, 421.75], [12.0, 402.0], [13.0, 519.0], [7.0, 253.0]], "isOverall": false, "label": "GET Logout Page-0", "isController": false}, {"data": [[14.200000000000003, 396.25000000000006]], "isOverall": false, "label": "GET Logout Page-0-Aggregated", "isController": false}, {"data": [[20.0, 1170.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1", "isController": false}, {"data": [[20.0, 1170.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1183.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0", "isController": false}, {"data": [[20.0, 1183.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0-Aggregated", "isController": false}, {"data": [[12.0, 327.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0", "isController": false}, {"data": [[12.0, 327.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0-Aggregated", "isController": false}, {"data": [[20.0, 232.9799999999999]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128", "isController": false}, {"data": [[20.0, 232.9799999999999]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128-Aggregated", "isController": false}, {"data": [[12.0, 595.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1", "isController": false}, {"data": [[12.0, 595.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1118.1000000000001]], "isOverall": false, "label": "GET Home Page", "isController": false}, {"data": [[20.0, 1118.1000000000001]], "isOverall": false, "label": "GET Home Page-Aggregated", "isController": false}, {"data": [[20.0, 1048.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1", "isController": false}, {"data": [[20.0, 1048.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1-Aggregated", "isController": false}, {"data": [[20.0, 233.09999999999997]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106", "isController": false}, {"data": [[20.0, 233.09999999999997]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106-Aggregated", "isController": false}, {"data": [[16.0, 1215.0], [17.0, 1195.0], [9.0, 996.0], [19.0, 1273.0], [5.0, 1026.0], [10.0, 990.0], [20.0, 1535.1666666666665], [11.0, 995.0], [13.0, 1147.0], [7.0, 990.0], [14.0, 1110.0], [15.0, 1122.0]], "isOverall": false, "label": "Open Website", "isController": false}, {"data": [[13.85, 1214.1000000000001]], "isOverall": false, "label": "Open Website-Aggregated", "isController": false}, {"data": [[20.0, 979.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0", "isController": false}, {"data": [[20.0, 979.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0-Aggregated", "isController": false}, {"data": [[20.0, 955.4000000000001]], "isOverall": false, "label": "GET Cart After Removal", "isController": false}, {"data": [[20.0, 955.4000000000001]], "isOverall": false, "label": "GET Cart After Removal-Aggregated", "isController": false}, {"data": [[20.0, 613.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0", "isController": false}, {"data": [[20.0, 613.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0-Aggregated", "isController": false}, {"data": [[20.0, 947.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0", "isController": false}, {"data": [[20.0, 947.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0-Aggregated", "isController": false}, {"data": [[20.0, 666.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0", "isController": false}, {"data": [[20.0, 666.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0-Aggregated", "isController": false}, {"data": [[20.0, 1057.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1", "isController": false}, {"data": [[20.0, 1057.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1-Aggregated", "isController": false}, {"data": [[20.0, 520.45]], "isOverall": false, "label": "GET Billing Info 3", "isController": false}, {"data": [[20.0, 520.45]], "isOverall": false, "label": "GET Billing Info 3-Aggregated", "isController": false}, {"data": [[20.0, 231.3]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142", "isController": false}, {"data": [[20.0, 231.3]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142-Aggregated", "isController": false}, {"data": [[20.0, 1078.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1", "isController": false}, {"data": [[20.0, 1078.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1-Aggregated", "isController": false}, {"data": [[16.0, 1210.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com", "isController": false}, {"data": [[16.0, 1210.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-Aggregated", "isController": false}, {"data": [[20.0, 2000.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com", "isController": false}, {"data": [[20.0, 2000.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-Aggregated", "isController": false}, {"data": [[20.0, 1724.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com", "isController": false}, {"data": [[20.0, 1724.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-Aggregated", "isController": false}, {"data": [[16.0, 237.0], [17.0, 232.0], [20.0, 232.1818181818182], [12.0, 231.0], [14.0, 231.0], [15.0, 235.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120", "isController": false}, {"data": [[17.850000000000005, 232.85000000000002]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120-Aggregated", "isController": false}, {"data": [[20.0, 2364.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com", "isController": false}, {"data": [[20.0, 2364.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-Aggregated", "isController": false}, {"data": [[20.0, 2026.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com", "isController": false}, {"data": [[20.0, 2026.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-Aggregated", "isController": false}, {"data": [[20.0, 529.3499999999999]], "isOverall": false, "label": "GET Billing Info 2", "isController": false}, {"data": [[20.0, 529.3499999999999]], "isOverall": false, "label": "GET Billing Info 2-Aggregated", "isController": false}, {"data": [[20.0, 960.7599999999998]], "isOverall": false, "label": "GET Product Selection", "isController": false}, {"data": [[20.0, 960.7599999999998]], "isOverall": false, "label": "GET Product Selection-Aggregated", "isController": false}, {"data": [[20.0, 1141.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1", "isController": false}, {"data": [[20.0, 1141.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1005.4]], "isOverall": false, "label": "Get Search Thread no. 17", "isController": false}, {"data": [[20.0, 1005.4]], "isOverall": false, "label": "Get Search Thread no. 17-Aggregated", "isController": false}, {"data": [[20.0, 927.8]], "isOverall": false, "label": "Get Search Thread no. 16", "isController": false}, {"data": [[20.0, 927.8]], "isOverall": false, "label": "Get Search Thread no. 16-Aggregated", "isController": false}, {"data": [[20.0, 1084.8]], "isOverall": false, "label": "Get Search Thread no. 19", "isController": false}, {"data": [[20.0, 1084.8]], "isOverall": false, "label": "Get Search Thread no. 19-Aggregated", "isController": false}, {"data": [[20.0, 1114.6]], "isOverall": false, "label": "Get Search Thread no. 18", "isController": false}, {"data": [[20.0, 1114.6]], "isOverall": false, "label": "Get Search Thread no. 18-Aggregated", "isController": false}, {"data": [[20.0, 924.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0", "isController": false}, {"data": [[20.0, 924.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0-Aggregated", "isController": false}, {"data": [[20.0, 233.06999999999996]], "isOverall": false, "label": "POST Selection Site Data", "isController": false}, {"data": [[20.0, 233.06999999999996]], "isOverall": false, "label": "POST Selection Site Data-Aggregated", "isController": false}, {"data": [[20.0, 1169.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1", "isController": false}, {"data": [[20.0, 1169.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1-Aggregated", "isController": false}, {"data": [[8.0, 289.0], [9.0, 331.0], [10.0, 322.0], [11.0, 295.0], [12.0, 300.0], [13.0, 441.0], [15.0, 370.0], [16.0, 516.0], [17.0, 471.0], [18.0, 529.0], [20.0, 776.125], [6.0, 285.0], [7.0, 302.0]], "isOverall": false, "label": "Open Register Page", "isController": false}, {"data": [[15.1, 533.0]], "isOverall": false, "label": "Open Register Page-Aggregated", "isController": false}, {"data": [[16.0, 246.0], [20.0, 230.11764705882354], [14.0, 230.0], [15.0, 230.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206", "isController": false}, {"data": [[19.250000000000007, 230.89999999999998]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206-Aggregated", "isController": false}, {"data": [[16.0, 503.0], [18.0, 631.0], [19.0, 687.0], [20.0, 875.8235294117648]], "isOverall": false, "label": "GET Account Page", "isController": false}, {"data": [[19.650000000000002, 835.5]], "isOverall": false, "label": "GET Account Page-Aggregated", "isController": false}, {"data": [[20.0, 1017.2]], "isOverall": false, "label": "Get Search Thread no. 20", "isController": false}, {"data": [[20.0, 1017.2]], "isOverall": false, "label": "Get Search Thread no. 20-Aggregated", "isController": false}, {"data": [[20.0, 1040.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0", "isController": false}, {"data": [[20.0, 1040.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0-Aggregated", "isController": false}, {"data": [[20.0, 580.7500000000001]], "isOverall": false, "label": "GET Checkout 2", "isController": false}, {"data": [[20.0, 580.7500000000001]], "isOverall": false, "label": "GET Checkout 2-Aggregated", "isController": false}, {"data": [[20.0, 960.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0", "isController": false}, {"data": [[20.0, 960.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0-Aggregated", "isController": false}, {"data": [[8.0, 231.0], [2.0, 229.0], [9.0, 231.0], [10.0, 231.0], [11.0, 229.0], [12.0, 229.0], [3.0, 232.0], [13.0, 230.0], [14.0, 230.0], [15.0, 231.0], [16.0, 235.0], [4.0, 230.0], [1.0, 231.0], [17.0, 230.0], [18.0, 234.0], [19.0, 229.0], [20.0, 229.0], [5.0, 231.0], [6.0, 229.0], [7.0, 231.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234", "isController": false}, {"data": [[10.5, 230.60000000000002]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234-Aggregated", "isController": false}, {"data": [[20.0, 1038.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1", "isController": false}, {"data": [[20.0, 1038.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1-Aggregated", "isController": false}, {"data": [[16.0, 1955.0], [8.0, 1303.0], [17.0, 1902.0], [18.0, 1874.0], [9.0, 1339.0], [19.0, 1961.0], [20.0, 1818.5], [12.0, 1373.0], [13.0, 1589.0], [7.0, 1317.0]], "isOverall": false, "label": "GET Logout Page", "isController": false}, {"data": [[14.200000000000003, 1646.35]], "isOverall": false, "label": "GET Logout Page-Aggregated", "isController": false}, {"data": [[16.0, 698.6666666666666], [4.0, 298.5], [17.0, 851.0], [9.0, 360.0], [19.0, 797.0], [20.0, 751.5], [5.0, 294.0], [12.0, 325.0], [14.0, 402.0], [7.0, 384.0], [15.0, 423.0]], "isOverall": false, "label": "GET Home After Logout", "isController": false}, {"data": [[11.95, 498.34999999999997]], "isOverall": false, "label": "GET Home After Logout-Aggregated", "isController": false}, {"data": [[8.0, 234.0], [2.0, 231.0], [9.0, 231.0], [11.0, 232.0], [12.0, 229.0], [3.0, 230.0], [13.0, 234.0], [15.0, 232.66666666666666], [16.0, 230.0], [4.0, 230.0], [17.0, 232.0], [18.0, 231.0], [20.0, 231.5], [5.0, 231.0], [7.0, 231.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233", "isController": false}, {"data": [[11.100000000000001, 231.45000000000002]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233-Aggregated", "isController": false}, {"data": [[20.0, 604.5599999999998]], "isOverall": false, "label": "GET Product Selection 2", "isController": false}, {"data": [[20.0, 604.5599999999998]], "isOverall": false, "label": "GET Product Selection 2-Aggregated", "isController": false}, {"data": [[20.0, 1015.0]], "isOverall": false, "label": "Get Search Thread no. 13", "isController": false}, {"data": [[20.0, 1015.0]], "isOverall": false, "label": "Get Search Thread no. 13-Aggregated", "isController": false}, {"data": [[20.0, 930.2]], "isOverall": false, "label": "Get Search Thread no. 12", "isController": false}, {"data": [[20.0, 930.2]], "isOverall": false, "label": "Get Search Thread no. 12-Aggregated", "isController": false}, {"data": [[20.0, 900.4]], "isOverall": false, "label": "Get Search Thread no. 15", "isController": false}, {"data": [[20.0, 900.4]], "isOverall": false, "label": "Get Search Thread no. 15-Aggregated", "isController": false}, {"data": [[20.0, 999.8]], "isOverall": false, "label": "Get Search Thread no. 14", "isController": false}, {"data": [[20.0, 999.8]], "isOverall": false, "label": "Get Search Thread no. 14-Aggregated", "isController": false}, {"data": [[19.0, 531.0], [20.0, 518.4210526315788]], "isOverall": false, "label": "POST Payment Method", "isController": false}, {"data": [[19.95, 519.05]], "isOverall": false, "label": "POST Payment Method-Aggregated", "isController": false}, {"data": [[20.0, 232.24999999999997]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214", "isController": false}, {"data": [[20.0, 232.24999999999997]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214-Aggregated", "isController": false}, {"data": [[20.0, 965.0]], "isOverall": false, "label": "Get Search Thread no. 11", "isController": false}, {"data": [[20.0, 965.0]], "isOverall": false, "label": "Get Search Thread no. 11-Aggregated", "isController": false}, {"data": [[20.0, 231.4]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213", "isController": false}, {"data": [[20.0, 231.4]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213-Aggregated", "isController": false}, {"data": [[20.0, 930.8]], "isOverall": false, "label": "Get Search Thread no. 10", "isController": false}, {"data": [[20.0, 930.8]], "isOverall": false, "label": "Get Search Thread no. 10-Aggregated", "isController": false}, {"data": [[16.0, 667.3333333333334], [8.0, 363.0], [17.0, 780.25], [9.0, 361.5], [19.0, 685.0], [20.0, 773.0], [10.0, 299.0], [11.0, 295.0], [7.0, 301.0]], "isOverall": false, "label": "GET Logout Page 2", "isController": false}, {"data": [[13.549999999999997, 553.6500000000001]], "isOverall": false, "label": "GET Logout Page 2-Aggregated", "isController": false}, {"data": [[17.0, 604.6666666666666], [18.0, 495.0], [19.0, 582.0], [20.0, 558.8666666666668]], "isOverall": false, "label": "GET Confirm Order", "isController": false}, {"data": [[19.400000000000002, 563.7]], "isOverall": false, "label": "GET Confirm Order-Aggregated", "isController": false}, {"data": [[20.0, 543.0]], "isOverall": false, "label": "POST Billing Info Thread no. 19", "isController": false}, {"data": [[20.0, 543.0]], "isOverall": false, "label": "POST Billing Info Thread no. 19-Aggregated", "isController": false}, {"data": [[19.0, 782.0], [20.0, 870.875], [13.0, 429.0], [14.0, 447.0], [15.0, 476.0]], "isOverall": false, "label": "GET Sucess Page", "isController": false}, {"data": [[19.050000000000004, 803.3999999999999]], "isOverall": false, "label": "GET Sucess Page-Aggregated", "isController": false}, {"data": [[20.0, 406.0]], "isOverall": false, "label": "POST Billing Info Thread no. 16", "isController": false}, {"data": [[20.0, 406.0]], "isOverall": false, "label": "POST Billing Info Thread no. 16-Aggregated", "isController": false}, {"data": [[20.0, 496.0]], "isOverall": false, "label": "POST Billing Info Thread no. 15", "isController": false}, {"data": [[20.0, 496.0]], "isOverall": false, "label": "POST Billing Info Thread no. 15-Aggregated", "isController": false}, {"data": [[20.0, 567.0]], "isOverall": false, "label": "POST Billing Info Thread no. 18", "isController": false}, {"data": [[20.0, 567.0]], "isOverall": false, "label": "POST Billing Info Thread no. 18-Aggregated", "isController": false}, {"data": [[20.0, 531.0]], "isOverall": false, "label": "POST Billing Info Thread no. 17", "isController": false}, {"data": [[20.0, 531.0]], "isOverall": false, "label": "POST Billing Info Thread no. 17-Aggregated", "isController": false}, {"data": [[20.0, 959.8]], "isOverall": false, "label": "Get Search Thread no. 2", "isController": false}, {"data": [[20.0, 959.8]], "isOverall": false, "label": "Get Search Thread no. 2-Aggregated", "isController": false}, {"data": [[20.0, 962.0]], "isOverall": false, "label": "Get Search Thread no. 1", "isController": false}, {"data": [[20.0, 962.0]], "isOverall": false, "label": "Get Search Thread no. 1-Aggregated", "isController": false}, {"data": [[20.0, 851.65]], "isOverall": false, "label": "GET Chekout", "isController": false}, {"data": [[20.0, 851.65]], "isOverall": false, "label": "GET Chekout-Aggregated", "isController": false}, {"data": [[20.0, 450.0]], "isOverall": false, "label": "POST Billing Info Thread no. 20", "isController": false}, {"data": [[20.0, 450.0]], "isOverall": false, "label": "POST Billing Info Thread no. 20-Aggregated", "isController": false}, {"data": [[20.0, 980.8]], "isOverall": false, "label": "Get Search Thread no. 8", "isController": false}, {"data": [[20.0, 980.8]], "isOverall": false, "label": "Get Search Thread no. 8-Aggregated", "isController": false}, {"data": [[20.0, 510.3]], "isOverall": false, "label": "GET 1st Checkout", "isController": false}, {"data": [[20.0, 510.3]], "isOverall": false, "label": "GET 1st Checkout-Aggregated", "isController": false}, {"data": [[20.0, 1023.4]], "isOverall": false, "label": "Get Search Thread no. 7", "isController": false}, {"data": [[20.0, 1023.4]], "isOverall": false, "label": "Get Search Thread no. 7-Aggregated", "isController": false}, {"data": [[20.0, 913.0]], "isOverall": false, "label": "Get Search Thread no. 9", "isController": false}, {"data": [[20.0, 913.0]], "isOverall": false, "label": "Get Search Thread no. 9-Aggregated", "isController": false}, {"data": [[20.0, 986.8]], "isOverall": false, "label": "Get Search Thread no. 4", "isController": false}, {"data": [[20.0, 986.8]], "isOverall": false, "label": "Get Search Thread no. 4-Aggregated", "isController": false}, {"data": [[20.0, 920.6]], "isOverall": false, "label": "Get Search Thread no. 3", "isController": false}, {"data": [[20.0, 920.6]], "isOverall": false, "label": "Get Search Thread no. 3-Aggregated", "isController": false}, {"data": [[20.0, 979.8]], "isOverall": false, "label": "Get Search Thread no. 6", "isController": false}, {"data": [[20.0, 979.8]], "isOverall": false, "label": "Get Search Thread no. 6-Aggregated", "isController": false}, {"data": [[20.0, 1052.4]], "isOverall": false, "label": "Get Search Thread no. 5", "isController": false}, {"data": [[20.0, 1052.4]], "isOverall": false, "label": "Get Search Thread no. 5-Aggregated", "isController": false}, {"data": [[17.0, 766.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1", "isController": false}, {"data": [[17.0, 766.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1-Aggregated", "isController": false}, {"data": [[20.0, 951.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1", "isController": false}, {"data": [[20.0, 951.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1-Aggregated", "isController": false}, {"data": [[20.0, 1403.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0", "isController": false}, {"data": [[20.0, 1403.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0-Aggregated", "isController": false}, {"data": [[17.0, 561.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0", "isController": false}, {"data": [[17.0, 561.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0-Aggregated", "isController": false}, {"data": [[12.0, 922.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com", "isController": false}, {"data": [[12.0, 922.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-Aggregated", "isController": false}, {"data": [[19.0, 1564.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com", "isController": false}, {"data": [[19.0, 1564.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-Aggregated", "isController": false}, {"data": [[20.0, 575.0]], "isOverall": false, "label": "POST Billing Info Thread no. 12", "isController": false}, {"data": [[20.0, 575.0]], "isOverall": false, "label": "POST Billing Info Thread no. 12-Aggregated", "isController": false}, {"data": [[20.0, 540.0]], "isOverall": false, "label": "POST Billing Info Thread no. 11", "isController": false}, {"data": [[20.0, 540.0]], "isOverall": false, "label": "POST Billing Info Thread no. 11-Aggregated", "isController": false}, {"data": [[20.0, 513.0]], "isOverall": false, "label": "POST Billing Info Thread no. 14", "isController": false}, {"data": [[20.0, 513.0]], "isOverall": false, "label": "POST Billing Info Thread no. 14-Aggregated", "isController": false}, {"data": [[20.0, 1092.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0", "isController": false}, {"data": [[20.0, 1092.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0-Aggregated", "isController": false}, {"data": [[20.0, 571.0]], "isOverall": false, "label": "POST Billing Info Thread no. 13", "isController": false}, {"data": [[20.0, 571.0]], "isOverall": false, "label": "POST Billing Info Thread no. 13-Aggregated", "isController": false}, {"data": [[20.0, 635.0]], "isOverall": false, "label": "POST Billing Info Thread no. 10", "isController": false}, {"data": [[20.0, 635.0]], "isOverall": false, "label": "POST Billing Info Thread no. 10-Aggregated", "isController": false}, {"data": [[20.0, 2232.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com", "isController": false}, {"data": [[20.0, 2232.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-Aggregated", "isController": false}, {"data": [[20.0, 2389.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com", "isController": false}, {"data": [[20.0, 2389.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-Aggregated", "isController": false}, {"data": [[20.0, 2197.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com", "isController": false}, {"data": [[20.0, 2197.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-Aggregated", "isController": false}, {"data": [[20.0, 1105.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1", "isController": false}, {"data": [[20.0, 1105.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1-Aggregated", "isController": false}, {"data": [[16.0, 808.0], [17.0, 890.5], [20.0, 717.3636363636364], [14.0, 382.0], [15.0, 422.0]], "isOverall": false, "label": "GET Home After Confirm", "isController": false}, {"data": [[18.200000000000003, 714.7499999999999]], "isOverall": false, "label": "GET Home After Confirm-Aggregated", "isController": false}, {"data": [[16.0, 237.33333333333334], [17.0, 236.0], [18.0, 230.0], [9.0, 231.33333333333334], [20.0, 232.0], [10.0, 231.0], [5.0, 232.0], [7.0, 230.33333333333334], [15.0, 232.5]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230", "isController": false}, {"data": [[12.900000000000002, 232.75000000000003]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7660.6, "minX": 1.69118694E12, "maxY": 92786.45, "series": [{"data": [[1.69118694E12, 25822.15], [1.69118696E12, 70276.4], [1.69118698E12, 92786.45], [1.691187E12, 23606.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69118694E12, 7660.6], [1.69118696E12, 22820.3], [1.69118698E12, 21162.75], [1.691187E12, 7744.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.691187E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 229.72727272727272, "minX": 1.69118694E12, "maxY": 2662.0, "series": [{"data": [[1.69118698E12, 233.85714285714286], [1.691187E12, 232.23076923076923]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119", "isController": false}, {"data": [[1.69118694E12, 1135.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0", "isController": false}, {"data": [[1.69118694E12, 453.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0", "isController": false}, {"data": [[1.69118694E12, 756.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1", "isController": false}, {"data": [[1.69118696E12, 1228.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1", "isController": false}, {"data": [[1.69118696E12, 683.8225806451612], [1.69118698E12, 715.921052631579]], "isOverall": false, "label": "POST Add to Cart", "isController": false}, {"data": [[1.69118698E12, 229.72727272727272], [1.691187E12, 232.22222222222223]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117", "isController": false}, {"data": [[1.69118694E12, 399.0]], "isOverall": false, "label": "GET Register Page 2", "isController": false}, {"data": [[1.69118694E12, 231.0], [1.69118696E12, 231.29577464788733], [1.69118698E12, 230.53846153846152]], "isOverall": false, "label": "Post Search Site Data", "isController": false}, {"data": [[1.69118698E12, 534.5999999999999]], "isOverall": false, "label": "GET Billing Details", "isController": false}, {"data": [[1.69118698E12, 622.1499999999999]], "isOverall": false, "label": "POST Remove Iphone", "isController": false}, {"data": [[1.69118694E12, 230.75], [1.69118696E12, 232.66666666666669]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211", "isController": false}, {"data": [[1.69118696E12, 594.169230769231], [1.69118698E12, 625.2285714285715]], "isOverall": false, "label": "GET Add to Cart", "isController": false}, {"data": [[1.69118694E12, 231.05]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203", "isController": false}, {"data": [[1.69118698E12, 598.1538461538461], [1.691187E12, 570.0]], "isOverall": false, "label": "GET Payment Confirmation", "isController": false}, {"data": [[1.69118694E12, 647.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1", "isController": false}, {"data": [[1.69118694E12, 816.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com", "isController": false}, {"data": [[1.69118694E12, 976.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com", "isController": false}, {"data": [[1.69118694E12, 2066.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com", "isController": false}, {"data": [[1.69118694E12, 1328.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com", "isController": false}, {"data": [[1.69118694E12, 2209.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com", "isController": false}, {"data": [[1.69118694E12, 1508.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com", "isController": false}, {"data": [[1.69118694E12, 2662.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com", "isController": false}, {"data": [[1.69118698E12, 230.4]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145", "isController": false}, {"data": [[1.69118694E12, 1085.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1", "isController": false}, {"data": [[1.69118696E12, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0", "isController": false}, {"data": [[1.69118694E12, 479.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0", "isController": false}, {"data": [[1.69118694E12, 1951.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com", "isController": false}, {"data": [[1.69118696E12, 2354.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com", "isController": false}, {"data": [[1.69118696E12, 2149.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com", "isController": false}, {"data": [[1.69118694E12, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1", "isController": false}, {"data": [[1.69118698E12, 575.8499999999999]], "isOverall": false, "label": "GET Billing Info", "isController": false}, {"data": [[1.69118696E12, 1304.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1", "isController": false}, {"data": [[1.69118698E12, 674.3636363636364], [1.691187E12, 745.3333333333334]], "isOverall": false, "label": "GET Confirmation Sucess", "isController": false}, {"data": [[1.69118694E12, 866.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0", "isController": false}, {"data": [[1.69118694E12, 328.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0", "isController": false}, {"data": [[1.69118694E12, 514.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1", "isController": false}, {"data": [[1.69118694E12, 1282.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1", "isController": false}, {"data": [[1.69118698E12, 675.0]], "isOverall": false, "label": "POST Billing Info Thread no. 9", "isController": false}, {"data": [[1.69118698E12, 603.0]], "isOverall": false, "label": "POST Billing Info Thread no. 8", "isController": false}, {"data": [[1.69118698E12, 538.0]], "isOverall": false, "label": "POST Billing Info Thread no. 7", "isController": false}, {"data": [[1.69118698E12, 431.0]], "isOverall": false, "label": "POST Billing Info Thread no. 6", "isController": false}, {"data": [[1.69118698E12, 591.0]], "isOverall": false, "label": "POST Billing Info Thread no. 5", "isController": false}, {"data": [[1.69118698E12, 816.0]], "isOverall": false, "label": "POST Billing Info Thread no. 4", "isController": false}, {"data": [[1.69118698E12, 693.0]], "isOverall": false, "label": "POST Billing Info Thread no. 3", "isController": false}, {"data": [[1.69118698E12, 671.0]], "isOverall": false, "label": "POST Billing Info Thread no. 2", "isController": false}, {"data": [[1.69118698E12, 655.0]], "isOverall": false, "label": "POST Billing Info Thread no. 1", "isController": false}, {"data": [[1.69118698E12, 585.65]], "isOverall": false, "label": "GET Open Cart", "isController": false}, {"data": [[1.69118694E12, 1379.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0", "isController": false}, {"data": [[1.69118696E12, 667.1206896551723], [1.69118698E12, 704.3809523809523]], "isOverall": false, "label": "GET Cart Info", "isController": false}, {"data": [[1.69118694E12, 301.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0", "isController": false}, {"data": [[1.69118694E12, 894.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1", "isController": false}, {"data": [[1.69118698E12, 1387.3333333333333], [1.691187E12, 1225.0588235294115]], "isOverall": false, "label": "GET Logout Page-1", "isController": false}, {"data": [[1.69118698E12, 1446.8999999999999]], "isOverall": false, "label": "GET Cart", "isController": false}, {"data": [[1.69118698E12, 466.2], [1.691187E12, 372.93333333333334]], "isOverall": false, "label": "GET Logout Page-0", "isController": false}, {"data": [[1.69118696E12, 1170.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1", "isController": false}, {"data": [[1.69118694E12, 1183.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0", "isController": false}, {"data": [[1.69118694E12, 327.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0", "isController": false}, {"data": [[1.69118696E12, 233.2058823529411], [1.69118698E12, 232.50000000000003]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128", "isController": false}, {"data": [[1.69118694E12, 595.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1", "isController": false}, {"data": [[1.69118694E12, 1154.1666666666667], [1.69118696E12, 1102.6428571428573]], "isOverall": false, "label": "GET Home Page", "isController": false}, {"data": [[1.69118694E12, 1048.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1", "isController": false}, {"data": [[1.69118698E12, 233.09999999999997]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106", "isController": false}, {"data": [[1.69118694E12, 1214.1000000000001]], "isOverall": false, "label": "Open Website", "isController": false}, {"data": [[1.69118696E12, 979.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0", "isController": false}, {"data": [[1.69118698E12, 955.4000000000001]], "isOverall": false, "label": "GET Cart After Removal", "isController": false}, {"data": [[1.69118694E12, 613.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0", "isController": false}, {"data": [[1.69118696E12, 947.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0", "isController": false}, {"data": [[1.69118694E12, 666.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0", "isController": false}, {"data": [[1.69118694E12, 1057.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1", "isController": false}, {"data": [[1.69118698E12, 530.0], [1.691187E12, 466.3333333333333]], "isOverall": false, "label": "GET Billing Info 3", "isController": false}, {"data": [[1.69118698E12, 231.3]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142", "isController": false}, {"data": [[1.69118696E12, 1078.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1", "isController": false}, {"data": [[1.69118694E12, 1210.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com", "isController": false}, {"data": [[1.69118694E12, 2000.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com", "isController": false}, {"data": [[1.69118694E12, 1724.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com", "isController": false}, {"data": [[1.69118698E12, 232.5], [1.691187E12, 233.08333333333334]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120", "isController": false}, {"data": [[1.69118696E12, 2364.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com", "isController": false}, {"data": [[1.69118696E12, 2026.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com", "isController": false}, {"data": [[1.69118698E12, 540.1666666666666], [1.691187E12, 432.0]], "isOverall": false, "label": "GET Billing Info 2", "isController": false}, {"data": [[1.69118694E12, 926.0], [1.69118696E12, 931.3000000000001], [1.69118698E12, 1033.0689655172414]], "isOverall": false, "label": "GET Product Selection", "isController": false}, {"data": [[1.69118694E12, 1141.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1", "isController": false}, {"data": [[1.69118696E12, 980.3333333333334], [1.69118698E12, 1043.0]], "isOverall": false, "label": "Get Search Thread no. 17", "isController": false}, {"data": [[1.69118696E12, 865.0], [1.69118698E12, 1022.0]], "isOverall": false, "label": "Get Search Thread no. 16", "isController": false}, {"data": [[1.69118696E12, 1004.6666666666666], [1.69118698E12, 1205.0]], "isOverall": false, "label": "Get Search Thread no. 19", "isController": false}, {"data": [[1.69118696E12, 1074.3333333333333], [1.69118698E12, 1175.0]], "isOverall": false, "label": "Get Search Thread no. 18", "isController": false}, {"data": [[1.69118694E12, 924.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0", "isController": false}, {"data": [[1.69118696E12, 233.17647058823528], [1.69118698E12, 232.84374999999997]], "isOverall": false, "label": "POST Selection Site Data", "isController": false}, {"data": [[1.69118694E12, 1169.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1", "isController": false}, {"data": [[1.69118694E12, 533.0]], "isOverall": false, "label": "Open Register Page", "isController": false}, {"data": [[1.69118694E12, 231.72727272727272], [1.69118696E12, 229.88888888888886]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206", "isController": false}, {"data": [[1.69118694E12, 822.375], [1.69118696E12, 844.25]], "isOverall": false, "label": "GET Account Page", "isController": false}, {"data": [[1.69118696E12, 1025.0], [1.69118698E12, 1005.5]], "isOverall": false, "label": "Get Search Thread no. 20", "isController": false}, {"data": [[1.69118694E12, 1040.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0", "isController": false}, {"data": [[1.69118698E12, 580.7500000000001]], "isOverall": false, "label": "GET Checkout 2", "isController": false}, {"data": [[1.69118694E12, 960.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0", "isController": false}, {"data": [[1.691187E12, 230.60000000000002]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234", "isController": false}, {"data": [[1.69118694E12, 1038.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1", "isController": false}, {"data": [[1.69118698E12, 1810.3333333333333], [1.691187E12, 1617.4117647058827]], "isOverall": false, "label": "GET Logout Page", "isController": false}, {"data": [[1.691187E12, 498.34999999999997]], "isOverall": false, "label": "GET Home After Logout", "isController": false}, {"data": [[1.691187E12, 231.45000000000002]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233", "isController": false}, {"data": [[1.69118696E12, 590.7246376811594], [1.69118698E12, 635.3548387096774]], "isOverall": false, "label": "GET Product Selection 2", "isController": false}, {"data": [[1.69118696E12, 979.0], [1.69118698E12, 1069.0]], "isOverall": false, "label": "Get Search Thread no. 13", "isController": false}, {"data": [[1.69118696E12, 919.0], [1.69118698E12, 975.0]], "isOverall": false, "label": "Get Search Thread no. 12", "isController": false}, {"data": [[1.69118696E12, 855.3333333333334], [1.69118698E12, 968.0]], "isOverall": false, "label": "Get Search Thread no. 15", "isController": false}, {"data": [[1.69118696E12, 989.6666666666666], [1.69118698E12, 1015.0]], "isOverall": false, "label": "Get Search Thread no. 14", "isController": false}, {"data": [[1.69118698E12, 526.6666666666666], [1.691187E12, 496.2]], "isOverall": false, "label": "POST Payment Method", "isController": false}, {"data": [[1.69118694E12, 230.6], [1.69118696E12, 232.8]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214", "isController": false}, {"data": [[1.69118696E12, 957.0], [1.69118698E12, 997.0]], "isOverall": false, "label": "Get Search Thread no. 11", "isController": false}, {"data": [[1.69118694E12, 232.8], [1.69118696E12, 230.93333333333334]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213", "isController": false}, {"data": [[1.69118696E12, 889.25], [1.69118698E12, 1097.0]], "isOverall": false, "label": "Get Search Thread no. 10", "isController": false}, {"data": [[1.69118698E12, 832.0], [1.691187E12, 522.7222222222223]], "isOverall": false, "label": "GET Logout Page 2", "isController": false}, {"data": [[1.69118698E12, 569.7272727272727], [1.691187E12, 556.3333333333335]], "isOverall": false, "label": "GET Confirm Order", "isController": false}, {"data": [[1.69118698E12, 543.0]], "isOverall": false, "label": "POST Billing Info Thread no. 19", "isController": false}, {"data": [[1.69118694E12, 742.090909090909], [1.69118696E12, 878.3333333333334]], "isOverall": false, "label": "GET Sucess Page", "isController": false}, {"data": [[1.69118698E12, 406.0]], "isOverall": false, "label": "POST Billing Info Thread no. 16", "isController": false}, {"data": [[1.69118698E12, 496.0]], "isOverall": false, "label": "POST Billing Info Thread no. 15", "isController": false}, {"data": [[1.69118698E12, 567.0]], "isOverall": false, "label": "POST Billing Info Thread no. 18", "isController": false}, {"data": [[1.69118698E12, 531.0]], "isOverall": false, "label": "POST Billing Info Thread no. 17", "isController": false}, {"data": [[1.69118694E12, 982.0], [1.69118696E12, 954.25]], "isOverall": false, "label": "Get Search Thread no. 2", "isController": false}, {"data": [[1.69118694E12, 1002.0], [1.69118696E12, 952.0]], "isOverall": false, "label": "Get Search Thread no. 1", "isController": false}, {"data": [[1.69118698E12, 851.65]], "isOverall": false, "label": "GET Chekout", "isController": false}, {"data": [[1.69118698E12, 450.0]], "isOverall": false, "label": "POST Billing Info Thread no. 20", "isController": false}, {"data": [[1.69118696E12, 968.0], [1.69118698E12, 1032.0]], "isOverall": false, "label": "Get Search Thread no. 8", "isController": false}, {"data": [[1.69118698E12, 510.3]], "isOverall": false, "label": "GET 1st Checkout", "isController": false}, {"data": [[1.69118696E12, 1012.75], [1.69118698E12, 1066.0]], "isOverall": false, "label": "Get Search Thread no. 7", "isController": false}, {"data": [[1.69118696E12, 907.25], [1.69118698E12, 936.0]], "isOverall": false, "label": "Get Search Thread no. 9", "isController": false}, {"data": [[1.69118696E12, 993.25], [1.69118698E12, 961.0]], "isOverall": false, "label": "Get Search Thread no. 4", "isController": false}, {"data": [[1.69118694E12, 982.0], [1.69118696E12, 905.25]], "isOverall": false, "label": "Get Search Thread no. 3", "isController": false}, {"data": [[1.69118696E12, 963.0], [1.69118698E12, 1047.0]], "isOverall": false, "label": "Get Search Thread no. 6", "isController": false}, {"data": [[1.69118696E12, 1029.0], [1.69118698E12, 1146.0]], "isOverall": false, "label": "Get Search Thread no. 5", "isController": false}, {"data": [[1.69118694E12, 766.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1", "isController": false}, {"data": [[1.69118696E12, 951.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1", "isController": false}, {"data": [[1.69118696E12, 1403.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0", "isController": false}, {"data": [[1.69118694E12, 561.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0", "isController": false}, {"data": [[1.69118694E12, 922.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com", "isController": false}, {"data": [[1.69118694E12, 1564.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com", "isController": false}, {"data": [[1.69118698E12, 575.0]], "isOverall": false, "label": "POST Billing Info Thread no. 12", "isController": false}, {"data": [[1.69118698E12, 540.0]], "isOverall": false, "label": "POST Billing Info Thread no. 11", "isController": false}, {"data": [[1.69118698E12, 513.0]], "isOverall": false, "label": "POST Billing Info Thread no. 14", "isController": false}, {"data": [[1.69118696E12, 1092.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0", "isController": false}, {"data": [[1.69118698E12, 571.0]], "isOverall": false, "label": "POST Billing Info Thread no. 13", "isController": false}, {"data": [[1.69118698E12, 635.0]], "isOverall": false, "label": "POST Billing Info Thread no. 10", "isController": false}, {"data": [[1.69118694E12, 2232.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com", "isController": false}, {"data": [[1.69118696E12, 2389.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com", "isController": false}, {"data": [[1.69118696E12, 2197.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com", "isController": false}, {"data": [[1.69118696E12, 1105.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1", "isController": false}, {"data": [[1.69118698E12, 711.875], [1.691187E12, 716.6666666666667]], "isOverall": false, "label": "GET Home After Confirm", "isController": false}, {"data": [[1.69118698E12, 231.0], [1.691187E12, 232.8421052631579]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.691187E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.69118694E12, "maxY": 1445.25, "series": [{"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119", "isController": false}, {"data": [[1.69118694E12, 1135.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0", "isController": false}, {"data": [[1.69118694E12, 453.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0", "isController": false}, {"data": [[1.69118694E12, 756.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1", "isController": false}, {"data": [[1.69118696E12, 1228.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1", "isController": false}, {"data": [[1.69118696E12, 683.7580645161293], [1.69118698E12, 715.921052631579]], "isOverall": false, "label": "POST Add to Cart", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117", "isController": false}, {"data": [[1.69118694E12, 399.0]], "isOverall": false, "label": "GET Register Page 2", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Post Search Site Data", "isController": false}, {"data": [[1.69118698E12, 534.5999999999999]], "isOverall": false, "label": "GET Billing Details", "isController": false}, {"data": [[1.69118698E12, 622.1499999999999]], "isOverall": false, "label": "POST Remove Iphone", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211", "isController": false}, {"data": [[1.69118696E12, 594.169230769231], [1.69118698E12, 625.2285714285715]], "isOverall": false, "label": "GET Add to Cart", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203", "isController": false}, {"data": [[1.69118698E12, 598.0769230769231], [1.691187E12, 570.0]], "isOverall": false, "label": "GET Payment Confirmation", "isController": false}, {"data": [[1.69118694E12, 647.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1", "isController": false}, {"data": [[1.69118694E12, 301.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com", "isController": false}, {"data": [[1.69118694E12, 328.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com", "isController": false}, {"data": [[1.69118694E12, 924.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com", "isController": false}, {"data": [[1.69118694E12, 561.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com", "isController": false}, {"data": [[1.69118694E12, 1040.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com", "isController": false}, {"data": [[1.69118694E12, 613.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com", "isController": false}, {"data": [[1.69118694E12, 1379.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145", "isController": false}, {"data": [[1.69118694E12, 1085.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1", "isController": false}, {"data": [[1.69118696E12, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0", "isController": false}, {"data": [[1.69118694E12, 479.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0", "isController": false}, {"data": [[1.69118694E12, 866.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com", "isController": false}, {"data": [[1.69118696E12, 1403.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com", "isController": false}, {"data": [[1.69118696E12, 979.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com", "isController": false}, {"data": [[1.69118694E12, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1", "isController": false}, {"data": [[1.69118698E12, 575.7499999999999]], "isOverall": false, "label": "GET Billing Info", "isController": false}, {"data": [[1.69118696E12, 1304.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1", "isController": false}, {"data": [[1.69118698E12, 674.3636363636364], [1.691187E12, 745.0]], "isOverall": false, "label": "GET Confirmation Sucess", "isController": false}, {"data": [[1.69118694E12, 866.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0", "isController": false}, {"data": [[1.69118694E12, 328.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0", "isController": false}, {"data": [[1.69118694E12, 514.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1", "isController": false}, {"data": [[1.69118694E12, 1281.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1", "isController": false}, {"data": [[1.69118698E12, 675.0]], "isOverall": false, "label": "POST Billing Info Thread no. 9", "isController": false}, {"data": [[1.69118698E12, 603.0]], "isOverall": false, "label": "POST Billing Info Thread no. 8", "isController": false}, {"data": [[1.69118698E12, 538.0]], "isOverall": false, "label": "POST Billing Info Thread no. 7", "isController": false}, {"data": [[1.69118698E12, 431.0]], "isOverall": false, "label": "POST Billing Info Thread no. 6", "isController": false}, {"data": [[1.69118698E12, 591.0]], "isOverall": false, "label": "POST Billing Info Thread no. 5", "isController": false}, {"data": [[1.69118698E12, 816.0]], "isOverall": false, "label": "POST Billing Info Thread no. 4", "isController": false}, {"data": [[1.69118698E12, 693.0]], "isOverall": false, "label": "POST Billing Info Thread no. 3", "isController": false}, {"data": [[1.69118698E12, 671.0]], "isOverall": false, "label": "POST Billing Info Thread no. 2", "isController": false}, {"data": [[1.69118698E12, 655.0]], "isOverall": false, "label": "POST Billing Info Thread no. 1", "isController": false}, {"data": [[1.69118698E12, 583.0999999999999]], "isOverall": false, "label": "GET Open Cart", "isController": false}, {"data": [[1.69118694E12, 1379.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0", "isController": false}, {"data": [[1.69118696E12, 667.103448275862], [1.69118698E12, 704.2857142857142]], "isOverall": false, "label": "GET Cart Info", "isController": false}, {"data": [[1.69118694E12, 301.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0", "isController": false}, {"data": [[1.69118694E12, 894.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1", "isController": false}, {"data": [[1.69118698E12, 1387.3333333333333], [1.691187E12, 1224.9411764705883]], "isOverall": false, "label": "GET Logout Page-1", "isController": false}, {"data": [[1.69118698E12, 1445.25]], "isOverall": false, "label": "GET Cart", "isController": false}, {"data": [[1.69118698E12, 466.2], [1.691187E12, 372.93333333333334]], "isOverall": false, "label": "GET Logout Page-0", "isController": false}, {"data": [[1.69118696E12, 1170.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1", "isController": false}, {"data": [[1.69118694E12, 1183.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0", "isController": false}, {"data": [[1.69118694E12, 327.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128", "isController": false}, {"data": [[1.69118694E12, 595.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1", "isController": false}, {"data": [[1.69118694E12, 1153.6666666666665], [1.69118696E12, 1102.2857142857144]], "isOverall": false, "label": "GET Home Page", "isController": false}, {"data": [[1.69118694E12, 1048.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106", "isController": false}, {"data": [[1.69118694E12, 1213.7500000000005]], "isOverall": false, "label": "Open Website", "isController": false}, {"data": [[1.69118696E12, 979.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0", "isController": false}, {"data": [[1.69118698E12, 955.05]], "isOverall": false, "label": "GET Cart After Removal", "isController": false}, {"data": [[1.69118694E12, 613.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0", "isController": false}, {"data": [[1.69118696E12, 947.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0", "isController": false}, {"data": [[1.69118694E12, 666.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0", "isController": false}, {"data": [[1.69118694E12, 1057.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1", "isController": false}, {"data": [[1.69118698E12, 529.8823529411764], [1.691187E12, 466.3333333333333]], "isOverall": false, "label": "GET Billing Info 3", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142", "isController": false}, {"data": [[1.69118696E12, 1078.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1", "isController": false}, {"data": [[1.69118694E12, 453.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com", "isController": false}, {"data": [[1.69118694E12, 960.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com", "isController": false}, {"data": [[1.69118694E12, 666.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120", "isController": false}, {"data": [[1.69118696E12, 1135.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com", "isController": false}, {"data": [[1.69118696E12, 947.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com", "isController": false}, {"data": [[1.69118698E12, 539.7777777777776], [1.691187E12, 432.0]], "isOverall": false, "label": "GET Billing Info 2", "isController": false}, {"data": [[1.69118694E12, 926.0], [1.69118696E12, 930.9857142857143], [1.69118698E12, 1032.7241379310346]], "isOverall": false, "label": "GET Product Selection", "isController": false}, {"data": [[1.69118694E12, 1141.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1", "isController": false}, {"data": [[1.69118696E12, 980.3333333333334], [1.69118698E12, 1042.5]], "isOverall": false, "label": "Get Search Thread no. 17", "isController": false}, {"data": [[1.69118696E12, 864.6666666666666], [1.69118698E12, 1022.0]], "isOverall": false, "label": "Get Search Thread no. 16", "isController": false}, {"data": [[1.69118696E12, 1004.6666666666666], [1.69118698E12, 1204.5]], "isOverall": false, "label": "Get Search Thread no. 19", "isController": false}, {"data": [[1.69118696E12, 1073.6666666666667], [1.69118698E12, 1175.0]], "isOverall": false, "label": "Get Search Thread no. 18", "isController": false}, {"data": [[1.69118694E12, 924.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "POST Selection Site Data", "isController": false}, {"data": [[1.69118694E12, 1169.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1", "isController": false}, {"data": [[1.69118694E12, 532.8]], "isOverall": false, "label": "Open Register Page", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206", "isController": false}, {"data": [[1.69118694E12, 822.25], [1.69118696E12, 844.0833333333333]], "isOverall": false, "label": "GET Account Page", "isController": false}, {"data": [[1.69118696E12, 1024.6666666666667], [1.69118698E12, 1005.5]], "isOverall": false, "label": "Get Search Thread no. 20", "isController": false}, {"data": [[1.69118694E12, 1040.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0", "isController": false}, {"data": [[1.69118698E12, 580.5500000000001]], "isOverall": false, "label": "GET Checkout 2", "isController": false}, {"data": [[1.69118694E12, 960.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0", "isController": false}, {"data": [[1.691187E12, 0.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234", "isController": false}, {"data": [[1.69118694E12, 1038.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1", "isController": false}, {"data": [[1.69118698E12, 422.3333333333333], [1.691187E12, 391.64705882352945]], "isOverall": false, "label": "GET Logout Page", "isController": false}, {"data": [[1.691187E12, 498.0499999999999]], "isOverall": false, "label": "GET Home After Logout", "isController": false}, {"data": [[1.691187E12, 0.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233", "isController": false}, {"data": [[1.69118696E12, 590.6956521739131], [1.69118698E12, 635.3548387096774]], "isOverall": false, "label": "GET Product Selection 2", "isController": false}, {"data": [[1.69118696E12, 979.0], [1.69118698E12, 1069.0]], "isOverall": false, "label": "Get Search Thread no. 13", "isController": false}, {"data": [[1.69118696E12, 918.75], [1.69118698E12, 975.0]], "isOverall": false, "label": "Get Search Thread no. 12", "isController": false}, {"data": [[1.69118696E12, 855.0], [1.69118698E12, 968.0]], "isOverall": false, "label": "Get Search Thread no. 15", "isController": false}, {"data": [[1.69118696E12, 989.3333333333334], [1.69118698E12, 1014.0]], "isOverall": false, "label": "Get Search Thread no. 14", "isController": false}, {"data": [[1.69118698E12, 526.6666666666666], [1.691187E12, 496.2]], "isOverall": false, "label": "POST Payment Method", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214", "isController": false}, {"data": [[1.69118696E12, 955.5], [1.69118698E12, 989.0]], "isOverall": false, "label": "Get Search Thread no. 11", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213", "isController": false}, {"data": [[1.69118696E12, 889.0], [1.69118698E12, 1096.0]], "isOverall": false, "label": "Get Search Thread no. 10", "isController": false}, {"data": [[1.69118698E12, 831.5], [1.691187E12, 522.5555555555557]], "isOverall": false, "label": "GET Logout Page 2", "isController": false}, {"data": [[1.69118698E12, 569.7272727272727], [1.691187E12, 556.3333333333335]], "isOverall": false, "label": "GET Confirm Order", "isController": false}, {"data": [[1.69118698E12, 543.0]], "isOverall": false, "label": "POST Billing Info Thread no. 19", "isController": false}, {"data": [[1.69118694E12, 742.0], [1.69118696E12, 878.2222222222222]], "isOverall": false, "label": "GET Sucess Page", "isController": false}, {"data": [[1.69118698E12, 406.0]], "isOverall": false, "label": "POST Billing Info Thread no. 16", "isController": false}, {"data": [[1.69118698E12, 496.0]], "isOverall": false, "label": "POST Billing Info Thread no. 15", "isController": false}, {"data": [[1.69118698E12, 567.0]], "isOverall": false, "label": "POST Billing Info Thread no. 18", "isController": false}, {"data": [[1.69118698E12, 531.0]], "isOverall": false, "label": "POST Billing Info Thread no. 17", "isController": false}, {"data": [[1.69118694E12, 982.0], [1.69118696E12, 954.25]], "isOverall": false, "label": "Get Search Thread no. 2", "isController": false}, {"data": [[1.69118694E12, 1002.0], [1.69118696E12, 952.0]], "isOverall": false, "label": "Get Search Thread no. 1", "isController": false}, {"data": [[1.69118698E12, 851.2]], "isOverall": false, "label": "GET Chekout", "isController": false}, {"data": [[1.69118698E12, 450.0]], "isOverall": false, "label": "POST Billing Info Thread no. 20", "isController": false}, {"data": [[1.69118696E12, 967.5], [1.69118698E12, 1032.0]], "isOverall": false, "label": "Get Search Thread no. 8", "isController": false}, {"data": [[1.69118698E12, 508.89999999999986]], "isOverall": false, "label": "GET 1st Checkout", "isController": false}, {"data": [[1.69118696E12, 1007.25], [1.69118698E12, 1066.0]], "isOverall": false, "label": "Get Search Thread no. 7", "isController": false}, {"data": [[1.69118696E12, 907.25], [1.69118698E12, 935.0]], "isOverall": false, "label": "Get Search Thread no. 9", "isController": false}, {"data": [[1.69118696E12, 993.25], [1.69118698E12, 961.0]], "isOverall": false, "label": "Get Search Thread no. 4", "isController": false}, {"data": [[1.69118694E12, 981.0], [1.69118696E12, 905.25]], "isOverall": false, "label": "Get Search Thread no. 3", "isController": false}, {"data": [[1.69118696E12, 963.0], [1.69118698E12, 1047.0]], "isOverall": false, "label": "Get Search Thread no. 6", "isController": false}, {"data": [[1.69118696E12, 1029.0], [1.69118698E12, 1146.0]], "isOverall": false, "label": "Get Search Thread no. 5", "isController": false}, {"data": [[1.69118694E12, 766.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1", "isController": false}, {"data": [[1.69118696E12, 951.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1", "isController": false}, {"data": [[1.69118696E12, 1403.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0", "isController": false}, {"data": [[1.69118694E12, 561.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0", "isController": false}, {"data": [[1.69118694E12, 327.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com", "isController": false}, {"data": [[1.69118694E12, 479.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com", "isController": false}, {"data": [[1.69118698E12, 575.0]], "isOverall": false, "label": "POST Billing Info Thread no. 12", "isController": false}, {"data": [[1.69118698E12, 540.0]], "isOverall": false, "label": "POST Billing Info Thread no. 11", "isController": false}, {"data": [[1.69118698E12, 513.0]], "isOverall": false, "label": "POST Billing Info Thread no. 14", "isController": false}, {"data": [[1.69118696E12, 1092.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0", "isController": false}, {"data": [[1.69118698E12, 571.0]], "isOverall": false, "label": "POST Billing Info Thread no. 13", "isController": false}, {"data": [[1.69118698E12, 635.0]], "isOverall": false, "label": "POST Billing Info Thread no. 10", "isController": false}, {"data": [[1.69118694E12, 1183.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com", "isController": false}, {"data": [[1.69118696E12, 1084.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com", "isController": false}, {"data": [[1.69118696E12, 1092.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com", "isController": false}, {"data": [[1.69118696E12, 1105.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1", "isController": false}, {"data": [[1.69118698E12, 711.875], [1.691187E12, 715.4166666666667]], "isOverall": false, "label": "GET Home After Confirm", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.691187E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.69118694E12, "maxY": 697.75, "series": [{"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0", "isController": false}, {"data": [[1.69118694E12, 228.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1", "isController": false}, {"data": [[1.69118696E12, 231.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "POST Add to Cart", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "GET Register Page 2", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Post Search Site Data", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET Billing Details", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Remove Iphone", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "GET Add to Cart", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Payment Confirmation", "isController": false}, {"data": [[1.69118694E12, 223.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145", "isController": false}, {"data": [[1.69118694E12, 223.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com", "isController": false}, {"data": [[1.69118694E12, 225.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET Billing Info", "isController": false}, {"data": [[1.69118696E12, 222.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Confirmation Sucess", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0", "isController": false}, {"data": [[1.69118694E12, 222.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1", "isController": false}, {"data": [[1.69118694E12, 222.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 9", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 8", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 7", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 6", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 5", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 4", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 3", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 2", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 1", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET Open Cart", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "GET Cart Info", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0", "isController": false}, {"data": [[1.69118694E12, 227.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1", "isController": false}, {"data": [[1.69118698E12, 689.0], [1.691187E12, 688.1764705882351]], "isOverall": false, "label": "GET Logout Page-1", "isController": false}, {"data": [[1.69118698E12, 228.9]], "isOverall": false, "label": "GET Cart", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Logout Page-0", "isController": false}, {"data": [[1.69118696E12, 223.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128", "isController": false}, {"data": [[1.69118694E12, 227.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1", "isController": false}, {"data": [[1.69118694E12, 222.83333333333334], [1.69118696E12, 223.07142857142856]], "isOverall": false, "label": "GET Home Page", "isController": false}, {"data": [[1.69118694E12, 223.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106", "isController": false}, {"data": [[1.69118694E12, 697.75]], "isOverall": false, "label": "Open Website", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET Cart After Removal", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0", "isController": false}, {"data": [[1.69118694E12, 225.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Billing Info 3", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142", "isController": false}, {"data": [[1.69118696E12, 222.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Billing Info 2", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "GET Product Selection", "isController": false}, {"data": [[1.69118694E12, 222.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 17", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 16", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 19", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 18", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "POST Selection Site Data", "isController": false}, {"data": [[1.69118694E12, 222.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "Open Register Page", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "GET Account Page", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 20", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET Checkout 2", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0", "isController": false}, {"data": [[1.691187E12, 0.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234", "isController": false}, {"data": [[1.69118694E12, 228.0]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Logout Page", "isController": false}, {"data": [[1.691187E12, 0.0]], "isOverall": false, "label": "GET Home After Logout", "isController": false}, {"data": [[1.691187E12, 0.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "GET Product Selection 2", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 13", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 12", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 15", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 14", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "POST Payment Method", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 11", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 10", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Logout Page 2", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Confirm Order", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 19", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "GET Sucess Page", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 16", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 15", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 18", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 17", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 2", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 1", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET Chekout", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 20", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 8", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "GET 1st Checkout", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 7", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 9", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 4", "isController": false}, {"data": [[1.69118694E12, 0.0], [1.69118696E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 3", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 6", "isController": false}, {"data": [[1.69118696E12, 0.0], [1.69118698E12, 0.0]], "isOverall": false, "label": "Get Search Thread no. 5", "isController": false}, {"data": [[1.69118694E12, 227.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1", "isController": false}, {"data": [[1.69118696E12, 223.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 12", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 11", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 14", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 13", "isController": false}, {"data": [[1.69118698E12, 0.0]], "isOverall": false, "label": "POST Billing Info Thread no. 10", "isController": false}, {"data": [[1.69118694E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com", "isController": false}, {"data": [[1.69118696E12, 0.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com", "isController": false}, {"data": [[1.69118696E12, 223.0]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "GET Home After Confirm", "isController": false}, {"data": [[1.69118698E12, 0.0], [1.691187E12, 0.0]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.691187E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 228.0, "minX": 1.69118694E12, "maxY": 2662.0, "series": [{"data": [[1.69118694E12, 2662.0], [1.69118696E12, 2389.0], [1.69118698E12, 1932.0], [1.691187E12, 1963.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69118694E12, 228.0], [1.69118696E12, 228.0], [1.69118698E12, 228.0], [1.691187E12, 229.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69118694E12, 1277.5], [1.69118696E12, 998.6000000000001], [1.69118698E12, 1000.8000000000001], [1.691187E12, 1311.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69118694E12, 2296.5000000000023], [1.69118696E12, 1401.3199999999988], [1.69118698E12, 1550.199999999997], [1.691187E12, 1959.32]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69118694E12, 569.5], [1.69118696E12, 597.0], [1.69118698E12, 591.0], [1.691187E12, 353.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69118694E12, 1653.25], [1.69118696E12, 1077.3], [1.69118698E12, 1172.5999999999997], [1.691187E12, 1474.1999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.691187E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 231.0, "minX": 13.0, "maxY": 709.0, "series": [{"data": [[33.0, 637.0], [32.0, 680.0], [35.0, 629.0], [34.0, 693.5], [36.0, 568.5], [37.0, 523.0], [38.0, 540.0], [40.0, 569.5], [41.0, 519.0], [42.0, 494.5], [44.0, 490.0], [46.0, 248.5], [13.0, 289.0], [17.0, 231.0], [22.0, 671.0], [23.0, 322.0], [25.0, 605.0], [26.0, 605.0], [27.0, 709.0], [29.0, 359.0], [30.0, 703.0], [31.0, 704.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 46.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 13.0, "maxY": 704.0, "series": [{"data": [[33.0, 630.0], [32.0, 680.0], [35.0, 628.5], [34.0, 693.5], [36.0, 562.5], [37.0, 521.0], [38.0, 537.0], [40.0, 546.5], [41.0, 517.0], [42.0, 494.5], [44.0, 490.0], [46.0, 127.5], [13.0, 289.0], [17.0, 0.0], [22.0, 671.0], [23.0, 301.0], [25.0, 605.0], [26.0, 583.5], [27.0, 648.5], [29.0, 309.0], [30.0, 703.0], [31.0, 704.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 46.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.15, "minX": 1.69118694E12, "maxY": 35.0, "series": [{"data": [[1.69118694E12, 10.5], [1.69118696E12, 35.0], [1.69118698E12, 34.35], [1.691187E12, 10.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.691187E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.69118694E12, "maxY": 25.05, "series": [{"data": [[1.69118694E12, 5.85], [1.69118696E12, 22.15], [1.69118698E12, 25.05], [1.691187E12, 5.95]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.69118694E12, 0.75], [1.69118696E12, 0.25], [1.69118698E12, 0.25], [1.691187E12, 0.75]], "isOverall": false, "label": "302", "isController": false}, {"data": [[1.69118694E12, 2.6], [1.69118696E12, 12.9], [1.69118698E12, 8.85], [1.691187E12, 4.65]], "isOverall": false, "label": "204", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 20000, "maxX": 1.691187E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.69118694E12, "maxY": 3.55, "series": [{"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-0-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 8-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 19-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-1-success", "isController": false}, {"data": [[1.69118694E12, 0.25], [1.69118696E12, 0.75]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-214-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-success", "isController": false}, {"data": [[1.69118696E12, 3.4], [1.69118698E12, 1.6]], "isOverall": false, "label": "POST Selection Site Data-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 4-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-0-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-1-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 17-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 8-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-0-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-1-success", "isController": false}, {"data": [[1.69118698E12, 0.05], [1.691187E12, 0.95]], "isOverall": false, "label": "logout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Flogout-230-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 15-success", "isController": false}, {"data": [[1.69118698E12, 0.55], [1.691187E12, 0.45]], "isOverall": false, "label": "GET Confirmation Sucess-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-0-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Checkout 2-success", "isController": false}, {"data": [[1.69118694E12, 0.55], [1.69118696E12, 0.45]], "isOverall": false, "label": "GET Sucess Page-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-1-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 5-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 14-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05], [1.69118696E12, 0.2]], "isOverall": false, "label": "Get Search Thread no. 1-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 12-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Billing Info-success", "isController": false}, {"data": [[1.69118694E12, 1.0]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Fregister-203-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-1-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 10-success", "isController": false}, {"data": [[1.69118698E12, 0.4], [1.691187E12, 0.6]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-120-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET 1st Checkout-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 18-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 20-success", "isController": false}, {"data": [[1.69118694E12, 0.55], [1.69118696E12, 0.45]], "isOverall": false, "label": "register/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%2Fsuccess-206-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 9-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-1-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 5-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-0-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti617@delinkiti617.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-1-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 20-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Billing Details-success", "isController": false}, {"data": [[1.69118694E12, 1.0]], "isOverall": false, "label": "Open Website-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 14-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 18-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-success", "isController": false}, {"data": [[1.69118696E12, 3.25], [1.69118698E12, 1.75]], "isOverall": false, "label": "GET Add to Cart-success", "isController": false}, {"data": [[1.69118696E12, 3.1], [1.69118698E12, 1.9]], "isOverall": false, "label": "POST Add to Cart-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-1-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-1-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 9-success", "isController": false}, {"data": [[1.69118694E12, 0.05], [1.69118696E12, 0.2]], "isOverall": false, "label": "Get Search Thread no. 2-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-0-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 11-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 6-success", "isController": false}, {"data": [[1.69118694E12, 0.4], [1.69118696E12, 0.6]], "isOverall": false, "label": "GET Account Page-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "checkout/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcheckout-106-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-1-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.3], [1.69118696E12, 0.7]], "isOverall": false, "label": "GET Home Page-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 1-success", "isController": false}, {"data": [[1.69118698E12, 0.75], [1.691187E12, 0.25]], "isOverall": false, "label": "POST Payment Method-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 11-success", "isController": false}, {"data": [[1.69118698E12, 0.15], [1.691187E12, 0.85]], "isOverall": false, "label": "GET Logout Page-success", "isController": false}, {"data": [[1.69118694E12, 1.0]], "isOverall": false, "label": "GET Register Page 2-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 17-success", "isController": false}, {"data": [[1.69118698E12, 0.9], [1.691187E12, 0.1]], "isOverall": false, "label": "GET Billing Info 2-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 19-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-1-success", "isController": false}, {"data": [[1.69118698E12, 0.4], [1.691187E12, 0.6]], "isOverall": false, "label": "GET Home After Confirm-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "POST Remove Iphone-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti612@delinkiti612.com-0-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "removeiphone/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fcart-145-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-0-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 13-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-1-success", "isController": false}, {"data": [[1.69118696E12, 3.4], [1.69118698E12, 1.6]], "isOverall": false, "label": "add /mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dproduct%252Fproduct%26product_id%3D40-128-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 15-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 6-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti613@delinkiti613.com-0-success", "isController": false}, {"data": [[1.69118698E12, 0.25], [1.691187E12, 0.75]], "isOverall": false, "label": "GET Logout Page-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-1-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "opencart2/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%2Fcart-142-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 12-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti610@delinkiti610.com-1-success", "isController": false}, {"data": [[1.691187E12, 1.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-233-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 10-success", "isController": false}, {"data": [[1.69118698E12, 0.55], [1.691187E12, 0.45]], "isOverall": false, "label": "confirm order/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcheckout%252Fsuccess-117-success", "isController": false}, {"data": [[1.69118698E12, 0.35], [1.691187E12, 0.65]], "isOverall": false, "label": "contaftconfirm/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-119-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-1-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti616@delinkiti616.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-0-success", "isController": false}, {"data": [[1.69118696E12, 3.45], [1.69118698E12, 1.55]], "isOverall": false, "label": "GET Product Selection 2-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 2-success", "isController": false}, {"data": [[1.69118694E12, 0.05], [1.69118696E12, 0.2]], "isOverall": false, "label": "Get Search Thread no. 3-success", "isController": false}, {"data": [[1.69118698E12, 0.85], [1.691187E12, 0.15]], "isOverall": false, "label": "GET Billing Info 3-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Cart After Removal-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti618@delinkiti618.com-0-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Cart-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Chekout-success", "isController": false}, {"data": [[1.69118694E12, 0.25], [1.69118696E12, 0.75]], "isOverall": false, "label": "openhome/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%252Fhome-213-success", "isController": false}, {"data": [[1.69118698E12, 0.55], [1.691187E12, 0.45]], "isOverall": false, "label": "GET Confirm Order-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti602@delinkiti602.com-1-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti603@delinkiti603.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05], [1.69118696E12, 3.5], [1.69118698E12, 1.45]], "isOverall": false, "label": "GET Product Selection-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti601@delinkiti601.com-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 7-success", "isController": false}, {"data": [[1.69118698E12, 1.0]], "isOverall": false, "label": "GET Open Cart-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 16-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-0-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti619@delinkiti619.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.15], [1.69118696E12, 3.55], [1.69118698E12, 1.3]], "isOverall": false, "label": "Post Search Site Data-success", "isController": false}, {"data": [[1.69118696E12, 0.15], [1.69118698E12, 0.1]], "isOverall": false, "label": "Get Search Thread no. 16-success", "isController": false}, {"data": [[1.69118698E12, 0.15], [1.691187E12, 0.85]], "isOverall": false, "label": "GET Logout Page-1-success", "isController": false}, {"data": [[1.69118698E12, 0.1], [1.691187E12, 0.9]], "isOverall": false, "label": "GET Logout Page 2-success", "isController": false}, {"data": [[1.69118694E12, 1.0]], "isOverall": false, "label": "Open Register Page-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 7-success", "isController": false}, {"data": [[1.69118696E12, 2.9], [1.69118698E12, 2.1]], "isOverall": false, "label": "GET Cart Info-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti609@delinkiti609.com-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 13-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti608@delinkiti608.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti615@delinkiti615.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-1-success", "isController": false}, {"data": [[1.69118698E12, 0.65], [1.691187E12, 0.35]], "isOverall": false, "label": "GET Payment Confirmation-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti614@delinkiti614.com-1-success", "isController": false}, {"data": [[1.69118694E12, 0.4], [1.69118696E12, 0.6]], "isOverall": false, "label": "continueafterreg/mod_pagespeed_beacon?url=https%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Daccount%252Faccount-211-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti605@delinkiti605.com-success", "isController": false}, {"data": [[1.691187E12, 1.0]], "isOverall": false, "label": "GET Home After Logout-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti611@delinkiti611.com-1-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti604@delinkiti604.com-success", "isController": false}, {"data": [[1.69118698E12, 0.05]], "isOverall": false, "label": "POST Billing Info Thread no. 3-success", "isController": false}, {"data": [[1.69118696E12, 0.2], [1.69118698E12, 0.05]], "isOverall": false, "label": "Get Search Thread no. 4-success", "isController": false}, {"data": [[1.691187E12, 1.0]], "isOverall": false, "label": "continue after logout/mod_pagespeed_beacon?url=http%3A%2F%2Fopencart.abstracta.us%2Findex.php%3Froute%3Dcommon%2Fhome-234-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti607@delinkiti607.com-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-0-success", "isController": false}, {"data": [[1.69118694E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti606@delinkiti606.com-success", "isController": false}, {"data": [[1.69118696E12, 0.05]], "isOverall": false, "label": "POST Account Info delinkiti620@delinkiti620.com-1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.691187E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.2, "minX": 1.69118694E12, "maxY": 35.3, "series": [{"data": [[1.69118694E12, 9.2], [1.69118696E12, 35.3], [1.69118698E12, 34.15], [1.691187E12, 11.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 20000, "maxX": 1.691187E12, "title": "Total Transactions Per Second"}},
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
