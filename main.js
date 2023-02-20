alert("Hola soy tu asistente virtual. Conmigo aprenderas acerca de diversos temas, como ciudades, musica, comidas, entre otros")


function opciones() {
    let entrada = parseInt(prompt("Elegí alguna de las siguientes opciones:" + "\n" + "\n" + "1- Ciudades" + "\n" + "2- Comidas" + "\n" + "3- Musica" + "\n" + "4- Politica" + "\n" + "5- Horas de viaje" + "\n" + "\n" + "Si desea finalizar la aplicación ingrese 0"))

    if (entrada === 1) {
        alert("Bienvenido a la sección Ciudades de Sudamerica");
        ciudades();
    } else if (entrada === 2) {
        alert("Bienvenido a la sección Platos tipicos de cada país de Sudamerica");
        comidas();
    } else if (entrada === 3) {
        alert("Bienvenido a la sección Musica originaria de cada pais de Sudamerica");
        musica();
    } else if (entrada === 4) {
        alert("Bienvenido a la sección presidentes de cada Nacion Sudamericana");
        politica();
    } else if (entrada === 5) {
        alert("Bienvenido a la sección calculadora de horas de viaje");
        calcularDistancia();
    } else if (entrada === 0) {
        alert("Interacción finalizada");   
    } else{
     alert("Seleccione una opción");
     opciones();
    }

}


