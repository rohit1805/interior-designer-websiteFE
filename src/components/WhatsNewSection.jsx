import React from "react";
import { TbHeartHandshake } from "react-icons/tb";
import icon1 from "../assets/whats_new_images/kitchen-icon-1.svg";
import icon2 from "../assets/whats_new_images/kitchen-icon-2.svg";
import icon3 from "../assets/whats_new_images/kitchen-icon-3.svg";
import icon4 from "../assets/whats_new_images/kitchen-icon-4.svg";
import icon5 from "../assets/whats_new_images/kitchen-icon-5.svg";
import icon6 from "../assets/whats_new_images/kitchen-icon-6.svg";
import WhatsNewCard from "./WhatsNewCard";

export default function WhatsNewSection() {
  const data = [
    {
      iconUrl: icon1,
      title: "Beyond Kitchens",
      desc: "Backing on the foundation of 25 + years of legacy of modular kitchen, we aspire to enhance your overall joy of living along with cooking. Bearing this in mind, we ventured into the stream of designing living spaces including bedrooms, living rooms, and other spaces. Having received an overwhelming response and love for our kitchens, this was our way of giving more of us in return by designing other significant spaces of your life. The central essence of our brand is elegant convenience, highest precision and trustworthy efficiency. This can be witnessed in the designs that we craft for your other living spaces. So, if you wish to experience a space adorned with aesthetics, high functionality and especially a home that reflects your personality, Kitchen décor is your brand to make that happen.",
    },
    {
      iconUrl: icon2,
      title: "Knowing You Better",
      desc: "To strengthen the understanding and better the communication between you and us, we have now upgraded our working process. To get to know you and your needs and ideas effectively, we provide you with an elaborate questionnaire. The information asked in the questionnaire is very detailed and specific and hence caters to all the minutest doubts and questions that we may have. Also, we know that deciding on what’s right to buy and what will make the best fit for your needs is difficult. We understand this. Hence, in our Experience Centres we always try to make the process simpler and easier for you so that there’s no confusion left on your part. We ask you the right questions to give you the right results.",
    },
    {
      iconUrl: icon3,
      title: "Our Own Manufacturing Facility",
      desc: "We believe in endorsing products that we completely believe in and trust. Hence, to assure this we set up a 60,000 sq.ft. manufacturing facility in Pirangut, Pune where most of our products are manufactured and crafted into the wonderful designs that our customers witness in our Experience Centres and then at their homes. The self manufacturing aspect of our company renders us with a lot of reliability and control in terms of the standard and quality of our products. Moreover, as being self-manufactured, our deliveries are prompt and quick without any compromises in the quality. We promise a standard delivery of 6-8 weeks from the day of booking.",
    },
    {
      iconUrl: icon4,
      title: "KD Star Network",
      desc: "At Kitchen decor, we always strive to go one step ahead to offer you exceptional service and experience. Hence, to deliver this we created our KD Star Network. A loyalty program just for our customers to experience our hospitality and amenity post buying. The main purpose of our program is to create a network where we share common love for space decor and to deliver a “Wow” element through all our services and products.",
    },
    {
      iconUrl: icon5,
      title: "5 years Warranty",
      desc: "When we say it, we mean it! When we assure you that our products bear a warranty of 5 years, it backs a strong evidence of past experiences along with our hard work, efficiency and quality that we provide. As most of our products are self manufactured in our own factory, we hold a great deal of responsibility and control in terms of quality and standard of the product. We provide you with an unparalleled service that the local carpenters or vendors won’t be able to match. Hence, keeping an immense faith and belief in our production, we guarantee you a significant parameter of calibre and quality that our product bears.",
    },
    {
      iconUrl: icon6,
      title: "Guaranteed Delivery in 6-8 weeks",
      desc: "At Kitchen decor, we ensure a fixed time period of delivery and make sure it is met. This 6-8 weeks of delivery includes installation of your product be it kitchen, wardrobe, beds, TV Units, or any other type of furniture. We always try to abide by the commitment that we have made to our customers as gaining their trust and confidence is of paramount importance.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-12 md:py-16 mx-5 md:mx-12">
      <h1 className=" text-2xl lg:text-4xl font-semibold font-Lato">
        WHAT’S NEW?
      </h1>
      <div className=" flex justify-center items-center gap-2 my-2">
        <hr className="w-20  border-b border-orange-500" />
        <TbHeartHandshake className="text-4xl text-orange-500" />
        <hr className="w-20 border-b border-orange-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-3">
        {data.map((item, i) => (
          <WhatsNewCard
            key={i}
            imgurl={item.iconUrl}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
