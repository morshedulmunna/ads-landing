import Image from "next/image";
import Logo from "./components/Logo";
import { img1, img2 } from "@/assets";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl py-20 mx-auto h-full px-12">
        <div className="bg-white shadow-sm w-full flex justify-center items-center p-4">
          <div className=" flex flex-col justify-center items-center w-full">
            <Logo />
            <h2 className="text-4xl max-w-4xl mt-6 leading-[60px] font-bold text-center">
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

            <div className="mt-8 rounded w-full h-[650px]">
              <video
                controls
                className="w-full rounded h-full"
                src="https://www.youtube.com/watch?v=YcWv7QEF5T8"
              ></video>
            </div>
            <p className="mt-6 text-2xl font-semibold">
              সিমিত সময়ের জন্য কম্বো প্যাকটিx
            </p>

            <div className="flex items-center mt-8 text-5xl font-bold">
              <div className="p-4 flex items-center flex-col gap-2 w-52 rounded border">
                <p>২৪</p>
                <p className="text-sm">দিন</p>
              </div>
              <div className="p-4 flex items-center flex-col gap-2 w-52 rounded border">
                <p>১৪</p>
                <p className="text-sm">ঘন্টা</p>
              </div>
              <div className="p-4 flex items-center flex-col gap-2 w-52 rounded border">
                <p>১০</p>
                <p className="text-sm">মিনিট</p>
              </div>
              <div className="p-4 flex items-center flex-col gap-2 w-52 rounded border">
                <p>৯</p>
                <p className="text-sm">সেকেন্ট</p>
              </div>
            </div>

            {/* দফঝ */}

            <div className="flex w-full h-full gap-4 mt-20 items-center">
              <div className="w-1/2">
                <h2 className="mb-6 text-2xl font-semibold leading-relaxed ">
                  সুপার ধামাকা অফার!! মাত্র ১২৭০/- টাকায় এই প্যাকেজে থাকছে ৪টি
                  প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি ফ্রী।
                </h2>
                <h3 className="font-semibold">এই প্যাকেজে থাকছে,</h3>
                <ul className="mt-4 space-y-4">
                  <li>✅ আতর আল কাবা ৩মিলি</li>
                  <li>✅ মেশক আম্বার ৩মিলি,</li>
                </ul>
              </div>
              <div className="w-1/2 relative h-full">
                <Image src={img1} alt="img1" className="" />
                <Image
                  src={img2}
                  alt="img1"
                  className=" absolute right-32 top-56"
                />
              </div>
            </div>

            <p className="text-center mt-40 max-w-screen-xl px-6 text-2xl leading-relaxed">
              মোট ১২মিলি আতর আর সাথে থাকছে একটি ঘড়ি ফ্রী । আমদের স্টকে থাকা মডেল
              থেকে যেকোন একটি ঘড়ি চয়েজ করতে পারবেন।আর সাথে পাবেন ৭দিনের
              রিপ্লেস্মেন্ট গ্যারান্টি।ইনশাআল্লাহ। অফার আরও সর্ম্পকে বিস্তারিত
              জানতে আমাদের ম্যাসেজ করুন।একটাকাও অগ্রিম পেমেন্ট করতে হবে না।
              সর্ম্পুন ক্যাশঅন ডেলিভারিতে আতর ঘড়ি চেক করে তার পর পেমেন্ট করবেন।
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
