const countryList = [
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos Islands',
  'Colombia',
  'Comoros',
  'Democratic Republic of the Congo',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'South Korea',
  'North Korea',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States Minor Outlying Islands',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const postcode = document.getElementById('postcode');
const country = document.getElementById('country');
const file = document.getElementById('file');
let validated = true;

for (let i = 0; i < countryList.length; i++) {
  let countryName = countryList[i];
  let option = document.createElement('option');
  option.textContent = countryName;
  option.value = countryName;
  country.appendChild(option);
}

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const postcodeValue = postcode.value.trim();
  const countryValue = country.value;
  const fileValue = file.value;
  validated = true;

  // VALIDATE FIRST NAME
  if (firstNameValue === '') {
    setErrorFor(firstName, 'First name cannot be blank');
  } else if (!isLetter(firstNameValue)) {
    setErrorFor(firstName, 'First name cannot contain number');
  } else {
    setSuccessFor(firstName);
  }

  // VALIDATE LAST NAME
  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be blank');
  } else if (!isLetter(lastNameValue)) {
    setErrorFor(lastName, 'Last name cannot contain number');
  } else {
    setSuccessFor(lastName);
  }

  // VALIDATE EMAIL
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Invalid email');
  } else {
    setSuccessFor(email);
  }

  // VALIDATE POSTCODE
  if (postcodeValue === '') {
    setErrorFor(postcode, 'Postcode cannot be blank');
  } else {
    setSuccessFor(postcode);
  }

  // VALIDATE PHONE NUMBER IF INPUTTED
  if (phoneValue !== '' && !isNumber(phoneValue)) {
    setErrorFor(phone, 'Number must contain 8 to 16 digits and digits only');
  } else {
    setSuccessFor(phone);
  }

  // VALIDATE COUNTRY
  if (countryValue === '') {
    setErrorFor(country, 'Must select a country');
  } else {
    setSuccessFor(country);
  }

  // VALIDATE FILE
  if (fileValue === '') {
    setErrorFor(file, 'Must attach a file');
  } else {
    setSuccessFor(file);
  }

  if (validated) {
    return true;
  } else {
    return false;
  }
}

// Helper functions
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
  validated = false;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isLetter(text) {
  return /^(([^0-9]+))$/.test(text);
}
function isNumber(number) {
  return /^((\+?[0-9]{8,16}))$/.test(number);
}
