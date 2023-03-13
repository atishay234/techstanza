const Nightmare = require("nightmare");
const nightmare = Nightmare();
async function checkPrice() {
  for (let i = 0; i < 200; i++) {
    const phonePrice = await nightmare
      .goto(
        "https://www.flipkart.com/msi-gf65-thin-core-i5-9th-gen-16-gb-512-gb-ssd-windows-10-home-6-graphics-nvidia-geforce-gtx-1660-ti-9sd-890in-gaming-laptop/p/itmc5bf7e1b67fc9?pid=COMFUBTQRM9KM5AA&lid=LSTCOMFUBTQRM9KM5AAGF73CC&marketplace=FLIPKART&store=6bo%2Fb5g&srno=b_1_1&otracker=hp_omu_Top%2BOffers_3_4.dealCard.OMU_0OJNDZG0DRAN_4&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Top%2BOffers_NA_dealCard_cc_3_NA_view-all_4&fm=neo%2Fmerchandising&iid=en_eNiaStC2WB82uHMFzTnoWpYEgK8Rde86mvnEQnUpO0VSAjOOTRxv7pF1pVniUtER1qkkzmqiN1nqHdbt4MOLRQ%3D%3D&ppt=hp&ppn=homepage&ssid=c6v1on1g740000001623831955522"
      )
      .wait("._16Jk6d")
      .evaluate(() => document.querySelector("._16Jk6d").innerText);

    const phoneprice1 = await nightmare
      .goto(
        "https://www.flipkart.com/asus-rog-zephyrus-g14-ryzen-9-octa-core-4900hs-16-gb-512-gb-ssd-windows-10-home-6-graphics-nvidia-geforce-gtx-1660ti-60-hz-ga401iu-ha251ts-gaming-laptop/p/itmf874581a4f2ed?pid=COMG2AFTH3UCUZTY&lid=LSTCOMG2AFTH3UCUZTYD9M6D2&marketplace=FLIPKART&store=6bo%2Fb5g&srno=b_1_2&otracker=hp_omu_Top%2BOffers_3_4.dealCard.OMU_0OJNDZG0DRAN_4&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Top%2BOffers_NA_dealCard_cc_3_NA_view-all_4&fm=neo%2Fmerchandising&iid=en_eNiaStC2WB82uHMFzTnoWpYEgK8Rde86mvnEQnUpO0UybwUD5BUjN6xdconMsH5ZeBJmwtlSEOwGhNGKRyVAwg%3D%3D&ppt=hp&ppn=homepage&ssid=c6v1on1g740000001623831955522"
      )
      .wait("._2p6lqe")
      .evaluate(() => {
        document.querySelector("._2p6lqe");
      });

    console.log(phonePrice);
    console.log(phoneprice1);
  }
}

checkPrice().then((res) => {
  console.log(res);
});
