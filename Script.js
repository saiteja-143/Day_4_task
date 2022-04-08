let url = "https://restcountries.com/v2/all ";
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(xhr.response);
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.image(data[i].flags.png);
      console.log(`
      Name:${data[i].name}
      Region:${data[i].region}
      SubRegion:${data[i].subregion}
      Population:${data[i].population}
      `);
    }
  }
};
