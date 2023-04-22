const cityMap = require("./map");

const Infinity = Number.MAX_SAFE_INTEGER;

// for (let [key, value] of cityMap) {
//     console.log(key);
//     for (let [subKey, subValue] of value) {
//       console.log(`  ${subKey} : ${subValue}`);
//     }
//   }

const n = cityMap.size;
distances = new Array(n);
for (let i = 0; i < n; i++) {
    distances[i] = new Array(n).fill(Infinity);
    distances[i][i] = 0;
}
let keys = [];
function calcDistance() { 
    // console.log(n);

    for (const [key, innerMap] of cityMap) {
        if (!keys.includes(key))
            keys.push(key);
        for (const [innerKey, dist] of innerMap) {
            if (!keys.includes(innerKey))
                keys.push(innerKey);
        }
    }
    let i = 0;
    for (const [from, toMap] of cityMap) {
        for (const [to, distance] of toMap) {
            distances[i][keys.indexOf(to)] = distance;
            // console.log(keys.indexOf(to));
        }
        i++;
    }
    // for(let i=0;i<n;i++){
    //     for(let j=0;j<n;j++) {
    //         console.log(distances[i][j]);
    //     }
    // }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (distances[i][k] !== Infinity && distances[k][j] !== Infinity && distances[i][j] > distances[i][k] + distances[k][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                }
            }
        }
    }

    // Print the shortest distances between all pairs of nodes

    // for(let i=0;i<n;i++){
    //     console.log(`Distances from ${keys[i]}:`);
    //     for(let j=0;j<n;j++){
    //         if(i!=j){
    //             console.log(`${keys[j]} : ${distances[i][j]}`);
    //         }
    //     }
    //     console.log("\n");
    // }
}

let m = new Map();
let m1 = new Map();

// const n = cityMap.size;

// let keys = [];

for (const [key, innerMap] of cityMap) {
    if (!keys.includes(key))
        keys.push(key);
    for (const [innerKey, dist] of innerMap) {
        if (!keys.includes(innerKey))
            keys.push(innerKey);
    }
}

function help() {
    for (let [from, _] of cityMap) {
        for (let [to, __] of cityMap) {
            if (from !== to) {
                let x = distances[keys.indexOf(from)][keys.indexOf(to)];
                if (!m.has(from)) {
                    m.set(from, []);
                }
                m.get(from).push([to, x]);
            }
        }
        m.get(from).sort((a, b) => a[1] - b[1]);
        for (let i = 0; i < m.get(from).length; i++) {
            if (!m1.has(from))
                m1.set(from, new Map());
            m1.get(from).set(m.get(from)[i][0], i);
        }
    }


    // for (let [from, cities] of m) {
    //     console.log(`Distances from ${from}:`);
    //     for (let [to, distance] of cities) {
    //         console.log(`${to} ${distance}`);
    //     }
    //     console.log("\n\n");
    // }
}

module.exports = {calcDistance,distances,keys,m1,m,help};