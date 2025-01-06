import Image from "next/image";
import Logo from "./components/Logo";
import { img1, img2 } from "@/assets";
import OrderForm from "./components/OrderForm";

export default function Home() {
  return (
    <>
      <div className=" w-full lg:max-w-screen-xl py-20 mx-auto h-full lg:px-12">
        <div className="bg-white shadow-sm w-full flex justify-center items-center p-4">
          <div className=" flex flex-col justify-center items-center w-full">
            <Logo />
            <h2 className="text-lg md:text-xl lg:text-4xl max-w-4xl mt-6 lg:leading-[60px] font-bold text-center">
              সুপার ধামাকা অফার!! মাত্র ১২৭০/- টাকায় এই প্যাকেজে থাকছে ৪টি
              প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি ফ্রী।
            </h2>

            <button
              className="bg-green-500 flex items-center gap-2 hover:bg-green-500/90 transition-all ease-linear text-white p-4 mt-6 px-6 rounded-md font-semibold"
              type="button"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.50928 20C5.95928 20 5.48844 19.8042 5.09678 19.4125C4.70511 19.0208 4.50928 18.55 4.50928 18C4.50928 17.45 4.70511 16.9792 5.09678 16.5875C5.48844 16.1958 5.95928 16 6.50928 16C7.05928 16 7.53011 16.1958 7.92178 16.5875C8.31344 16.9792 8.50928 17.45 8.50928 18C8.50928 18.55 8.31344 19.0208 7.92178 19.4125C7.53011 19.8042 7.05928 20 6.50928 20ZM16.5093 20C15.9593 20 15.4884 19.8042 15.0968 19.4125C14.7051 19.0208 14.5093 18.55 14.5093 18C14.5093 17.45 14.7051 16.9792 15.0968 16.5875C15.4884 16.1958 15.9593 16 16.5093 16C17.0593 16 17.5301 16.1958 17.9218 16.5875C18.3134 16.9792 18.5093 17.45 18.5093 18C18.5093 18.55 18.3134 19.0208 17.9218 19.4125C17.5301 19.8042 17.0593 20 16.5093 20ZM5.65928 4L8.05928 9H15.0593L17.8093 4H5.65928ZM4.70928 2H19.4593C19.8426 2 20.1343 2.17083 20.3343 2.5125C20.5343 2.85417 20.5426 3.2 20.3593 3.55L16.8093 9.95C16.6259 10.2833 16.3801 10.5417 16.0718 10.725C15.7634 10.9083 15.4259 11 15.0593 11H7.60928L6.50928 13H18.5093V15H6.50928C5.75928 15 5.19261 14.6708 4.80928 14.0125C4.42594 13.3542 4.40928 12.7 4.75928 12.05L6.10928 9.6L2.50928 2H0.509277V0H3.75928L4.70928 2Z"
                  fill="white"
                />
              </svg>
              <span>অর্ডার করতে ক্লিক করুন</span>
            </button>

            <div className="mt-8 rounded w-full lg:h-[650px]">
              <video
                controls
                className="w-full rounded h-full"
                src="https://www.youtube.com/watch?v=YcWv7QEF5T8"
              ></video>
            </div>
            <p className="mt-6 text-base lg:text-2xl font-semibold">
              সিমিত সময়ের জন্য কম্বো প্যাকটি:
            </p>

            <div className="flex gap-2  items-center mt-8 text-xl lg:text-5xl font-bold">
              <div className="p-2 lg:p-4 flex items-center flex-col gap-2 w-[70px] lg:w-52 rounded border">
                <p>২৪</p>
                <p className="text-sm">দিন</p>
              </div>
              <div className="p-2 lg:p-4 flex items-center flex-col gap-2 w-[70px] lg:w-52 rounded border">
                <p>১৪</p>
                <p className="text-sm">ঘন্টা</p>
              </div>
              <div className="p-2 lg:p-4 flex items-center flex-col gap-2 w-[70px] lg:w-52 rounded border">
                <p>১০</p>
                <p className="text-sm">মিনিট</p>
              </div>
              <div className="p-2 lg:p-4 flex items-center flex-col gap-2 w-[70px] lg:w-52 rounded border">
                <p>৯</p>
                <p className="text-sm">সেকেন্ট</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full h-full lg:p-4 mt-20 items-center">
              <div className=" w-full lg:w-1/2">
                <h2 className="mb-6 lg:text-2xl font-semibold leading-relaxed ">
                  সুপার ধামাকা অফার!! মাত্র ১২৭০/- টাকায় এই প্যাকেজে থাকছে ৪টি
                  প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি ফ্রী।
                </h2>
                <h3 className="font-semibold">এই প্যাকেজে থাকছে,</h3>
                <ul className="mt-4 space-y-4">
                  <li>✅ আতর আল কাবা ৩মিলি</li>
                  <li>✅ মেশক আম্বার ৩মিলি,</li>
                </ul>
              </div>
              <div className=" w-full mt-4 lg:mt-0 lg:w-1/2 relative h-full">
                <Image src={img1} alt="img1" className="" />
                <Image
                  src={img2}
                  alt="img1"
                  className=" absolute left-32 lg:right-32 top-64 md:top-72 lg:top-56"
                />
              </div>
            </div>

            <p className="text-center mt-40  px-2 lg:px-6 text-lg lg:text-xl leading-relaxed">
              মোট ১২মিলি আতর আর সাথে থাকছে একটি ঘড়ি ফ্রী । আমদের স্টকে থাকা মডেল
              থেকে যেকোন একটি ঘড়ি চয়েজ করতে পারবেন।আর সাথে পাবেন ৭দিনের
              রিপ্লেস্মেন্ট গ্যারান্টি।ইনশাআল্লাহ। অফার আরও সর্ম্পকে বিস্তারিত
              জানতে আমাদের ম্যাসেজ করুন।একটাকাও অগ্রিম পেমেন্ট করতে হবে না।
              সর্ম্পুন ক্যাশঅন ডেলিভারিতে আতর ঘড়ি চেক করে তার পর পেমেন্ট করবেন।
            </p>

            <div className="w-full mt-24 gap-2 flex flex-col lg:flex-row">
              <div className="w-full lg:space-y-2 lg:flex-col flex gap-2 items-center  lg:w-40">
                <div className="border lg:h-24 rounded w-full"></div>
                <div className="border lg:h-24 rounded w-full"></div>
                <div className="border lg:h-24 rounded w-full"></div>
                <div className="border lg:h-24 rounded w-full"></div>
              </div>
              <div className="w-full flex gap-2 flex-col lg:flex-row h-full ">
                <div className=" w-full lg:w-1/2 h-[410px] bg-gray-200"></div>
                <div className=" w-full lg:w-1/2 h-full">
                  <ul className="list-disc space-y-4 pl-4 lg:pl-6 text-sm leading-6">
                    <li>
                      মোট ১২মিলি আতর আর সাথে থাকছে একটি ঘড়ি ফ্রী । আমদের স্টকে
                      থাকা মডেল থেকে যেকোন একটি ঘড়ি চয়েজ করতে পারবেন।আর সাথে
                      পাবেন ৭দিনের রিপ্লেস্মেন্ট গ্যারান্টি।ইনশাআল্লাহ। অফার আরও
                      সর্ম্পকে বিস্তারিত জানতে আমাদের ম্যাসেজ করুন।একটাকাও
                      অগ্রিম পেমেন্ট করতে হবে না। সর্ম্পুন ক্যাশঅন ডেলিভারিতে
                      আতর ঘড়ি চেক করে তার পর পেমেন্ট করবেন।
                    </li>

                    <li>
                      দাম ১২৭০/- টাকা মাত্র। ডেলিভারি চার্জ ঢাকার ভিতর ৬০ টাকা
                      ঢাকার বাহিরে ১২০টাকা।অফার স্টক থাকাকালীন পর্যন্ত প্রযোজ্য।
                    </li>

                    <li>
                      দাম ১২৭০/- টাকা মাত্র। ডেলিভারি চার্জ ঢাকার ভিতর ৬০ টাকা
                      ঢাকার বাহিরে ১২০টাকা।অফার স্টক থাকাকালীন পর্যন্ত প্রযোজ্য।
                    </li>

                    <li>
                      দাম ১২৭০/- টাকা মাত্র। ডেলিভারি চার্জ ঢাকার ভিতর ৬০ টাকা
                      ঢাকার বাহিরে ১২০টাকা।অফার স্টক থাকাকালীন পর্যন্ত প্রযোজ্য।
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h1 className=" mt-12 text-xl lg:text-3xl text-center font-bold text-green-500 lg:mt-24">
              আতরের নোটস
            </h1>

            <div className="flex mt-12 lg:mt-20 flex-col gap-4 w-full lg:flex-row">
              <div className="lg:w-[572px] w-full ">
                <Image src={img1} alt={"img"} className="w-full h-full" />
              </div>
              <ul className="list-disc space-y-4 pl-4 lg:pl-6 text-sm leading-6">
                <li>
                  আতর আল কাবাঃ কাবা চত্বরে যেই সুমিস্টি ঘ্রান পাবেন এই আতর আল
                  কাবায়। এই আতরের নোটস আম্বারের মিশ্র সুগন্ধি।
                </li>
                <li>
                  মেশক আম্বারঃ মেশকে-আম্বার নামটাই একটা আভিজাত্য, এ সুগন্ধির নাম
                  শুনেন নাই এমন মানুষ পাওয়া বিরল। এর যেমন রয়েছে ঘ্রাণের জাদু
                  তেমনি রয়েছে লংজিভিটি ও প্রজেকশন। এটি ব্যবহারেরটপ নোটে পাবেন:
                  অ্যাম্বারি, স্পাইসি ও আর্থি স্মেল।মিডেলে পাবেন: মাস্কি ও উডিআর
                  সর্বশেষ বা লাস্ট নোটে থাকবে: সুইট এবং পাওডারি নোটস।
                </li>

                <li>
                  শ্যানেলঃ এই আতরটি পারফিউম টাইপ এবং এর ঘ্রান যেই কারো ভালো
                  লাগবে। খুব লাইট রিফ্রেশিং স্মেল আর দারুণ প্রজেকশন। এর আতরেরটপ
                  নোটে পাবেনঃ লেমন, মিন্ট, পিংক পেপার,বার্গামোট, মিডিল নোটে
                  পাবেনঃ আদা, নোটমেগ, জেস্মিন,মেলেন।বেস নোটে পাবেনঃ আম্ববার,
                  চন্দন, ছিডার, ল্যাবডানাম, আম্বার কাঠ।
                </li>
              </ul>
            </div>

            <button className="mt-12 flex items-center justify-center gap-2 bg-green-500 py-4 w-full lg:w-1/3 text-white font-semibold rounded-md">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44245 28C7.69927 28 7.06305 27.7258 6.53381 27.1775C6.00457 26.6292 5.73995 25.97 5.73995 25.2C5.73995 24.43 6.00457 23.7708 6.53381 23.2225C7.06305 22.6742 7.69927 22.4 8.44245 22.4C9.18564 22.4 9.82185 22.6742 10.3511 23.2225C10.8803 23.7708 11.1449 24.43 11.1449 25.2C11.1449 25.97 10.8803 26.6292 10.3511 27.1775C9.82185 27.7258 9.18564 28 8.44245 28ZM21.9549 28C21.2118 28 20.5755 27.7258 20.0463 27.1775C19.5171 26.6292 19.2524 25.97 19.2524 25.2C19.2524 24.43 19.5171 23.7708 20.0463 23.2225C20.5755 22.6742 21.2118 22.4 21.9549 22.4C22.6981 22.4 23.3343 22.6742 23.8636 23.2225C24.3928 23.7708 24.6574 24.43 24.6574 25.2C24.6574 25.97 24.3928 26.6292 23.8636 27.1775C23.3343 27.7258 22.6981 28 21.9549 28ZM7.29389 5.6L10.5369 12.6H19.9956L23.7116 5.6H7.29389ZM6.0102 2.8H25.9411C26.4591 2.8 26.8532 3.03917 27.1235 3.5175C27.3937 3.99583 27.405 4.48 27.1572 4.97L22.3603 13.93C22.1126 14.3967 21.7804 14.7583 21.3638 15.015C20.9471 15.2717 20.4911 15.4 19.9956 15.4H9.92883L8.44245 18.2H24.6574V21H8.44245C7.42902 21 6.66331 20.5392 6.14533 19.6175C5.62735 18.6958 5.60483 17.78 6.07777 16.87L7.90195 13.44L3.03746 2.8H0.334961V0H4.72652L6.0102 2.8Z"
                  fill="white"
                />
              </svg>
              অর্ডার করতে ক্লিক করুন
            </button>

            <div className="mt-20 w-full bg-green-500 text-center py-6 text-xl px-6 lg:text-2xl font-bold text-white">
              আমাদের থেকেই কেন নিবেন?
            </div>

            <OrderForm />
          </div>
        </div>
      </div>
    </>
  );
}
