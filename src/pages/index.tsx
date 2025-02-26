import "../../public/assets/fonts/unicons/unicons.css";
import "../../public/assets/css/plugins.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";

import { ScriptComponent } from "@/utils/Scripts";
import { Information } from "@/interfaces/enums/information";
import { Header } from "@/components/header";
import { testimonies } from "@/utils/testimonies";
import { TestimonyCard } from "@/components/card/Testimony";
import { services } from "@/utils/services";
import { ServiceCard } from "@/components/card/ServiceCard";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <div>
      <div className="grow shrink-0">
        {/* <!-- /header --> */}
        {/**  Cover init  */}
        <Header />
        <section
          className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-[rgba(246,247,249,1)] bg-[center_center] bg-no-repeat bg-scroll relative z-0 xsm:!bg-none md:min-h-[25rem] sm:min-h-[20rem] xsm:min-h-[20rem]"
          data-image-src="/assets/img/cover5.jpg"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255,255,255,.5)",
              position: "absolute",
              marginBottom: "0px",
              marginTop: "0px",
              marginLeft: "0px",
              marginRight: "0px",
            }}
          ></div>
          <div className="container pt-28 pb-20 sm:!py-28 xxl:!py-40">
            <div className="flex flex-wrap mx-[-15px] justify-center">
              <div
                className="xl:w-9/12 lg:w-9/12 md:w-9/12 sm:w-6/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full xsm:!text-center text-center"
                data-cues="slideInDown"
                data-group="page-title"
                data-interval="-200"
                data-delay="500"
              >
                <p className="lead text-[1.15rem] !leading-[1.5] font-medium mb-0 lg:pr-5 xl:pr-5 xxl:pr-0">
                  Amamos cuidar tu sonrisa
                </p>
                <h2 className="xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] tracking-[-0.035em] mb-4 xl:pr-5 xxl:pr-0">
                  Todas las especialidades dentales en un mismo lugar
                </h2>
                <div>
                  <a
                    href={Information.WHATSSAP_CH}
                    className="btn btn-lg btn-navy text-white  border-[#000] hover:text-white hover:bg-[#000] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                    style={{
                      background: "#000",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                        />
                      </svg>
                    </div>
                    Contáctanos
                  </a>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!-- /.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>

        {/** Cover end */}

        {/** Services init */}

        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-7 xl:!px-12">
                  Nuestros Servicios
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  Ofrecemos una amplia gama de servicios dentales para cuidar tu
                  salud bucal y mejorar tu sonrisa. Cada tratamiento es
                  realizado con el más alto nivel de profesionalismo
                </p>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div
              className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-7"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {/** HERE */}

              <div
                className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] mt-[-40px] xl:mt-0 lg:mt-0"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                {services.map((props, index) => (
                  <div
                    key={`service-${index}`}
                    className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  >
                    <div className="!relative">
                      <ServiceCard {...props} />
                      {/* <!-- /.card --> */}
                    </div>
                    {/* <!-- /div --> */}
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a
                  href="/services"
                  className="btn btn-lg btn-navy text-white !bg-[#000] border-[#000] hover:text-white  hover:border-[#000] focus:shadow-[rgba(0,0,0,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                  style={{
                    background: "#000",
                  }}
                >
                  Ver más servicios
                </a>
              </div>

              {/* HERE   */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>

        {/** Services end */}

        {/** About init */}

        <section className="wrapper">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center mb-0">
              <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full !mx-auto mt-[50px]">
                <img
                  className="w-full max-w-full !h-auto"
                  src="/assets/img/dentum/doctors4.png"
                  srcSet="/assets/img/dentum/doctors4@2x.png 2x"
                  alt="Dr Esdras y Dra Cecy"
                />
              </div>
              {/* <!--/column --> */}
              <div
                className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 className="text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.7] xl:text-[2.2rem] !mb-3">
                  Nuestros Especialistas
                </h2>
                <p className="mb-4">
                  En Dentum, contamos con un equipo de expertos dedicados a
                  brindarte la mejor atención para el cuidado de tu sonrisa.
                </p>
                <p className="mb-4">
                  👨‍⚕️ Dr. Esdras – Cirujano Dentista y Ortodoncista Con más de 10
                  años de experiencia en odontología, el Dr. Esdras es
                  especialista en ortodoncia, con formación en Colombia. Su
                  enfoque en la estética y funcionalidad dental permite a los
                  pacientes lograr una sonrisa armónica y saludable.
                </p>
                <p className="mb-4">
                  👩‍⚕️ Dra. Cesia Hoajaca – Odontopediatra Especialista en la
                  salud bucal infantil, la Dra. Cesia Hoajaca se enfoca en
                  brindar una experiencia amigable y segura para los más
                  pequeños. Su dedicación y paciencia garantizan una atención de
                  calidad para la sonrisa de tus hijos.
                </p>

                <div className="w-full">
                  <a
                    href="/about"
                    className="btn btn-lg btn-navy text-white !bg-[#000] border-[#000] hover:text-white  hover:border-[#000] focus:shadow-[rgba(0,0,0,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                    style={{
                      background: "#000",
                    }}
                  >
                    Leer más
                    <i className="uil uil-arrow-up-right ml-[.3rem] before:content-['\e950']"></i>
                  </a>
                </div>
              </div>

              {/* <!--/column --> */}
            </div>
            {/* <!-- /.row --> */}
            {/* <!-- /.row --> */}
          </div>
        </section>

        {/** About finish */}

        {/** Testimonials init */}

        <section className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
              Clientes Satisfechos
            </h2>
            <p className="lead text-[0.9rem] font-medium leading-[1.65] !text-center !mb-6 md:!px-24 lg:!px-0">
              La satisfacción del cliente es nuestro principal objetivo. Vea lo
              que nuestros clientes dicen sobre nosotros.
            </p>
            <div className="!relative">
              {/** Adornos inicio */}
              {/* <div
                className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
                data-rellax-speed="1"
                style={{
                  bottom: "0.5rem",
                  right: "-1.7rem",
                }}
              ></div>
              <div
                className="shape bg-dot primary rellax !w-[6rem] !h-[6rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{
                  top: "-1rem",
                  left: "-1.7rem",
                }}
              ></div> */}

              {/** Adornos fin */}
              <div
                className="swiper-container dots-closer blog grid-view !mb-6"
                data-margin="0"
                data-dots="true"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {testimonies.map(({ content, name }, index) => (
                      <div
                        className="swiper-slide"
                        key={`testimony-${name}-${index}`}
                      >
                        <div className="item-inner">
                          <TestimonyCard content={content} name={name} />
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.item-inner --> */}
                      </div>
                    ))}

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
        </section>

        {/** Testimonials finish */}

        {/* <!-- /section --> */}

        {/** Our location init */}

        <Location />
        {/* <!-- /section --> */}

        {/** Our location finish */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />

      {/* <script src="./assets/js/plugins.js"></script> */}
      {/* <script src="./assets/js/theme.js"></script> */}
      <ScriptComponent />
    </div>
  );
}
