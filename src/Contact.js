
import backgroundImage from "./images/BallsBack1.jpg";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col place-items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="h-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
        </div>


        <div className=" max-w-4xl mx-auto sm:px-6 lg:px-8 border-t-4 border-slate-200 bg-slate-200 text-black">

          <div id="content" className=" flex flex-col bg-slate-200 max-w-7xl mx-auto">
            <div className="m-5 p-5 ">
              <h2 className="text-lg font-extrabold">Contact Information</h2><br />
              <div className="flex-row">
                <div className="grid grid-cols-7">
                  <div className="font-bold col-span-3 md:col-span-1 ">Telephone:
                  </div>
                  <div className="col-span-4 h-14">250-XXX-2451
                  </div>
                  <div className="">
                  </div>
                </div>
              </div>
              <div className="flex-row">
                <div className="grid grid-cols-7">
                  <div className="font-bold col-span-3 md:col-span-1">General E-mail Inquiries:
                  </div>
                  <div className="col-span-3 h-14 text-slate-500 hover:text-blue-600"><a href="mailto:graden@solutionsconsulting.ca">xxxxx@ballretail.com</a>
                  </div>
                  <div className="">
                  </div>
                </div>
              </div>

              <div className="flex-row">
                <div className="grid grid-cols-7">
                  <div className="font-bold col-span-3 md:col-span-1">Postal Address:
                  </div>
                  <div className="col-span-3 ">
                    <p>Ball Retail</p>
                    <p>P.O. Box 2352</p>
                    <p>Sidney, British Columbia V8L 4B9</p><br />
                  </div>
                  <div className="">
                  </div>
                </div>
              </div>

              <div className="flex-row">
                <p>For questions concerning the web site, send e-mails to the <a className="text-slate-500 hover:text-blue-600" href="mailto:graden@solutionsconsulting.ca">Ball Retail Webmaster</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
        </div>
      </div>
    </>
  );
}



