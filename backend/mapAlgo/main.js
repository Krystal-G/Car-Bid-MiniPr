const findRoute = require("./findRoutes");
const { calcDistance, distances, keys,help } = require("./calcDistance");

const source = "Indian Institute of Information Technology Lucknow";

function calcTime(distance, orgTime,flag) {
    let orgTimeHour = parseInt(orgTime.split(":")[0]);
    let orgTimeMinutes = parseInt(orgTime.split(":")[1]);
    // console.log(orgTimeHour, orgTimeMinutes);
    let totalMinutes = orgTimeHour*60 + orgTimeMinutes;
    let timeTaken = Math.ceil(3*(distance/2));
    let time = totalMinutes - timeTaken;
    
    // convert time into hh:mm format string
    let hours = (Math.floor(time/60)).toString().padStart(2, '0');
    let minutes = (time%60).toString().padStart(2, '0');
    let timeString = hours + ":" + minutes; 
    return timeString;
}

let result = [];
function main(employees, drivers,orgTime) {
    calcDistance();
    help();
    employees.sort((a, b) => {
        const locationA = a.location;
        const locationB = b.location;
        const distanceA = distances[keys.indexOf(source)][keys.indexOf(locationA)];
        const distanceB = distances[keys.indexOf(source)][keys.indexOf(locationB)];
        return distanceA - distanceB;
    });
    // console.log(employees);
    let i =0;
    
    let t = 0;
    // console.log(employees.length);
    while(i<employees.length){
        let fourPpl = [];
        let cnt = 0;
        while(i<employees.length){
            fourPpl.push(employees[i].location);
            // console.log(employees[i].id);
            cnt++;
            if(cnt==4) break;
            i++;
        }
        // console.log(fourPpl);
        //create a map of location and frequency from fourPpl
        let map = new Map();
        for(let j=0;j<fourPpl.length;j++){
            if(map.has(fourPpl[j])){
                map.set(fourPpl[j],map.get(fourPpl[j])+1);
            }
            else{
                map.set(fourPpl[j],1);
            }
        }
        //iterate in map and create an array of all locations
        let uniqueLocations = [];
        for(let [key,value] of map){
            // console.log(key);
            uniqueLocations.push(key);
        }
        
        // console.log(uniqueLocations);
        let route = findRoute(uniqueLocations);
        let curResult = {
            passengers: [],
            driver: null,
        }
        for(let j=route.length-1;j>=0;j--){
            const curRoute = route[j].location;
            const targetEmployees = employees.filter(employee => employee?.location === curRoute);
            for(let x=0;x<targetEmployees.length;x++){
                curResult.passengers.push({
                    id: targetEmployees[x].id,
                    location: targetEmployees[x].location,
                    time: calcTime(route[j].dist,(j===route.length-1?orgTime:curResult.passengers[curResult.passengers.length-1].time))
                })
            }
        }
        if(t < drivers.length) curResult.driver = drivers[t].id;
        t++;
        //reverse curResult.passengers
        curResult.passengers.reverse();
        result.push(curResult);
        i++;
    }

    // console.log(result);
    const unique = result.filter((v, i, a) => a.findIndex(t => (t.driver === v.driver)) === i);
    // for(let i=0;i<result.length;i++){
    //     console.log(result[i]);
    // }   
    // console.log(unique);
    return unique;
}

module.exports = {main};