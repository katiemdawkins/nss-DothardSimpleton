



// create a function with the html layout for business names 

export const BusinessNames = (businessObject) => {
    return `
        <section class="businessName">
            <h2 class="nameOfBusiness">${businessObject.companyName}</h2>
            <div class="addressOfBusiness">
                ${businessObject.addressFullStreet}
                ${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                <hr>
            </div>
        </section>
    `
}