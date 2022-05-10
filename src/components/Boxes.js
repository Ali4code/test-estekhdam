import { useEffect, useState } from "react";
import NewsBox from "../components/NewsBox";

const fakeNews = [
    { id: 1, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
    { id: 2, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
    { id: 3, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
    { id: 4, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
    { id: 5, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
    { id: 6, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
    { id: 7, insertDateStr: "11/22/33", descriptionStr: "خبر جدید خبر بخبر خبر خبر" },
  ];

function Boxes() {
  const [passingData, setPassingData] = useState(null);
  useEffect(() => {
    fetch("https://www.bsbourse.ir/Backend/api/Common/GetCombinationItem", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,fa;q=0.8",
        authorization: "Bearer null",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        Referer: "https://www.bsbourse.ir/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPassingData(data.result);
        console.log(passingData)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
      <>{ (passingData) && <div className="boxes">
      <NewsBox title="اخبار و رویداد ها" data={passingData} />
      <NewsBox title="اطلاعیه ها" data={passingData} /> 
     </div> }</>
      
  );
}

export default Boxes;
