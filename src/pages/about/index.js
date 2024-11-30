import Script from "next/script";
import Link from 'next/link';
import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";

export default function About() {
  return (
    <>
      <div className="grow shrink-0">
        <header className="relative wrapper !bg-[#ffffff] ">
          <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-light">
            <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
              <div className="navbar-brand w-full">
                <a href="./index.html">
                  <img
                    src="/assets/img/logo-dark.png"
                    srcSet="/assets/img/logo-dark@2x.png 2x"
                    alt="image"
                  />
                </a>
              </div>
              <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                  <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                    Dentum
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
                      <a
                        href="mailto:first.last@email.com"
                        className="link-inverse"
                      >
                        info@email.commmm
                      </a>
                      <br /> 00 (123) 456 78 90 <br />
                      <nav className="nav social social-white mt-4">
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                        </a>
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
        {/* <!-- /header --> */}
        <section className="wrapper  bg-[rgba(246,247,249,1)] ">
          <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4">
                  ¡Hola! Somos DENTUM
                </h1>
                <p className="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0">
                  Especialistas en transformar el cuidado dental en sonrisas
                  saludables y duraderas.
                </p>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
          <figure
            className="absoute"
            style={{
              bottom: 0,
              left: 0,
              zIndex: 2,
            }}
          >
            <img src="/assets/img/photos/bg12.jpg" alt="image" />
          </figure>
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]  angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
                <div className="flex flex-wrap !relative overlap-grid-2">
                  <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:mt-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <img
                        className="!rounded-[.4rem] "
                        src="/assets/img/photos/about2.jpg"
                        srcSet="/assets/img/photos/about2@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                  <div className="item xl:w-[55%] xl:mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:mt-[-45%] md:z-[4] md:ml-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <img
                        className="!rounded-[.4rem] "
                        src="/assets/img/photos/about3.jpg"
                        srcSet="/assets/img/photos/about3@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <img
                  src="/assets/img/icons/lineal/megaphone.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4"
                  alt="image"
                />
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                  ¿Quienes Somos?
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  Somos un equipo de profesionales dedicados a ofrecer servicios
                  dentales integrales, combinando experiencia, tecnología de
                  vanguardia y un enfoque personalizado para cuidar la salud
                  bucal de nuestros pacientes. Nuestro compromiso es brindar una
                  atención de calidad en un ambiente seguro y confiable,
                  ayudando a nuestros pacientes a lograr sonrisas saludables y
                  duraderas.
                </p>
                <div className="flex flex-wrap mx-[-15px] mt-[-15px] xl:mx-[-20px]">
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                      <li className="relative pl-6">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                        </span>
                        <span>Médicos profesionales</span>
                      </li>
                      <li className="relative pl-6 mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                        </span>
                        <span>
                          Habilidades científicas para obtener un mejor
                          resultado
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                      <li className="relative pl-6">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                        </span>
                        <span>Buen ambiente de trabajo</span>
                      </li>
                      <li className="relative pl-6 mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                        </span>
                        <span>
                          Fermentum massa vivamus faucibus amet euismod.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/*<!--/.row -->*/}
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
            <div className="flex flex-wrap mx-[-15px] mb-5">
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-0 lg:!order-0">
                <img
                  className="w-full max-w-full !h-auto"
                  src="/assets/img/photos/about7.jpg"
                  srcSet="/assets/img/photos/co1@2x.png 2x"
                  alt="image"
                />
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <div
                  className="w-full flex-[0_0_auto] px-[15px] max-w-full"
                >
                  <img
                    src="/assets/img/icons/lineal/list.svg"
                    className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4 m-[0_auto]"
                    alt="image"
                  />
                  <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-4">
                    La Historia Detrás de DENTUM
                  </h2>
                </div>
                <p className="!mb-6">
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. <br /> <br /> Nullam quis risus eget urna mollis ornare. Nullam id
                  dolor id nibh ultricies vehicula ut id elit. Vestibulum id
                  ligula porta felis euismod semper. Aenean lacinia bibendum
                  nulla sed consectetur. Sed posuere consectetur est at
                  lobortis. Vestibulum id ligula porta felis. <br /> <br /> Aenean eu leo
                  quam. Pellentesque ornare sem lacinia quam venenatis
                  vestibulum. Etiam porta sem malesuada magna mollis euismod.
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam
                  quis risus eget urna mollis ornare.Aenean eu leo quam.
                </p>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] !mb-3">
              <div className="md:w-10/12 lg:w-10/12 xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                <img
                  src="/assets/img/icons/lineal/team.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4 m-[0_auto]"
                  alt="image"
                />
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 xl:!px-[4.5rem] lg:!px-[4.5rem]">
                Conozca al Equipo Detrás de su Sonrisa Perfecta
                </h2>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
            <div className="!relative">
              <div
                className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
                data-rellax-speed="1"
                style={{
                  bottom: "0.5rem",
                  right: "-1.7rem",
                }}
              ></div>
              <div
                className="shape !rounded-[50%] bg-line red rellax !w-[6rem] !h-[6rem] absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{
                  top: "0.5rem",
                  left: "-1.7rem",
                }}
              ></div>
              <div
                className="swiper-container dots-closer !mb-6"
                data-margin="0"
                data-dots="true"
                data-items-xxl="4"
                data-items-xl="3"
                data-items-lg="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body p-[40px]">
                            <img
                              className="rounded-[50%] !w-[5rem] mb-4"
                              src="/assets/img/avatars/te1.jpg"
                              srcSet="/assets/img/avatars/te1@2x.jpg 2x"
                              alt="image"
                            />
                            <h4 className="mb-1">Coriss Ambady</h4>
                            <p className="!mb-2">
                              Fermentum massa justo sit amet risus morbi leo.
                            </p>
                            <nav className="nav social !mb-0">
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
                            </nav>
                            {/* <!-- /.social --> */}
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body p-[40px]">
                            <img
                              className="rounded-[50%] !w-[5rem] mb-4"
                              src="/assets/img/avatars/te2.jpg"
                              srcSet="/assets/img/avatars/te2@2x.jpg 2x"
                              alt="image"
                            />
                            <h4 className="mb-1">Cory Zamora</h4>
                            <p className="!mb-2">
                              Fermentum massa justo sit amet risus morbi leo.
                            </p>
                            <nav className="nav social !mb-0">
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
                            </nav>
                            {/* <!-- /.social --> */}
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body p-[40px]">
                            <img
                              className="rounded-[50%] !w-[5rem] mb-4"
                              src="/assets/img/avatars/te3.jpg"
                              srcSet="/assets/img/avatars/te3@2x.jpg 2x"
                              alt="image"
                            />
                            <h4 className="mb-1">Nikolas Brooten</h4>
                            <p className="!mb-2">
                              Fermentum massa justo sit amet risus morbi leo.
                            </p>
                            <nav className="nav social !mb-0">
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
                            </nav>
                            {/* <!-- /.social --> */}
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body p-[40px]">
                            <img
                              className="rounded-[50%] !w-[5rem] mb-4"
                              src="/assets/img/avatars/te4.jpg"
                              srcSet="/assets/img/avatars/te4@2x.jpg 2x"
                              alt="image"
                            />
                            <h4 className="mb-1">Jackie Sanders</h4>
                            <p className="!mb-2">
                              Fermentum massa justo sit amet risus morbi leo.
                            </p>
                            <nav className="nav social !mb-0">
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
                            </nav>
                            {/* <!-- /.social --> */}
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body p-[40px]">
                            <img
                              className="rounded-[50%] !w-[5rem] mb-4"
                              src="/assets/img/avatars/te5.jpg"
                              srcSet="/assets/img/avatars/te5@2x.jpg 2x"
                              alt="image"
                            />
                            <h4 className="mb-1">Laura Widerski</h4>
                            <div className="text-[0.65rem] mb-2 uppercase tracking-[0.02rem] font-bold text-[#aab0bc]">
                              Sales Specialist
                            </div>
                            <p className="!mb-2">
                              Fermentum massa justo sit amet risus morbi leo.
                            </p>
                            <nav className="nav social !mb-0">
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
                            </nav>
                            {/* <!-- /.social --> */}
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body p-[40px]">
                            <img
                              className="rounded-[50%] !w-[5rem] mb-4"
                              src="/assets/img/avatars/te6.jpg"
                              srcSet="/assets/img/avatars/te6@2x.jpg 2x"
                              alt="image"
                            />
                            <h4 className="mb-1">Tina Geller</h4>
                            <div className="text-[0.65rem] mb-2 uppercase tracking-[0.02rem] font-bold text-[#aab0bc]">
                              Financial Analyst
                            </div>
                            <p className="!mb-2">
                              Fermentum massa justo sit amet risus morbi leo.
                            </p>
                            <nav className="nav social !mb-0">
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
                            </nav>
                            {/* <!-- /.social --> */}
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
              {/* <!-- /.swiper-container --> */}
            </div>
            {/* <!-- /.relative --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>                                                                                                                                                                                                                                                                                               
        <section className="wrapper !bg-[#ffffff]  angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container pt-32 pb-[4.5rem] xl:pt-36 lg:pt-36 md:pt-36 xl:pb-24 lg:pb-24 md:pb-24">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center">
              <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 lg:!ml-0 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative">
                <figure className="!rounded-[.4rem] relative z-[2]">
                  <img
                    className="!rounded-[.4rem] w-full max-w-full !h-auto"
                    src="/assets/img/photos/about4.jpg"
                    srcSet="/assets/img/photos/about4@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <img
                  src="/assets/img/icons/lineal/telemarketer.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4"
                  alt="image"
                />
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-8">
                ¿Listo para una Sonrisa Espectacular? 
                </h2>
                <div className="flex flex-row">
                  <div>
                    <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                      <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="!mb-1">Dirección</h5>
                    <address className=" not-italic leading-[inherit] mb-4">
                    3 Avenida 3-03, Chimaltenango 04001
                      <br className="hidden xl:block lg:block md:block" />
                      Chimaltenango, Guatemala
                    </address>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                      {" "}
                      <i className="uil uil-phone-volume before:content-['\ec50']"></i>{" "}
                    </div>
                  </div>
                  <div>
                    <h5 className="!mb-1">Teléfono</h5>
                    <p>00 (123) 456 78 90</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                      <i className="uil uil-envelope before:content-['\eac8']"></i>{" "}
                    </div>
                  </div>
                  <div>
                    <h5 className="!mb-1">Correo</h5>
                    <p className="!mb-0">
                      <a
                        href="mailto:sandbox@email.com"
                        className="text-[#60697b]"
                      >
                        Dentum.gt@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
      </div>
      <Foother />
      {/* <!-- progress wrapper --> */}
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#605dba] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
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
      {/* <script src="/assets/js/plugins.js"></script> */}
      {/* <script src="/assets/js/theme.js"></script> */}
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
}
