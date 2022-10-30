// written by chapel1337
// made on 10/29/2022
// finally figured out how to get the parameters
// probably shouldn't have used an external script.js file

const parameters = new URLSearchParams(window.location.search);

let website = undefined;
let times = undefined;

const parameterWebsite = parameters.get("website");
const parameterTimes = parameters.get("times");

if (parameterWebsite == null || parameterTimes == null)
{
    websiteMode();
}
else
{
    website = parameterWebsite;
    times = parameterTimes;

    openWindows();
}

function websiteMode()
{
    website = prompt("input a website to be opened");
    times = prompt("input amount of tabs to be opened");

    openWindows();
}

function openWindows()
{
    for (let i = 0; i < times; ++i)
    {
        window.open(`https://${website}`);
    }

    window.location.replace(`https://${website}`);
}
