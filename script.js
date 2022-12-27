frase = new Array();
frase[0] = "Dicen que hay un mundo de tentaciones. También hay caramelos con forma de corazones. Dicen que hay bueno, malo, dicen que hay mas o menos. Dicen que hay algo que tener y no muchos tenemos. – Andrés Calamaro";
frase[1] = "Son esos momentos en que uno se pone a reflexionar y alumbra una tormenta. Todo es tan tranquilo que el silencio anuncia el ruido de la calma que antecede al huracán. – Los auténticos decadentes";
frase[2] = "Ella durmió al calor de las masas y yo desperté queriendo soñarla. Algún tiempo atrás pensé en escribirle y nunca sortié las trampas del amor, se aquel amor de música ligera. Nada nos libra, nada más queda. – Soda Stereo";
random = Math.random() * (frase.length);
random = Math.floor(random);
var fra = document.getElementById("intro");
fra.innerHTML = frase[random];
var css = new Array('estilo1','estilo2','estilo3');
var i = Math.floor(Math.random()*css.length);
var intro = document.getElementById('intro');
intro.className = css[i];
document.getElementById('contenedor').style.display = "none";



function api1(){
    document.getElementById('contenedor').style.display = "block";
    document.getElementById('icono').style.display = "block";
    document.getElementById('campo4b').style.display = "block";
    document.getElementById('campo5b').style.display = "block";

    let temperaturaDescripcion = document.getElementById('campo2')
    let ubicacion = document.getElementById('campo1b')
    let vientoVelocidad = document.getElementById('campo3')
    let temperaturaValor = document.getElementById('campo4')
    let humedad = document.getElementById('campo5')
    let presion = document.getElementById('campo5b')
    let visibilidad = document.getElementById('campo6')
    let sensacionTermica = document.getElementById('campo4b')
    let pais = document.getElementById('campo1')

    document.getElementById("intro").innerHTML = '';
    document.getElementById("vision").innerHTML = '';

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=e94bf6626e2f63559385e515a6eda398'
    fetch(url)
    
        .then( response => {return response.json() })
        .then( data => {
            let temp = Math.round(data.main.temp)
            temperaturaValor.textContent = `Temperatura: ${temp} K`
            
            let desc = data.weather[0].description
            temperaturaDescripcion.textContent = `Descripcion: ${desc.toUpperCase()}` 

            ubicacion.textContent = data.name

            vientoVelocidad.textContent = `Velocidad del viento: ${data.wind.speed} m/s`

            humedad.textContent = `Humedad: ${data.main.humidity}%`

            presion.textContent = `Presion: ${data.main.pressure} hPA`

            visibilidad.textContent = `Visibilidad: ${data.visibility} m`

            sensacionTermica.textContent = `Sensacion Termica: ${data.main.feels_like} K`

            pais.textContent = `${data.sys.country}` 

            let iconCode = data.weather[0].icon
            const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
            icono.src = urlIcon
        })
        .catch( error => {
            console.log(error)
        })
}

function api2(){
    document.getElementById('contenedor').style.display = "block";
    document.getElementById('icono').style.display = "none";
    document.getElementById('campo4b').style.display = "none";
    document.getElementById('campo5b').style.display = "none";

    let ultimavez = document.getElementById('campo1')
    let proxima = document.getElementById('campo1b')
    let GBP = document.getElementById('campo2')
    let EUR = document.getElementById('campo3')
    let BRL = document.getElementById('campo4')
    let CNY = document.getElementById('campo5')
    let ARS = document.getElementById('campo6')

    document.getElementById("intro").innerHTML = '';
    document.getElementById("vision").innerHTML = '';
    
    let url = 'https://v6.exchangerate-api.com/v6/f57f34147a76e125943e534d/latest/USD';
    fetch(url)
    .then( response => {return response.json() })
    .then( data => {
        ultimavez.textContent = `${data.time_last_update_utc} ultima actualizacion`

        proxima.textContent = `${data.time_next_update_utc} proxima vez`

        EUR.textContent = `${data.conversion_rates.USD} dolar -----> ${data.conversion_rates.EUR} euros`

        BRL.textContent = `${data.conversion_rates.USD} dolar -----> ${data.conversion_rates.BRL} reales`

        CNY.textContent = `${data.conversion_rates.USD} dolar -----> ${data.conversion_rates.CNY} yuanes`

        GBP.textContent = `${data.conversion_rates.USD} dolar -----> ${data.conversion_rates.GBP} libras esterlinas`

        ARS.textContent = `${data.conversion_rates.USD} dolar -----> ${data.conversion_rates.ARS} pesos`
    })

    .catch( error => {
        console.log(error)
    })
}


