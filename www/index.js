/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function validateForm() {
    var un = document.loginform.usr.value;
    var pw = document.loginform.pword.value;
    var username = "admin";
    var password = "admin";
    if ((un == username) && (pw == password)) {
        window.location = "home.html";
        return true;
    } else {
        alert("Login was unsuccessful, please check your username and password");
        return false;
    }
}
 

        $(document).on("pagecreate", "#fade_page1", function() {
            $(document).on("swiperight", function(e) {
                if ($.mobile.activePage.jqmData("panel") !== "open") {
                    if (e.type === "swipeleft") {
                        $("#panel1").panel("open");

                    } else if (e.type === "swiperight") {
                        $("#panel1").panel("open");

                    }
                }
            });
        });
        $(document).on("pagecreate", "#fade_page2", function() {
            $(document).on("swiperight", function(e) {
                if ($.mobile.activePage.jqmData("panel") !== "open") {
                    if (e.type === "swipeleft") {
                        $("#panel2").panel("open");

                    } else if (e.type === "swiperight") {
                        $("#panel2").panel("open");

                    }
                }
            });
        });
        $(document).on("pagecreate", "#fade_page3", function() {
            $(document).on("swiperight", function(e) {
                if ($.mobile.activePage.jqmData("panel") !== "open") {
                    if (e.type === "swipeleft") {
                        $("#panel3").panel("open");

                    } else if (e.type === "swiperight") {
                        $("#panel3").panel("open");

                    }
                }
            });
        });
       
