import React from "react";
import Link from "next/link";
import Script from "next/script";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";

const Navbar = () => {
  return (
    <>
      <header className="relative wrapper !bg-[#ffffff] ">
        <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-light">
          <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
            <div className="navbar-brand w-full">
              <Link href="./index.html">
                <img
                  src="/assets/img/logo-dark.png"
                  srcSet="/assets/img/logo-dark@2x.png 2x"
                  alt="image"
                />
              </Link>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                  Sandbox
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown dropdown-mega">
                    <Link
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                      href="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                      href="/about"
                    >
                      Sobre nosotros
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                      href="/services"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                      href="/testimonials"
                    >
                      Testimonios
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <Link
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                      href="/contact"
                    >
                      Contáctanos
                    </Link>
                    {/* <!--/.dropdown-menu --> */}
                  </li>
                </ul>
                {/* <!-- /.navbar-nav --> */}
                <div className="offcanvas-footer xl:hidden lg:hidden">
                  <div>
                    <Link
                      href="mailto:first.last@email.com"
                      className="link-inverse"
                    >
                      info@email.commmm
                    </Link>
                    <br /> 00 (123) 456 78 90 <br />
                    <nav className="nav social social-white mt-4">
                      <Link
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                      </Link>
                      <Link
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                      </Link>
                      <Link
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                      </Link>
                      <Link
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                      </Link>
                      <Link
                        className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href="#"
                      >
                        <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                      </Link>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                </div>
                {/* <!-- /.offcanvas-footer --> */}
              </div>
              {/* <!-- /.offcanvas-body --> */}
            </div>
            {/* <!-- /.navbar-collapse --> */}
            <div className="navbar-other lg:!ml-4 xl:!ml-4">
              <ul className="navbar-nav !flex-row !items-center !ml-auto">
                <li className="nav-item xl:hidden lg:hidden">
                  <button className="hamburger offcanvas-nav-btn">
                    <span></span>
                  </button>
                </li>
              </ul>
              {/* <!-- /.navbar-nav --> */}
            </div>
            {/* <!-- /.navbar-other --> */}
          </div>
          {/* <!-- /.container --> */}
        </nav>
        {/* <!-- /.offcanvas --> */}
      </header>
      <Script
        src="/assets/js/plugins.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("El script plugins.js se ha cargado.");
        }}
      />
      <Script
        src="/assets/js/theme.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("El script plugins.js se ha cargado.");
        }}
      />
    </>
  );
};

export default Navbar;
