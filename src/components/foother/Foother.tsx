import React from "react";

const Foother = () => {
  return (
    <footer className="">
      <div className="container pt-16 xl:!pt-20 lg:!py-20 md:!pt-20">
        {/* <!--/div --> */}
        <hr className="mt-[3rem] mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" />
        <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
          <div className="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget">
              <img
                className="!mb-4"
                src="./assets/img/dentum/logo.png"
                srcSet="./assets/img/dentum/logo.png 2x"
                alt="image"
                style={{
                  width: "150px",
                }}
              />
              <p className="!mb-4">Amamos cuidar tu sonrisa</p>
              <nav className="nav social social-muted">
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="https://www.tiktok.com/@dentum.gt?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#343f51"
                      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"
                    />
                  </svg>
                </a>
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="https://www.facebook.com/Dentum.Gt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] text-[#4470cf]"></i>
                </a>

                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="https://www.instagram.com/dentum.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] text-[#d53581]"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] text-[#c8312b]"></i>
                </a>
              </nav>
              {/* <!-- /.social --> */}
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /column --> */}
          <div className="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                Navegación
              </h4>
              <ul className="pl-0 list-none !mb-0">
                <li className="mt-[0.35rem]">
                  <a className="text-[#60697b] hover:text-[#343f52]" href="/">
                    Inicio
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a
                    className="text-[#60697b] hover:text-[#343f52]"
                    href="/about"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a
                    className="text-[#60697b] hover:text-[#343f52]"
                    href="/services"
                  >
                    Servicios
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a
                    className="text-[#60697b] hover:text-[#343f52]"
                    href="/testimonials"
                  >
                    Testimonios
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a
                    className="text-[#60697b] hover:text-[#343f52]"
                    href="/contact"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /column --> */}
          <div className="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-1 !tracking-[-0.03em]">
                Dirección
              </h4>
              <p className="!mb-5">3 Avenida 3-03, Chimaltenango 04001</p>
              {/* <!-- /.newsletter-wrapper --> */}
            </div>
            <div className="widget">
              <h4 className="widget-title !mb-1 !tracking-[-0.03em]">
                Teléfono
              </h4>
              <p className="!mb-5"> (502) 5565 - 7921</p>
              {/* <!-- /.newsletter-wrapper --> */}
            </div>
            <div className="widget">
              <h4 className="widget-title !mb-1 !tracking-[-0.03em]">Correo</h4>
              <p className="!mb-5">Dentum.gt@gmail.com</p>
              {/* <!-- /.newsletter-wrapper --> */}
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!--/.row --> */}
        <div
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "14px",
              color: "#000",
            }}
          >
            Copyright &copy; 2025 DENTUM
          </p>
        </div>
      </div>
      {/* <!-- /.container --> */}
      {/* <!-- progress wrapper --> */}
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#000] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#605dba] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Foother;
