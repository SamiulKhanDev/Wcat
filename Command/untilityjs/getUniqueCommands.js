function getUniqueCommands(commandArray)
{
    const set = new Set();
    for (let command of commandArray)
    {
        set.add(command);
    }

    return set;
}


module.exports = getUniqueCommands;