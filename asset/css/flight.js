// radio button tab

//radio tabcontent
$(document).ready(function () {
  $('input[type="radio"]').click(function () {
    if ($(this).attr("value") == "RoundTrip") {
      $(".box").hide();
      $(".red").show();
    }
    if ($(this).attr("value") == "OneWay") {
      $(".box").hide();
      $(".green").show();
    }
    if ($(this).attr("value") == "MultiTrip") {
      $(".box").hide();
      $(".blue").show();
    }
  });
});


// datepicker

// 0

$("#datepicker").datepicker({
  defaultDate: "+0",
  // changeMonth: true,
  dateFormat: "dd-mm-yy",
  minDate: "+0",
  onSelect: function (dateText, inst) {
    var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
    d.setDate(d.getDate() + 1);
    $("datepicker1").val($.datepicker.formatDate(inst.settings.dateFormat, d));

  },

  onClose: function (selectedDate) {
    $("#datepicker1").datepicker("option", "minDate", selectedDate);

  }

});


// 1


$("#datepicker1").datepicker({
  defaultDate: "+0",
  // changeMonth: true,
  dateFormat: "dd-mm-yy",
  minDate: "+0",
  onSelect: function (dateText, inst) {
    var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
    d.setDate(d.getDate() + 1);
    $("datepicker1").val($.datepicker.formatDate(inst.settings.dateFormat, d));

  },

  // onClose: function (selectedDate) {
  //     $("#datepicker1").datepicker("option", "minDate", selectedDate);

  // }

});



// 2


$("#datepicker2").datepicker({
  defaultDate: "+0",
  // changeMonth: true,
  dateFormat: "dd-mm-yy",
  minDate: "+0",
  onSelect: function (dateText, inst) {
    var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
    d.setDate(d.getDate() + 1);
    $("datepicker2").val($.datepicker.formatDate(inst.settings.dateFormat, d));

  },

  // onClose: function (selectedDate) {
  //     $("#datepicker1").datepicker("option", "minDate", selectedDate);

  // }

});


// 3


$("#datepicker3").datepicker({
  defaultDate: "+0",
  // changeMonth: true,
  dateFormat: "dd-mm-yy",
  minDate: "+0",
  onSelect: function (dateText, inst) {
    var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
    d.setDate(d.getDate() + 1);
    $("datepicker3").val($.datepicker.formatDate(inst.settings.dateFormat, d));

  },

  // onClose: function (selectedDate) {
  //     $("#datepicker1").datepicker("option", "minDate", selectedDate);

  // }

});


// 4

$("#datepicker4").datepicker({
  defaultDate: "+0",
  // changeMonth: true,
  dateFormat: "dd-mm-yy",
  minDate: "+0",
  onSelect: function (dateText, inst) {
    var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
    d.setDate(d.getDate() + 1);
    $("datepicker4").val($.datepicker.formatDate(inst.settings.dateFormat, d));

  },

  // onClose: function (selectedDate) {
  //     $("#datepicker1").datepicker("option", "minDate", selectedDate);

  // }

});






// traveler for flights


$(document).ready(function () {
  if ($('div.trav_toggle').length > 0) {
    $('div.trav_toggle').click(function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).addClass('close');
        $(this).next().slideDown(100);
        return false;
      } else {
        $(this).removeClass('close');
        $(this).addClass('open');
        $(this).next().slideUp(100);
        return false;
      }
    });
  }
  $('.trav_done').click(function () {
    if ($('div.trav_toggle').hasClass('close')) {
      $('div.trav_toggle').removeClass('close');
      $('div.trav_toggle').addClass('open');
      $('div.trav_toggle').next().slideUp(100);
    }
  });
});



// 


function process(v) {
  var Adult = parseInt(document.getElementById("ddlAdult").value);
  var Child = parseInt(document.getElementById("ddlChild").value);
  var Infant = parseInt(document.getElementById("ddlInfant").value);
  Adult += v;
  var total = Adult + Child;
  if (total <= 9 && Adult >= 1) {
    document.getElementById("ddlAdult").value = Adult;
    if (Infant > Adult) {
      document.getElementById("ddlInfant").value = Adult;
    }
    var TotTravelers = Adult + Child + Infant;
    document.getElementById("txtTotalTravelers").value = (TotTravelers + " Traveler(s)");
  }
}


function process2(s) {
  var Adult = parseInt(document.getElementById("ddlAdult").value);
  var Child = parseInt(document.getElementById("ddlChild").value);
  var Infant = parseInt(document.getElementById("ddlInfant").value);
  Child += s;
  var total = Adult + Child;
  if (total <= 9 && Child >= 0) {
    document.getElementById("ddlChild").value = Child;
    var TotTravelers = Adult + Child + Infant;
    document.getElementById("txtTotalTravelers").value = (TotTravelers + " Traveler(s)");
  }
}


