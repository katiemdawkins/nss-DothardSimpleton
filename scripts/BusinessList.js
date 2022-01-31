import { getBusinesses } from "./database.js";
import { BusinessNames } from "./Business.js";

// invoke getBusinesses and store it in a variable 
//const theBusinesses = getBusinesses()
//const theBusinessNames = businessNames()
// create a function that displays html for each business name with h2 or h3 

const contentTarget = document.querySelector(".container") 

export const businessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += BusinessNames(businessObject)
        }
    );
}
