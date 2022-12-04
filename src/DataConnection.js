


export async function NasaAPIConnection(year) {

    let key = "qYUQqc8uiLfpJTimndLCddr3aGb2qmB4mGiA5QHF";
    let date = year.toString() + "-12-25";
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;


    // fetch the data
    let res = await fetch(query);

    // turn result into a JS object
    let data = await res.json();

    // return the object
    return data;
}