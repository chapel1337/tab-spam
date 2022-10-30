// written by chapel1337
// made on 10/29/2022
// finally figured out how to get the parameters
// probably shouldn't have used an external script.js file

const parameters = new URLSearchParams(window.location.search);

const times = parameters.get("times");
const website = parameters.get("website");

function openWindows()
{
    for (let i = 0; i <= times; ++i)
    {
        window.open(`https://${website}`);
    }

    window.location.replace(`https://${website}`);
}

console.log(times);
console.log(website);

openWindows();
