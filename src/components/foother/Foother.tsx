import React from "react";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";

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
              <p className="!mb-4">Tu sonrisa es nuestra prioridad</p>
              <nav className="nav social social-muted">
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] text-[#5daed5]"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] text-[#4470cf]"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] text-[#e94d88]"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] text-[#d53581]"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
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
                  <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                    Inicio
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                    Sobre nosotros
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                    Servicios
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                    Testimonios
                  </a>
                </li>
                <li className="mt-[0.35rem]">
                  <a className="text-[#60697b] hover:text-[#343f52]" href="#">
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
            Copyright &copy; 2024 DENTUM
          </p>
        </div>
      </div>
      {/* <!-- /.container --> */}
    </footer>
  );
};

export default Foother;
