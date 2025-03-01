import Foother from "@/components/foother/Foother";
import { Header } from "@/components/header";
import { ScriptComponent } from "@/utils/Scripts";
import { Location } from "@/components/Location";
import { Contacts } from "@/components/Contacts";

export default function Contact() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        {/* <!-- /header --> */}

        <section className="wrapper">
          <div className=" container py-10">
            <Contacts />
          </div>
        </section>

        {/* <!-- /section --> */}
        <section className="wrapper bg-[#f6f7f9] angled upper-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <Location />

            {/* <!-- /.row --> */}
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
