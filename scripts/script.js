// JavaScript Document
// Variabelen
var startKnop = document.querySelector('body > section:first-of-type button');
var zeroState = document.querySelector('body > section:first-of-type');
var shootKnop = document.querySelector('body > section:nth-of-type(2) button');
var bal = document.querySelector('body > section:nth-of-type(2) ul:nth-of-type(2) img');
var techniekPlaatje = document.querySelector('body > section:nth-of-type(2) > img:nth-of-type(2)');
var techniekNaam = document.querySelector('body > section:nth-of-type(3) h2');
var japanseNaam = document.querySelector('body > section:nth-of-type(3) p:first-of-type');
var krachtLevel = document.querySelector('body > section:nth-of-type(3) p:nth-of-type(2)');
var techniekInfo = document.querySelector('body > section:nth-of-type(3) p:last-of-type');
var mark = document.querySelector('body > section:nth-of-type(2) > img:first-of-type');
var bliksem = document.querySelector('body > section:nth-of-type(2) > img:nth-of-type(3)');
var gif = document.querySelector('body > section:nth-of-type(2) > img:last-of-type');
var h1Element = document.querySelector('h1');
var audio = document.querySelector('audio');

// Arrays
var technieken = ['singlehand', 'fist', 'fist2', 'fiststanding', 'dome', 'doublehands'];
var titels = ['Hand van God', 'Vuurbalknokkel', 'Vuist der Gerechtigheid', 'Verwoestende Hamer', 'Ultradimensie Hand', 'Greep van God']
var japansenamenlijst = ['ゴッドハンド', '熱血パンチ', '正義の鉄拳', 'いかりのてっつい', 'イジゲン・ザ・ハンド', 'ゴッドキャッチ'];
var krachtLevelLijst = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6']
var informatieLijst = [
    "Mark's eerste kenmerkende beweging, geleerd uit de aantekeningen van zijn grootvader. Mark beweegt zijn handen omhoog en dan verschijnt er een grote gele hand, waarmee hij de bal kan tegenhouden. Dit evolueert later naar de 'Ware Goddelijke Hand', die alleen groter van formaat en sterker is. Deze techniek komt uit het notitieboek van David Evans. Het werd voor het eerst door Keizerpinguïn nr. 2 gebroken. Het kan ook met twee handen worden gebruikt en wordt daardoor groter.",
    "Mark's tweede kenmerkende beweging, persoonlijk geleerd door constante oefening. Mark slaat eenvoudigweg met explosieve kracht tegen de bal. De gebruiker slaat de bal met een vuist van vuur om hem weg te slaan. Endou gebruikte deze hissatsu voornamelijk als hij God Hand niet kon gebruiken, bijvoorbeeld als de tegenstander te snel schoot. In de anime, wanneer het in de Shin-vorm wordt gebruikt, verschilt het van de traditionele versie. In plaats van de bal te slaan, ving Endou hem op terwijl deze nog kracht had en sloeg vervolgens met zijn vuist op de grond. Dit creëerde vlammen die uit de grond kwamen en de gebruiker en de bal in brand staken.",
    "'De ultieme techniek', een techniek die Mark's grootvader nooit volmaakte. Tijdens de periode waarin Mark probeerde deze te leren, stopte hij de techniek voordat hij deze volledig kon voltooien. De sleutel tot de techniek was de 'draaikolk'. Uiteindelijk begreep hij de 'draaikolk' en kreeg hulp van Hurley Kane door bij hem te leren surfen. Hij wist dat als hij leerde surfen, hij succesvol de Vuist van Gerechtigheid zou leren. Hij leerde ook dat hij de bal niet hoefde te slaan, maar een draaiende stop moest creëren. De techniek lijkt op een vuistversie van God Hand en draait voortdurend om de bal te stoppen. Dit is de techniek waar Mark het meest in is gegroeid, tot graad 5. In het Japans wordt het 'Seigi no Teken' genoemd. Dit werd voor het eerst door Gungnir van Desarm's Epsilon gebroken. Deze beweging komt ook uit David Evans' notitieboek.",
    "Met deze techniek maakt Mark (Endou) een soort van koepel waardoor het schot over het doel gaat. Hij kreeg deze inspiratie omdat, een vreemde man met baard en pet (zijn opa maar dit wist hij niet) aan hem vertelde dat hij dus eigenlijk geen eigen techniek had en alles had gekopierd van zijn opa. In de wedstrijd tegen De Knight Of Queen wordt Dragon Slayer samen met Excalibur door hem gestopt door een schild op te roepen waardoor de bal niet echt wordt gestopt via de muur maar door de draaing gaat de bal over het doel.",
    "Mark gebruikt eerst Majin de Hand, springt vervolgens in de lucht en slaat de naderende bal met de techniek. In het Japans staat deze beweging bekend als de 'Hammer of Wrath'. Met deze beweging kon Mark Byron, Burn en Gazelle's Chaos Break blokkeren in hun wedstrijd tegen Korea's Fire Dragon. Edgar van de Knights of Queen brak deze techniek als eerste met zijn Excalibur. Deze techniek werd slechts drie keer gebruikt voordat ze werd doorbroken.",
    "De eerste keer dat Mark de techniek gebruikte lukte het niet hem uit te brengen, doordat hij de energie niet had om de bal te stoppen. De tweede keer dat Mark de techniek gebruikte, kreeg hij dit wel voor elkaar en lukte het om de bal te stoppen. Mark perfectioneerde de techniek tijdens de wedstrijd tegen Little Giant, waar hij de techniek ontwikkelde tot rang G3 en alle ballen die Little Giant schoten tegen hield. De techniek werd nogmaals gebruikt in de laatste wedstrijd tussen Raimon en First Raimon. Het is de sterkste vangtechniek in het hele universum. "
]
var sounds = [
    'handvangod',
    'vuurbalknokkel',
    'vuistdergerechtigheid',
    'verwoestendehamer',
    'ultradimensiehand',
    'greepvangod'
]

