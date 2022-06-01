
let ighealth, igattack, igarmor, igenemyattack, igenemyarmor, igenemyhealth, enemyhealth, enemyattack, enemyarmor, igopc=1, critical, damage, armorflag


console.log("Bienvenido a ULTIMATE TEXT BATTLE SIMULATOR ++ V 0.1")
let playername = prompt("Digita el nombre que deseas para tu personaje: ")
tag:
do{

    let confirm = prompt(`¿Estas seguro que ${playername} sea tu nombre? (s/n)`)
    switch (confirm){
        case "s":
            break tag;
        case "si":
            break tag;
        case "n":
            playername = prompt("Digita tu nombre nuevamente", "")
            break;
        case "no":
            playername = prompt("Digita tu nombre nuevamente", "")
            break;
        default:
            console.log("Ingresa una respuesta valida.")
            break;
            
    }

}while(confirm!="n")
console.log("Selecciona una raza: ")
console.log("1) Humano: Salud-500  Ataque-80  Armadura-30")
console.log("2) Ogro: Salud-700  Ataque-60  Armadura-40")
console.log("3) ???")
exitrace:
do {
    var race = prompt("¿Ingresa el numero de la raza que desees?")
    switch(race){
        case "1":  
            ighealth = 500
            igattack = 80
            igarmor = 30
        break exitrace;
        case "2":
            ighealth = 700
            igattack = 60
            igarmor = 40
        break exitrace;
        case "3":
            ighealth = Math.ceil(Math.random()*(1000-1))*1
            igattack = Math.ceil(Math.random()*(150-0))*1
            igarmor = Math.ceil(Math.random()*(100-0))*1
            console.log("")
            console.log(`Las estadisticas de tu raza missingN▯ son: Salud-${ighealth}, Ataque-${igattack}, Armadura-${igarmor}`)
            console.log("")
        break exitrace;
        default:
            console.log("%cIngresa una respuesta valida.", "color:red")
        break;
    }
}while(race!="1" | race!="2" | race!="3")

const health = ighealth
const armor =igarmor

function defender(){
    igarmor=Math.floor(igarmor+(igarmor*0.8))
    console.log(`Elevaste tu armadura a ${igarmor}`)
    return igarmor
}

function atacar(){


		damage = Math.floor(igattack/(1+igenemyarmor/100))
		igenemyhealth = Math.floor(igenemyhealth-damage)
		console.log(`Hiciste ${damage} de daño`)
    return igenemyhealth
}

function enemyturn(){


        damage = Math.floor(igenemyattack/(1+igarmor/100))
        ighealth = Math.floor(ighealth-damage)
        console.log(`El enemigo te hizo ${damage} de daño`)
        armorflag=1;
        return ighealth
}


while(igopc=="1"){

    
    enemyhealth=500, enemyattack=40, enemyarmor=35, igenemyhealth=enemyhealth, igenemyattack=enemyattack, igenemyarmor=enemyarmor

console.log("Ha aparecido un enemigo, es la oportunidad perfecta para aprender sobre el sistema de combate")
console.log("")
console.log(`${playername}: ${ighealth}/${health}       Monstruo: ${igenemyhealth}/${enemyhealth}           Aqui se muestra tu salud restante/total y la del enemigo`)
console.log("")
console.log("1. Atacar      2. Defender     3. Observar")
console.log("************************************************************************************")
console.log("Hay 3 opciones disponibles en el combate y cada una tiene una funcion diferente")
console.log("Atacar: Lanzas un ataque basico a tu enemigo, el daño es igual a tu estadistica de ataque y hay un 20% de probabilidad de que sea un ataque critico que inflinge el doble de tu ataque base(El enemigo tambien puede asestar un golpe critico ¡TEN CUIDADO!).")
console.log("Observar: Te da una vista de las estadisticas completas de tu enemigo.")
console.log("Ten encuenta que observar no consume ningun turno mientras atacar y defender si.")
igopc=prompt("¿Que quieres hacer? ")

switch(igopc)
{
case "1": 
    atacar();
    if(igenemyhealth>0)
    {
    console.log("Turno del enemigo")
    enemyturn()
    }
    else
    {
    console.log(`${playername}: ${ighealth}/${health}       Monstruo: ${igenemyhealth}/${enemyhealth}`)
    }
break;
case "2":
    defender();
    console.log("Turno del enemigo")
    enemyturn();
break;
break;
case "3":
    console.log(`Ataque: ${enemyattack}`)
    console.log(`Armadura: ${igenemyarmor}`)
break;
}

if (igenemyhealth>0)
{
    do{
        if(armorflag!=0)
		{
			igarmor=armor;
			armorflag=0;
		}

        console.log(`${playername}: ${ighealth}/${health}       Monstruo: ${igenemyhealth}/${enemyhealth}`)
        console.log("1. Atacar      2. Defender     3. Observar")
        igopc=prompt("¿Que quieres hacer? ")

        switch(igopc)
        {
        case "1": 
            atacar();
            if(igenemyhealth>0)
            {
            console.log("Turno del enemigo")
            enemyturn()
            }
            else
            {
            console.log(`${playername}: ${ighealth}/${health}       Monstruo: ${igenemyhealth}/${enemyhealth}`)
            }
        break;
        case "2":
            defender();
            console.log("Turno del enemigo")
            enemyturn();
        break;
        break;
        case "3":
            console.log(`Ataque: ${enemyattack}`)
            console.log(`Armadura: ${igenemyarmor}`)
        break;
        }


    }while(!(ighealth<=0 | igenemyhealth<=0));
}else{
    console.log("¡OVERKILL!")
    }

    if(ighealth<=0){
        console.log("Has muerto... ¡¡EN EL TUTORIAL!! JAJAJAJAJAJ")
        console.log("")
        console.log("¿Que quieres hacer ahora?")
        console.log("1. Volver a intentar")
        console.log("2. Finalizar juego")
        igopc=prompt("Digita el numero correspondiente a la opcion que deseas: ")
        while(igopc!="1" && igopc!="2"){

            if(igopc!="1" | igopc!="2"){
                console.log("%cIngresa una respuesta valida.", "color:red")
                console.log("1. Volver a intentar")
                console.log("2. Finalizar juego")
                igopc=prompt("Digita el numero correspondiente a la opcion que deseas: ")
            }
        }

    }else{
        console.log(`Felicidades ${playername} has finalizado el tutorial que quieres hacer ahora`)
        console.log("¿Que quieres hacer ahora?")
        console.log("1. Volver a intentar")
        console.log("2. Finalizar juego")
        igopc=prompt("Digita el numero correspondiente a la opcion que deseas: ")
        while(igopc!="1" && igopc!="2"){

            if(igopc!="1" | igopc!="2"){
                console.log("%cIngresa una respuesta valida.", "color:red")
                console.log("1. Volver a intentar")
                console.log("2. Finalizar juego")
                igopc=prompt("Digita el numero correspondiente a la opcion que deseas: ")
            }
        }
            
    }


}
console.log("%cFin del programa actualmente.", "color: green")
