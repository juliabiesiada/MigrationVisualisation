var w = 1260;
var h = 3300;
var middleX = 750;
var middleY = 400;
var spacing = 18;
var xRay;
var yRay;
var family = [];
var employment = [];
var relatives = [];
var diversity = [];
var other = [];
var total = [];
var reasonsValues = [];
var yValues = [];
var prevYValues = [];
var chosenCountriesInitRange = [];
var chosenValues = [];
var colorValues = [];
var chosenYear;
var chosenLetter;
var chosenContinent;
var maxValueReason;
var minValueReason;
var minValue;
var maxValue;
var chosenCountries = [];
var countriesToPrint = [];
var font = 'Kiwi Maru';
var radiusSmall = 50;
var radiusBig = 450;
var rowWidth = 40;
var tempDegrees = [];
var previousBtnLetter;
var previousBtnYear;
var previousBtnContinent;
var countriesAll = [];
var countries2006 = [];
var countries2007 = [];
var countries2008 = [];
var countries2009 = [];
var countries2010 = [];
var countries2011 = [];
var countries2012 = [];
var countries2013 = [];
var countries2014 = [];
var countries2015 = [];
var countries2016 = [];
var countries2017 = [];
var countries2018 = [];
var countries2019 = [];
var valuesAll = [];
var values2006 = [];
var values2007 = [];
var values2008 = [];
var values2009 = [];
var values2010 = [];
var values2011 = [];
var values2012 = [];
var values2013 = [];
var values2014 = [];
var values2015 = [];
var values2016 = [];
var values2017 = [];
var values2018 = [];
var values2019 = [];
var text1 = "Notice how the top countries     are not the ones with the                 highest population. Mexico,               Dominican Republic and                 Philippines frequently appear     among the 3 top countries."
var continents = ["btnEurope","btnAfrica","btnSouthAmerica","btnNorthAmerica","btnAustraliaAndOceania","btnAsia"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ALL"];
var countriesAsia = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Burma", "Cambodia", "China (People's Republic)", "Georgia", "Hong Kong", "India", "Indonesia", "Iran", "Iraq", "Israel", "Jordan", "Japan", "Kazakhstan", "Korea (North and South)", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Macau", "Malaysia", "Maldives", "Mongolia", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Soviet Union (former)", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
var countriesAfrica = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Congo (Democratic Republic)", "Congo (Republic)", "Cote d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini (formerly Swaziland)", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritius", "Mauritania", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Senegal", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"];
var countriesSouthAmerica = ["Argentina", "Aruba", "Bolivia", "Brazil", "Chile", "Colombia", "Curacao", "Ecuador", "Guyana", "Mexico", "Netherlands Antilles (former)", "Nicaragua", "Panama", "Paraguay", "Peru", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela"];
var countriesNorthAmerica = ["Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Bermuda", "Canada", "Cayman Islands", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Puerto Rico", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Turks and Caicos Islands", "United States", "Virgin Islands (British)", "Virgin Islands (U.S.)"];
var countriesEurope = ["Albania", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Czechoslovakia", "Denmark", "Estonia", "Finland", "France", "Germany", "Georgia", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia (formerly Macedonia)", "Norway", "Poland", "Portugal", "Romania", "Russia", "Serbia", "Serbia and Montenegro", "Serbia and Montenegro (former)", "Soviet Union (former)", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom"];
var countriesAustraliaOceania = ["American Samoa", "Australia", "Fiji", "French Polynesia", "Marshall Islands", "Micronesia (Federated States)", "Montserrat", "New Caledonia", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Sint Maarten", "Tonga"];

//filter countries by letter of alphabet
var chooseLetter = function(letter) {

  //setting a global variable to store user's choice
  chosenLetter = letter;

  //feedback about which button is pressed
  if (previousBtnContinent != null) {
    previousBtnContinent.style.background = "none";
  };
  previousBtnLetter.style.background = "none";
  previousBtnLetter = document.getElementById("btn"+letter);
  previousBtnLetter.style.background = "black";

  //resetting arrays
  chosenCountries = [];
  chosenValues = [];
  if (letter == "ALL") {
    //showing the range slider
    document.getElementById("sliderRange").style.display = "block";
    chosenCountries = Array.from(countriesAll[2019-chosenYear]);
    chosenCountriesInitRange = Array.from(chosenCountries);
    chosenValues = Array.from(valuesAll[2019-chosenYear]);
  }else {
    //hiding the range slider
    document.getElementById("sliderRange").style.display = "none";
    for (var i = 0; i < countriesAll[2019-chosenYear].length; i++) {
      if(countriesAll[2019-chosenYear][i].charAt(0) == letter) {
        chosenCountries.push(countriesAll[2019-chosenYear][i]);
        chosenValues.push(valuesAll[2019-chosenYear][i]);
      }
    }
  }

  //recalculating max and min
  maxValue = max(chosenValues);
  minValue = min(chosenValues);
  //in case there is only one country, min has to be set to zero for the yellow line to be drawn
  if (minValue == maxValue) {minValue = 0};
  //resetting the range
  chosenCountriesInitRange = Array.from(chosenCountries);
  redraw();
}

var chooseYear = function(year) {

  document.getElementById("sliderRange").value = 100;
  //feedback about which button is pressed
  previousBtnYear.style.background = "none";
  previousBtnYear = document.getElementById("btn"+year);
  previousBtnYear.style.background = "black";

  //fitering values
  chosenValues = Array.from(valuesAll[2019-year]);
  chosenCountries = Array.from(countriesAll[2019-year]);

  //saving user's choice in a global variable
  chosenYear = year;

  //resetting min and max
  maxValue = max(chosenValues);
  minValue = min(chosenValues);
  //in case there is only one country, min has to be set to zero for the yellow line to be drawn
  if (minValue == maxValue) {minValue = 0};

  //calling chooseLetter or continent in order to prevent resetting to "ALL" when the year is changed
  if (chosenLetter != "ALL" && chosenContinent != "") {
    chooseContinent(chosenContinent);
  }else {
    chooseLetter(chosenLetter);
  }
  specifyRange(100);
  redraw();
}

var chooseContinent = function(id) {

  //reset the letter choice
  chooseLetter("ALL");
  //hiding the range slider
  document.getElementById("sliderRange").style.display = "none";
  //save user's choice to a global variable
  chosenContinent = id;
  //feedback about which button is pressed
  previousBtnLetter.style.background = "none";
  if (previousBtnContinent != null) {
    previousBtnContinent.style.background = "none";
  }
  previousBtnContinent = document.getElementById(id);
  previousBtnContinent.style.background = "black";
  var tempChosenCountries = Array.from(chosenCountries);
  var tempChosenValues = Array.from(chosenValues);
  var selectedArray = [];
  chosenCountries = [];
  chosenValues = [];
  switch (id) {
    case "btnEurope":
      selectedArray = Array.from(countriesEurope);
      break;
    case "btnNorthAmerica":
      selectedArray = Array.from(countriesNorthAmerica);
      break;
    case "btnSouthAmerica":
      selectedArray = Array.from(countriesSouthAmerica);
      break;
    case "btnAfrica":
      selectedArray = Array.from(countriesAfrica);
      break;
    case "btnAsia":
      selectedArray = Array.from(countriesAsia);
      break;
    case "btnAustraliaAndOceania":
      selectedArray = Array.from(countriesAustraliaOceania);
      break;
    default:
      break;
  }
  for (var i = 0; i < tempChosenCountries.length; i++) {
    for (var j = 0; j < selectedArray.length; j++) {
      if (tempChosenCountries[i] == selectedArray[j]) {
        chosenCountries.push(tempChosenCountries[i]);
        chosenValues.push(tempChosenValues[i]);
        break;
      }
    }
  }
  maxValue = max(chosenValues);
  minValue = min(chosenValues);
}

//specify how many countries to display (only when "All is selected")
var specifyRange = function (value) {

  chosenValues = [];
  //this is needed to restore the range when the choice is made
  chosenCountries = Array.from(chosenCountriesInitRange);
  chosenCountries = chosenCountries.slice(0, value);

  //adding values corresponding to the countries --- should be changed: create chosenValuesInitRange
  for (var i = 0; i < chosenCountries.length; i++) {
    chosenValues.push(valuesAll[2019-chosenYear][i]);
  }

  //recalculating max and min values
  maxValue = max(chosenValues);
  minValue = min(chosenValues);

  //in case there is only one country, min has to be set to zero for the yellow line to be drawn
  if (minValue == maxValue) {minValue = 0};
}

function isMouseOverCountryName(name) {

  //centering the world to the middle of the circle
  var centerX = mouseX-middleX;
  var centerY = mouseY-middleY;

  //transforming to polar coordinates, transforming theta from radians to degrees
  var rho = Math.sqrt(Math.pow(centerX,2) + Math.pow(centerY,2))
  var theta = Math.atan(-centerY/centerX);
  var thetaDeg = theta*(180/Math.PI);

  //degrees corresponding to the countries are stored in an array
  var tempIndex = chosenCountries.indexOf(name);
  var i = tempDegrees[tempIndex];

  if (i < 90) {
    wordDeg = -i
    quadrant = 1;
  }else if (i < 180) {
    wordDeg = 180 - i;
    quadrant = 2;
  }else if (i < 270) {
    wordDeg = 180 - i;
    quadrant = 3;
  }else if (i < 360) {
    wordDeg = 360 - i;
    quadrant = 4;
  }

  if (quadrant == 1 || quadrant == 4) {
    if (thetaDeg >= wordDeg-2 && thetaDeg <= wordDeg+2 && rho >= 255 && rho <= 305 && mouseX > middleX){
      if (mouseIsPressed) {
        console.log(name);
      };
      return true;
    }
  } else if (quadrant == 2 || quadrant == 3) {
    if (thetaDeg >= wordDeg-1 && thetaDeg <= wordDeg+1 && rho >= 255 && rho <= 305 && mouseX < middleX){
      if (mouseIsPressed) {
        console.log(name);
      };
      return true;
    }
  }
  return false;
}

function isMouseOverVertex(j, values) {
  for (var i = 0; i < values; i++) {
    if(mouseY == values[i] && mouseX == i*14) {
      return true;
    }
  }
  return false;
}

function preload() {
  table = loadTable("data/Migration-data-USA-clean-final.csv", "csv", "header");
}

function setup() {

  createCanvas(w,h);

  //setup buttons' and slider's handlers
  for (let i = 0; i < 27; i++) {
    var btn = document.getElementById("btn"+alphabet[i]);
    btn.onclick = function() {chooseLetter(alphabet[i])};
  }
  for (let i = 0; i < 14; i++) {
    var btn = document.getElementById("btn"+(2019-i).toString());
    btn.onclick = function() {chooseYear(2019-i)};
  }
  for (let i = 0; i < 6; i++) {
    var btn = document.getElementById(continents[i]);
    btn.onclick = function() {chooseContinent(continents[i])}
  }
  previousBtnLetter = document.getElementById("btnALL");
  previousBtnLetter.style.background = "black";
  previousBtnYear = document.getElementById("btn2019");
  previousBtnYear.style.background = "black";
  document.getElementById("sliderRange").oninput = function() { specifyRange(document.getElementById("sliderRange").value) }

  //set up colors for the second visualisation
  colorValues.push([127,201,127, 255]);
  colorValues.push([240,2,127, 255]);
  colorValues.push([190,174,212, 255]);
  colorValues.push([255,255,153, 255]);
  colorValues.push([56,108,176, 255]);

  //set up initial values of filters
  chosenYear = 2019;
  chosenLetter = "ALL";

  //countriesAll and valuesAll are set up as 2D arrays, where each subarray is a separate year, starting by 2019
  //Non-disclosed values (D), are being replaced with 0, a "*" is added to a country name to indicate possible inaccuracy
  countriesAll = table.getColumn("Country of birth");
  valuesAll = table.getColumn("Total");
  for (var i = 0; i < valuesAll.length; i++) {
    if (valuesAll[i] == "D") {
      valuesAll[i] = 0;
      countriesAll[i] = countriesAll[i]+"*";
    }
  }
  values2019 = valuesAll.slice(1,199);
  values2018 = valuesAll.slice(200, 400);
  values2017 = valuesAll.slice(401, 598);
  values2016 = valuesAll.slice(599, 796);
  values2015 = valuesAll.slice(797, 991);
  values2014 = valuesAll.slice(992, 1188);
  values2013 = valuesAll.slice(1189, 1382);
  values2012 = valuesAll.slice(1383, 1578);
  values2011 = valuesAll.slice(1579, 1773);
  values2010 = valuesAll.slice(1774, 1970);
  values2009 = valuesAll.slice(1971, 2166);
  values2008 = valuesAll.slice(2167, 2358);
  values2007 = valuesAll.slice(2359, 2547);
  values2006 = valuesAll.slice(2548, 2739);
  countries2019 = countriesAll.slice(1,199);
  countries2018 = countriesAll.slice(200, 400);
  countries2017 = countriesAll.slice(401, 598);
  countries2016 = countriesAll.slice(599, 796);
  countries2015 = countriesAll.slice(797, 991);
  countries2014 = countriesAll.slice(992, 1188);
  countries2013 = countriesAll.slice(1189, 1382);
  countries2012 = countriesAll.slice(1383, 1578);
  countries2011 = countriesAll.slice(1579, 1773);
  countries2010 = countriesAll.slice(1774, 1970);
  countries2009 = countriesAll.slice(1971, 2166);
  countries2008 = countriesAll.slice(2167, 2358);
  countries2007 = countriesAll.slice(2359, 2547);
  countries2006 = countriesAll.slice(2548, 2739);


  countriesAll = []
  countriesAll.push(countries2019);
  countriesAll.push(countries2018);
  countriesAll.push(countries2017);
  countriesAll.push(countries2016);
  countriesAll.push(countries2015);
  countriesAll.push(countries2014);
  countriesAll.push(countries2013);
  countriesAll.push(countries2012);
  countriesAll.push(countries2011);
  countriesAll.push(countries2010);
  countriesAll.push(countries2009);
  countriesAll.push(countries2008);
  countriesAll.push(countries2007);
  countriesAll.push(countries2006);
  valuesAll = []
  valuesAll.push(values2019);
  valuesAll.push(values2018);
  valuesAll.push(values2017);
  valuesAll.push(values2016);
  valuesAll.push(values2015);
  valuesAll.push(values2014);
  valuesAll.push(values2013);
  valuesAll.push(values2012);
  valuesAll.push(values2011);
  valuesAll.push(values2010);
  valuesAll.push(values2009);
  valuesAll.push(values2008);
  valuesAll.push(values2007);
  valuesAll.push(values2006);

  //these 3 variables allow to modify the range and filter the countries
  chosenValues = Array.from(values2019);
  chosenCountries = Array.from(countries2019);
  chosenCountriesInitRange = Array.from(chosenCountries);

  //getting data for the visualisation below
  for (var i = 0; i<table.getRowCount(); i++) {
    if (table.getColumn("Country of birth")[i] == "Total") {
      family.push(table.getColumn("Family-sponsored preferences")[i]);
      employment.push(table.getColumn("Employment-based preferences")[i]);
      relatives.push(table.getColumn("Immediate relatives of U.S. citizens")[i]);
      diversity.push(table.getColumn("Diversity")[i]);
      other.push(table.getColumn("Other")[i]);
      total.push(table.getColumn("Total")[i]);
    };
  };

  //pushing all the values divided by reasons into one array
  reasonsValues.push(other);
  reasonsValues.push(diversity);
  reasonsValues.push(employment);
  reasonsValues.push(family);
  reasonsValues.push(relatives);

  //parsing because of type mismatch lower in the code
  maxValueReason=parseFloat(max(total));
  minValueReason=parseFloat(min(min(family), min(employment), min(relatives), min(diversity), min(other)));

  //setting up the minimum and maximum values for the mapping functions
  minValue = min(valuesAll[0]);
  maxValue = max(valuesAll[0]);

  //other settings
  textFont(font);
  fontHeight = 14;
  angleMode(DEGREES);
  specifyRange(100);
}

function draw() {

  //set background to dark blue
  background(37, 48, 49);

  //the first array is needed because I don't get the exact index of an element in the array (so I always take the first one and remove it after drawing)
  //the second array stores degrees in order to be able to detect mouse hover in another function
  countriesToPrint = Array.from(chosenCountries);
  tempDegrees = [];

  textSize(fontHeight);
  translate(middleX,middleY);

  //external circle
  noFill();
  circle(0,0,radiusBig);

  for (var i = 0; i<360; i+=360/chosenCountries.length) {

    xRay = 0.5*radiusBig*cos(i);
    yRay = 0.5*radiusBig*sin(i);
    tempDegrees.push(i);
    if (isMouseOverCountryName(countriesToPrint[0])) {
      strokeWeight(2);
    }
    //drawing the dashed lines from the middle of the circle to the outline
    linedash(0,0,xRay,yRay,3,'-');
    //tranlating in order to be able to rotate the text around the circle
    translate(xRay,yRay);
    if (i>90 && i<270) {
      textAlign(RIGHT,CENTER);
      rotate(180+i);
    } else {
      rotate(i)
      textAlign(LEFT,CENTER);
    }
    fill(255);
    text(countriesToPrint[0], 0, 0);
    strokeWeight(0.5);
    countriesToPrint.shift();
    resetMatrix();
    translate(middleX,middleY);

  }
  //draw value rays on the circle
  for (var i = 0; i < chosenCountries.length; i++) {
    var lenght = map(chosenValues[i], floor(minValue), ceil(maxValue), 0, radiusBig);
    var xCoordinate = 0.5*lenght*cos(i*360/chosenCountries.length);
    var yCoordinate = 0.5*lenght*sin(i*360/chosenCountries.length);

    stroke(255,255,0, 255);
    if (isMouseOverCountryName(chosenCountries[i])) {
      strokeWeight(2);
    }
    line(0,0,xCoordinate,yCoordinate);
    strokeWeight(1);
  }

  textSize(fontHeight + 5);
  text(text1, -730, -100, 310, 200);
  textSize(fontHeight);

  //'wave' visualisation
  stroke(255);
  strokeWeight(0.5);
  translate(middleX-1400, 400)
  var x=0;
  var rowWidth = 60;
  for (var i = 0; i<14; i++) {
    line(x, 0, x, 400);
    textAlign(CENTER,CENTER);
    text((2006+i).toString(), x, 420);
    x+=rowWidth;
  }
  var i = 0;
  var horizontalLineLenght = 14*rowWidth;


  translate(0,400);
  sums = [];
  prevYValues = [];
  for (var i = 0; i < reasonsValues.length; i++) {
    yValues = [];
    for (var j = 0; j < reasonsValues[i].length; j++) {
      if (i == 0) {
        yValues.push(map(parseFloat(reasonsValues[i][j]), floor(minValueReason), ceil(maxValueReason), 0, 400));
        sums.push(parseFloat(reasonsValues[i][j]))
      } else {
        yValues.push(map(parseFloat(reasonsValues[i][j]) + parseFloat(sums[j]), floor(minValueReason), ceil(maxValueReason), 0, 400));
        sums[j] += parseFloat(reasonsValues[i][j]);
      }
    };
    fill(colorValues[i][0],colorValues[i][1],colorValues[i][2],colorValues[i][3]);
    beginShape();
    if (i == 0) {
      vertex(0, 0);
    }else {
      vertex(0, -prevYValues[0]);
    }
    vertex(0, -yValues[0]);
    noFill();
    textAlign(RIGHT,CENTER);
    text(sums[0], -3, -yValues[0]);
    fill(colorValues[i][0],colorValues[i][1],colorValues[i][2],colorValues[i][3]);
    vertex(rowWidth, -yValues[1]);
    vertex(2*rowWidth, -yValues[2]);
    vertex(3*rowWidth, -yValues[3]);
    if (sums[3]==maxValueReason) {
      noFill();
      textAlign(RIGHT,CENTER);
      text(sums[3], -3, -yValues[3]);
      fill(colorValues[i][0],colorValues[i][1],colorValues[i][2],colorValues[i][3]);
    }
    vertex(4*rowWidth, -yValues[4]);
    vertex(5*rowWidth, -yValues[5]);
    vertex(6*rowWidth, -yValues[6]);
    vertex(7*rowWidth, -yValues[7]);
    vertex(8*rowWidth, -yValues[8]);
    vertex(9*rowWidth, -yValues[9]);
    vertex(10*rowWidth,-yValues[10]);
    vertex(11*rowWidth,-yValues[11]);
    vertex(12*rowWidth,-yValues[12]);
    vertex(13*rowWidth,-yValues[13]);
    if (i == 0) {
      vertex(13*rowWidth, 0);
    }else {
      vertex(13*rowWidth, -prevYValues[13]);
      vertex(12*rowWidth,-prevYValues[12]);
      vertex(11*rowWidth,-prevYValues[11]);
      vertex(10*rowWidth,-prevYValues[10]);
      vertex(9*rowWidth, -prevYValues[9]);
      vertex(8*rowWidth, -prevYValues[8]);
      vertex(7*rowWidth, -prevYValues[7]);
      vertex(6*rowWidth, -prevYValues[6]);
      vertex(5*rowWidth, -prevYValues[5]);
      vertex(4*rowWidth, -prevYValues[4]);
      vertex(3*rowWidth, -prevYValues[3]);
      vertex(2*rowWidth, -prevYValues[2]);
      vertex(rowWidth, -prevYValues[1]);
    }
    endShape();
    prevYValues = Array.from(yValues);

    if(isMouseOverVertex(i, yValues)) {
      circle(mouseX,mouseY,20);
    }
  }

  //labels for the wave chart
  textSize(fontHeight+2);
  strokeWeight(0.5);
  translate(820,-250);
  fill(colorValues[4]);
  stroke(colorValues[4]);
  square(0,30,20);
  fill(colorValues[3]);
  stroke(colorValues[3]);
  square(0,60,20);
  fill(colorValues[2]);
  stroke(colorValues[2]);
  square(0,90,20);
  fill(colorValues[1]);
  stroke(colorValues[1]);
  square(0,120,20);
  fill(colorValues[0]);
  stroke(colorValues[0]);
  square(0,150,20);
  stroke(255);
  fill(255);
  textAlign(CENTER,CENTER);
  text("Immediate relatives of U.S. citizens",165,41);
  text("Employment-based preferences",153,71);
  text("Family-sponsored preferences",147,101);
  text("Diversity",62,131);
  text("Other",48,161);
}

//CREDITS: ThatIsAPseudo - https://github.com/processing/p5.js/issues/3336
function linedash(x1, y1, x2, y2, delta, style = '-') {
  // delta is both the length of a dash, the distance between 2 dots/dashes, and the diameter of a round
  let distance = dist(x1,y1,x2,y2);
  let dashNumber = distance/delta;
  let xDelta = (x2-x1)/dashNumber;
  let yDelta = (y2-y1)/dashNumber;

  for (let i = 0; i < dashNumber; i+= 2) {
    let xi1 = i*xDelta + x1;
    let yi1 = i*yDelta + y1;
    let xi2 = (i+1)*xDelta + x1;
    let yi2 = (i+1)*yDelta + y1;

    if (style == '-') { line(xi1, yi1, xi2, yi2); }
    else if (style == '.') { point(xi1, yi1); }
    else if (style == 'o') { ellipse(xi1, yi1, delta/2); }
  }
}
