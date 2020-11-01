
async function IndiaCovid(){
    const json1data = await fetch("https://api.covid19api.com/summary");
    const js1data = await json1data.json()
    //console.log(js1data);
    //console.log(js1data.Countries[76]);
    total = js1data.Countries[76].TotalConfirmed;
    recovered = js1data.Countries[76].TotalRecovered;
    death = js1data.Countries[76].TotalDeaths;
    active = total-(recovered+death);

    document.getElementById(`total`).innerText = `${total}`;
    document.getElementById(`active`).innerText = `${active}`;
    document.getElementById(`discharged`).innerText = `${recovered}`;
    document.getElementById(`deaths`).innerText = `${death}`;
}

IndiaCovid();

var i;
async function statecovid(){
    const sjsondata = await fetch("https://api.covidindiatracker.com/state_data.json");
    const sjsdata = await sjsondata.json()
    console.log(sjsdata);
    //console.log(sjsdata[0].state);
    //console.log(sjsdata.Assam);



    buildTable(sjsdata)
    function buildTable(data){
		var table = document.getElementById('myTable')

		for (i = 0; i < sjsdata.length; i++){
            var row = `<tr onclick="myFunction(this)">
                            <td><a href = "district-info.html">${data[i].state}</a></td> 
							<td>${data[i].confirmed}</td>
                            <td>${data[i].active}</td>
                            <td>${data[i].recovered}</td>
                            <td>${data[i].deaths}</td>
                      </tr>`
			table.innerHTML += row


		}
    }
    
}
statecovid();

$('#search-input').on('keyup',function(){
    var value =$(this).val()
    console.log('Value:',value)
    var data = searchtable(value, sjsdata)
    buildTable(data)
})

/*function searchtable(value,data){
    var filteredData=[]

    for(var f=0;f<data.length;f++)
    {
        value = value.toLowerCase()
        var naam = data[f].state

        if(naam.includes(value)){
            filteredData.push(data[f])
        }
    }

    return filteredData
}*/



//TO GET THE INDEX VALUE FOR SHOWING DISTRICT DATA
function myFunction(x) {
    console.log("Row index is: " + x.rowIndex);
    var s_index = x.rowIndex;
    sessionStorage.setItem("s_index",s_index);
  }



