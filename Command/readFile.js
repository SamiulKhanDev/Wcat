const fs = require("fs");

const checkValidity = require("./untilityjs/checkValidity");
const getSorted = require("./untilityjs/getSorted");
const getUniqueCommands = require("./untilityjs/getUniqueCommands");
const dataModification = require("./untilityjs/dataModification");
function readFile(input)
{
    if (input == undefined)
    {
        console.log("Please Provide Valid Input".red);
        return;
    }
    const pathArray = [];
    let commandArray = [];

    for (let data of input)
    {
        if (data.length == 2)
        {
            if (data == "-n" || data == "-b" || data == "-s")
            {
                commandArray.push(data);
                
            }
            else
            {
                console.log("Please Provide Valid Command".red);
                return;
            }
        }
        else
        {
            pathArray.push(data);    
        }
    }
    // console.log(pathArray);
    // console.log(commandArray);
    commandArray = getUniqueCommands(commandArray);
    // console.log(commandArray);
    if (checkValidity(commandArray))
    {
        console.log("-n and -b cannot be in same command".red);
        return;
        
    }
    commandArray = getSorted(commandArray);
    // console.log(commandArray);
    
    for (let filePath of pathArray)
    {

        const isFileExit = fs.existsSync(filePath);
        if (isFileExit ==false)
        {
            console.log("Please provide a valid path for this file".red );
                
        }
        else
        {
            const isFile = fs.lstatSync(filePath).isFile();
            if (isFile == false)
            {
                console.log("Please provide a valid path for this file".red);
            }
            else
            {
                let fileData = fs.readFileSync(filePath).toString();
                for (let command of commandArray)
                {
                   fileData =  dataModification(fileData, command);    
                }
                console.log(fileData.green);
            }
        }
    }
}


module.exports = readFile;