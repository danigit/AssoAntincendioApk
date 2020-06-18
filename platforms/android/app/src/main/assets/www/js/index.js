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
        this.bind();
        document.addEventListener('deviceready', this.bind, false);
    },

    bind: function() {
        var targeUrl = "http://www.assoantincendio.com/areaclienti/Asso/index.php";
        window.location.replace(targeUrl);
    }
};

$(document).ready(function() {
    app.initialize()
});

/*
$("#call").on('click', function()
    {
      try{
      window.plugins.CallNumber.callNumber(function (result)
                                          {
                                            alert("Success:"+result);
                                          }, 
                                          function(result)
                                          {
                                            alert("Error:"+result);
                                          }, "+393474526664", false);  
      }
      catch(err){
       alert("ERRORE");
       alert(err);
      }
    });
  */