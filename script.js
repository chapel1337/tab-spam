// written by chapel1337
// made on 10/29/2022
// finally figured out how to get the parameters
// probably shouldn't have used an external script.js file
// came back on 12/3/2022 to add unblock popup spam notice and https checking

const parameters = new URLSearchParams(window.location.search);

let website;
let times;

let parameterWebsite = parameters.get("website");
let parameterTimes = parameters.get("times");

if (parameterWebsite == undefined || parameterTimes == undefined)
{
    websiteMode();
}
else
{
    // assuming that the website is securew
    if (!parameterWebsite.includes("https"))
    {
        parameterWebsite = (`https://${parameterWebsite}`);
    }

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
    else if (!website.includes("https"))
    {
        website = (`https://${website}`);
    }
    
    openWindows();
}

async function openWindows()
{
    let latestWindow;

    for (let i = 0; i < times; ++i)
    {
        latestWindow = window.open(website);
    }

    if (!latestWindow)
    {
        alert("please allow popups, then press okay");

        window.location.reload();
    }

    window.location.replace(website);
}
