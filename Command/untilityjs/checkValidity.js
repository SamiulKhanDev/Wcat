function checkValidity(commandArray)
{
    if (commandArray.has("-b") && commandArray.has("-n"))
    {
        return true;    
    }

    return false;
}

module.exports = checkValidity;
