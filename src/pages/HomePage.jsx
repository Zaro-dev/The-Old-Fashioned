import React from 'react'

function HomePage() {
  return (
    <>
    <h1 className='main-title'>Bienvenidos a The Old Fashioned🥃</h1>
    <section className='historia container-sections'>

      <div>
        <h2>¿Qué es el Whiskey?</h2>
        <p>
        El whiskey es una bebida alcohólica destilada, hecha a partir de granos fermentados y envejecida en barricas de madera, generalmente de roble. 
        Esta bebida, que ha ganado popularidad en todo el mundo, se caracteriza por su sabor complejo y su rica historia.
        </p>
      </div>

      <div>
        <div>
          <h2>Historia del Whiskey</h2>
          <p>
            El origen del whiskey se remonta a la antigüedad, con raíces en el antiguo proceso de destilación utilizado por los monjes en Irlanda y Escocia. 
            Se cree que la destilación llegó a las islas británicas alrededor del siglo V o VI a través de misioneros cristianos. 
            A lo largo de los siglos, la técnica de destilación se perfeccionó, dando lugar al whiskey tal como lo conocemos hoy.
          </p>
        </div>
        <div>
          <h3>Orígenes</h3>
          <p>
          El término "whiskey" proviene del gaélico "uisge beatha", que significa "agua de vida". 
          En Irlanda y Escocia, se desarrollaron dos tradiciones distintas de producción, lo que llevó a la creación de los términos "whiskey" en Irlanda y "whisky" en Escocia.
          </p>
        </div>
        <div>
          <h3>Lugar de Origen</h3>
          <p>
          El whiskey tiene dos orígenes principales: Irlanda y Escocia. 
          En Irlanda, la destilación se llevó a cabo en pequeños alambiques de cobre, mientras que en Escocia se desarrollaron técnicas de destilación continua que permitieron una producción más eficiente.
          </p>
        </div>
      </div>

    </section>

    <hr />

    <section className='elaboracion container-sections'>

      <h2>Método de Elaboración</h2>
      <div>
        <p>La elaboración del whiskey sigue varios pasos fundamentales:</p>
        <li className='listas'>
          <ol><span className="elementos-lista">Malteado:</span> El grano (generalmente cebada) se humedece y se deja germinar para convertir los almidones en azúcares fermentables.</ol>
          <ol><span className="elementos-lista">Molienda:</span> El grano germinado se seca y se muele para producir una harina gruesa llamada "grist".</ol>
          <ol><span className="elementos-lista">Macera:</span> El grist se mezcla con agua caliente para extraer los azúcares.</ol>
          <ol><span className="elementos-lista">Fermentación:</span> El líquido azucarado, conocido como "mosto", se fermenta con levadura para producir alcohol.</ol>
          <ol><span className="elementos-lista">Destilación:</span> El líquido fermentado se destila para aumentar el contenido de alcohol.</ol>
          <ol><span className="elementos-lista">Envejecimiento:</span> El destilado se envejece en barricas de roble, donde adquiere sabor y color.</ol>
          <ol><span className="elementos-lista">Embotellado:</span> Finalmente, el whiskey se embotella y está listo para su consumo.</ol>
        </li>
      </div>

    </section>

    <hr />

    <section className='tipos container-sections'>

      <div>
        <h2>Tipos de Whiskey</h2>
        <p>Existen varios tipos de whiskey, cada uno con características únicas según su lugar de origen y método de producción:</p>
      </div>

      <div className="container-tipos-whiskey">
        <h4>Whiskey Irlandés</h4>
        <p>
          El whiskey irlandés es conocido por su suavidad y su sabor ligero, características que lo diferencian de otros tipos de whiskey. Se destila tres veces, lo que le da un perfil más suave y menos robusto en comparación con sus homólogos escoceses. El envejecimiento mínimo de tres años en barricas de roble le confiere un carácter único. Algunos de los whiskies irlandeses más conocidos incluyen Jameson, Bushmills y Redbreast.

          <br />
          El whiskey irlandés puede dividirse en varias categorías:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">Single Malt: </span>Hecho exclusivamente de cebada malteada en una sola destilería.</ul>
          <ul><span className="elementos-lista">Single Pot Still: </span>Hecho en una sola destilería utilizando una mezcla de cebada malteada y no malteada.</ul>
          <ul><span className="elementos-lista">Grain: </span>Elaborado a partir de granos como maíz o trigo.</ul>
          <ul><span className="elementos-lista">Blended: </span>Blended Irish Whiskey: </ul>
        </li>
      </div>

      <div className="container-tipos-whiskey">
        <h4>Whiskey Escocés</h4>
        <p>
          El whisky escocés es famoso en todo el mundo por su variedad y calidad. Se destila dos veces y debe envejecer al menos tres años en barricas de roble. El clima y el agua de Escocia juegan un papel crucial en el perfil de sabor del whisky escocés. 
          <br />
          Hay dos categorías principales de whisky escocés:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">Single Malt: </span>Elaborado en una sola destilería utilizando únicamente cebada malteada. Ejemplos famosos incluyen Glenfiddich, Macallan y Laphroaig.</ul>
          <ul><span className="elementos-lista">Blended: </span>Una mezcla de uno o más whiskies de malta y de grano. Ejemplos populares son Johnnie Walker y Chivas Regal.</ul>
        </li>
        <p>
        El whisky escocés también se clasifica según la región de producción, cada una con características únicas:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">Highland: </span>Generalmente robustos y variados en sabor </ul>
          <ul><span className="elementos-lista">Lowland: </span>Suaves y ligeros</ul>
          <ul><span className="elementos-lista">Islay: </span>Ahumados y turbosos</ul>
          <ul><span className="elementos-lista">Speyside: </span>Dulces y afrutados</ul>
        </li>
      </div>

      <div className="container-tipos-whiskey">
        <h4>Bourbon</h4>
        <p>
          El bourbon es un tipo de whiskey originario de Estados Unidos, específicamente de Kentucky. Por ley, debe elaborarse con al menos un 51% de maíz y envejecer en barricas nuevas de roble carbonizado. Este proceso le otorga su característico sabor dulce y acaramelado, con notas de vainilla, caramelo y roble tostado. Algunos bourbons conocidos son Jim Beam, Maker's Mark y Woodford Reserve.
          <br />
          El bourbon puede dividirse en varias categorías:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">Straight Bourbon: </span>Envejecido por al menos dos años sin aditivos.</ul>
          <ul><span className="elementos-lista">Small Batch Bourbon: </span>Elaborado en lotes más pequeños, a menudo con mayor atención a la calidad.</ul>
          <ul><span className="elementos-lista">Single Barrel Bourbon: </span>Proviene de un solo barril, ofreciendo un perfil de sabor único para cada barril.</ul>
        </li>
      </div>

      <div className="container-tipos-whiskey">
        <h4>Rye Whiskey</h4>
        <p>
          El rye whiskey, hecho principalmente de centeno, es conocido por su sabor más picante y especiado en comparación con otros tipos de whiskey. Esta variedad es popular en Estados Unidos y Canadá. En Estados Unidos, debe contener al menos un 51% de centeno, mientras que en Canadá, la regulación es menos estricta. Ejemplos notables incluyen Bulleit Rye, Sazerac Rye y Canadian Club.
          <br />
          El rye whiskey puede dividirse en:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">American Rye Whiskey: </span>Debe contener al menos 51% de centeno y envejecer en barricas nuevas de roble carbonizado.</ul>
          <ul><span className="elementos-lista">Canadian Rye Whisky: </span>Más flexible en la composición de granos, pero a menudo dominado por el centeno.</ul>
        </li>
      </div>

      <div className="container-tipos-whiskey">
      <h4>Tennessee Whiskey</h4>
        <p>
          El Tennessee whiskey es similar al bourbon, pero con una etapa adicional en su proceso de producción llamada "proceso de Lincoln County". Este paso implica filtrar el whiskey a través de carbón de arce antes de envejecer, lo que le da un sabor más suave. El Tennessee whiskey más famoso es Jack Daniel's, conocido por su perfil de sabor dulce y suave.
          <br />
          Para ser clasificado como Tennessee whiskey, debe cumplir con los siguientes criterios:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">Filtración de Carbón: </span>El whiskey debe ser filtrado a través de carbón de arce.</ul>
          <ul><span className="elementos-lista">Envejecimiento: </span>Debe envejecer en barricas nuevas de roble carbonizado.</ul>
        </li>
      </div>

      <div className="container-tipos-whiskey">
      <h4>Whiskey Japonés</h4>
        <p>
          El whisky japonés ha ganado reconocimiento mundial por su calidad y precisión en la elaboración, influenciado fuertemente por el whisky escocés. Los productores japoneses prestan gran atención a cada detalle del proceso de destilación y envejecimiento, resultando en whiskies bien equilibrados y refinados. Ejemplos destacados incluyen Yamazaki, Hibiki y Nikka.
          <br />
          El whisky japonés puede ser:
        </p>
        <li className='listas'>
          <ul><span className="elementos-lista">Single Malt: </span>Hecho en una sola destilería utilizando cebada malteada.</ul>
          <ul><span className="elementos-lista">Blend: </span>Mezcla de diferentes whiskies de malta y de grano.</ul>
        </li>
        <p>Los whiskies japoneses son conocidos por su equilibrio, complejidad y acabado suave, a menudo combinando sabores afrutados y florales con notas de roble.</p>
      </div>

    </section>
    </>
  )
}

export default HomePage