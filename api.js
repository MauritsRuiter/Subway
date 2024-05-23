// GET example
fetch("http://slome.org:3030/api/ingredients",
{
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "key": "kiosk4321"
    }
}
).then(data => {
data.json().then(data => console.log(data));
})

