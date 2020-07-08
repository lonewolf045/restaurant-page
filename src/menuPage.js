const menuPageLoader = (mainDiv) => {
    mainDiv.innerHTML = "";
    const innerDiv = document.createElement('div');
    innerDiv.id = 'menuDiv';
    
    //Side Dish Menu
    
    const sideDishes = document.createElement('div');
    sideDishes.id = 'sideDishes';
    const sideHeading = document.createElement('h2');
    sideHeading.id = 'sideHeading';
    sideHeading.textContent = 'Side Dishes';
    const sideMenuLeft = document.createElement('div');
    sideMenuLeft.id = 'sideMenuLeft';
    sideMenuLeft.classList.add('sideMenu');
    const sideMenuRight = document.createElement('div');
    sideMenuRight.id = 'sideMenuRight';
    sideMenuRight.classList.add('sideMenu');
    const sideLeft = [
        { id: '01', name: 'Takoyaki' ,price: 6.25},
        { id: '02',name: 'Vegetarian Korroqe', price:5.50 },
        { id: '03',name: 'Veggie Spring Roll', price:5.50},
        { id: '04',name: 'Gyoza (Pork or Chicken)', price: 6.25},
        { id: '05',name: 'Squid Calamari', price: 8.25},
        { id: '06',name: 'Shrimp Tempura 6Ps.', price: 8.50},
        { id: '07',name: 'Fried Tofu', price: 5.95}
    ];
    const sideRight = [
        { id: '08', name: 'Fried Trumpt Mushroom' ,price: 5.75},
        { id: '09', name: 'Sweet Potato Fried', price:4.50 },
        { id: '10', name: 'Pork Cutlet', price: 6.95},
        { id: '11', name: 'Fish Cutlet', price: 7.50},
        { id: '12', name: 'Chicken Cutlet', price: 6.95},
        { id: '13', name: 'Garlic Fish', price: 5.95},
        { id: '14', name: 'Crispy Fried Chicken', price: 5.95}
    ];
    sideLeft.forEach( side => {
        const sideDish = document.createElement('div');
        sideDish.classList.add('sideDishContainer');
        const name = document.createElement('div');
        name.classList.add('sideDishName');
        name.textContent = 'S' + side.id +"  " + side.name;
        const price = document.createElement('div');
        price.classList.add('sideDishPrice');
        price.textContent = '$' + side.price;
        sideDish.appendChild(name);
        sideDish.appendChild(price);
        sideMenuLeft.appendChild(sideDish);
    });
    sideRight.forEach( side => {
        const sideDish = document.createElement('div');
        sideDish.classList.add('sideDishContainer');
        const name = document.createElement('div');
        name.classList.add('sideDishName');
        name.textContent = 'S' + side.id +"  " + side.name;
        const price = document.createElement('div');
        price.classList.add('sideDishPrice');
        price.textContent = '$' + side.price.toFixed(2);
        sideDish.appendChild(name);
        sideDish.appendChild(price);
        sideMenuRight.appendChild(sideDish);
    });
    sideDishes.appendChild(sideHeading);
    sideDishes.appendChild(sideMenuLeft);
    sideDishes.appendChild(sideMenuRight);

    //Ramen Menu

    const ramenDishes = document.createElement('div');
    ramenDishes.id = 'hotPotRamen';
    const ramenHeading = document.createElement('h2');
    ramenHeading.id = 'ramenHeading';
    ramenHeading.textContent = 'Hot Pot Ramen';
    const ramenInstructions = document.createElement('div');
    ramenInstructions.id = 'ramenInstructions';
    ramenInstructions.innerHTML = `<ol id = 'instructionList'>
                                        <li>
                                            Choose Ramen or Udon 
                                        </li>
                                        <li>
                                            Choose Spicy: Mild , Medium or Extra
                                        </li>
                                    </ol>
                                    <p id = 'instructionDetails'>
                                        Noodles served with bean sprouts, bamboo shoot, green onion, red ginger, flavored egg, seafoods and sesame seeds etc.
                                    </p>`;
    const ramenMenuContainer = document.createElement('div');
    ramenMenuContainer.id = 'ramenMenuContainer';
    const ramenMenuItems = [
        {src : 'https://i.pinimg.com/originals/8c/a2/7e/8ca27e70b4e7400edebb82ada40d944f.jpg', caption : 'Soft, juicy stewed pork with pork broth' , name: 'Stewed Pork Ramen', price: 10.99}
        ,
        {src : 'https://i2.wp.com/www.spicetheplate.com/wp-content/uploads/2018/05/Deluxe-Instant-Ramen-With-Beef-and-Vegetables-3.jpg?resize=780%2C1170&ssl=1', caption : 'Beef slices with pork broth' , name: 'Shabu Beef Ramen', price: 10.99}
        ,
        {src : 'https://i.pinimg.com/originals/8d/a4/7c/8da47c4979d3744b460ed8ac6e43d99a.jpg', caption : 'Slice flavored pork and fish cakes with pork broth' , name: 'Naruto Chasho Ramen', price: 10.99},
        {src : 'https://futuredish.com/wp-content/uploads/2019/10/Jeju-Seafood-Ramen.jpg', caption : 'Grilled salmon, shrimp, mussel, squid balt with pork broth' , name: 'Seafood Ramen', price: 12.99}
        ,
        {src : 'https://mediacdn.grabone.co.nz/asset/vKIdl1CEbF/box=970x0', caption : 'Pan stir fried veggies and tofu with pork broth or vegetable soup' , name: 'Vegetable Ramen', price: 10.99}
        ,
        {src : 'https://awol.junkee.com/wp-content/uploads/2019/05/IMG_3838-11.jpg', caption : 'Deep fried curry flavored chicken with pork broth' , name: 'Fried Chicken Ramen', price: 10.99}
    ];
    ramenMenuItems.forEach(ramenMenuItem => {
        const ramenMenu = document.createElement('figure');
        ramenMenu.classList.add('menuItems');
        const menuImage = document.createElement('img');
        menuImage.classList.add('menuImage');
        menuImage.src = ramenMenuItem.src;
        const menuAbout = document.createElement('figcaption');
        const menuName = document.createElement('div');
        const menuPrice = document.createElement('div');
        const menuDescription = document.createElement('div');
        menuAbout.classList.add('menuAbout');
        menuName.classList.add('menuName');
        menuPrice.classList.add('menuPrice');
        menuDescription.classList.add('menuDescription');
        menuName.textContent = ramenMenuItem.name;
        menuPrice.textContent = '$'+ramenMenuItem.price.toFixed(2);
        menuDescription.textContent = ramenMenuItem.caption;
        menuAbout.appendChild(menuName);
        menuAbout.appendChild(menuPrice);
        menuAbout.appendChild(menuDescription);
        ramenMenu.appendChild(menuImage);
        ramenMenu.appendChild(menuAbout);
        ramenMenuContainer.appendChild(ramenMenu);
    });
    
    ramenDishes.appendChild(ramenHeading);
    ramenDishes.appendChild(ramenInstructions);
    ramenDishes.appendChild(ramenMenuContainer);

    //Additional Toppings

    const additionalToppings = document.createElement('div')
    additionalToppings.id = 'additionalTopping';
    const toppingHeading = document.createElement('h2');
    toppingHeading.id = 'toppingHeading';
    toppingHeading.textContent = 'Additional Toppings';
    const addTop = [
        {price: 3.99 , top: ['Beef' , 'Chicken' , 'Stewed Pork', 'Salmon','Shrimp','Squid Ball','Chashu']},
        ,{price: 2.00 , top: ['Noodle']}
        ,{price: 1.50 , top: ['Udon','Flavored Egg','Soup']}
        ,{price: 0.99 , top: ['Bamboo Shoot' , 'Mushroom' , 'Bean Sprout', 'Corn','Cabbage','Napa Cabbage','Red Ginger','Green Onion']}
    ];
    const toppingsMenu = document.createElement('div');
    toppingsMenu.id = 'toppingsMenu';
    addTop.forEach(topDetail => {
        const topItem = document.createElement('div');
        topItem.classList.add('topContainer');
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('topPrice');
        itemPrice.textContent = '$' + topDetail.price.toFixed(2);
        const itemContainer= document.createElement('div');
        itemContainer.classList.add('topItemContainer');
        topDetail.top.forEach(topName => {
            const top = document.createElement('div');
            top.classList.add('toppings');
            top.textContent = topName;
            itemContainer.appendChild(top);
        });
        topItem.appendChild(itemPrice);
        topItem.appendChild(itemContainer);
        toppingsMenu.appendChild(topItem);
    });

    additionalToppings.appendChild(toppingHeading);
    additionalToppings.appendChild(toppingsMenu); 

    innerDiv.appendChild(sideDishes);
    innerDiv.appendChild(ramenDishes);
    innerDiv.appendChild(additionalToppings);
    mainDiv.appendChild(innerDiv);
};
export default menuPageLoader; 