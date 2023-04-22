const cityMap = require("./map");
const {calcDistance,distances,m,m1,keys} = require("./calcDistance");


function findRoute(location) {
    let maxLoc = "";
    let maxDist = Number.MIN_SAFE_INTEGER;
    let from = "Indian Institute of Information Technology Lucknow";
    for (let i = 0; i < location.length; i++) {
        // console.log(i,location[i])
        // console.log(m.get(from)[m1.get(from).get(location[i])][0]);
        let distance = m.get(from)[m1.get(from).get(location[i])][1];
        if (distance > maxDist) {
            maxDist = distance;
            maxLoc = location[i];
        }
    }
    let route = [{location:maxLoc,dist:maxDist}];
    location.splice(location.indexOf(maxLoc), 1);
    while (location.length > 0) {
        let minLoc = "";
        let minDist = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < location.length; i++) {
            // console.log(i,location[i]);
            // console.log(m.get(route[route.length - 1].location)[m1.get(route[route.length - 1].location).get(location[i])][1]);
            let distance = m.get(route[route.length - 1].location)[m1.get(route[route.length - 1].location).get(location[i])][1];
            if (distance < minDist) {
                minDist = distance;
                minLoc = location[i];
            }
        }
        route.push({location:minLoc,dist:minDist});
        location.splice(location.indexOf(minLoc), 1);
    }
    // console.log(route);
    return route;
}

// calcDistance();


module.exports = findRoute;