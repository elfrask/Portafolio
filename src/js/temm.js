

let go = e=>document.getElementById(e);

let temp_sound = [
    new Audio("/music/tem/tem.wav"),
    new Audio("/music/tem/tem2.wav"),
    new Audio("/music/tem/tem3.wav"),
    new Audio("/music/tem/tem4.wav"),
    new Audio("/music/tem/tem5.wav"),
    new Audio("/music/tem/tem6.wav")
];



function rancolor() {

    let r = Math.random;
    let col = [
        parseInt(r()*1000)%256,
        parseInt(r()*1000)%256,
        parseInt(r()*1000)%256,
    ];

    let co = `rgb(${col[0]}, ${col[1]}, ${col[2]})`

    return co
};

function set_ar(e) {

    let ang = [0, 90, 180, 270];

    if ((parseInt(Math.random()*1000)%2) == 0) ang = ang.reverse()

    let i = 0
    setInterval(()=>{
        i++;
        let angulo = `rotate(${ang[i%4]}deg)`
        e.style.transform = angulo
    }, 200)
};

function toint(e) { if(e) {return 1} else {return 0}}

let meod

let puntos = 0

let win = new Audio("/music/win.wav")

function apoint(x) {
    let b = go("punto");
    let radu = parseInt((""+(Math.random())).substr(2));
    temp_sound[radu%6].play();
    puntos = puntos + x
    b.innerText = puntos
    if ((puntos+"").substr(-2) == "00") {
        win.play()
    }
}

function spawn() {
    let div = document.createElement("div");
    let tem = document.createElement("div");
    meod = div
    let ct = go("ct");
    
    div.appendChild(tem)
    
    let ran = Math.random();
    let arr = (ran+"").substr(2);
    let num = parseInt(arr);
    
    let hpos = ["-100%", "200%"]

    let ini = Boolean(parseInt(arr[2])%2)
    let fin = !ini;

    let vpos = ((parseInt(arr[7])+1)*6)+5
    let delay = ((parseInt(arr[4])+1)*200)+2000
    let escala = ` scale(${((1+(parseInt(arr[3])))*0.1)+0.5}) `
    
    //console.log(escala)

    div.style.left = hpos[toint(ini)]
    div.style.top = vpos+"%"
    div.style.transform = escala
    tem.style.opacity = `${(3+(parseInt(arr[5])))*0.1}`

    div.style.transition = delay+"ms"

    tem.addEventListener("click", () => {
        clearTimeout(tout);
        tem.remove()
        div.remove()
        apoint(1)
    })
    
    ct.appendChild(div)


    div.classList.add(["up-temi"]);
    tem.classList.add(["temi"]);

    
    setTimeout(() => {
        div.style.left = hpos[toint(fin)]
        //console.log(hpos[toint(fin)])
        set_ar(tem)
    }, 100)
    

    let tout = setTimeout(() => {
        tem.remove()
        div.remove()
    }, delay)



};

function play() {
    (new Audio("/music/snd_select.wav")).play()
    go("mus").play()

    go("init").remove()
    let vid = go("vid");
    let sub1 = go("sub1");
    let sub2 = go("sub2");
    

    vid.style.opacity = "1";
    vid.style.transform = "scale(1)";

    document.title = "Temmie baila conga!"

    setInterval(() => {
        sub1.style.backgroundColor = rancolor()
        
    }, 3000)
    
    setTimeout(() => {
        setInterval(() => {
            sub2.style.backgroundColor = rancolor()
        }, 3000)
        
    }, 1500);


    setInterval(() => {
        //for(let i = 0; i < 5; i++) spawn()
        spawn()
    }, 500)

    set_ar(go("tem"))
    
}