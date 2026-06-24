export type ReferenceSolution = {
  id: string;
  image: string;
  customerImage: string;
  description: {
    en: string;
    vi: string;
  };
};

/** Solution cards — port names come from AIS testimonials; descriptions from Tidalis references. */
export const REFERENCE_SOLUTIONS: ReferenceSolution[] = [
  {
    id: "dong-nai",
    image: "/references/tidalis-port-melbourne.webp",
    customerImage: "/references/dongnai-port.png",
    description: {
      en: "A modern, scalable port management solution built to fit your operations, not the other way around.",
      vi: "Giải pháp quản lý cảng hiện đại, có khả năng mở rộng — được xây dựng để phù hợp với vận hành của bạn, không phải ngược lại.",
    },
  },
  {
    id: "cua-lo",
    image: "/references/Flinders.webp",
    customerImage: "/references/cualo-port.png",
    description: {
      en: "One common operating picture that connects land and sea operations seamlessly.",
      vi: "Một bức tranh vận hành thống nhất kết nối liền mạch hoạt động trên bờ và trên biển.",
    },
  },
  {
    id: "quang-ngai",
    image: "/references/tidalis-port-townsville.webp",
    customerImage: "/references/quangngai-port.png",
    description: {
      en: "Pilot management software so intuitive you will want it from day one.",
      vi: "Phần mềm quản lý hoa tiêu trực quan đến mức bạn sẽ muốn dùng ngay từ ngày đầu.",
    },
  },
  {
    id: "can-tho",
    image: "/references/tidalis-shanghai-references.webp",
    customerImage: "/references/cantho-port.png",
    description: {
      en: "Stable, reliable and advanced VTS trusted by one of the world's busiest ports.",
      vi: "Hệ thống VTS ổn định, đáng tin cậy và tiên tiến — được tin dùng tại một trong những cảng bận rộn nhất thế giới.",
    },
  },
  {
    id: "an-giang",
    image: "/references/tidalis-curacao-ports.webp",
    customerImage: "/references/angiang-port.png",
    description: {
      en: "From operation to invoice in minutes with port management that keeps pace with you.",
      vi: "Từ vận hành đến hóa đơn trong vài phút với hệ thống quản lý cảng theo kịp tốc độ của bạn.",
    },
  },
  {
    id: "hai-phong",
    image: "/references/tidalis-halifax-novascotia.webp",
    customerImage: "/references/haiphong-port.png",
    description: {
      en: "The right mix of functionality, cost and proven results chosen for a good reason.",
      vi: "Sự cân bằng đúng đắn giữa tính năng, chi phí và kết quả đã được chứng minh — được lựa chọn vì lý do chính đáng.",
    },
  },
  {
    id: "hcm",
    image: "/references/Antwerp.webp",
    customerImage: "/references/hochiminh-port.png",
    description: {
      en: "Two decades of uninterrupted VTS performance at one of Europe's largest ports.",
      vi: "Hai thập kỷ vận hành VTS liên tục không gián đoạn tại một trong những cảng lớn nhất châu Âu.",
    },
  },
];
