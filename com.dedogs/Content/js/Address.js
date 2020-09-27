
window.obj = {};

function countrychange() {
    var selected = $("#lstCountry").find(":selected");
    console.log("Name: " + selected.text() + ", Index: " + countryObj[selected.text()].Index);

    var street = document.getElementById("street");
    var houseNumber = document.getElementById("houseNumber");
    var localityCity = document.getElementById("localityCity");
    var postOfficeBox = document.getElementById("POBox");

    var province = document.getElementById("province");
    var postalCode = document.getElementById("postalCode");
    var organization = document.getElementById("organization");
    var building = document.getElementById("building");

    street.style.display = "";
    houseNumber.style.display = "";
    localityCity.style.display = "";

    postOfficeBox.style.display = "none";
    province.style.display = "none";
    postalCode.style.display = "none";
    organization.style.display = "none";
    building.style.display = "none";

    //Index is odd or even.

    if ((countryObj[selected.text()].Index & 1) === 1) {
        postalCode.style.display = "";
    }

    if ((countryObj[selected.text()].Index & 2) === 2) {
        province.style.display = "";
        document.getElementById("txtProv").value = "";
    }

    if ((countryObj[selected.text()].Index & 4) === 4) {
        organization.style.display = "";
        document.getElementById("txtOrganization").value = "";
    }

    if ((countryObj[selected.text()].Index & 8) === 8) {
        document.getElementById("building").style.display = "";
        document.getElementById("txtBuilding").value = "";
    }

    localityCity.style.display = "";

}

