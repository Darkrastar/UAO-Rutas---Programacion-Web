import "./App.css";
import BarraSony from "./Components/BarraSony/BarraSony";
import CajasJuegos from "./Components/CajasJuegos/CajasJuegos";
import NavPlayStore from "./Components/NavPlayStore/NavPlayStore";
import NavSony from "./Components/NavSony/NavSony";
import JuegosFifa from "./Assets/Imagenes/prueba1.png";
import JuegosMortal from "./Assets/Imagenes/prueba2.png";
import efootbal from "./Assets/Imagenes/efootbal2.png";
import efootbalps5 from "./Assets/Imagenes/efootbalps5.png";
import enlisted from "./Assets/Imagenes/enlisted.png";
import fifa22ps4 from "./Assets/Imagenes/fifa22ps4.png";
import fifa22ps5 from "./Assets/Imagenes/fifa22ps5.png";
import hellletloose from "./Assets/Imagenes/hellletloose.png";
import CartasJuegos from "./Components/CartasJuegos/CartasJuegos";
import farming from "./Assets/Imagenes/farming.png";
import grantur from "./Assets/Imagenes/grantur.png";
import horizon from "./Assets/Imagenes/horizon.png";
import guardian from "./Assets/Imagenes/guardian.png";
import jurasic from "./Assets/Imagenes/jurasic.png";
import nascar from "./Assets/Imagenes/nascar.png";
import farcry6 from "./Assets/Imagenes/farcry6.png";
import ark from "./Assets/Imagenes/ark.png";
import cod from "./Assets/Imagenes/cod.png";
import ffo from "./Assets/Imagenes/ffo.png";
import CartasGrandesConte from "./Components/CartasGrandes/CartasGrandesConte";
import CartasGrandesConte2 from "./Components/CartasGrandes/CartasGrandesConte2";
import carta1 from "./Assets/Imagenes/carta1.png";
import carta2 from "./Assets/Imagenes/carta2.png";
import carta3 from "./Assets/Imagenes/carta3.png";
import carta4 from "./Assets/Imagenes/carta4.png";
import carta5 from "./Assets/Imagenes/carta5.png";
import carta6 from "./Assets/Imagenes/carta6.png";
import carta7 from "./Assets/Imagenes/carta7.png";
import SocialInfo from "./Components/SocialInfo/SocialInfo";

const info = {
  caja1: {
    titulo: "FIFA 22",
    descripcion: "Powered by Football™",
    InfoBtn: "Disponible Ahora",
    imagenJuego: JuegosFifa,
  },
  caja2: {
    titulo: "Bienvenido a PlayStation Plus",
    descripcion:
      "Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más.",
    InfoBtn: "Más información",
    imagenJuego: JuegosMortal,
  },
};

const juegosCartas = {
  cartas1: {
    titulo: "Nuevos juegos",
    vermas: "Ver todos",
    cartas: [
      {
        cartaImagen: efootbal,
        cartaTitulo: "eFootball™ 2022",
        cartaPrecio: "Gratuito",
      },
      {
        cartaImagen: hellletloose,
        cartaTitulo: "Hell Let Loose",
        cartaDescrip: "Inluido",
        cartaPrecio: "US$39.99",
      },
      {
        cartaImagen: enlisted,
        cartaTitulo: "Enlisted",
        cartaPrecio: "Gratuito",
      },
      {
        cartaImagen: fifa22ps4,
        cartaTitulo: "FIFA 22 para PS4™",
        cartaDescrip: "Ahorra un 10%",
        cartaPrecio: "US$59.99",
      },
      {
        cartaImagen: efootbalps5,
        cartaTitulo: "eFootball™ 2022",
        cartaPrecio: "Gratis",
      },
      {
        cartaImagen: fifa22ps5,
        cartaTitulo: "FIFA 22 para PS5™",
        cartaDescrip: "Ahorra un 10%",
        cartaPrecio: "US$69.99",
      },
    ],
  },
  cartas2: {
    titulo: "Próximamente",
    vermas: "Ver todos",
    cartas: [
      {
        cartaImagen: farming,
        cartaTitulo: "Farming Simulator 22",
      },
      {
        cartaImagen: grantur,
        cartaTitulo: "Gran Turismo® 7",
      },
      {
        cartaImagen: horizon,
        cartaTitulo: "Horizon Forbidden West",
      },
      {
        cartaImagen: jurasic,
        cartaTitulo: "Jurassic World Evolution 2",
      },
      {
        cartaImagen: guardian,
        cartaTitulo: "Marvel's Guardians of the Galaxy",
      },
      {
        cartaImagen: nascar,
        cartaTitulo: "NASCAR 21: Ignition",
      },
    ],
  },
};

const cartasGrandes = {
  cartas1G: {
    titulo: "",
    cartasG: [
      {
        cartaGrandeImagen: farcry6,
      },
      {
        cartaGrandeImagen: ark,
      },
      {
        cartaGrandeImagen: cod,
      },
      {
        cartaGrandeImagen: ffo,
      },
    ],
  },
  cartas2G: {
    titulo: "Ver más",
    cartasG: [
      {
        cartaGrandeImagen: carta1,
      },
      {
        cartaGrandeImagen: carta2,
      },
      {
        cartaGrandeImagen: carta3,
      },
      {
        cartaGrandeImagen: carta4,
      },
      {
        cartaGrandeImagen: carta5,
      },
      {
        cartaGrandeImagen: carta6,
      },
      {
        cartaGrandeImagen: carta7,
      },
    ],
  },
};

function App() {
  return (
    <div>
      <BarraSony></BarraSony>
      <NavSony></NavSony>
      <NavPlayStore></NavPlayStore>
      <CajasJuegos
        titulo={info.caja1.titulo}
        descripcion={info.caja1.descripcion}
        InfoBtn={info.caja1.InfoBtn}
        imagenJuego={info.caja1.imagenJuego}
      ></CajasJuegos>
      <CartasGrandesConte
        titulo={cartasGrandes.cartas1G.titulo}
        cartasG={cartasGrandes.cartas1G.cartasG}
      ></CartasGrandesConte>
      <CartasJuegos
        titulo={juegosCartas.cartas1.titulo}
        vermas={juegosCartas.cartas1.vermas}
        cartas={juegosCartas.cartas1.cartas}
      ></CartasJuegos>
      <CartasJuegos
        titulo={juegosCartas.cartas2.titulo}
        vermas={juegosCartas.cartas2.vermas}
        cartas={juegosCartas.cartas2.cartas}
      ></CartasJuegos>
      <CajasJuegos
        titulo={info.caja2.titulo}
        descripcion={info.caja2.descripcion}
        InfoBtn={info.caja2.InfoBtn}
        imagenJuego={info.caja2.imagenJuego}
      ></CajasJuegos>
      <CartasGrandesConte2
        titulo={cartasGrandes.cartas2G.titulo}
        cartasG={cartasGrandes.cartas2G.cartasG}
      ></CartasGrandesConte2>
      <SocialInfo></SocialInfo>
    </div>
  );
}

export default App;
