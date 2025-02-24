"use client";
import Script from "next/script";

export const ScriptComponent = () => {
  return (
    <>
      <Script
        src="/assets/js/plugins.js" // Ruta al archivo JavaScript
        strategy="beforeInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("*El script plugins.js se ha cargado.");
        }}
        onReady={() => {
          console.log("* esta listo el script plugins");
        }}
        onError={() => {
          console.log("* Se ha obtenido error en los plugins");
        }}
      />
      <Script
        src="/assets/js/theme.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("*El script theme.js se ha cargado.");
        }}
        onReady={() => {
          console.log("* esta listo el script theme");
        }}
        onError={() => {
          console.log("* Se ha obtenido error en los theme");
        }}
      />
    </>
  );
};
