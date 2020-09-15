// List of all countries
// IRS Foreign Country Code Listing for Modernized e-File (MeF)
const countryList = [
  {
    code: 'AF',
    name: 'Afghanistan'
  },
  {
    code: 'AX',
    name: 'Akrotiri'
  },
  {
    code: 'AL',
    name: 'Albania'
  },
  {
    code: 'AG',
    name: 'Algeria'
  },
  {
    code: 'AQ',
    name: 'American Samoa'
  },
  {
    code: 'AN',
    name: 'Andorra'
  },
  {
    code: 'AO',
    name: 'Angola'
  },
  {
    code: 'AV',
    name: 'Anguilla'
  },
  {
    code: 'AY',
    name: 'Antarctica'
  },
  {
    code: 'AC',
    name: 'Antigua & Barbuda'
  },
  {
    code: 'AR',
    name: 'Argentina'
  },
  {
    code: 'AM',
    name: 'Armenia'
  },
  {
    code: 'AA',
    name: 'Aruba'
  },
  {
    code: 'AT',
    name: 'Ashmore and Cartier Islands'
  },
  {
    code: 'AS',
    name: 'Australia'
  },
  {
    code: 'AU',
    name: 'Austria'
  },
  {
    code: 'AJ',
    name: 'Azerbaijan'
  },
  {
    code: 'BF',
    name: 'Bahamas'
  },
  {
    code: 'BA',
    name: 'Bahrain'
  },
  {
    code: 'FQ',
    name: 'Baker Island'
  },
  {
    code: 'BG',
    name: 'Bangladesh'
  },
  {
    code: 'BB',
    name: 'Barbados'
  },
  {
    code: 'BO',
    name: 'Belarus'
  },
  {
    code: 'BE',
    name: 'Belgium'
  },
  {
    code: 'BH',
    name: 'Belize'
  },
  {
    code: 'BN',
    name: 'Benin'
  },
  {
    code: 'BD',
    name: 'Bermuda'
  },
  {
    code: 'BT',
    name: 'Bhutan'
  },
  {
    code: 'BL',
    name: 'Bolivia'
  },
  {
    code: 'BK',
    name: 'Bosnia-Herzegovina'
  },
  {
    code: 'BC',
    name: 'Botswana'
  },
  {
    code: 'BV',
    name: 'Bouvet Island'
  },
  {
    code: 'BR',
    name: 'Brazil'
  },
  {
    code: 'IO',
    name: 'British Indian Ocean Territory'
  },
  {
    code: 'VI',
    name: 'British Virgin Islands'
  },
  {
    code: 'BX',
    name: 'Brunei'
  },
  {
    code: 'BU',
    name: 'Bulgaria'
  },
  {
    code: 'UV',
    name: 'Burkina Faso'
  },
  {
    code: 'BM',
    name: 'Burma'
  },
  {
    code: 'BY',
    name: 'Burundi'
  },
  {
    code: 'CB',
    name: 'Cambodia'
  },
  {
    code: 'CM',
    name: 'Cameroon'
  },
  {
    code: 'CA',
    name: 'Canada'
  },
  {
    code: 'CV',
    name: 'Cape Verde'
  },
  {
    code: 'CJ',
    name: 'Cayman Islands'
  },
  {
    code: 'CT',
    name: 'Central African Republic'
  },
  {
    code: 'CD',
    name: 'Chad'
  },
  {
    code: 'CI',
    name: 'Chile'
  },
  {
    code: 'CH',
    name: 'China'
  },
  {
    code: 'KT',
    name: 'Christmas Island'
  },
  {
    code: 'IP',
    name: 'Clipperton Island'
  },
  {
    code: 'CK',
    name: 'Cocos (Keeling) Islands'
  },
  {
    code: 'CO',
    name: 'Colombia'
  },
  {
    code: 'CN',
    name: 'Comoros'
  },
  {
    code: 'CF',
    name: 'Congo (Brazzaville)'
  },
  {
    code: 'CG',
    name: 'Congo (Kinshasa)'
  },
  {
    code: 'CW',
    name: 'Cook Islands'
  },
  {
    code: 'CR',
    name: 'Coral Sea Islands'
  },
  {
    code: 'CS',
    name: 'Costa Rica'
  },
  {
    code: 'HR',
    name: 'Croatia'
  },
  {
    code: 'CU',
    name: 'Cuba'
  },
  {
    code: 'UC',
    name: 'Curacao'
  },
  {
    code: 'CY',
    name: 'Cyprus'
  },
  {
    code: 'EZ',
    name: 'Czech Republic'
  },
  {
    code: 'IV',
    name: "Cote d'Ivoire (Ivory Coast)"
  },
  {
    code: 'DA',
    name: 'Denmark'
  },
  {
    code: 'DX',
    name: 'Dhekelia'
  },
  {
    code: 'DJ',
    name: 'Djibouti'
  },
  {
    code: 'DO',
    name: 'Dominica'
  },
  {
    code: 'DR',
    name: 'Dominican Republic'
  },
  {
    code: 'TT',
    name: 'East Timor'
  },
  {
    code: 'EC',
    name: 'Ecuador'
  },
  {
    code: 'EG',
    name: 'Egypt'
  },
  {
    code: 'ES',
    name: 'El Salvador'
  },
  {
    code: 'EK',
    name: 'Equatorial Guinea'
  },
  {
    code: 'ER',
    name: 'Eritrea'
  },
  {
    code: 'EN',
    name: 'Estonia'
  },
  {
    code: 'ET',
    name: 'Ethiopia'
  },
  {
    code: 'FK',
    name: 'Falkland Islands (Islas Malvinas)'
  },
  {
    code: 'FO',
    name: 'Faroe Islands'
  },
  {
    code: 'FM',
    name: 'Federated States of Micronesia'
  },
  {
    code: 'FJ',
    name: 'Fiji'
  },
  {
    code: 'FI',
    name: 'Finland'
  },
  {
    code: 'FR',
    name: 'France'
  },
  {
    code: 'FP',
    name: 'French Polynesia'
  },
  {
    code: 'FS',
    name: 'French Southern and Antarctic Lands'
  },
  {
    code: 'GB',
    name: 'Gabon'
  },
  {
    code: 'GA',
    name: 'The Gambia'
  },
  {
    code: 'GG',
    name: 'Georgia'
  },
  {
    code: 'GM',
    name: 'Germany'
  },
  {
    code: 'GH',
    name: 'Ghana'
  },
  {
    code: 'GI',
    name: 'Gibraltar'
  },
  {
    code: 'GR',
    name: 'Greece'
  },
  {
    code: 'GL',
    name: 'Greenland'
  },
  {
    code: 'GJ',
    name: 'Grenada'
  },
  {
    code: 'GQ',
    name: 'Guam'
  },
  {
    code: 'GT',
    name: 'Guatemala'
  },
  {
    code: 'GK',
    name: 'Guernsey'
  },
  {
    code: 'GV',
    name: 'Guinea'
  },
  {
    code: 'PU',
    name: 'Guinea-Bissau'
  },
  {
    code: 'GY',
    name: 'Guyana'
  },
  {
    code: 'HA',
    name: 'Haiti'
  },
  {
    code: 'HM',
    name: 'Heard Island and McDonald Islands'
  },
  {
    code: 'VT',
    name: 'Holy See'
  },
  {
    code: 'HO',
    name: 'Honduras'
  },
  {
    code: 'HK',
    name: 'Hong Kong'
  },
  {
    code: 'HQ',
    name: 'Howland Island'
  },
  {
    code: 'HU',
    name: 'Hungary'
  },
  {
    code: 'IC',
    name: 'Iceland'
  },
  {
    code: 'IN',
    name: 'India'
  },
  {
    code: 'ID',
    name: 'Indonesia'
  },
  {
    code: 'IR',
    name: 'Iran'
  },
  {
    code: 'IZ',
    name: 'Iraq'
  },
  {
    code: 'EI',
    name: 'Ireland'
  },
  {
    code: 'IS',
    name: 'Israel'
  },
  {
    code: 'IT',
    name: 'Italy'
  },
  {
    code: 'JM',
    name: 'Jamaica'
  },
  {
    code: 'JN',
    name: 'Jan Mayen'
  },
  {
    code: 'JA',
    name: 'Japan'
  },
  {
    code: 'DQ',
    name: 'Jarvis Island'
  },
  {
    code: 'JE',
    name: 'Jersey'
  },
  {
    code: 'JQ',
    name: 'Johnston Atoll'
  },
  {
    code: 'JO',
    name: 'Jordan'
  },
  {
    code: 'KZ',
    name: 'Kazakhstan'
  },
  {
    code: 'KE',
    name: 'Kenya'
  },
  {
    code: 'KQ',
    name: 'Kingman Reef'
  },
  {
    code: 'KR',
    name: 'Kiribati'
  },
  {
    code: 'KN',
    name: "Korea Democratic People's Republic of (North)"
  },
  {
    code: 'KS',
    name: 'Korea, Republic of (South)'
  },
  {
    code: 'KV',
    name: 'Kosovo'
  },
  {
    code: 'KU',
    name: 'Kuwait'
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan'
  },
  {
    code: 'LA',
    name: 'Laos'
  },
  {
    code: 'LG',
    name: 'Latvia'
  },
  {
    code: 'LE',
    name: 'Lebanon'
  },
  {
    code: 'LT',
    name: 'Lesotho'
  },
  {
    code: 'LI',
    name: 'Liberia'
  },
  {
    code: 'LY',
    name: 'Libya'
  },
  {
    code: 'LS',
    name: 'Liechtenstein'
  },
  {
    code: 'LH',
    name: 'Lithuania'
  },
  {
    code: 'LU',
    name: 'Luxembourg'
  },
  {
    code: 'MC',
    name: 'Macau'
  },
  {
    code: 'MK',
    name: 'Macedonia'
  },
  {
    code: 'MA',
    name: 'Madagascar'
  },
  {
    code: 'MI',
    name: 'Malawi'
  },
  {
    code: 'MY',
    name: 'Malaysia'
  },
  {
    code: 'MV',
    name: 'Maldives'
  },
  {
    code: 'ML',
    name: 'Mali'
  },
  {
    code: 'MT',
    name: 'Malta'
  },
  {
    code: 'IM',
    name: 'Man, Isle of'
  },
  {
    code: 'RM',
    name: 'Marshall Islands'
  },
  {
    code: 'MR',
    name: 'Mauritania'
  },
  {
    code: 'MP',
    name: 'Mauritius'
  },
  {
    code: 'MX',
    name: 'Mexico'
  },
  {
    code: 'MQ',
    name: 'Midway Islands'
  },
  {
    code: 'MD',
    name: 'Moldova'
  },
  {
    code: 'MN',
    name: 'Monaco'
  },
  {
    code: 'MG',
    name: 'Mongolia'
  },
  {
    code: 'MJ',
    name: 'Montenegro'
  },
  {
    code: 'MH',
    name: 'Montserrat'
  },
  {
    code: 'MO',
    name: 'Morocco'
  },
  {
    code: 'MZ',
    name: 'Mozambique'
  },
  {
    code: 'WA',
    name: 'Namibia'
  },
  {
    code: 'NR',
    name: 'Nauru'
  },
  {
    code: 'BQ',
    name: 'Navassa Island'
  },
  {
    code: 'NP',
    name: 'Nepal'
  },
  {
    code: 'NL',
    name: 'Netherlands'
  },
  {
    code: 'NC',
    name: 'New Caledonia'
  },
  {
    code: 'NZ',
    name: 'New Zealand'
  },
  {
    code: 'NU',
    name: 'Nicaragua'
  },
  {
    code: 'NG',
    name: 'Niger'
  },
  {
    code: 'NI',
    name: 'Nigeria'
  },
  {
    code: 'NE',
    name: 'Niue'
  },
  {
    code: 'NF',
    name: 'Norfolk Island'
  },
  {
    code: 'CQ',
    name: 'Northern Mariana Islands'
  },
  {
    code: 'NO',
    name: 'Norway'
  },
  {
    code: 'MU',
    name: 'Oman'
  },
  {
    code: 'OC',
    name: 'Other Country'
  },
  {
    code: 'PK',
    name: 'Pakistan'
  },
  {
    code: 'PS',
    name: 'Palau'
  },
  {
    code: 'LQ',
    name: 'Palmyra Atoll'
  },
  {
    code: 'PM',
    name: 'Panama'
  },
  {
    code: 'PP',
    name: 'Papua New Guinea'
  },
  {
    code: 'PF',
    name: 'Paracel Islands'
  },
  {
    code: 'PA',
    name: 'Paraguay'
  },
  {
    code: 'PE',
    name: 'Peru'
  },
  {
    code: 'RP',
    name: 'Philippines'
  },
  {
    code: 'PC',
    name: 'Pitcairn Islands'
  },
  {
    code: 'PL',
    name: 'Poland'
  },
  {
    code: 'PO',
    name: 'Portugal'
  },
  {
    code: 'RQ',
    name: 'Puerto Rico'
  },
  {
    code: 'QA',
    name: 'Qatar'
  },
  {
    code: 'RO',
    name: 'Romania'
  },
  {
    code: 'RS',
    name: 'Russia'
  },
  {
    code: 'RW',
    name: 'Rwanda'
  },
  {
    code: 'TB',
    name: 'Saint Barthélemy'
  },
  {
    code: 'RN',
    name: 'Saint Martin'
  },
  {
    code: 'WS',
    name: 'Samoa'
  },
  {
    code: 'SM',
    name: 'San Marino'
  },
  {
    code: 'TP',
    name: 'Sao Tome and Principe'
  },
  {
    code: 'SA',
    name: 'Saudi Arabia'
  },
  {
    code: 'Sg',
    name: 'Senegal'
  },
  {
    code: 'RI',
    name: 'Serbia'
  },
  {
    code: 'SE',
    name: 'Seychelles'
  },
  {
    code: 'SL',
    name: 'Sierra Leone'
  },
  {
    code: 'SN',
    name: 'Singapore'
  },
  {
    code: 'MN',
    name: 'Sint Maarten'
  },
  {
    code: 'LO',
    name: 'Slovakia'
  },
  {
    code: 'SI',
    name: 'Slovenia'
  },
  {
    code: 'BP',
    name: 'Solomon Islands'
  },
  {
    code: 'SO',
    name: 'Somalia'
  },
  {
    code: 'SF',
    name: 'South Africa'
  },
  {
    code: 'SX',
    name: 'South Georgia and the South Sandwich Islands'
  },
  {
    code: 'OD',
    name: 'South Sudan'
  },
  {
    code: 'SP',
    name: 'Spain'
  },
  {
    code: 'PG',
    name: 'Spratly Islands'
  },
  {
    code: 'CE',
    name: 'Sri Lanka'
  },
  {
    code: 'SH',
    name: 'St. Helena'
  },
  {
    code: 'SC',
    name: 'St. Kitts and Nevis'
  },
  {
    code: 'ST',
    name: 'St. Lucia Island'
  },
  {
    code: 'SB',
    name: 'St. Pierre and Miquelon'
  },
  {
    code: 'VC',
    name: 'St. Vincent and the Grenadines'
  },
  {
    code: 'SU',
    name: 'Sudan'
  },
  {
    code: 'NS',
    name: 'Suriname'
  },
  {
    code: 'SV',
    name: 'Svalbard'
  },
  {
    code: 'WZ',
    name: 'Swaziland'
  },
  {
    code: 'SW',
    name: 'Sweden'
  },
  {
    code: 'SZ',
    name: 'Switzerland'
  },
  {
    code: 'SY',
    name: 'Syria'
  },
  {
    code: 'TW',
    name: 'Taiwan'
  },
  {
    code: 'TI',
    name: 'Tajikistan'
  },
  {
    code: 'TZ',
    name: 'Tanzania'
  },
  {
    code: 'TH',
    name: 'Thailand'
  },
  {
    code: 'TO',
    name: 'Togo'
  },
  {
    code: 'TL',
    name: 'Tokelau'
  },
  {
    code: 'TN',
    name: 'Tonga'
  },
  {
    code: 'TD',
    name: 'Trinidad and Tobago'
  },
  {
    code: 'TS',
    name: 'Tunisia'
  },
  {
    code: 'TU',
    name: 'Turkey'
  },
  {
    code: 'TX',
    name: 'Turkmenistan'
  },
  {
    code: 'TK',
    name: 'Turks and Caicos Islands'
  },
  {
    code: 'TV',
    name: 'Tuvalu'
  },
  {
    code: 'UG',
    name: 'Uganda'
  },
  {
    code: 'UP',
    name: 'Ukraine'
  },
  {
    code: 'AE',
    name: 'United Arab Emirates'
  },
  {
    code: 'UK',
    name: 'United Kingdom'
  },
  {
    code: 'UY',
    name: 'Uruguay'
  },
  {
    code: 'UZ',
    name: 'Uzbekistan'
  },
  {
    code: 'NH',
    name: 'Vanuatu'
  },
  {
    code: 'VE',
    name: 'Venezuela'
  },
  {
    code: 'VM',
    name: 'Vietnam'
  },
  {
    code: 'VQ',
    name: 'Virgin Islands'
  },
  {
    code: 'WQ',
    name: 'Wake Island'
  },
  {
    code: 'WF',
    name: 'Wallis and Futuna'
  },
  {
    code: 'WI',
    name: 'Western Sahara'
  },
  {
    code: 'YM',
    name: 'Yemen (Aden)'
  },
  {
    code: 'ZA',
    name: 'Zambia'
  },
  {
    code: 'Zi',
    name: 'Zimbabwe'
  }
]
export { countryList }
