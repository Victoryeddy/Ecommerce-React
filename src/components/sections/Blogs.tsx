import Blog1 from "@/assets/blog1.png";
import Blog2 from "@/assets/blog2.png";
import Blog3 from "@/assets/blog3.png";

export default function Blogs() {
  return (
    <>
      <div className="bg-neutral min-h-[50vh]">
        <div className="container mx-auto px-4">
          <div className="pt-[6rem] pb-[4rem]">
            <div className="max-w-6xl mx-auto">
              <div className="lg:flex justify-between items-center">
                <h2 className="text-secondary text-2xl lg:text-3xl font-semibold pt-5">
                  Recent Blogs
                </h2>
                <p className="underline">View All Posts</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-9 gap-4">
                <div>
                  <img src={Blog1} alt="" />
                  <p className="text-secondary text-2xl lg:text-xl font-semibold pt-5">
                    First Time Home Owner Ideas
                  </p>
                  <p className="pt-3">
                    <span className="italic text-secondary">by</span>{" "}
                    <span className="text-secondary">Kristin Watson</span>
                  </p>
                </div>
                <div>
                  <img src={Blog2} alt="" />
                  <p className="text-secondary text-2xl lg:text-xl font-semibold pt-5">
                    First Time Home Owner Ideas
                  </p>
                  <p className="pt-3">
                    <span className="italic text-secondary">by</span>{" "}
                    <span className="text-secondary">Kristin Watson</span>
                  </p>
                </div>
                <div>
                  <img src={Blog3} alt="" />
                  <p className="text-secondary text-2xl lg:text-xl font-semibold pt-5">
                    First Time Home Owner Ideas
                  </p>
                  <p className="pt-3">
                    <span className="italic text-secondary">by</span>{" "}
                    <span className="text-secondary">Kristin Watson</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
