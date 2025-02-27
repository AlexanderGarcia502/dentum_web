import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";
import { Header } from "@/components/header";
import { ScriptComponent } from "@/utils/Scripts";
import { services } from "@/utils/services";
import { ServiceCard } from "@/components/card/ServiceCard";
import { Button } from "@/components/Button";

export default function Services() {
  return (
    <>
      <div className="grow shrink-0">
        <Header solid />
        {/* <!-- /header --> */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,0.5)] xsm:hidden"
          data-image-src="/assets/img/dentum/services.png"
        >
          <div className="container pt-36 xl:pt-[12.5rem] lg:pt-[12.5rem] md:pt-[12.5rem] pb-32 xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] text-white !mb-3">
                  Estamos para servirte con una sonrisa
                </h1>
                <p className="lead text-[1.05rem] leading-[1.6] font-medium md:!px-3 lg:!px-7 xl:!px-9 xxl:!px-10">
                  <br />
                </p>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-7 xl:!px-12">
                  Nuestros Servicios Dentales
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  En DENTUM, brindamos atención dental de calidad y construimos
                  relaciones duraderas con nuestros pacientes.
                </p>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div
              className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-2.5"
              style={{ justifyContent: "center" }}
            >
              {/** HERE */}

              <div
                className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] mt-[40px] xl:mt-0 lg:mt-0"
                style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}
              >
                {/* <!--/column --> */}
                {services.map(({ img, title, list }, index) => (
                  <div
                    key={`service-${index}`}
                    className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                    style={{ marginTop: 40 }}
                  >
                    <div className="!relative">
                      <ServiceCard img={img} title={title} list={list} />
                    </div>
                    {/* <!-- /div --> */}
                  </div>
                ))}

                {/* <!--/column --> */}
              </div>
              {/* HERE   */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>

        {/* <!-- /section --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />
      <ScriptComponent />
    </>
  );
}
