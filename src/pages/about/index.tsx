import Foother from "@/components/foother/Foother";
import { ScriptComponent } from "@/utils/Scripts";
import { professionals } from "@/utils/professionals";
import { ProfessionalCard } from "@/components/card/Professional";
import { HeaderContainer } from "@/components/headerContainer";

export default function About() {
  return (
    <>
      <div className="grow shrink-0">
        <HeaderContainer />
        {/* <!-- /header --> */}
        <section className="wrapper  bg-[rgba(246,247,249,1)] ">
          <div className="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div
                className="xl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
                data-cues="slideInDown"
                data-group="page-title"
                data-interval="-200"
                data-delay="500"
              >
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4 xsm:mt-10">
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
            className="absoute xsm:hidden"
            style={{
              bottom: 0,
              left: 0,
              zIndex: 2,
            }}
          >
            <img src="/assets/img/dentum/about_cover1.png" alt="image" />
          </figure>
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
                <div className="flex flex-wrap !relative overlap-grid-2">
                  {/* <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:mt-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <img
                        className="!rounded-[.4rem] "
                        src="/assets/img/dentum/about_cover1.png"
                        srcSet="/assets/img/dentum/about_cover1.png 2x"
                        alt="image"
                      />
                    </figure>
                  </div> */}
                  <div className="item xl:w-[55%] xl:mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:mt-[-45%] md:z-[4] md:ml-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <img
                        className="!rounded-[.4rem] "
                        src="/assets/img/dentum/doctors3.png"
                        srcSet="/assets/img/dentum/doctors3.png 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div
                className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
                data-cues="slideInUp"
              >
                <img
                  src="/assets/img/icons/lineal/megaphone.svg"
                  className=" xsm:mx-[auto] icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4"
                  alt="image"
                />

                <h2 className=" xsm:text-center text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                  ¿Quienes Somos?
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium mb-4">
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
                      {/* <li className="relative pl-6 mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                        </span>
                        <span>
                          Fermentum massa vivamus faucibus amet euismod.
                        </span>
                      </li> */}
                    </ul>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/*<!--/.row -->*/}
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>
        <section className="wrapper bg-[#f6f7f9] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            {/*<!--/.row -->*/}
            {/* <!-- /.row --> */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center w-full">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-0 lg:!order-0">
                <img
                  className="w-full max-w-full !h-auto"
                  src="/assets/img/photos/about7.jpg"
                  srcSet="/assets/img/photos/co1@2x.png 2x"
                  alt="image"
                />
              </div>
              {/* <!--/column --> */}
              <div
                className=" xsm:text-center  xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
                data-cues="slideInUp"
              >
                <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <img
                    src="/assets/img/icons/lineal/list.svg"
                    className="icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4 m-[0_auto]"
                    alt="image"
                  />
                  <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-4">
                    La Historia Detrás de DENTUM
                  </h2>
                </div>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium mb-4">
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. <br /> <br /> Nullam quis risus eget urna mollis ornare.
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  Vestibulum id ligula porta felis euismod semper. Aenean
                  lacinia bibendum nulla sed consectetur. Sed posuere
                  consectetur est at lobortis. Vestibulum id ligula porta felis.{" "}
                  <br /> <br /> Aenean eu leo quam. Pellentesque ornare sem
                  lacinia quam venenatis vestibulum. Etiam porta sem malesuada
                  magna mollis euismod. Nullam id dolor id nibh ultricies
                  vehicula ut id elit. Nullam quis risus eget urna mollis
                  ornare.Aenean eu leo quam.
                </p>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-[4.5rem] xl:!mb-24 lg:!mb-24 md:!mb-24 items-center">
              {/* <!--/column --> */}
              <div
                className=" xsm:text-center xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
                data-cues="slideInUp"
              >
                <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6 xxl:pr-6">
                  ¿Porqué Elegirnos?
                </h3>
                <p className="text-[1rem] tracking-[-0.03em] mb-4">
                  <strong> Comprometidos con tu sonrisa </strong>
                </p>
                <p className="text-[1rem] tracking-[-0.03em] !leading-[1.6]">
                  En DENTUM, combinamos años de experiencia en odontología con
                  un enfoque personalizado y centrado en el paciente. Nuestro
                  equipo de expertos utiliza tecnología avanzada, como
                  diagnósticos digitales y tratamientos innovadores, para
                  garantizar resultados precisos y eficaces. Nos enorgullece ser
                  la elección preferida, dedicados a crear sonrisas saludables y
                  duraderas,mientras priorizamos la comodidad y el bienestar de
                  nuestros pacientes.
                </p>

                {/* <!-- /.progress-list --> */}
              </div>
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <figure className="m-0 p-0 img-mask mask-1">
                  <img
                    className="w-auto "
                    src="./assets/img/dentum/doctor4.png"
                    srcSet="./assets/img/dentum/doctor4@2x.png 2x"
                    alt="porque elegirnos"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>

        {/* <!-- /section --> */}

        <section className="wrapper bg-[#f6f7f9]">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center flex-col-reverse xl:flex-row lg:flex-row">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <figure className="m-0 p-0 img-mask mask-3">
                  <img
                    className="w-auto"
                    src="./assets/img/dentum/experience.png"
                    srcSet="./assets/img/dentum/experience@2x.png 2x"
                    alt="experiencia"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
              <div
                className=" xsm:text-center xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
                data-cues="slideInUp"
              >
                <h3 className=" text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-5">
                  Nuestra Experiencia
                </h3>
                <p className="text-[1rem] tracking-[-0.03em] !leading-[1.6]">
                  En DENTUM contamos con una sólida trayectoria en el cuidado
                  dental, respaldada por años de experiencia y formación
                  continua. Nuestro equipo de profesionales ha tratado con éxito
                  una amplia variedad de casos, siempre comprometido con ofrecer
                  soluciones de calidad que se adapten a las necesidades
                  individuales de cada paciente. A lo largo de los años, hemos
                  perfeccionado nuestras técnicas y adoptado las mejores
                  prácticas para garantizar resultados duraderos y sonrisas
                  saludables.
                </p>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!--/section --> */}
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] !mb-3">
              <div className="md:w-10/12 lg:w-10/12 xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                <img
                  src="/assets/img/icons/lineal/team.svg"
                  className="icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4 m-[0_auto]"
                  alt="image"
                />
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 xl:!px-[4.5rem] lg:!px-[4.5rem]">
                  Conozca al Equipo Detrás de tu Sonrisa Perfecta
                </h2>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!--/.row -->*/}
            <div className="!relative">
              <div
                className="swiper-container dots-closer !mb-6"
                data-margin="0"
                data-dots="true"
                data-items-xxl="2"
                data-items-xl="2"
                data-items-lg="2"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div
                    className="swiper-wrapper"
                    data-cues="zoomIn"
                    data-group="profesionals"
                  >
                    {professionals.map(({ name, description, img }, index) => (
                      <div
                        className="swiper-slide"
                        key={`profesional-${index}`}
                      >
                        <div className="item-inner">
                          <ProfessionalCard
                            name={name}
                            description={description}
                            img={img}
                          />
                        </div>
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
          {/* <!-- /.container --> */}
        </section>

        {/* <!-- /section --> */}
      </div>
      <Foother />

      <ScriptComponent />
    </>
  );
}
