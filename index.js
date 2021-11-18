function compteur() {

    let dFin = new Date('2022-07-20T17:00:00')
    let dDebut = new Date()
    

    let jours = 1000 * 60 * 60 * 24
    let heures = 1000 * 60 * 60
    let minutes = 1000 * 60
    let secondes = 1000

    let duree = dFin - dDebut

document.getElementById('Jours').innerHTML = Math.floor(duree / jours)
document.getElementById('Heures').innerHTML = ("00" + (Math.floor(duree / heures) % 24)).slice(-2)
document.getElementById('Minutes').innerHTML = ("00" + (Math.floor(duree / minutes) % 60)).slice(-2)
document.getElementById('Secondes').innerHTML = ("00" + (Math.floor(duree / secondes) % 60)).slice(-2)

}

setInterval(compteur,500)
