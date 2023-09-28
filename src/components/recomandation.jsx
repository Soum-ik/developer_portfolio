import Recomandations from "./util/recomandtion";

export default function Recomandation() {
  return (
    <div className=" container">
      <div>
        <div>
          {" "}
          <h1 className=" sing">Recomandtion</h1>
          <p className="Tittle"> Meet Up</p>
        </div>
        <div className=" custom_Grid">
            {
                Recomandations.map((rec) => (
                    <div className="" key={rec.id}>
                        
                    </div>  
                ))
            }
        </div>
      </div>
    </div>
  );
}
