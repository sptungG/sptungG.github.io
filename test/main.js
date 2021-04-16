// api url
const api_url = 
      "https://macrosis2020.github.io/Host/wordsapi_sample.json?fbclid=IwAR0H9EOE8qgaXBq_RWhsjMef1wWWDHiDA-whqsFc6AwtLE_s_44WoX70HHI";
  
// Defining async function
async function getapi() {
    
    // Storing response
    const response = await fetch("https://macrosis2020.github.io/Host/wordsapi_sample.json?fbclid=IwAR0H9EOE8qgaXBq_RWhsjMef1wWWDHiDA-whqsFc6AwtLE_s_44WoX70HHI");
    
    // Storing data in form of JSON
    return data = await response.json();
}
// Calling that async function
getapi().then(
    result => {
        console.log(result);
    }
)
  