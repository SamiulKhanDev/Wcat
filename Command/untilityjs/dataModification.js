function dataModification(data, command)
{
    let array = data.split("\n");
    if (command == '-s')
    {
        
        let concatinatedArray = [];
        for (let str of array)
        {
            if (str.length>=1)
            {
                concatinatedArray.push(str);
            }    
        }

        return concatinatedArray.join("\n");
        
         
    }
    else if (command == '-n')
    {
        let len = array.length;
        let num = 1;
        for (let i = 0; i < len; i++)
        {
            let temp = array[i];
            array[i] = num + " " + temp;
            num++;
        }

        return array.join("\n");
    }
    else if (command == '-b')
    {
        let len = array.length;
        let num = 1;
        for (let i = 0; i < len; i++)
        {
            let temp = array[i];
            if (temp.length < 1)
            {
                continue;    
            }
            array[i] = num + " " + temp;
            num++;
        }

        return array.join("\n");
    }
}

module.exports = dataModification;
