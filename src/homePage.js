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
                            Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality.[1] Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu, boiled eggs, narutomaki, menma and seaweed. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.
                            <br>
                            Ramen Ichiraku is Naruto Uzumaki's favourite dining establishment. He eats there regularly – usually stopping by between missions – and he is often joined by Iruka Umino, another frequent customer. Because Naruto has been a loyal customer for most of his life, Teuchi and his daughter, Ayame, were among the few people in Konoha not to treat Naruto with animosity during his youth.[2] Naruto takes Hinata Hyūga to Ramen Ichiraku for their first date;[3] in the anime, this in turn causes Hinata to become a regular customer, to the point that she has won at least one of its eating contests, a record that Chōji and Chōchō Akimichi have yet to break.[4]
                            <br>
                            The original Ramen Ichiraku is destroyed along with the rest of Konoha during Pain's Assault. In the anime, Inari is implied to have been responsible for rebuilding it, as a favor to Naruto.[5] As Naruto becomes increasingly famous, first as a war hero and later as Hokage, Ramen Ichiraku prospers; in Konoha Hiden, this is explained to be because of customers' hopes of either seeing Naruto there or simply a desire to emulate him and his successes. The second Ramen Ichiraku is ill-suited for this increased business, so it is remodeled and expanded at some point after Ayame takes over management. Ayame even makes Naruto their official promoter; in one such advertisement, he claims that Ramen Ichiraku is just as nutritious as soldier pills. By the time of Naruto's time as Hokage, Ichiraku Ramen had turned into a full restaurant instead of a ramen bar, showing that it has prospered since the Invasion of Pain and Fourth Shinobi World War.[4]
                            <br>
                            In addition to the fresh-made ramen that it is known for, Ramen Ichiraku has at times dabbled in other products. In one episode of the anime, Teuchi starts making diet ramen to help Ayame lose weight, which ends up becoming popular with female patrons.[6] In another episode, Ayame convinces her father to serve tsukemen instead of ramen. Naruto disapproves of this,[7] and by the next time he is seen visiting it is back to serving ramen. At some point, Ramen Ichiraku starts selling instant ramen, empty cups of which tend to litter Naruto's desk at work.[8]
                            <br>
                            Naruto's wedding present from Teuchi was a personalized gift certificate giving Naruto free ramen for life.[9] When Naruto brings his son Boruto to Ramen Ichiraku for the first time in the anime, he digs out the gift certificate from his back pocket, now a bit ratty, stained, and what are either two straight rips or cuts repaired with transparent tape. Boruto is quietly unimpressed with its shabby appearance, but Ayame is more than happy to continue honoring it.
                        </div>`
    mainDiv.appendChild(aboutDiv);
}

export default homePageLoader;