var countryObj = {
    "Afghanistan": {
        "Name": "Afghanistan",
        "Index": 0
    },
    "Albania": {
        "Name": "Albania",
        "Index": 1
    },
    "Algeria": {
        "Name": "Algeria",
        "Index": 1
    },
    "Andorra": {
        "Name": "Andorra",
        "Index": 1
    },
    "Angola": {
        "Name": "Angola",
        "Index": 0
    },
    "Antarctica": {
        "Name": "Antarctica",
        "Index": 0
    },
    "Antigua and Barbuda": {
        "Name": "Antigua and Barbuda",
        "Index": 2
    },
    "Argentina": {
        "Name": "Argentina",
        "Index": 1
    },
    "Armenia": {
        "Name": "Armenia",
        "Index": 3
    },
    "Aruba": {
        "Name": "Aruba",
        "Index": 0
    },
    "Australia": {
        "Name": "Australia",
        "Index": 7
    },
    "Austria": {
        "Name": "Austria",
        "Index": 1
    },
    "Azerbaijan": {
        "Name": "Azerbaijan",
        "Index": 1
    },
    "Bahamas": {
        "Name": "Bahamas",
        "Index": 0
    },
    "Bahrain": {
        "Name": "Bahrain",
        "Index": 3
    },
    "Bangladesh": {
        "Name": "Bangladesh",
        "Index": 1
    },
    "Barbados": {
        "Name": "Barbados",
        "Index": 2
    },
    "Belarus": {
        "Name": "Belarus",
        "Index": 1
    },
    "Belgium": {
        "Name": "Belgium",
        "Index": 1
    },
    "Belize": {
        "Name": "Belize",
        "Index": 0
    },
    "Benin": {
        "Name": "Benin",
        "Index": 0
    },
    "Bermuda": {
        "Name": "Bermuda",
        "Index": 1
    },
    "Bhutan": {
        "Name": "Bhutan",
        "Index": 0
    },
    "Bolivia": {
        "Name": "Bolivia",
        "Index": 0
    },
    "Bosnia and Herzegovina": {
        "Name": "Bosnia and Herzegovina",
        "Index": 1
    },
    "Botswana": {
        "Name": "Botswana",
        "Index": 0
    },
    "Brazil": {
        "Name": "Brazil",
        "Index": 7
    },
    "Brunei Darussalam": {
        "Name": "Brunei Darussalam",
        "Index": 5
    },
    "Bulgaria": {
        "Name": "Bulgaria",
        "Index": 1
    },
    "Burkina Faso": {
        "Name": "Burkina Faso",
        "Index": 0
    },
    "Burundi": {
        "Name": "Burundi",
        "Index": 0
    },
    "Cambodia": {
        "Name": "Cambodia",
        "Index": 1
    },
    "Cameroon": {
        "Name": "Cameroon",
        "Index": 0
    },
    "Canada": {
        "Name": "Canada",
        "Index": 7
    },
    "Cape Verde": {
        "Name": "Cape Verde",
        "Index": 1
    },
    "Caribbean Netherlands": {
        "Name": "Caribbean Netherlands",
        "Index": 2
    },
    "Cayman Islands": {
        "Name": "Cayman Islands",
        "Index": 1
    },
    "Central African Republic": {
        "Name": "Central African Republic",
        "Index": 2
    },
    "Chad": {
        "Name": "Chad",
        "Index": 0
    },
    "Chile": {
        "Name": "Chile",
        "Index": 5
    },
    "China": {
        "Name": "China",
        "Index": 19
    },
    "Colombia": {
        "Name": "Colombia",
        "Index": 0
    },
    "Comoros": {
        "Name": "Comoros",
        "Index": 0
    },
    "Congo": {
        "Name": "Congo",
        "Index": 0
    },
    "Congo, The Democratic Republic of the": {
        "Name": "Congo, The Democratic Republic of the",
        "Index": 0
    },
    "Costa Rica": {
        "Name": "Costa Rica",
        "Index": 1
    },
    "Côte d'Ivoire": {
        "Name": "Côte d'Ivoire",
        "Index": 0
    },
    "Croatia": {
        "Name": "Croatia",
        "Index": 1
    },
    "Cuba": {
        "Name": "Cuba",
        "Index": 1
    },
    "Curaçao": {
        "Name": "Curaçao",
        "Index": 2
    },
    "Cyprus": {
        "Name": "Cyprus",
        "Index": 5
    },
    "Czech Republic": {
        "Name": "Czech Republic",
        "Index": 5
    },
    "Denmark": {
        "Name": "Denmark",
        "Index": 5
    },
    "Djibouti": {
        "Name": "Djibouti",
        "Index": 0
    },
    "Dominica": {
        "Name": "Dominica",
        "Index": 0
    },
    "Dominican Republic": {
        "Name": "Dominican Republic",
        "Index": 3
    },
    "Ecuador": {
        "Name": "Ecuador",
        "Index": 1
    },
    "Egypt": {
        "Name": "Egypt",
        "Index": 3
    },
    "El Salvador": {
        "Name": "El Salvador",
        "Index": 3
    },
    "Equatorial Guinea": {
        "Name": "Equatorial Guinea",
        "Index": 0
    },
    "Eritrea": {
        "Name": "Eritrea",
        "Index": 0
    },
    "Estonia": {
        "Name": "Estonia",
        "Index": 5
    },
    "Ethiopia": {
        "Name": "Ethiopia",
        "Index": 0
    },
    "Fiji": {
        "Name": "Fiji",
        "Index": 0
    },
    "Finland": {
        "Name": "Finland",
        "Index": 5
    },
    "France": {
        "Name": "France",
        "Index": 1
    },
    "Gabon": {
        "Name": "Gabon",
        "Index": 0
    },
    "Gambia": {
        "Name": "Gambia",
        "Index": 0
    },
    "Georgia": {
        "Name": "Georgia",
        "Index": 1
    },
    "Germany": {
        "Name": "Germany",
        "Index": 5
    },
    "Ghana": {
        "Name": "Ghana",
        "Index": 0
    },
    "Greece": {
        "Name": "Greece",
        "Index": 21
    },
    "Greenland": {
        "Name": "Greenland",
        "Index": 1
    },
    "Grenada": {
        "Name": "Grenada",
        "Index": 0
    },
    "Guatemala": {
        "Name": "Guatemala",
        "Index": 3
    },
    "Guinea": {
        "Name": "Guinea",
        "Index": 0
    },
    "Guinea-Bissau": {
        "Name": "Guinea-Bissau",
        "Index": 1
    },
    "Guyana": {
        "Name": "Guyana",
        "Index": 0
    },
    "Haiti": {
        "Name": "Haiti",
        "Index": 5
    },
    "Holy See": {
        "Name": "Holy See",
        "Index": 1
    },
    "Honduras": {
        "Name": "Honduras",
        "Index": 3
    },
    "Hong Kong": {
        "Name": "Hong Kong",
        "Index": 2
    },
    "Hungary": {
        "Name": "Hungary",
        "Index": 1
    },
    "Iceland": {
        "Name": "Iceland",
        "Index": 1
    },
    "India": {
        "Name": "India",
        "Index": 1
    },
    "Indonesia": {
        "Name": "Indonesia",
        "Index": 5
    },
    "Iran, Islamic Republic of": {
        "Name": "Iran, Islamic Republic of",
        "Index": 1
    },
    "Iraq": {
        "Name": "Iraq",
        "Index": 3
    },
    "Israel": {
        "Name": "Israel",
        "Index": 1
    },
    "Italy": {
        "Name": "Italy",
        "Index": 3
    },
    "Jamaica": {
        "Name": "Jamaica",
        "Index": 0
    },
    "Japan": {
        "Name": "Japan",
        "Index": 19
    },
    "Jordan": {
        "Name": "Jordan",
        "Index": 1
    },
    "Kazakhstan": {
        "Name": "Kazakhstan",
        "Index": 1
    },
    "Kenya": {
        "Name": "Kenya",
        "Index": 1
    },
    "Kiribati": {
        "Name": "Kiribati",
        "Index": 2
    },
    "Korea, Democratic People's Republic of": {
        "Name": "Korea, Democratic People's Republic of",
        "Index": 0
    },
    "Korea, Republic of": {
        "Name": "Korea, Republic of",
        "Index": 3
    },
    "Kuwait": {
        "Name": "Kuwait",
        "Index": 1
    },
    "Kyrgyzstan": {
        "Name": "Kyrgyzstan",
        "Index": 1
    },
    "Lao, People's Democratic Republic": {
        "Name": "Lao, People's Democratic Republic",
        "Index": 1
    },
    "Latvia": {
        "Name": "Latvia",
        "Index": 1
    },
    "Lebanon": {
        "Name": "Lebanon",
        "Index": 0
    },
    "Lesotho": {
        "Name": "Lesotho",
        "Index": 1
    },
    "Liberia": {
        "Name": "Liberia",
        "Index": 0
    },
    "Libyan Arab Jamahiriya": {
        "Name": "Libyan Arab Jamahiriya",
        "Index": 0
    },
    "Liechtenstein": {
        "Name": "Liechtenstein",
        "Index": 1
    },
    "Lithuania": {
        "Name": "Lithuania",
        "Index": 1
    },
    "Luxembourg": {
        "Name": "Luxembourg",
        "Index": 1
    },
    "Macedonia, The Former Yugoslav Republic of": {
        "Name": "Macedonia, The Former Yugoslav Republic of",
        "Index": 1
    },
    "Madagascar": {
        "Name": "Madagascar",
        "Index": 1
    },
    "Malawi": {
        "Name": "Malawi",
        "Index": 0
    },
    "Malaysia": {
        "Name": "Malaysia",
        "Index": 5
    },
    "Maldives": {
        "Name": "Maldives",
        "Index": 7
    },
    "Mali": {
        "Name": "Mali",
        "Index": 0
    },
    "Malta": {
        "Name": "Malta",
        "Index": 1
    },
    "Mauritania": {
        "Name": "Mauritania",
        "Index": 0
    },
    "Mauritius": {
        "Name": "Mauritius",
        "Index": 2
    },
    "Mexico": {
        "Name": "Mexico",
        "Index": 3
    },
    "Moldova": {
        "Name": "Moldova",
        "Index": 1
    },
    "Monaco": {
        "Name": "Monaco",
        "Index": 1
    },
    "Mongolia": {
        "Name": "Mongolia",
        "Index": 3
    },
    "Montenegro": {
        "Name": "Montenegro",
        "Index": 1
    },
    "Morocco": {
        "Name": "Morocco",
        "Index": 1
    },
    "Mozambique": {
        "Name": "Mozambique",
        "Index": 1
    },
    "Myanmar": {
        "Name": "Myanmar",
        "Index": 2
    },
    "Namibia": {
        "Name": "Namibia",
        "Index": 0
    },
    "Nauru": {
        "Name": "Nauru",
        "Index": 2
    },
    "Nepal": {
        "Name": "Nepal",
        "Index": 3
    },
    "Netherlands": {
        "Name": "Netherlands",
        "Index": 1
    },
    "Netherlands Antilles": {
        "Name": "Netherlands Antilles",
        "Index": 2
    },
    "New Zealand": {
        "Name": "New Zealand",
        "Index": 1
    },
    "Nicaragua": {
        "Name": "Nicaragua",
        "Index": 0
    },
    "Niger": {
        "Name": "Niger",
        "Index": 0
    },
    "Nigeria": {
        "Name": "Nigeria",
        "Index": 5
    },
    "Norway": {
        "Name": "Norway",
        "Index": 5
    },
    "Oman": {
        "Name": "Oman",
        "Index": 1
    },
    "Pakistan": {
        "Name": "Pakistan",
        "Index": 1
    },
    "Panama": {
        "Name": "Panama",
        "Index": 3
    },
    "Papua New Guinea": {
        "Name": "Papua New Guinea",
        "Index": 3
    },
    "Paraguay": {
        "Name": "Paraguay",
        "Index": 5
    },
    "Peru": {
        "Name": "Peru",
        "Index": 0
    },
    "Philippines": {
        "Name": "Philippines",
        "Index": 5
    },
    "Poland": {
        "Name": "Poland",
        "Index": 5
    },
    "Portugal": {
        "Name": "Portugal",
        "Index": 5
    },
    "Qatar": {
        "Name": "Qatar",
        "Index": 0
    },
    "Romania": {
        "Name": "Romania",
        "Index": 1
    },
    "Russian Federation": {
        "Name": "Russian Federation",
        "Index": 1
    },
    "Rwanda": {
        "Name": "Rwanda",
        "Index": 0
    },
    "Saint Kitts and Nevis": {
        "Name": "Saint Kitts and Nevis",
        "Index": 2
    },
    "Saint Vincent and the Grenadines": {
        "Name": "Saint Vincent and the Grenadines",
        "Index": 0
    },
    "Samoa": {
        "Name": "Samoa",
        "Index": 0
    },
    "San Marino": {
        "Name": "San Marino",
        "Index": 1
    },
    "Sao Tome and Principe ": {
        "Name": "Sao Tome and Principe ",
        "Index": 0
    },
    "Saudi Arabia": {
        "Name": "Saudi Arabia",
        "Index": 5
    },
    "Senegal": {
        "Name": "Senegal",
        "Index": 0
    },
    "Serbia": {
        "Name": "Serbia",
        "Index": 1
    },
    "Serbia and Montenegro": {
        "Name": "Serbia and Montenegro",
        "Index": 1
    },
    "Seychelles": {
        "Name": "Seychelles",
        "Index": 2
    },
    "Sierra Leone": {
        "Name": "Sierra Leone",
        "Index": 0
    },
    "Singapore": {
        "Name": "Singapore",
        "Index": 1
    },
    "Sint Maarten": {
        "Name": "Sint Maarten",
        "Index": 2
    },
    "Slovakia": {
        "Name": "Slovakia",
        "Index": 1
    },
    "Slovenia": {
        "Name": "Slovenia",
        "Index": 5
    },
    "Solomon Islands": {
        "Name": "Solomon Islands",
        "Index": 2
    },
    "Somalia": {
        "Name": "Somalia",
        "Index": 2
    },
    "South Africa": {
        "Name": "South Africa",
        "Index": 1
    },
    "South Sudan": {
        "Name": "South Sudan",
        "Index": 1
    },
    "Spain": {
        "Name": "Spain",
        "Index": 1
    },
    "Sri Lanka": {
        "Name": "Sri Lanka",
        "Index": 1
    },
    "Sudan": {
        "Name": "Sudan",
        "Index": 1
    },
    "Suriname": {
        "Name": "Suriname",
        "Index": 2
    },
    "Swaziland": {
        "Name": "Swaziland",
        "Index": 1
    },
    "Sweden": {
        "Name": "Sweden",
        "Index": 5
    },
    "Switzerland": {
        "Name": "Switzerland",
        "Index": 5
    },
    "Syrian Arab Republic": {
        "Name": "Syrian Arab Republic",
        "Index": 0
    },
    "Tajikistan": {
        "Name": "Tajikistan",
        "Index": 1
    },
    "Tanzania, United Republic of": {
        "Name": "Tanzania, United Republic of",
        "Index": 0
    },
    "Thailand": {
        "Name": "Thailand",
        "Index": 1
    },
    "Togo": {
        "Name": "Togo",
        "Index": 0
    },
    "Tonga": {
        "Name": "Tonga",
        "Index": 2
    },
    "Trinidad and Tobago": {
        "Name": "Trinidad and Tobago",
        "Index": 0
    },
    "Tunisia": {
        "Name": "Tunisia",
        "Index": 1
    },
    "Turkey": {
        "Name": "Turkey",
        "Index": 3
    },
    "Turkmenistan": {
        "Name": "Turkmenistan",
        "Index": 1
    },
    "Tuvalu": {
        "Name": "Tuvalu",
        "Index": 2
    },
    "Uganda": {
        "Name": "Uganda",
        "Index": 0
    },
    "Ukraine": {
        "Name": "Ukraine",
        "Index": 1
    },
    "United Arab Emirates": {
        "Name": "United Arab Emirates",
        "Index": 2
    },
    "United Kingdom": {
        "Name": "United Kingdom",
        "Index": 13
    },
    "United States": {
        "Name": "United States",
        "Index": 3
    },
    "Uruguay": {
        "Name": "Uruguay",
        "Index": 1
    },
    "Uzbekistan": {
        "Name": "Uzbekistan",
        "Index": 1
    },
    "Vanuatu": {
        "Name": "Vanuatu",
        "Index": 0
    },
    "Venezuela": {
        "Name": "Venezuela",
        "Index": 3
    },
    "Viet Nam": {
        "Name": "Viet Nam",
        "Index": 3
    },
    "Western Sahara": {
        "Name": "Western Sahara",
        "Index": 0
    },
    "Yemen": {
        "Name": "Yemen",
        "Index": 0
    },
    "Zambia": {
        "Name": "Zambia",
        "Index": 1
    },
    "Zimbabwe": {
        "Name": "Zimbabwe",
        "Index": 0
    }
};

