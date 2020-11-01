var index_fetched = sessionStorage.getItem("s_index");
var index = index_fetched-1;
console.log(index);
async function statecovid(){
    const ditrictjson = await fetch("https://api.covidindiatracker.com/state_data.json");
    const districtjs = await ditrictjson.json()
    console.log(districtjs);
    //console.log(districtjs[1].districtData.length);
    //console.log(districtjs[1].districtData);

    buildTable(districtjs)
    function buildTable(data){
		var table = document.getElementById('dsTable')
    var d = new Date();
		for (var i = 0; i < districtjs[index].districtData.length; i++){
            var row = `<tr>
							<td>${d}</td> 
							<td>${districtjs[index].districtData[i].name}</td>
              <td>${districtjs[index].districtData[i].confirmed}</td>    
					  </tr>`
			table.innerHTML += row


		}
	}

}
statecovid();