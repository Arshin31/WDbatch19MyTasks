// create a request variable. request variable issue the http request. by
// creating an instance of xml-http-request
var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);

//Get all the countries from Asia continent /region using Filter function 
    var asiacountries=data.filter((element)=>element.region==='Asia');
    //console.log(asiacountries);

// Get all the countries with population of less than 2 lacs using Filter function   
    var lesspopulation=data.filter((item)=>item.population<200000);
    //console.log(lesspopulation);

//Print the following details name, capital, flag using forEach function 
    function countrydetails(items){
        //console.log('country name is '+ items.name + ' capital of country is '+ items.capital +' flag url is '+items.flag);

    }
    data.forEach(countrydetails);

//Print the total population of countries using reduce function
    var totalpopulation= data.reduce(function(result,item){
        return result+item.population;
    },0);
    //console.log(totalpopulation);

//Print the country which use US Dollars as currency.

    var USDcountry=data.filter((elem)=>{
        let flag=false;
        elem.currencies.forEach(val=>{
            if(val.code==='USD'){
                flag=true;
            }
        });
        if(flag==true){
            return true;
        }
        else{
            return false;
        }
    });
    console.log(USDcountry);
}