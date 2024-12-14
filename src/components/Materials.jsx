import React from "react";

const Materials = () => {
  // List of companies with their logos and Drive links
  const companies = [
    {
      name: "Alstom",
      logo: "https://1000logos.net/wp-content/uploads/2020/08/Alstom-Logo.png",
      link: "https://drive.google.com/drive/folders/1z64YAze5ILm6pMtNophEO_O9qTc0LfGh?usp=sharing",
    },
    {
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Deloitte_Logo.png/800px-Deloitte_Logo.png",
      link: "https://drive.google.com/drive/folders/15b777as07Zc_fpxRtVfwzXlBY1iKLxVd?usp=sharing",
    },
    {
      name: "Tredence",
      logo: "https://assets.partnerfleet.app/variants/xw2uqawikaye7ijyu0e3j5oetv9a/aa68c8ca5040661b529e2a37ee9facca897db5b61f5affd4750758b655f3c4e8",
      link: "https://drive.google.com/drive/folders/1ushzmm_B7eZoyIukmrcsf6ihTNSN3hDH?usp=sharing",
    },
    {
      name: "L&T",
      logo: "https://media.assettype.com/freepressjournal/2023-01/ebef6101-0955-417f-99aa-1765f92f085e/Do959PfU8AA71cf.jpg",
      link: "https://drive.google.com/drive/folders/1bi9DciWkgPrIOnEB6Z_HQL2oC3mKUAz9?usp=sharing",
    },
    {
      name: "Accenture",
      logo: "https://1000logos.net/wp-content/uploads/2021/12/Accenture-logo.jpg",
      link: "https://drive.google.com/drive/folders/1mPKeIcG5DdLiRqn7B-GpCQSB9gkqTZoY?usp=sharing",
    },
    {
      name: "CGI",
      logo: "https://www.consultancy.in/profile/media/cgi-spotlight-2024-04-08-113801292.png",
      link: "https://drive.google.com/drive/folders/1mSYi-XndqDShQ0WnPFEpCi-2mrXrSAAr?usp=sharing",
    },
    {
      name: "ZS",
      logo: "https://www.static-contents.youth4work.com/prep/img/categoryimages/d0273929-6ba0-4b98-92ed-b4313a26b827_subcategory_800x450.png",
      link: "https://drive.google.com/drive/folders/1mVDO628RyG992l_Fj1HPQLD5f0w6T426?usp=sharing",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-16 bg-gray-50 dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Interview Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center dark:bg-gray-900"
          >
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="h-28 w-80 mb-4 object-cover"
            />
            <h2 className="text-xl font-bold text-blue-500 mb-4 dark:text-white">{company.name}</h2>
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition dark:bg-gray-500 dark:hover:bg-gray-600"
            >
              View Questions
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
