// Here i have taken array of objects
const data = [
    {
        name: "Raj", 
        Profession: "SDE"
    }, 
    {
        name: "Anuj", 
        Profession: "SDE"
    }, 
    {
        name: "Ajay", 
        Profession: "SDE"
    }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        data.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}


function createData(newData) {
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            data.push(newData);
            let error = false;
            if(!error) {
                resolve();
            } else {
                reject("Something went wrong!");
            }
        }, 2000)
    })
}


createData({name: "Vivek", Profession: "Analyst"})
.then(getDatas)  
.catch(err => console.log("Something went wrong!"))
// getDatas();
