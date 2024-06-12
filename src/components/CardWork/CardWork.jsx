import React, { useContext, useEffect, useRef, useState } from "react";
import "./CardWork.scss";
import WorkViewer from "../WorkViewer/WorkViewer";
import { GlobalContext } from "../../App";

export default function CardWork({ size, i, info }) {
  const { workViewer, setWorkViewer } = useContext(GlobalContext);

  const viewportWidth = window.innerWidth;

  //altura card
  const cardRef = useRef(null);
  const [ancho, setAncho] = useState("auto");

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      // Posición de la card
      const objetoRect = cardRef.current.getBoundingClientRect();

      // Calcular la distancia a la que se hacen 100% en función de la posición
      const alturaViewport = window.innerHeight;
      const porcentajeDesplazamiento = objetoRect.left / window.innerWidth; // Porcentaje de desplazamiento desde el margen izquierdo
      const porcentajeAjuste = 0.3; // 30%
      let puntoMedioViewport = 0;
      if (viewportWidth > 480) {
        puntoMedioViewport =
          alturaViewport / 3 +
          ((2 * porcentajeAjuste * alturaViewport) / 3) *
            porcentajeDesplazamiento;
      } else {
        puntoMedioViewport =
          alturaViewport / 2 +
          ((2 * porcentajeAjuste * alturaViewport) / 2) *
            porcentajeDesplazamiento;
      }

      // Ajustar tamaño dependiendo de la altura
      const diferencia = objetoRect.top - puntoMedioViewport;
      let nuevoAncho;
      if (diferencia <= 0) {
        nuevoAncho = 100;
      } else if (diferencia >= alturaViewport) {
        nuevoAncho = 0;
      } else {
        const maxDiferencia = (alturaViewport / 3) * 2; // Máxima diferencia que consideramos
        nuevoAncho = 100 - (diferencia / maxDiferencia) * 100;
      }
      setAncho(`${nuevoAncho}%`);
    };

    const intervalId = setInterval(handleScroll, 100);

    // window.addEventListener('scroll', handleScroll);

    // Cleanup interval and event listener on component unmount
    return () => {
      clearInterval(intervalId);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //open WV

  const openWV = () => {
    if (viewportWidth > 480) {
      // console.log(info.title);
      setWorkViewer(info);

      if (info === workViewer) {
        let allelementos = document.querySelectorAll(".workviewer");
        allelementos.forEach((elemento) => {
          elemento.classList.add("hidden");
        });
        setTimeout(() => {
          setWorkViewer(null);
        }, 500);
        return; // Asegura que no continúe ejecutándose después de cerrar
      }

      let claseObjetivo;
      if (i <= 3) {
        claseObjetivo = ".vw1";
      } else if (i <= 8) {
        claseObjetivo = ".vw2";
      } else if (i <= 13) {
        claseObjetivo = ".vw3";
      } else if (i <= 18) {
        claseObjetivo = ".vw4";
      } else if (i <= 23) {
        claseObjetivo = ".vw5";
      } else if (i <= 28) {
        claseObjetivo = ".vw6";
      }

      let allelementos = document.querySelectorAll(".workviewer");
      allelementos.forEach((elemento) => {
        elemento.classList.add("hidden");
      });

      let elementos = document.querySelectorAll(claseObjetivo);
      if (elementos.length === 0) {
        elementos = document.querySelectorAll(".vwEnd");
      }

      elementos.forEach((elemento) => {
        elemento.classList.remove("hidden");
      });
      if (elementos.length) {
        elementos[0].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    } else{

      setWorkViewer(info);

      if (info === workViewer) {
        let allelementos = document.querySelectorAll(".workviewer");
        allelementos.forEach((elemento) => {
          elemento.classList.add("hidden");
        });
        setTimeout(() => {
          setWorkViewer(null);
        }, 500);
        return; // Asegura que no continúe ejecutándose después de cerrar
      }

      let elemento = document.querySelectorAll(".vwEnd");

      elemento.forEach((elemento) => {
        elemento.classList.remove("hidden");
      });
      
    }
  };
  const closeall = () => {
    let allelementos = document.querySelectorAll(".workviewer");
    allelementos.forEach((elemento) => {
      elemento.classList.add("hidden");
    });
  }

  const pos =
    (i === 3 && 1) ||
    (i === 8 && 2) ||
    (i === 13 && 3) ||
    (i === 18 && 4) ||
    (i === 23 && 5) ||
    (i === 28 && 6);

  //date in 2 digits

  const [year, setYear] = useState("");

  function twoDigits() {
    // Asegúrate de que la fecha esté en el formato aaaa-mm-dd

    // Extrae el año de la cadena de fecha
    const year = info.date.substring(0, 4);

    // Obtén los dos últimos dígitos del año
    setYear(year.substring(2, 4));
    // console.log(yearTwoDigits);
  }
  useEffect(() => {
    twoDigits();
  }, []);

  return (
    <>
      <div ref={cardRef} className={size == 2 ? `x2 ${i}` : `x1 ${i}`}>
        {size == 2 && <h3 className="h3 f-reverse">: Latest proyect</h3>}
        <figure
          onClick={() => {
            openWV();
          }}
          className={size == 2 ? "cardWork_x2" : "cardWork"}
          style={{ width: ancho }}
        >
          <img className="cardWork_img" src={info.photos[0].url} />
          <figcaption className="cardWork_title h2">{info.title}</figcaption>
          <figcaption className="cardWork_date h3 f-w f-it">
            {" "}
            · {year}
          </figcaption>
        </figure>
      </div>
      {(i == 3 || i == 8 || i == 13 || i == 18 || i == 23 || i == 28) &&
        viewportWidth > 480 && <WorkViewer pos={pos} funk={closeall} />}
    </>
  );
}
