import Foother from "@/components/foother/Foother";
import { ScriptComponent } from "@/utils/Scripts";
import { services } from "@/utils/services";
import { ServiceCard } from "@/components/card/ServiceCard";
import { HeaderContainer } from "@/components/headerContainer";

export default function Services() {
  return (
    <>
      <div className="grow shrink-0">
        <HeaderContainer solid />

        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div
                className=" md:hidden lg:hidden xl::hidden xxl:hidden md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
                data-cues="slideInDown"
                data-group="page-title"
                data-interval="-200"
                data-delay="500"
              >
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-7 xl:!px-12">
                  Nuestros Servicios Dentales
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  En DENTUM, brindamos atención dental de calidad y construimos
                  relaciones duraderas con nuestros pacientes.
                </p>
              </div>
              <div className=" xsm:hidden md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
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
                data-cues="fadeIn"
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
