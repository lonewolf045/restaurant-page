const homePageLoader = (mainDiv) => {
    mainDiv.innerHTML = "";
    const headingDiv = document.createElement('div');
    headingDiv.setAttribute('id','headline');
    headingDiv.innerHTML = `<i>I like instant ramen in a cup, and I really like the ramen Iruka Sensei got me at <b>the Ichiraku Noodle Shop</b>, but I hate the three minutes you have to wait after you pour the water in the ramen cup. My hobby is eating different kinds of ramen and comparing them, and my future dream is to be the greatest Hokage!</i><br><i style = "text-align: right;"><b>- Naruto Uzumaki, the Seventh Hokage</b></i>`;
    mainDiv.appendChild(headingDiv);
    let imgUrl = [
        `https://vignette.wikia.nocookie.net/naruto/images/9/9b/Ichiraku_Ramen.png/revision/latest/scale-to-width-down/300?cb=20110721140943`,
        `https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fnaruto-ramen-ichiraku-official-1.jpg?q=75&w=800&cbr=1&fit=max`,
        `https://vignette.wikia.nocookie.net/naruto/images/b/be/Ichiraku_ramen.png/revision/latest?cb=20150703064830`,
        `https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2019/04/Ramen-Ichiraku-Feature-Image.jpg`,
        `https://i.pinimg.com/originals/f7/14/53/f714532a1d3ee470de6556b8ca23afd6.jpg`,
        `https://qph.fs.quoracdn.net/main-qimg-b11e86dd42cba180731aa1f0a2ab451c.webp`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7xLztROWPjnnD-9pmFM0bU1NLJe_96KSqBw&usqp=CAU`
    ];
    let i = 1;
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id','image');
    imgDiv.innerHTML = `<img id = 'img' src = "https://vignette.wikia.nocookie.net/naruto/images/9/9b/Ichiraku_Ramen.png/revision/latest/scale-to-width-down/300?cb=20110721140943">`;
    imgDiv.addEventListener('click', () => {
        //console.log(i);
        i = ((i + 1) % imgUrl.length);
        //console.log(imgUrl.length);
        imgDiv.childNodes[0].src = imgUrl[i];
    });
    const recur = () => {
        imgDiv.click();
        setTimeout(recur,10000);
    }
    recur();
    mainDiv.appendChild(imgDiv);
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id','detail');
    aboutDiv.innerHTML = `<div>
                            We are the Konoha's <b><i>finest</i></b> ramen maker. We have been serving tasty ramen for decades.
                            We use the finest quality of ingredients to give you the authentic flavor of Ichiraku Ramen which is our Hokage's favourite.
                            We have been there for years and have seen Konoha suffer but you know what? Every problem cease to exist once you taste Ichiraku's signature
                            <i><b>Miso Pork Ramen</b>,Hokage's favourite</i>.Every big name in Konoha is our customer, starting from 4th Hokage till present, each Hokage
                            has been a fan of our ramen. Even the Third used to eat our ramen to keep imself strong.
                        </div>`
    mainDiv.appendChild(aboutDiv);
}

export default homePageLoader;