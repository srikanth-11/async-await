var title = document.createElement("header");
title.innerHTML="<h1>COUNTRIES DETAILS AT A GLANCE</h1>"
title.style="text-align:center; background-color:dodgerblue;"
document.body.appendChild(title);

var container = document.createElement("div");
container.className = "container w=100 mw-100 row mx-auto justify-content-around";
document.body.appendChild(container)

function initialize(countriesData){
    countries = countriesData;
    for(var i=0; i<countries.length; i++){
       var insider = document.createElement("div");
       insider.className = "col-md-3 m-1 bg-grey border rounded border-grey shadow-lg p-4 mb-4 align-middle overflow-auto";
       container.appendChild(insider);

       var tile = document.createElement("div");
       tile.className = "tile text-dark h5";
       insider.appendChild(tile);

        var flag_area = document.createElement("div");
        flag_area.id = "flag_area";
        tile.appendChild(flag_area);
        var flag = document.createElement("img");
        flag.id = "flag";
        flag.src = countriesData[i].flag;
        flag.classList.add('card-img-top', 'rounded', 'mt-1');
        flag_area.append(flag);
        flag.setAttribute('data-value',i);

       var country = document.createElement("p");
       tile.appendChild(country);
       country.append("Country: ");

       var count_span = document.createElement("span");
       count_span.id = "country";
       country.appendChild(count_span);
       count_span.append(countries[i].name);

       var cap = document.createElement("p");
       tile.appendChild(cap);
       cap.append("Capital: ");

       var cap_span = document.createElement("span");
       cap_span.id = "capital";
       cap.appendChild(cap_span);
       cap_span.append(countries[i].capital);

       var calling_code = document.createElement("p");
       tile.appendChild(calling_code);
       calling_code.append("Calling Code: ");

       var call_span = document.createElement("span");
       call_span.id = "calling_code";
       calling_code.appendChild(call_span);
       call_span.append("+"+countries[i].callingCodes);

       var time_zone = document.createElement("p");
       tile.appendChild(time_zone);
       time_zone.append("Time Zone: ");

       var time_span = document.createElement("span");
       time_span.id = "time_zone";
       time_zone.appendChild(time_span);
       time_span.append(countries[i].timezones);


       var top_domain = document.createElement("p");
       tile.appendChild(top_domain);
       top_domain.append("Top Level Domain: ");

       var topDomain_span = document.createElement("span");
       topDomain_span.id = "top_domain";
       top_domain.appendChild(topDomain_span);
       topDomain_span.append(countries[i].topLevelDomain);


       var alpha2 = document.createElement("p");
       tile.appendChild(alpha2);
       alpha2.append("Alpha2 Code: ");

       var alpha2_span = document.createElement("span");
       alpha2_span.id = "alpha2_code";
       alpha2.appendChild(alpha2_span);
       alpha2_span.append(countries[i].alpha2Code);
       
       var alpha3 = document.createElement("p");
       tile.appendChild(alpha3);
       alpha3.append("Alpha3 Code: ");

       var alpha3_span = document.createElement("span");
       alpha3_span.id = "alpha3_code";
       alpha3.appendChild(alpha3_span);
       alpha3_span.append(countries[i].alpha3Code);

       var altspell = document.createElement("p");
       tile.appendChild(altspell);
       altspell.append("Alternate Spellings: ");


       var altspell_span = document.createElement("span");
       altspell_span.id = "alt_spell";
       altspell.appendChild(altspell_span);
       altspell_span.append(countries[i].altSpellings);

       var region = document.createElement("p");
       tile.appendChild(region);
       region.append("Region: ");

       var region_span = document.createElement("span");
       region_span.id = "region";
       region.appendChild(region_span);
       region_span.append(countries[i].region);

       var sub_region = document.createElement("p");
       tile.appendChild(sub_region);
       sub_region.append("Subregion: ");

       var subregion_span = document.createElement("span");
       subregion_span.id = "sub_region";
       sub_region.appendChild(subregion_span);
       subregion_span.append(countries[i].subregion);

       var population = document.createElement("p");
       tile.appendChild(population);
       population.append("Population: ");

       var pop_span = document.createElement("span");
       pop_span.id = "population";
       population.appendChild(pop_span);
       pop_span.append(countries[i].population);


       var lat = document.createElement("p");
       tile.appendChild(lat);
       lat.append("Latitude: ");

       var lat_span = document.createElement("span");
       lat_span.id = "latitude";
       lat.appendChild(lat_span);
       lat_span.append(countries[i].latlng[0]);

       var lon = document.createElement("p");
       tile.appendChild(lon);
       lon.append("Longitude: ");

       var lon_span = document.createElement("span");
       lon_span.id = "longitude";
       lon.appendChild(lon_span);
       lon_span.append(countries[i].latlng[1]);


       var demonym = document.createElement("p");
       tile.appendChild(demonym);
       demonym.append("Demonym: ");

       var dem_span = document.createElement("span");
       dem_span.id = "demonym";
       demonym.appendChild(dem_span);
       dem_span.append(countries[i].demonym);

       var area = document.createElement("p");
       tile.appendChild(area);
       area.append("Area: ");

       var area_span = document.createElement("span");
       area_span.id = "area";
       area.appendChild(area_span);
       area_span.append(countries[i].area);


       var native_name = document.createElement("p");
       tile.appendChild(native_name);
       native_name.append("Native Name: ");

       var nn_span = document.createElement("span");
       nn_span.id = "native_name";
       native_name.appendChild(nn_span);
       nn_span.append(countries[i].nativeName);

       var numer_code = document.createElement("p");
       tile.appendChild(numer_code);
       numer_code.append("Numeric Code: ");

       var numc_span = document.createElement("span");
       numc_span.id = "numeric_code";
       numer_code.appendChild(numc_span);
       numc_span.append(countries[i].numericCode);

        var currency = document.createElement("p");
        tile.appendChild(currency);

        var curr_span = document.createElement("span");
        curr_span.id = "currency";
        currency.appendChild(curr_span);
        curr_span.append("Currency-Code: "+countries[i].currencies[0].code + ",  " + "Currency-Name: " + countries[i].currencies[0].name + ",  "+ "Currency-Symbol: " + countries[i].currencies[0].symbol)

        var languages = document.createElement("p")
        tile.appendChild(languages);
        languages.append("Languages: ");

        var lang_span = document.createElement("span");
        lang_span.id = "languages";
        languages.appendChild(lang_span);

        for(j=0; j<countriesData[i].languages.length; j++){
            lang_span.append(countries[i].languages[j].name + ", ");
        }

        var nat_languages = document.createElement("p")
        tile.appendChild(nat_languages);
        nat_languages.append("Native Languages: ");

        var natlang_span = document.createElement("span");
        natlang_span.id = "native_languages";
        nat_languages.appendChild(natlang_span);

        for(j=0; j<countriesData[i].languages.length; j++){
            natlang_span.append(countries[i].languages[j].nativeName + ", ");
        
        }

        var regional_blocs = document.createElement("p");
        tile.appendChild(regional_blocs);
        regional_blocs.append("Regional Blocs: ");

        var bloc_span = document.createElement("span");
        bloc_span.id = "regional_blocs";
        regional_blocs.appendChild(bloc_span);

        for(k=0; k<countriesData[i].regionalBlocs.length; k++){
            bloc_span.append(countries[i].regionalBlocs[k].acronym + " ("+countries[i].regionalBlocs[k].name+")")
        }



         var cioc = document.createElement("p");
         tile.appendChild(cioc);
         cioc.append("CIOC: ");

         window.cioc_span = document.createElement("span");
         cioc_span.id = "cioc";
         cioc.appendChild(cioc_span);
         cioc_span.append(countries[i].cioc);

         var b=document.createElement("button")
         b.className="btn btn-primary"
         b.id="b"
         b.classList.add("st")
         b.setAttribute('data-value',i);
         tile.appendChild(b)
         b.append("CLICK TO KNOW THE WEATHER")
         var b_span=document.createElement("span")
         b_span.id="bi"
         b.appendChild(b_span);
        
         }
}
try{
(async function cntrs(){
    var data = await (await fetch("https://restcountries.eu/rest/v2/all").catch(err_handle)).json();
    initialize(data);
    container.addEventListener('click',function(e)
    {
        if(e.target.id == 'b')
        {
            
            let val = e.target.getAttribute('data-value');
            e.target.style.cursor = 'pointer';
            (async function wthr(){

                var wd = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[val].capital}&appid=f6a9b3d6f4569a7867f7443d738d705b&units=metric`).catch(err_handle)).json();
            
                let out = 'THE VALUES ARE IN METRIC\n';
						for(let w in wd.main)
						{
							out +=w+'  :  '+Math.round(wd.main[w])+'\n';
						}
                        alert(out);
                        
            })();
        };
    });

})();
          

function err_handle(){
    console.log(err)
}
}
catch(err){
  console.log(err)
}



    
    

    