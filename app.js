$(() => {
   
    //-------------------------------

    const merch = [
        {
            name: 'HP Pavilion 590-a0005no',
            price: 4990,
            id: 1,
            picture: "pic/hp-pavilion-590.jpg",
            description: 'HP Pavilion 590-a0005no är en stationär dator som ger dig kraft och prestanda för underhållning, spel och multitasking. Datorn har blivit utrustad med både en 128 GB SSD-hårddisk och en 1000 GB mekanisk hårddisk, vilket ger dig frihet att lagra allt du behöver. Du får dessutom ta del av processorn AMD A9 9425, som med en maxhastighet på 3,7 GHz kommer ge dig en snabbare datorupplevelse.',
            category: 'personal-computers'
        },

        {
            name: 'Lenovo Legion T530',
            price: 9990,
            id: 2,
            picture: "pic/lenovo-legion-t530.jpg",
            description: 'Lenovo Legion T530-28ICB är en stationär speldator som med ett tufft nytt utseende rymmer flera kraftfulla komponenter. Du får bland annat ta del av 8:e generationens Intel® Core i5-processorn som tillsammans med 16 GB DDR4 RAM-minne kommer ge dig en snabb dator perfekt för gaming. Datorn har även utrustats med en 128 GB SSD-hårddisk som i kombination med en 1024 GB HDD gör att du får gott om lagringsutrymme för alla dina spel, filmer och program. Lenovo Legion T530-28ICB har dessutom givits grafikkortet NVIDIA GeForce GTX 1050 Ti, vilket ytterligare garanterar en kvalitativ spelupplevelse.',
            category: 'personal-computers'
        },

        {
            name: 'Kraftfull allt-i-ett-dator',
            price: 8999,
            id: 3,
            picture: "pic/hp-all-in.jpg",
            description: 'Lenovo Ideapad 330-15IKB (81DC006RMX) är en bärbar dator som är säker, slitstark och redo för dagens samt morgondagens uppgifter. Den har bland annat blivit utrustad med en 15,6" Full HD-skärm som lämpar sig lika bra för arbetsuppgifter som studier. Du får även ta del av en 128 GB stor SSD-hårddisk, som tillsammans med 1000 GB HDD ger dig lagringsutrymme för alla dina program och filer. Andra funktioner och specifikationer inkluderar processorn Intel Pentium 4415U, 6 GB DDR4 RAM-minne, snabbt WiFi och Bluetooth 4.1. En stilren laptop som är perfekt lämpad för skolarbete, arbetsuppgifter och underhållning.',
            category: 'personal-computers'
        },

        {
            name: 'Lenovo Ideapad 330-15IKB',
            price: 4990,
            id: 4,
            picture: "pic/lenovo-ideapad-330-15ikb.jpg",
            description: 'HP 24-f0008no är en snabb allt-i-ett-dator som ger dig en helhetslösning utan att ta upp mycket utrymme. Datorn har bland annat utrustats med en 128 GB SSD och en 1000 GB HDD, vilket ger mycket lagringsutrymme för att tillgodose hela familjens behov, eller för att spara större filer i arbetet. Oavsett om det är arbete eller spel som gäller så har 24-f0008no tillräckligt med prestanda för att utföra dina uppgifter. Samtidigt som den snygga designen gör att den passar in och ser bra ut i vilket rum som helst. Till din dator medföljer det även en datormus och ett tangentbord.',
            category: 'laptops'
        },

        {
            name: 'Acer Chromebook CB514-1H-C4VV',
            price: 3290,
            id: 5,
            picture: "pic/acer-chromebook-cb514.jpg",
            description: 'Acer Chromebook CB514-1H-C4VV är en kompakt och lätt laptop som är enkel att ta med sig, den väger endast 1,5 kg och är 17 mm hög. Detta i kombination med en 14" Full HD-skärm och en Intel Celeron-processor, ser till att du kan utföra dina uppgifter på språng eller slappna av framför en film. Du får dessutom ta del av 32 GB SSD-hårddisk och grafikkortet Intel HD Graphics 500, dessa lämpar sig utmärkt för ett enklare datoranvändande som exempelvis surf, filmvisning och betalning av räkningar.',
            category: 'laptops'
        },

        {
            name: 'Mission GGB 2.1',
            price: 499,
            id: 6,
            picture: "pic/mission-sg.jpg",
            description: 'Mission GGB 2.1 är ett fullmatat paket för dig som älskar gaming. Koppla in tangentbordet och musen och slukas upp av dina favoritspel med hjälp av det bekväma headsetet. Tack vare den specialutformade musmattan får du perfekt glid samtidigt som det ligger stadigt mot skrivbordet. Tangentbord, mus och headset är försedda med snygg LED-belysning. Detta paket har "Plug & Play" vilket betyder att det bara är att koppla in och börja spela utan att några drivrutiner krävs.',
            category: 'accessory'
        },

        {
            name: 'Logitech G560',
            price: 1949,
            id: 7,
            picture: "pic/logitech-g560.jpg",
            description: 'Logitech G560 ger dig ett nytt sätt att uppleva datorhögtalare både visuellt och med dess fantastiska ljudåtergivning. Du får ett 2.1 system med dedikerad och väldigt kraftfull subwoofer samt ett par satellithögtalare i snygg design med unika egenskaper där ledljus finns integrerat på baksidan som bland annat kan synkroniseras med vad som visas på skärmen i realtid likt Philips Ambilight eller Hue-teknik.',
            category: 'accessory'
        },

        {
            name: 'Intel® Core™ i9-9900K',
            price: 5979,
            id: 8,
            picture: "pic/intel-core-i9-9900kpg.jpg",
            description: 'Med senaste tillskottet från Intel är du redo för fantastiska upplevelser i spel, VR och underhållning. Denna nya generation av processorer utökar alla möjligheter och funktioner du tidigare haft i stationära datorer och har även avancerade innovationer som ger spännande nya funktioner.',
            category: 'pc-parts'
        },

        {
            name: 'Corsair Vengeance LPX 2x8GB DDR4 Black 3000MHz',
            price: 1390,
            id: 9,
            picture: "pic/corsair-vengeance.jpg",
            description: 'Vengeance LPX är designade för en högpresterande överklockning. Det har värmespridare av ren aluminium för snabb värmeavledning. Åtta lager av PCB hjälper till att hantera värmen och ger en överlägsen möjlighet för överklockning.',
            category: 'pc-parts'
        },

        {
            name: 'PlayStation 4',
            price: 3490,
            id: 10,
            picture: "pic/sony-playstation-4.jpg",
            description: 'Upplev en elegantare, mindre PS4 med en fantastisk spelprestanda som alltid finns där för spelaren.',
            category: 'consoles'
        },

        {
            name: 'Xbox One S 1 TB with Forza Horizon 4',
            price: 2890,
            id: 11,
            picture: "pic/microsoft-xbox-one.jpg",
            description: 'Upplev rikare och djupare färger i spel och video med HDR. Spela gamla spelafavoriter från Xbox 360* i ett ständigt växande utbud med hjälp av bakåtkompabiliteten. Med några av de bästa spelen i Xbox historia, och över 100 exklusiva titlar, har det aldrig funnits en bättre tid att spela på Xbox One.',
            category: 'consoles'
        },
    ];

    //------------------------------
    const pc = $('#Personal-computers');
    const laptops = $('#Laptops');
    const pcParts = $('#pc-parts');
    const accessory = $('#accessory');
    const consoles = $('#consoles');
    //-----------------------PC
    let cart = [];
    let filterArray = [];
    let filterPc = () => {
        for (var i in merch) {
            if (merch[i].category == 'personal-computers') {
                filterArray.push(merch[i]);
            }
            else {
                console.log('none');
            };
        }

    };

    pc.on('click', (e) => {
        e.preventDefault();
        filterPc();
        appendList(filterArray, $('.product-list'));
        filterArray = [];
        //adds/append appendList to the class holder of product-list
    });

    //------------------laptops
    let filterLaptops = () => {
        for (var i in merch) {
            if (merch[i].category == 'laptops') {
                filterArray.push(merch[i]);
            }
            else {
                console.log('none');
            };
        }

    };

    laptops.on('click', (e) => {
        e.preventDefault();
        filterLaptops();

        appendList(filterArray, $('.product-list'));
        filterArray = [];
    });

    //------------------accesory

    let filterAccessory = () => {
        for (var i in merch) {
            if (merch[i].category == 'accessory') {
                filterArray.push(merch[i]);
            }
            else {
                console.log('none');
            };
        }

    };

    accessory.on('click', (e) => {
        e.preventDefault();
        filterAccessory();

        appendList(filterArray, $('.product-list'));
        filterArray = [];
    });
    //-----------pc-parts
    let filterPcParts = () => {
        for (var i in merch) {
            if (merch[i].category == 'pc-parts') {
                filterArray.push(merch[i]);
            }
            else {
                console.log('none');
            };
        }

    };

    pcParts.on('click', (e) => {
        e.preventDefault();
        filterPcParts();

        appendList(filterArray, $('.product-list'));
        filterArray = [];
    });
    //-----------consoles

    let filterConsoles = () => {
        for (var i in merch) {
            if (merch[i].category == 'consoles') {
                filterArray.push(merch[i]);
            }
            else {
                console.log('none');
            };
        }

    };

    consoles.on('click', (e) => {
        e.preventDefault();
        filterConsoles();

        appendList(filterArray, $('.product-list'));
        filterArray = [];
    });



    //

    const appendList = (filterArray, location) => {
            const template = filterArray.map((item, id) => {
            return `

            <li class="product col-lg-6 col-sm-12">
            
                <img src="${item.picture}" alt="${item.description}"> 
                <div class="product-content">
                    <h4>${item.name} - 
                    <span class="category">${item.category}</span><small>${item.price} kr</small></h4>
                    <p>${item.description}</p>
                    <button type="button" class="buy" id="${item.id}">Buy now!"</button>
                </div>
            </li>
            `;
        });
        $(location).html(template);
    };

    //.find select first item in array that maches the function
    const addToCart = (array, id, location) => {
        let a = merch.find((i) => i.id === id); //a is product??
        cart.push(a);

        const item = `
            <li class="item" id="${a.id}">
            <h4>${a.name}</h4>
            <button type=button">X</button>
            </li>
            `;
        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    const removeFromCart = (array, removedItem) => {
        array.splice(removedItem, 1);
    };


    $('.product').on('click', 'button', (e) => {
        let id = e.currentTarget.id;
        console.log(id);
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', (e) => {
        let item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('cart-list'));
    });
})