function ciudades() {

    let ciudad = prompt('Ingrese un pais de Sudamerica del que desee obtener información:');
    
    while (ciudad != "ESC") {
        switch (ciudad) {
            case "argentina":
                alert(`Argentina, oficialmente denominada República Argentina,​ es un país soberano de América del Sur, ubicado en el extremo sur y sudeste de dicho subcontinente. Adopta la forma de gobierno republicana, democrática, representativa y federal. La economía argentina es la segunda más desarrollada e importante en Sudamérica. Es un país bicontinental con una superficie de 2 780 400 km²,​ es el país hispanohablante más extenso del planeta, el segundo más grande de América Latina y octavo en el mundo.`);
                break;

            case "bolivia":
                alert(`Bolivia, oficialmente el Estado Plurinacional de Bolivia, es un país soberano ubicado en la región centrooccidental de América del Sur, miembro de la Comunidad Andina, constituido políticamente como un Estado social plurinacional, unitario, descentralizado y con autonomías. Limita al norte y al oriente con Brasil, al sur con Paraguay y Argentina, y al occidente con Chile y Perú. En su territorio se desarrollaron civilizaciones prehispánicas como Tiwanaku, la Cultura hidráulica de las Lomas, la cultura moxeña y otras que sobreviven hasta la actualidad, como los aymaras, urus, chiquitanos, guaraníes y otros. Cuenta con una población de cerca de 10,1 millones de habitantes de acuerdo al último censo de 2012.`);
                break;

            case "brasil":
                alert(`Brasil, cuyo nombre oficial es República Federativa de Brasil, es un país soberano de América del Sur que comprende la mitad oriental del continente y algunos grupos de pequeñas islas en el océano Atlántico. Su capital es Brasilia y su ciudad más poblada es São Paulo. Es el país más grande de América Latina. Con una superficie estimada en más de 8,5 millones de km²,​ es el quinto país más grande del mundo en área total (equivalente a 50 % del territorio sudamericano).​ Delimitado por el océano Atlántico al este, Brasil tiene una línea costera de 7491 km.​ Al norte limita con el departamento ultramarino francés de la Guayana Francesa, Surinam, Guyana y Venezuela; al noroeste con Colombia; al oeste con Perú y Bolivia; al suroeste con Paraguay y Argentina, y al sur con Uruguay. De este modo tiene frontera con todos los países de América del Sur, excepto Ecuador y Chile.`);
                break;

            case "chile":
                alert(`Chile, oficialmente República de Chile,​ es un país soberano ubicado en el extremo sur de América del Sur. Adopta la forma de gobierno republicana, democrática, unitaria y presidencialista.​Su capital y ciudad más poblada es Santiago. Está constituido por tres zonas geográficas.​ La primera de ellas, Chile continental, comprende una franja en la costa occidental del Cono Sur que se extiende entre los paralelos 17°29′57″ S y 56°32′12″ S, mayormente desde la ribera sudoriental del océano Pacífico hasta las cumbres más altas divisorias de aguas de la cordillera de los Andes. Alcanza un largo de 4270 km,​ un ancho máximo de 445 km en los 52°21′ S y un mínimo de 90 km en los 31°37′ S.​ Limita con Perú al norte, Bolivia al nordeste y Argentina al este, totalizando 7801 km de fronteras terrestres. Chile cuenta con un índice de desarrollo humano «muy alto» y es considerado el país más desarrollado de América Latina10​, caracterizado por tener una economía sólida, una democracia estable y altos niveles de progreso social en comparación al resto de la región.`);
                break;

            case "colombia":
                alert(`Colombia, oficialmente República de Colombia, es un país soberano situado en la región noroccidental de América del Sur. Se constituye en un Estado unitario, social y democrático de derecho cuya forma de gobierno es presidencialista con dos cámaras legislativas. Su capital y ciudad más poblada es Bogotá.​ Es una república organizada políticamente en treinta y dos departamentos descentralizados y el Distrito Capital de Bogotá,​ sede del Gobierno nacional. Colombia tiene una economía diversificada y posee un importante componente de servicios. La producción económica del país está dominada por su demanda interna y el gasto en consumo de los hogares es el mayor componente del PIB.Es la segunda nación más biodiversa del mundo, contando con 54 871 especies registradas.`);
                break;

            case "ecuador":
                alert(`Ecuador, es un país soberano constituido en un Estado social, democrático, de derecho y plurinacional, cuya forma de gobierno es la de una república presidencialista, unitaria y descentralizada. Está ubicado en la región noroccidental de América del Sur. La capital y ciudad más poblada del país es Quito. Ecuador es considerado una reciente potencia energética basada en energías sustentables.​ Además, se trata del país con una de las más altas concentraciones de ríos por kilómetro cuadrado en el mundo y​ uno de los países de mayor diversidad por kilómetro cuadrado. Por ende, uno de los países con mayor biodiversidad del mundo. Ecuador se ha convertido recientemente en un estado estratégico abierto a la globalización, al libre mercado​ y a una diplomacia neutral.`);
                break;

            case "paraguay":
                alert(`Paraguay, cuyo nombre oficial es República del Paraguay​ , es un país sin litoral situado en la zona central de América del Sur.​ Está organizado como un Estado unitario,​ cuyo territorio se compone por un distrito capital y 17 departamentos.​Su capital y ciudad más poblada es Asunción.​ La forma de gobierno de Paraguay es la república que se rige por el sistema presidencial​ y además se organiza como un Estado de derecho, democrático y aconfesional. Es miembro fundador del Mercosur junto con Argentina, Brasil y Uruguay.La Constitución paraguaya lo declara como un país pluricultural y bilingüe, estableciéndose como idiomas oficiales el castellano y guaraní.​ Paraguay posee una tasa de alfabetismo de las personas mayores de 15 años superior al 94 %, y una esperanza de vida de 78,1 años según la CIA World Factbook.`);
                break;

            case "peru":
                alert(`Perú, oficialmente República del Perú,​ es un país soberano ubicado en el oeste de América del Sur. Perú tiene una población de aproximadamente 34 millones de habitantes.​ Su capital y ciudad más poblada es Lima.​Con 1,285 millones de km², Perú es el decimonoveno país más grande del mundo y el tercero más grande de América del Sur. Adopta la forma de gobierno republicano,​ democrático,​ unitario,​ representativo,​ presidencialista y con separación de poderes. El país es un mercado emergente,​ con un alto puntaje en el índice de desarrollo humano y una economía de renta media alta. El idioma principal y más hablado es el español, aunque un número significativo de peruanos, más que todo, los que habitan en zonas rurales de la sierra y de la selva habla diversas lenguas nativas, siendo la más extendida el quechua, en particular el dialecto quechua sureño.`);
                break;

            case "uruguay":
                alert(`Uruguay, cuyo nombre oficial es República Oriental del Uruguay, es un país soberano de América del Sur, situado en la parte oriental del Cono Sur. Su capital y ciudad más poblada es Montevideo. Limita al noreste con Brasil —estado de Río Grande del Sur—, al oeste y suroeste con Argentina —provincias de Corrientes, Entre Ríos y Buenos Aires, y la Ciudad Autónoma de Buenos Aires (separada por el Río de la Plata)— y tiene costas en el océano Atlántico por el sur. Abarca 176 215 km² y es el segundo país más pequeño de Sudamérica, después de Surinam.​ Según los datos del último censo del INE en 2011, la población de Uruguay es de 3 286 314 habitantes,​ con lo que figura en la décima posición entre los doce países sudamericanos. Según las Naciones Unidas, es el país de América Latina con el nivel de alfabetización más alto.La Corporación Latinobarómetro, en un estudio realizado en 2008, lo sitúa como el país más pacífico de América Latina.`);
                break;

            case "venezuela":
                alert(`Venezuela, oficialmente República Bolivariana de Venezuela, es un país soberano situado en la parte septentrional de América del Sur, constituido por un área continental y por un gran número de islas e islotes en el mar Caribe, cuya capital y mayor aglomeración urbana es la ciudad de Caracas. Para 2010, Venezuela tenía las reservas petroleras más grandes del mundo y era uno de los principales exportadores mundiales de petróleo.​ Antes de la explotación del petróleo, el país era un exportador de productos agrícolas, como café y cacao, pero el petróleo rápidamente alcanzó a dominar las exportaciones y los ingresos del país.`);
                break;

            case "0":
                opciones()
                return;

            default:
                alert("No se encontraron resultados");
                break;
        }
        ciudad = prompt("Ingrese un pais de Sudamerica:" + "\n" + "\n" + "Si desea volver al menu principal presione 0")
    }
}

