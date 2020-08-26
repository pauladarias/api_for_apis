async function getAPIs() {
  let response = await fetch("https://api.publicapis.org/entries");
  let data = await response.json();
  return data;
}
function getAPIhtml(myAPI) {}

function displayAPIs(myAPIs) {
  console.log(myAPIs.entries[0]);
  let sampleAPI = myAPIs.entries[0];
  document.body.innerHTML = `<div class="my-api">
        <div class="my-api-name">${sampleAPI.API} (${sampleAPI.Category})</div>
        <div class="my-api-description">${sampleAPI.Description}</div>
        <div class="my-api-auth">Auth: ${sampleAPI.Auth}</div>
        <div class="my-api-https">HTTPS? ${sampleAPI.HTTPS}</div>
    </div>`;
}

getAPIs()
  .then(displayAPIs)
  .catch((e) => console.log(`Error: ${e}`));
