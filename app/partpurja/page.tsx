import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import LinkButton from "@/components/pageHelperComponents.js/PartPurjaLinkButton";
import Link from "next/link";

const page = async () => {
  const partpurja = await fetch(
    "https://smartcare.com.np/multiservice/publiccontrol/publicmasterconfig/getfeaturedDetails"
  );
  const partpurjadata = await partpurja.json();

  return (
    <>
      <Nav />
      <div className=" pt-[20px] pb-[40px] max-w-[1280px] mx-auto overflow-hidden ">
        {/* text and option div */}
        <div className="flex justify-between items-center border-b-[1px] pb-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-9">Featured Products</h2>
            <p className="text-[14px] ">
              {/* page number */}
              Showing 1-20 of 200
            </p>
          </div>

          <select
            name=""
            id=""
            className="shadow-sm outline-none text-[14px] border-[1px] border-gray-200 p-4"
          >
            <option className="" value="">
              Default Sorting
            </option>
            <option value="">Ascending</option>
            <option value="">Descending</option>
            <option value="">Default</option>
          </select>
        </div>

        {/* card */}

        <div className="relative flex flex-wrap justify-center gap-14 pt-10">
          {partpurjadata?.map((s: any, index: any) => (
            <Link
              key={index}
              href={{
                pathname: `/partpurja/${s.page_url}`,
              }}
            >
              <LinkButton data={s} />
              <div
                key={index}
                className=" w-[250px] h-[380px] md:w-[200px] flex flex-col gap-4 border-[1px] rounded-md p-1 hover:border-[#ed1b26] hover:border-[1px]"
              >
                <img
                  className="mix-blend-multiply h-[50%] md:h-[45%] border-[1px] rounded-t-md p-4"
                  src={s.filename}
                  alt={s.features}
                />
                <div className="flex flex-col gap-4 p-2">
                  <div className=" bg-[#e8ebf4] text-[#3293b2] rounded-full text-[10px] font-bold text-center py-4">
                    {s.features}
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: s.blog_name }}
                    className="text-[12px] font-bold"
                  ></div>
                </div>
                <div className="flex justify-between px-2">
                  <p className="text-[#3293b2] text-[14px] font-bold">
                    {s.our_rate}
                  </p>
                  <p className="text-[#ed1b26] text-[10px] line-through">
                    {s.market_rate}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;


export async function generateMetadata(){
  // const seocontet = await fetch(
  //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
  // );
  // const seocontetdata:[] = await seocontet.json();

  return{
    title:`PartPurja | Technical sewa`
  }
}