var countryObj1 = [
    {
        "Name": "Afghanistan",
        "Index": 0
    },
    {
        "Name": "Albania",
        "Index": 1
    },
    {
        "Name": "Algeria",
        "Index": 1
    },
    {
        "Name": "Andorra",
        "Index": 1
    },
    {
        "Name": "Angola",
        "Index": 0
    },
    {
        "Name": "Antarctica",
        "Index": 0
    },
    {
        "Name": "Antigua and Barbuda",
        "Index": 2
    },
    {
        "Name": "Argentina",
        "Index": 1
    },
    {
        "Name": "Armenia",
        "Index": 3
    },
    {
        "Name": "Aruba",
        "Index": 0
    },
    {
        "Name": "Australia",
        "Index": 7
    },
    {
        "Name": "Austria",
        "Index": 1
    },
    {
        "Name": "Azerbaijan",
        "Index": 1
    },
    {
        "Name": "Bahamas",
        "Index": 0
    },
    {
        "Name": "Bahrain",
        "Index": 3
    },
    {
        "Name": "Bangladesh",
        "Index": 1
    },
    {
        "Name": "Barbados",
        "Index": 2
    },
    {
        "Name": "Belarus",
        "Index": 1
    },
    {
        "Name": "Belgium",
        "Index": 1
    },
    {
        "Name": "Belize",
        "Index": 0
    },
    {
        "Name": "Benin",
        "Index": 0
    },
    {
        "Name": "Bermuda",
        "Index": 1
    },
    {
        "Name": "Bhutan",
        "Index": 0
    },
    {
        "Name": "Bolivia",
        "Index": 0
    },
    {
        "Name": "Bosnia and Herzegovina",
        "Index": 1
    },
    {
        "Name": "Botswana",
        "Index": 0
    },
    {
        "Name": "Brazil",
        "Index": 7
    },
    {
        "Name": "Brunei Darussalam",
        "Index": 5
    },
    {
        "Name": "Bulgaria",
        "Index": 1
    },
    {
        "Name": "Burkina Faso",
        "Index": 0
    },
    {
        "Name": "Burundi",
        "Index": 0
    },
    {
        "Name": "Cambodia",
        "Index": 1
    },
    {
        "Name": "Cameroon",
        "Index": 0
    },
    {
        "Name": "Canada",
        "Index": 7
    },
    {
        "Name": "Cape Verde",
        "Index": 1
    },
    {
        "Name": "Caribbean Netherlands",
        "Index": 2
    },
    {
        "Name": "Cayman Islands",
        "Index": 1
    },
    {
        "Name": "Central African Republic",
        "Index": 2
    },
    {
        "Name": "Chad",
        "Index": 0
    },
    {
        "Name": "Chile",
        "Index": 5
    },
    {
        "Name": "China",
        "Index": 19
    },
    {
        "Name": "Colombia",
        "Index": 0
    },
    {
        "Name": "Comoros",
        "Index": 0
    },
    {
        "Name": "Congo",
        "Index": 0
    },
    {
        "Name": "Congo, The Democratic Republic of the",
        "Index": 0
    },
    {
        "Name": "Costa Rica",
        "Index": 1
    },
    {
        "Name": "Côte d'Ivoire",
        "Index": 0
    },
    {
        "Name": "Croatia",
        "Index": 1
    },
    {
        "Name": "Cuba",
        "Index": 1
    },
    {
        "Name": "Curaçao",
        "Index": 2
    },
    {
        "Name": "Cyprus",
        "Index": 5
    },
    {
        "Name": "Czech Republic",
        "Index": 5
    },
    {
        "Name": "Denmark",
        "Index": 5
    },
    {
        "Name": "Djibouti",
        "Index": 0
    },
    {
        "Name": "Dominica",
        "Index": 0
    },
    {
        "Name": "Dominican Republic",
        "Index": 3
    },
    {
        "Name": "Ecuador",
        "Index": 1
    },
    {
        "Name": "Egypt",
        "Index": 3
    },
    {
        "Name": "El Salvador",
        "Index": 3
    },
    {
        "Name": "Equatorial Guinea",
        "Index": 0
    },
    {
        "Name": "Eritrea",
        "Index": 0
    },
    {
        "Name": "Estonia",
        "Index": 5
    },
    {
        "Name": "Ethiopia",
        "Index": 0
    },
    {
        "Name": "Fiji",
        "Index": 0
    },
    {
        "Name": "Finland",
        "Index": 5
    },
    {
        "Name": "France",
        "Index": 1
    },
    {
        "Name": "Gabon",
        "Index": 0
    },
    {
        "Name": "Gambia",
        "Index": 0
    },
    {
        "Name": "Georgia",
        "Index": 1
    },
    {
        "Name": "Germany",
        "Index": 5
    },
    {
        "Name": "Ghana",
        "Index": 0
    },
    {
        "Name": "Greece",
        "Index": 21
    },
    {
        "Name": "Greenland",
        "Index": 1
    },
    {
        "Name": "Grenada",
        "Index": 0
    },
    {
        "Name": "Guatemala",
        "Index": 3
    },
    {
        "Name": "Guinea",
        "Index": 0
    },
    {
        "Name": "Guinea-Bissau",
        "Index": 1
    },
    {
        "Name": "Guyana",
        "Index": 0
    },
    {
        "Name": "Haiti",
        "Index": 5
    },
    {
        "Name": "Holy See",
        "Index": 1
    },
    {
        "Name": "Honduras",
        "Index": 3
    },
    {
        "Name": "Hong Kong",
        "Index": 2
    },
    {
        "Name": "Hungary",
        "Index": 1
    },
    {
        "Name": "Iceland",
        "Index": 1
    },
    {
        "Name": "India",
        "Index": 1
    },
    {
        "Name": "Indonesia",
        "Index": 5
    },
    {
        "Name": "Iran, Islamic Republic of",
        "Index": 1
    },
    {
        "Name": "Iraq",
        "Index": 3
    },
    {
        "Name": "Israel",
        "Index": 1
    },
    {
        "Name": "Italy",
        "Index": 3
    },
    {
        "Name": "Jamaica",
        "Index": 0
    },
    {
        "Name": "Japan",
        "Index": 19
    },
    {
        "Name": "Jordan",
        "Index": 1
    },
    {
        "Name": "Kazakhstan",
        "Index": 1
    },
    {
        "Name": "Kenya",
        "Index": 1
    },
    {
        "Name": "Kiribati",
        "Index": 2
    },
    {
        "Name": "Korea, Democratic People's Republic of",
        "Index": 0
    },
    {
        "Name": "Korea, Republic of",
        "Index": 3
    },
    {
        "Name": "Kuwait",
        "Index": 1
    },
    {
        "Name": "Kyrgyzstan",
        "Index": 1
    },
    {
        "Name": "Lao, People's Democratic Republic",
        "Index": 1
    },
    {
        "Name": "Latvia",
        "Index": 1
    },
    {
        "Name": "Lebanon",
        "Index": 0
    },
    {
        "Name": "Lesotho",
        "Index": 1
    },
    {
        "Name": "Liberia",
        "Index": 0
    },
    {
        "Name": "Libyan Arab Jamahiriya",
        "Index": 0
    },
    {
        "Name": "Liechtenstein",
        "Index": 1
    },
    {
        "Name": "Lithuania",
        "Index": 1
    },
    {
        "Name": "Luxembourg",
        "Index": 1
    },
    {
        "Name": "Macedonia, The Former Yugoslav Republic of",
        "Index": 1
    },
    {
        "Name": "Madagascar",
        "Index": 1
    },
    {
        "Name": "Malawi",
        "Index": 0
    },
    {
        "Name": "Malaysia",
        "Index": 5
    },
    {
        "Name": "Maldives",
        "Index": 7
    },
    {
        "Name": "Mali",
        "Index": 0
    },
    {
        "Name": "Malta",
        "Index": 1
    },
    {
        "Name": "Mauritania",
        "Index": 0
    },
    {
        "Name": "Mauritius",
        "Index": 2
    },
    {
        "Name": "Mexico",
        "Index": 3
    },
    {
        "Name": "Moldova",
        "Index": 1
    },
    {
        "Name": "Monaco",
        "Index": 1
    },
    {
        "Name": "Mongolia",
        "Index": 3
    },
    {
        "Name": "Montenegro",
        "Index": 1
    },
    {
        "Name": "Morocco",
        "Index": 1
    },
    {
        "Name": "Mozambique",
        "Index": 1
    },
    {
        "Name": "Myanmar",
        "Index": 2
    },
    {
        "Name": "Namibia",
        "Index": 0
    },
    {
        "Name": "Nauru",
        "Index": 2
    },
    {
        "Name": "Nepal",
        "Index": 3
    },
    {
        "Name": "Netherlands",
        "Index": 1
    },
    {
        "Name": "Netherlands Antilles",
        "Index": 2
    },
    {
        "Name": "New Zealand",
        "Index": 1
    },
    {
        "Name": "Nicaragua",
        "Index": 0
    },
    {
        "Name": "Niger",
        "Index": 0
    },
    {
        "Name": "Nigeria",
        "Index": 5
    },
    {
        "Name": "Norway",
        "Index": 5
    },
    {
        "Name": "Oman",
        "Index": 1
    },
    {
        "Name": "Pakistan",
        "Index": 1
    },
    {
        "Name": "Panama",
        "Index": 3
    },
    {
        "Name": "Papua New Guinea",
        "Index": 3
    },
    {
        "Name": "Paraguay",
        "Index": 5
    },
    {
        "Name": "Peru",
        "Index": 0
    },
    {
        "Name": "Philippines",
        "Index": 5
    },
    {
        "Name": "Poland",
        "Index": 5
    },
    {
        "Name": "Portugal",
        "Index": 5
    },
    {
        "Name": "Qatar",
        "Index": 0
    },
    {
        "Name": "Romania",
        "Index": 1
    },
    {
        "Name": "Russian Federation",
        "Index": 17
    },
    {
        "Name": "Rwanda",
        "Index": 0
    },
    {
        "Name": "Saint Kitts and Nevis",
        "Index": 2
    },
    {
        "Name": "Saint Vincent and the Grenadines",
        "Index": 0
    },
    {
        "Name": "Samoa",
        "Index": 0
    },
    {
        "Name": "San Marino",
        "Index": 1
    },
    {
        "Name": "Sao Tome and Principe ",
        "Index": 0
    },
    {
        "Name": "Saudi Arabia",
        "Index": 5
    },
    {
        "Name": "Senegal",
        "Index": 0
    },
    {
        "Name": "Serbia",
        "Index": 1
    },
    {
        "Name": "Serbia and Montenegro",
        "Index": 1
    },
    {
        "Name": "Seychelles",
        "Index": 2
    },
    {
        "Name": "Sierra Leone",
        "Index": 0
    },
    {
        "Name": "Singapore",
        "Index": 1
    },
    {
        "Name": "Sint Maarten",
        "Index": 2
    },
    {
        "Name": "Slovakia",
        "Index": 1
    },
    {
        "Name": "Slovenia",
        "Index": 5
    },
    {
        "Name": "Solomon Islands",
        "Index": 2
    },
    {
        "Name": "Somalia",
        "Index": 2
    },
    {
        "Name": "South Africa",
        "Index": 1
    },
    {
        "Name": "South Sudan",
        "Index": 1
    },
    {
        "Name": "Spain",
        "Index": 1
    },
    {
        "Name": "Sri Lanka",
        "Index": 1
    },
    {
        "Name": "Sudan",
        "Index": 1
    },
    {
        "Name": "Suriname",
        "Index": 2
    },
    {
        "Name": "Swaziland",
        "Index": 1
    },
    {
        "Name": "Sweden",
        "Index": 5
    },
    {
        "Name": "Switzerland",
        "Index": 5
    },
    {
        "Name": "Syrian Arab Republic",
        "Index": 0
    },
    {
        "Name": "Tajikistan",
        "Index": 1
    },
    {
        "Name": "Tanzania, United Republic of",
        "Index": 0
    },
    {
        "Name": "Thailand",
        "Index": 1
    },
    {
        "Name": "Togo",
        "Index": 0
    },
    {
        "Name": "Tonga",
        "Index": 2
    },
    {
        "Name": "Trinidad and Tobago",
        "Index": 0
    },
    {
        "Name": "Tunisia",
        "Index": 1
    },
    {
        "Name": "Turkey",
        "Index": 3
    },
    {
        "Name": "Turkmenistan",
        "Index": 1
    },
    {
        "Name": "Tuvalu",
        "Index": 2
    },
    {
        "Name": "Uganda",
        "Index": 0
    },
    {
        "Name": "Ukraine",
        "Index": 1
    },
    {
        "Name": "United Arab Emirates",
        "Index": 2
    },
    {
        "Name": "United Kingdom",
        "Index": 13
    },
    {
        "Name": "United States",
        "Index": 3
    },
    {
        "Name": "Uruguay",
        "Index": 1
    },
    {
        "Name": "Uzbekistan",
        "Index": 1
    },
    {
        "Name": "Vanuatu",
        "Index": 0
    },
    {
        "Name": "Venezuela",
        "Index": 3
    },
    {
        "Name": "Viet Nam",
        "Index": 3
    },
    {
        "Name": "Western Sahara",
        "Index": 0
    },
    {
        "Name": "Yemen",
        "Index": 0
    },
    {
        "Name": "Zambia",
        "Index": 1
    },
    {
        "Name": "Zimbabwe",
        "Index": 0
    }
];