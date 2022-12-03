// written by chapel1337
// made on 10/29/2022
// finally figured out how to get the parameters
// probably shouldn't have used an external script.js file
// came back on 12/3/2022 to add unblock popup spam notice

const parameters = new URLSearchParams(window.location.search);

let website = undefined;
let times = undefined;

const parameterWebsite = parameters.get("website");
const parameterTimes = parameters.get("times");

if (parameterWebsite == undefined || parameterTimes == undefined)
{
    websiteMode();
}
else
{
    website = parameterWebsite;
    times = parameterTimes;

    openWindows();
}

async function websiteMode()
{
    website = prompt("input a website to be opened");
    times = prompt("input amount of tabs to be opened");

    if (website == "" || times == "")
    {
        window.location.reload();
    }
    else
    {
        openWindows();
    }
}

async function openWindows()
{
    let latestWindow;

    for (let i = 0; i < times; ++i)
    {
        latestWindow = window.open(`https://${website}`);
    }

    if (!latestWindow)
    {
        alert("please allow popups, then press okay");

        window.location.reload();
    }
    else
    {
        window.location.replace(`https://${website}`);
    }
}