function comidas() {

    let comida = prompt("Ingrese un pais de Sudamerica para conocer algunos de sus plato tipico:")

    while (comida != "ESC") {
        switch (comida) {
            case "argentina":
                alert(`Asado, Locro y Milanesa`);
                break;

            case "bolivia":
                alert(`Silpancho, Charquekan y Majadito`);
                break;

            case "brasil":
                alert(`Feijoada, Picanha y Acarajé`);
                break;

            case "chile":
                alert(`Cazuela, Caldillo de COngrio y Carbonada`);
                break;

            case "colombia":
                alert(`Bandeja Paisa, Ajiaco y Sancocho`);
                break;

            case "ecuador":
                alert(`Cuy asado, Mote Pillo y Ceviche de Camarón`);
                break;

            case "paraguay":
                alert(`Chipa Guasú, Sopa Paraguaya y Vorí-Vorí`);
                break;

            case "peru":
                alert(`Ceviche, Ají de Gallina y Arroz Chaufa`);
                break;

            case "uruguay":
                alert(`Chivito, Sándwich Olimpico y Revuelto Gramajo`);
                break;

            case "venezuela":
                alert(`Pabellon Criollo, Arepa y Cachapa`);
                break;

            case "0":
                opciones()
                return;

            default:
                alert("No se encontraron resultados");
                break;
        }
        comida = prompt("Ingrese un pais de Sudamerica para conocer su plato tipico:" + "\n" + "\n" + "Si desea volver al menu principal presione 0")
    }


}

function musica() {

    let musica = prompt("Ingrese un pais de Sudamerica para conocer su musica:")

    while (musica != "ESC") {
        switch (musica) {
            case "argentina":
                alert(`Chacarera`);
                break;

            case "bolivia":
                alert(`Morenada y Caporales`);
                break;

            case "brasil":
                alert(`Samba`);
                break;

            case "chile":
                alert(`La Cueca`);
                break;

            case "colombia":
                alert(`Vallenato`);
                break;

            case "ecuador":
                alert(`Sanjuanito`);
                break;

            case "paraguay":
                alert(`Polka Paraguaya`);
                break;

            case "peru":
                alert(`La Marinera`);
                break;

            case "uruguay":
                alert(`Candombe`);
                break;

            case "venezuela":
                alert(`Joropo`);
                break;

            case "0":
                opciones()
                return;

            default:
                alert("No se encontraron resultados");
                break;
        }
        musica = prompt("Ingrese un pais de Sudamerica para conocer su musica:" + "\n" + "\n" + "Si desea volver al menu principal presione 0")
    }


}

