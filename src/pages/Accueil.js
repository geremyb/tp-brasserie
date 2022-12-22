import BrasserieAleatoire from "../components/BrasserieAleatoire";
import NavbarComponent from "../navbar/navbar";

function Accueil() {

  return (
    <div className="Accueil">
        <NavbarComponent/>
        <BrasserieAleatoire/>
    </div>
  );
}

export default Accueil;
