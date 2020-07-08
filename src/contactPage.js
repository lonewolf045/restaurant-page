const contactPageLoader = (mainDiv) => {
    mainDiv.innerHTML = "";
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactDiv';
    const detailsDiv = document.createElement('div');
    detailsDiv.id = 'detailsDiv';
    const formDiv = document.createElement('div');
    formDiv.id = 'formDiv';
    //console.log('Clicked');

    //Address and Contact Details
    const address = document.createElement('div');
    const addressHeading = document.createElement('h2');
    const addressDetail = document.createElement('div');
    address.id = 'address';
    addressHeading.id = 'addressHeading';
    addressDetail.id = 'addressDetail';
    addressHeading.textContent = 'Address:-';
    addressDetail.innerHTML = '14, Namikaze Lane <br>Shopping District <br>Konohagakure , Land of Fire'; 
    address.appendChild(addressHeading);
    address.appendChild(addressDetail);
    const contact = document.createElement('div');
    const contactHeading = document.createElement('h2');
    contact.id = 'contact';
    contactHeading.id = 'contactHeading';
    contactHeading.textContent = 'Contact us at:-';
    const contactDetails = document.createElement('div');
    contactDetails.id = 'contactDetails';
    const details = [
        {field: 'Phone No.' , value : '+(013)43524534'},
        {field: 'Mobile No.', value : '+(013)86234567333'},
        {field: 'Email', value : 'ichiraku.ramen@kagemail.com' }
    ];
    details.forEach(detail => {
        const subDetail = document.createElement('div');
        subDetail.classList.add('subDetail');
        const subHeadingDetail = document.createElement('div');
        subHeadingDetail.classList.add('subHeadingContact');
        subHeadingDetail.textContent = detail.field + ": ";
        const subValueDetail = document.createElement('div');
        subValueDetail.classList.add('subValueDetail');
        subValueDetail.textContent = detail.value;
        subDetail.appendChild(subHeadingDetail);
        subDetail.appendChild(subValueDetail);
        contactDetails.appendChild(subDetail);
    });
    contact.appendChild(contactHeading);
    contact.appendChild(contactDetails);
    detailsDiv.appendChild(address);
    detailsDiv.appendChild(contact);

    
    contactDiv.appendChild(detailsDiv);
    contactDiv.appendChild(formDiv);
    mainDiv.appendChild(contactDiv);
};
export default contactPageLoader;