function politica() {

    let politica = prompt("Ingrese un pais de Sudamerica para conocer a su Presidente:")

    while (politica != "ESC") {
        switch (politica) {
            case "argentina":
                alert(`Alberto Fernández`);
                break;

            case "bolivia":
                alert(`Luis Arce`);
                break;

            case "brasil":
                alert(`Luiz Inácio Lula da Silva`);
                break;

            case "chile":
                alert(`Gabriel Boric`);
                break;

            case "colombia":
                alert(`Gustavo Petro`);
                break;

            case "ecuador":
                alert(`Guillermo Lasso`);
                break;

            case "paraguay":
                alert(`Mario Abdo Benítez`);
                break;

            case "peru":
                alert(`Dina Boluarte`);
                break;

            case "uruguay":
                alert(`Luis Lacalle Pou`);
                break;

            case "venezuela":
                alert(`Nicolas Maduro`);
                break;

            case "0":
                opciones()
                return;

            default:
                alert("No se encontraron resultados");
                break;
        }
        politica = prompt("Ingrese un pais de Sudamerica para conocer a su Presidente:" + "\n" + "\n" + "Si desea volver al menu principal presione 0")
    }


}


function calcularDistancia() {
    let origen = prompt("Ingrese el origen" + "\n" + "\n" + "Por los momentos solo se puede medir ingresando unicamente argentina como origen. INGRESE argentina");
    let destino = prompt("Ingrese el destino");
    let distancia = origen + "-" + destino;
    let mensaje = "Le tomaría ";
    let entrada = parseInt(prompt("¿Cómo le gustaría viajar?" + "\n" + "1- Avión" + "\n" + "2- Auto"));

    while (distancia != "ESC") {
        switch (distancia) {
            case "argentina-bolivia":
                if (entrada === 1) {
                    alert(`${mensaje}` + 2237 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 2237 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-brasil":
                if (entrada === 1) {
                    alert(`${mensaje}` + 2782 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 2782 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-chile":
                if (entrada === 1) {
                    alert(`${mensaje}` + 1406 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 1406 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-colombia":
                if (entrada === 1) {
                    alert(`${mensaje}` + 6381 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 6381 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-ecuador":
                if (entrada === 1) {
                    alert(`${mensaje}` + 5740 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 5740 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-paraguay":
                if (entrada === 1) {
                    alert(`${mensaje}` + 1256 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 1256 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-peru":
                if (entrada === 1) {
                    alert(`${mensaje}` + 3939 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 3939 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-uruguay":
                if (entrada === 1) {
                    alert(`${mensaje}` + 240 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 240 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            case "argentina-venezuela":
                if (entrada === 1) {
                    alert(`${mensaje}` + 7274 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 7274 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

                case "-":
                if (entrada === 1) {
                    alert(`${mensaje}` + 7274 / AVION + " horas en avión.");
                } else if (entrada === 2) {
                    alert(`${mensaje}` + 7274 / AUTO + " horas en auto.");
                } else if (entrada === 0) {
                    opciones();
                    return;
                } else {
                    alert("Seleccione una opción");
                }
                break;

            default:
                alert("Ubicación no encontrada.");
                break;
        }
        origen = prompt("Ingrese el origen");
        destino = prompt("Ingrese el destino");
        distancia = origen + "-" + destino;
        entrada = parseInt(prompt("¿Cómo le gustaría viajar?" + "\n" + "1- Avión" + "\n" + "2- Auto" + "\n" + "\n" + "Si desea volver al menu principal ingrese 0"));
    }


}

const AVION = 820 //km/h
const AUTO = 120 // km/h

opciones()