// functie om de intro af te spelen tijdens de zero state
function audioplay(){
    audio.play();   
}

zeroState.addEventListener('mouseover', audioplay);

function start(){
    zeroState.classList.add('startspel');
    audio.pause();
}

// waarde van de level
var level = -1 ;

// functie die de technieken laat uitvoeren en de bal laat schieten
function shoot() {
    bal = document.querySelector('body > section:nth-of-type(2) ul:nth-of-type(2) img');

    level = level + 1;

    if (level < 6){
        h1Element.classList.remove('gescoord');
        mark.classList.remove('markweg');
        bal.classList.add('schieten');
        techniekPlaatje.src = './images/'+ technieken[level] +'.png';
        techniekPlaatje.classList.add(technieken[level]);
        h1Element.textContent = titels[level];
        h1Element.classList.add('technieknaam');
        techniekNaam.textContent = titels[level];
        japanseNaam.textContent = 'Japanse naam:' + japansenamenlijst[level];
        krachtLevel.textContent = 'Verdedigingskracht = ' + krachtLevelLijst[level];
        techniekInfo.textContent = informatieLijst[level];
        shootKnop.disabled = true;
        audio.src = './audio/'+sounds[level]+'.mp3';
        audio.play();

        console.log(technieken[level]);


        bal.addEventListener("animationend", remove);
        
    }

    if(level === 5){
        bliksem.src = './images/lightning.gif';
    }
    
    else if (level === 6) {
        mark.classList.add('markweg');
        h1Element.textContent = 'Goal!!!';
        h1Element.classList.add('gescoord');
        bal.classList.add('schieten');
        audio.src = './audio/goal.mp3';
        audio.play();
        console.log(level)
        shootKnop.textContent = 'Speel opnieuw';
        techniekNaam.textContent = '';
        japanseNaam.textContent = '';
        krachtLevel.textContent = '';
        techniekInfo.textContent = '';
        bliksem.src = '';
    }

    else if (level === 7) {
        level = -1;
        mark.classList.remove('markweg');
        h1Element.textContent = 'Schiet de bal door op de knop te drukken of door de bal in de goal te slepen';
        h1Element.classList.remove('gescoord');
        bal.classList.remove('schieten')
        techniekPlaatje.className = '';
        console.log(level)
        shootKnop.textContent = 'Schiet de bal';
        techniekNaam.textContent = 'Informatie Techniek';
        audio.src = '';
    }
}

// functie die zich afspeelt na elke keer dat er is geschoten
function remove() {
    if(level === 6){
        h1Element.textContent = '';
    }

    else{
        techniekPlaatje.src = '';
        techniekPlaatje.classList.remove('hand_van_god');
        bal.classList.remove('schieten');
        h1Element.classList.remove('gescoord');
        shootKnop.disabled = false;
        h1Element.textContent = 'Schiet de bal door op de knop te drukken of door de bal in de goal te slepen';
        h1Element.classList.remove('technieknaam');
        console.log('removedd')
    }
}

// functie voor de easteregg
function easteregg(){
    gif.src = './images/easteregggif.gif';
    gif.classList.add('show');
    setTimeout(gifgone, 4000);
}

function gifgone(){
    gif.classList.remove('show');
}


// zorgt ervoor dat je de bal in het doel kan slepen
new Sortable(ball, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});

new Sortable(goal, {
    group: 'shared',
    animation: 150,
    onAdd: function (/**Event*/evt) {
		// same properties as onEnd
       shoot();
	}
});


// zorgt ervoor dat je de bal kan slapen zodat de easteregg werkt
new Sortable(ball, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});

new Sortable(eastereggs, {
    group: 'shared',
    animation: 150,
    onAdd: function (/**Event*/evt) {
		// same properties as onEnd
       easteregg();
    }
});


// eventlisteners 
startKnop.addEventListener('click', start)
shootKnop.addEventListener('click', shoot);
