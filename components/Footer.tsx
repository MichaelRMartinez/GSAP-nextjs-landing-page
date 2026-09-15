import Image from "next/image";

export default function Footer() {
  return (<>
    <footer className="py-16">
      <div className="container grid gap-7 lg:grid-cols-2 relative">

        {/* CONTENT */}
        <div className="space-y-5 relative flex flex-col">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.svg"
              alt="TaskNest logo"
              width={94}
              height={94}
            />
            <p className="text-3xl font-bold">TaskNest</p>
          </div>

          {/* TEXT */}
          <div className="space-y-4">
            <h3 className="font-bold text-3xl lg:text-4xl">Ready to Assist You</h3>
            <p className="max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur magnam quia voluptatem accusantium eligendi quam.</p>
          </div>

          {/* IMAGE */}
          <div className="max-w-max mx-8 lg:mx-18">
            <Image
              src="/images/footer-img-1.png"
              alt="phone graphic"
              width={375}
              height={350}
            />
          </div>
          <p className="mt-auto px-4 sm:px-7">&copy; {new Date().getFullYear()}. Designed by Michael Martinez.</p>

          {/* BACKGROUND COLOR */}
          <div className="bg-footerClr h-1/4 absolute bottom-0 right-0 w-full -z-10 rounded-4xl" />
        </div>

        {/* IMAGE */}
        <div className="max-w-max">
          <Image
            src="/images/footer-img-2.png"
            alt="TaskNest map location"
            width={797}
            height={1024}
          />
        </div>

        {/* CARDS */}
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-1/2 max-w-120 w-full space-y-6">
          {/* CARD */}
          <div className="card px-10 py-7 space-y-3 bg-background footer-card">
            <p className="uppercase text-xl">Email</p>
            <div className="flex items-center gap-4">
              {/* ICON */}
              <div className="shrink-0">
                <img src="/images/footer-icon-1.svg" alt="email icon" />
              </div>
              <h4 className="text-xl">hello@tasknest.com</h4>
            </div>
          </div>
          {/* CARD */}
          <div className="card px-10 py-7 space-y-3 bg-background footer-card">
            <p className="uppercase text-xl">HeadQuarters</p>
            <div className="flex items-center gap-4">
              {/* ICON */}
              <div className="shrink-0">
                <img src="/images/footer-icon-2.svg" alt="email icon" />
              </div>
              <h4 className="text-xl">123 Fake Street, Suite 101, Durham, NC 27709</h4>
            </div>
          </div>
        </div>

      </div>
    </footer>
  </>)
}
