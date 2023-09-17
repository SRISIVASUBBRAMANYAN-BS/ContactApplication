import React, { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });
  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([]);
  const [sortBy, setSortBy] = useState('name'); 
  const countries = [
'Afghanistan',
'Albania',
'Algeria',
'Andorra',
'Angola',
'Antigua and Barbuda',
'Argentina',
'Armenia',
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
'Bhutan',
'Bolivia',
'Bosnia and Herzegovina',
'Botswana',
'Brazil',
'Brunei',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Cabo Verde',
'Cambodia',
'Cameroon',
'Canada',
'Central African Republic',
'Chad',
'Chile',
'China',
'Colombia',
'Comoros',
'Congo (Congo-Brazzaville)',
'Costa Rica',
'Croatia',
'Cuba',
'Cyprus',
'Czechia (Czech Republic)',
'Democratic Republic of the Congo (Congo-Kinshasa)',
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
'Eswatini (fmr. "Swaziland")',
'Ethiopia',
'Fiji',
'Finland',
'France',
'Gabon',
'Gambia',
'Georgia',
'Germany',
'Ghana',
'Greece',
'Grenada',
'Guatemala',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Holy See',
'Honduras',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Mauritania',
'Mauritius',
'Mexico',
'Micronesia',
'Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Morocco',
'Mozambique',
'Myanmar (formerly Burma)',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'North Korea',
'North Macedonia (formerly Macedonia)',
'Norway',
'Oman',
'Pakistan',
'Palau',
'Palestine State',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Poland',
'Portugal',
'Qatar',
'Romania',
'Russia',
'Rwanda',
'Saint Kitts and Nevis',
'Saint Lucia',
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
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Korea',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Sweden',
'Switzerland',
'Syria',
'Tajikistan',
'Tanzania',
'Thailand',
'Timor-Leste',
'Togo',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States of America',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Venezuela',
'Vietnam',
'Yemen',
'Zambia',
'Zimbabwe',
  ];
const validateForm = () => {
    const newErrors = {};
if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.phone.trim() === '' || isNaN(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (formData.country === '') {
      newErrors.country = 'Please select a country';
    }
   setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newContact = { ...formData };
      setContacts([...contacts, newContact]);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
      });
    }
  };
  const sortContacts = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy])
    );
    setContacts(sortedContacts);
  };
  return (
    <div className="">
      <h1 className="">Contact Management Appplication</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={` ${
              errors.name ? '' : ''
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="">
          <label className="">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={` ${
              errors.email ? '' : ''
            }`}
          />
          {errors.email && (
            <p className="">{errors.email}</p>
          )}
        </div>
        <div className="">
          <label className="">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`  ${
              errors.phone ? '' : ''
            }`}
          />
          {errors.phone && (
            <p className="">{errors.phone}</p>
          )}
        </div>
        <div className="">
          <label className="">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className={` ${
              errors.country ? '' : ''
            }`}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="">{errors.country}</p>
          )}
        </div>
        <div className="">
          <button
            type="submit"
            className=""
          >
            Save Contact
          </button>
        </div>
      </form>
      <div>
        <h2 className="">Contacts</h2>
        <div className="">
          Sort by:
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className=""
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="country">Country</option>
          </select>
          <button
            onClick={sortContacts}
            className=""
          >
            Sort
          </button>
        </div>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="">
              <strong>{contact.name}</strong> - {contact.email} - {contact.phone} - {contact.country}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}
export default App;
