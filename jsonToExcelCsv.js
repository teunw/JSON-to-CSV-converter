function WriteCSV(jsonData)
{
    jsonData.sort(SortByName);

    var finalOutput = "";

    finalOutput += GetCSVColumns(jsonData[0]);

    $.each(jsonData, function(){
       finalOutput += GetCSVData(this);
    });

    Download(finalOutput);
}

function GetCSVColumns(element)
{
    var output = "";
    $.each(element, function(key, value){
        if (element.hasOwnProperty(key)) {
            output += "\"" +key + "\";";
        }
    });

    return output;
}

function GetCSVData(row)
{
    var output = "";

    output += "\n";
    $.each(row, function(key, value){
        if (row.hasOwnProperty(key)) {
            if (value != null) {
                output += "\"" + value + "\";";
            }else{
                output += ";";
            }
        }
    });

    return output;
}

function Download(finalOutput)
{
    download(finalOutput, "sheet.csv", "text/csv");
}

function SortByName(a, b){
    var aName = a.ID;
    var bName = b.ID;
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}