function process3(sh) {
  var Adult = parseInt(document.getElementById("ddlAdult").value);
  var Infant = parseInt(document.getElementById("ddlInfant").value);
  var Child = parseInt(document.getElementById("ddlChild").value);
  Infant += sh;
  if (Infant <= Adult && Infant >= 0) {
    document.getElementById("ddlInfant").value = Infant;
    var TotTravelers = Adult + Child + Infant;
    document.getElementById("txtTotalTravelers").value = (TotTravelers + " Traveler(s)");
  }
}

// json




//json form search inputs
// 🔹 Static list of country names
var countryList = [
  "MAA - Madras (Chennai)",
  "CJB - Coimbatore",
  "BLR - Bengaluru",
  "DEL - Delhi",
  "BOM - Mumbai",
  "HYD - Hyderabad",
  "CCU - Kolkata",
  "TRV - Thiruvananthapuram",
  "PNQ - Pune",
  "GOI - Goa"
];

// 🔹 Reusable dropdown search function
function setupSearch(inputId, dropdownId) {
  var searchInput = document.getElementById(inputId);
  var dropdown = document.getElementById(dropdownId);

  function populateDropdown(query) {
    dropdown.innerHTML = ''; // Clear old list

    var filtered = countryList.filter(function (country) {
      return country.toLowerCase().includes(query.toLowerCase());
    });

    filtered.forEach(function (country) {
      var listItem = document.createElement("li");
      listItem.textContent = country;
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", function () {
        searchInput.value = country;
        dropdown.innerHTML = ''; // Clear after select
      });
      dropdown.appendChild(listItem);
    });

    // If no match found
    if (filtered.length === 0) {
      var noItem = document.createElement("li");
      noItem.textContent = "No results found";
      noItem.style.color = "gray";
      dropdown.appendChild(noItem);
    }
  }

  // Show all countries on focus
  searchInput.addEventListener("focus", function () {
    populateDropdown(''); // Show all countries
    dropdown.style.display = "block";
  });

  // Filter on typing
  searchInput.addEventListener("input", function () {
    populateDropdown(searchInput.value);
    dropdown.style.display = "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && e.target !== searchInput) {
      dropdown.innerHTML = '';
      dropdown.style.display = "none";
    }
  });
}

// 🔹 Apply for all inputs
setupSearch("searchInput", "cityDropdown");
setupSearch("searchInput1", "cityDropdown1");
setupSearch("searchInput2", "cityDropdown2");
setupSearch("searchInput3", "cityDropdown3");
setupSearch("searchInput4", "cityDropdown4");
setupSearch("searchInput5", "cityDropdown5");
setupSearch("searchInput6", "cityDropdown6");
setupSearch("searchInput7", "cityDropdown7");
setupSearch("searchInput8", "cityDropdown8");
setupSearch("searchInput9", "cityDropdown9");

// 

function switchText() {
  var obj1 = document.getElementById('searchInput').value;
  var obj2 = document.getElementById('searchInput1').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;

  // Save the swapped values to the input element.
  document.getElementById('searchInput').value = obj1;
  document.getElementById('searchInput1').value = obj2;
}

function switchText1() {
  var obj1 = document.getElementById('searchInput2').value;
  var obj2 = document.getElementById('searchInput3').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;

  // Save the swapped values to the input element.
  document.getElementById('searchInput2').value = obj1;
  document.getElementById('searchInput3').value = obj2;
}

function switchText2() {
  var obj1 = document.getElementById('searchInput4').value;
  var obj2 = document.getElementById('searchInput5').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;

  // Save the swapped values to the input element.
  document.getElementById('searchInput4').value = obj1;
  document.getElementById('searchInput5').value = obj2;
}

function switchText3() {
  var obj1 = document.getElementById('searchInput6').value;
  var obj2 = document.getElementById('searchInput7').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;

  // Save the swapped values to the input element.
  document.getElementById('searchInput6').value = obj1;
  document.getElementById('searchInput7').value = obj2;
}


function switchText4() {
  var obj1 = document.getElementById('searchInput8').value;
  var obj2 = document.getElementById('searchInput9').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;

  // Save the swapped values to the input element.
  document.getElementById('searchInput8').value = obj1;
  document.getElementById('searchInput9').value = obj2;
}


// loader

setTimeout(function () {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".showall").style.display = "block";
}, 5000);

// loader-end
