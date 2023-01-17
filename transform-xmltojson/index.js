let convert = require('xml-js');
function xmlToJson(xml) {
    let options = {ignoreComment: true, alwaysChildren: true};
    let result = convert.xml2js(xml, options);
    console.log(JSON.stringify(result));
}

if (require.main === module) {
    // collect the command line argument
    let data = {};
    let args = process.argv;
    for(let i=2;i<args.length;i++){
        // find index of first =
        let index = 0;
        while(index<args[i].length && args[i][index]!="=")index++;
        let [key,val] = [args[i].substring(0,index),args[i].substring(index+1)];
        data[key] = val;
    }
    // write data to file -> sitemap.xml
    xmlToJson(data["sitemap"]);
}