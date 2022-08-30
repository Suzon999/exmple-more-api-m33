const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countrie')
        countryDiv.innerHTML = `
        <h3>Name :${country.name.common} </h3>
        <h3>Capital :${country.capital ? country.capital[0] : 'No country'} </h3>
        <button onClick="loadCountriesDetails ('${country.cca2}' ) ">Country Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}

const loadCountriesDetails = (code) => {
    // console.log(code);
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = (country) => {
    console.log(country)
    const countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
    <h3>Name :${country.name.common} </h3>
    <img src="${country.flags.png}" alt="">
    `

}
loadCountries()