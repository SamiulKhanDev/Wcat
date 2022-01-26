function getSorted(command)
{
    let sorted = [];
    if (command.size == 2)
    {
        sorted.push("-s");
        if (command.has("-b"))
        {
            sorted.push("-b");    
        }
        else
        {
            sorted.push("-n");    
        }
    }
    else
    {
        if (command.has("-s"))
        {
            sorted.push("-s");
        }
        else if (command.has("-b"))
        {
            sorted.push("-b");
        }
        else
        {
            sorted.push("-n");
        }
    }   
    
    return sorted;
       
}


module.exports = getSorted;