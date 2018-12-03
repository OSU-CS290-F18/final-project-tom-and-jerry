(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navBar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<canvas id=\"layer\" class=\"hidden\"></canvas>\n<div id=\"nav\">\n		<div id=\"logobox\"><img id=\"logo\" src=\"./logo.png\"></div>\n \n        <div class=\"navbutton\" id=\"btadd\"><i class=\"fas fa-plus\"></i>ADD</div>\n        <div class=\"navbutton\" id=\"btsearch\"><i class=\"fas fa-search\"></i>SEARCH</div>\n        <div id=\"filterbox\" class=\"hidden\">\n                   <div></div>\n                   <div class=\"filter-input-container\"><lable class=\"inputtype\">Text</lable><input type=\"text\"></div>\n                   <div class=\"filter-input-container\"><lable class=\"inputtype\">Size</lable><input  type=\"range\" min=\"0\" defaultValue=\"0\"><lable> 0</lable></div>\n                   <div class=\"filter-input-container\">\n                                <lable class=\"inputtype\">Type</lable>\n                                     <select>\n                                          <option value=\"Any\">Any</option>\n                                          <option value=\"pie\">Pie</option>\n                                          <option value=\"bar\">Bar</option>\n                                          <option value=\"radar\">Radar</option>\n                                          <option value=\"polarArea\">Polar Area</option>\n                                     </select>\n                  </div>\n        </div>\n        <div class=\"navbutton\" id= \"about-button\"><i class=\"far fa-question-circle\"></i>ABOUT</div>\n</div>";
},"useData":true});
})();