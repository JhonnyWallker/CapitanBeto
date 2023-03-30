import "./CardsStyles.css";

function CardsNoticias({ noticias }) {
  return (
    <div className="container">
      <h5 className="mb-5 titulo"><a href="/api"className="text-white">Noticias</a></h5>
      <div className="row bg-container-cards">
        {noticias.map((datoApi) => (
          <a className="col card-config" key={datoApi.id} href="/api">
            <div className="row p-2 mt-3">
              <div className="col-2">
                <img
                  src={datoApi.image}
                  alt="avatar"
                  className="img-avatar rounded"
                />
              </div>
              <div className="col-10">
                <h6>{datoApi.name}</h6>
                <h6 className="text-ago ps-2">subido el {datoApi.created}</h6>
              </div>
            </div>
            <h6 className="text-ago ps-2">hace 1 sem en eltamborcito.com</h6>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardsNoticias;