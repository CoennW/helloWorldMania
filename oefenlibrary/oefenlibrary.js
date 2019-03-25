 var oefenlibrary = (function () {

                    my = {};

                    //private properties
                    var name,  
                        age,
                        randomNumber;

                    // Public porperties 
                    my.name = function(value) {
                        if(typeof value !== "undefined") {
                            name = value;
                        } else {
                            return name;
                        }   
                    };
                    
                    my.age = function(value) {
                        if(typeof value !== "undefined") {
                            age = value;
                        } else {
                            return age;
                        }
                    };

                    //private functions 
                    function generateNumber(min, max) {

                        randomNumber = Math.floor(Math.random() * max) + min; 
                        return randomNumber;
                    };

                    //public functions 
                    my.showNameAge = function () {

                        return "Hello your name is " + my.name + " and your age is " + my.age;

                    };

                    my.showLanguage = function (language) {

                        if (language == "nl") {
                            return "Hallo, welkom bij HelloWorldMania!";
                        } else if (language = "en") {
                            return "Hello, welcome to HelloWorldMania!";
                        } else {
                            return "Language is not available";
                        }


                    };

                    my.randomLine = function () {
                        switch (generateNumber(0, 3)) {
                            case 0:
                                return "SCO4 en UXU4 is best goed, maar DED4 is veel beter";

                            case 1:
                                return "Waling DED";

                            case 2:
                                return "DED-eathers dragen geen zwarte gewaden, hoogstens een zwart t-shirt";

                        }

                           };
                     return my;

 }());
