export interface Item {
  id: number;
  img: string;
  tax_info: string;
  category?: string;
  name: string;
  state?: number;
  short_info?: string;
  count: number;
  profit: number;
  price: number;
  tag?: number;
  order?: [string]; 
  attachments?: [Item]
}

export const items = [
  {
    id: 1,
    img: "/assets/img.webp",
    tax_info: "Recurring Tax Exempt",
    name: "Sony XBR75X900F",
    short_info: "75\" Class HDR UHD Smart LED TV",
    count: 1,
    price: 2503.00,
    state: 0,
    profit: 43,
    order: ["1"],
    attachments: [
      {
        id: 2,
        img: "/assets/img.webp",
        tax_info: "Recurring Tax Exempt",
        name: "Sony XBR75X900F",
        short_info: "75\" Class HDR UHD Smart LED TV",
        count: 1,
        price: 2503.00,
        state: 0,
        tag: 1,
        profit: 43,
      },
      {
        id: 3,
        img: "/assets/img.webp",
        tax_info: "Recurring Tax Exempt",
        name: "Sony XBR75X900F",
        short_info: "75\" Class HDR UHD Smart LED TV",
        count: 1,
        price: 2503.00,
        state: 0,
        tag: 2,
        profit: 43,
      },
    ]
  },
  {
    id: 4,
    img: "/assets/img.webp",
    tax_info: "Recurring Tax Exempt",
    category: "Custom Item",
    name: "Sony XBR75X900F",
    short_info: "75\" Class HDR UHD Smart LED TV",
    count: 999,
    price: 2503.00,
    state: 1,
    profit: 43,
    tag: 1,
    order: ["1"],
    attachments: [
      {
        id: 5,
        img: "/assets/img.webp",
        tax_info: "Recurring Tax Exempt",
        name: "Sony XBR75X900F",
        short_info: "75\" Class HDR UHD Smart LED TV",
        count: 1,
        price: 2503.00,
        state: 1,
        tag: 1,
        profit: 43,
      },
      {
        id: 6,
        img: "/assets/img.webp",
        tax_info: "Recurring Tax Exempt",
        name: "Sony XBR75X900F",
        short_info: "75\" Class HDR UHD Smart LED TV",
        count: 1,
        price: 2503.00,
        state: 0,
        profit: 43,
      },
    ]
  },
  {
    id: 7,
    img: "/assets/img.webp",
    tax_info: "Recurring Tax Exempt",
    category: "Custom Item",
    name: "Sony XBR75X900F",
    short_info: "75\" Class HDR UHD Smart LED TV",
    count: 999,
    price: 2503.00,
    profit: 43,
    tag: 2,
    order: ["1", "2", "3"],
    attachments: [
      {
        id: 8,
        img: "/assets/img.webp",
        tax_info: "Recurring Tax Exempt",
        name: "Sony XBR75X900F",
        short_info: "75\" Class HDR UHD Smart LED TV",
        count: 1,
        price: 2503.00,
        tag: 2,
        profit: 43,
      },
      {
        id: 9,
        img: "/assets/img.webp",
        tax_info: "Recurring Tax Exempt",
        name: "Sony XBR75X900F",
        short_info: "75\" Class HDR UHD Smart LED TV",
        count: 1,
        price: 2503.00,
        profit: 43,
      },
    ]
  },
  {
    id: 4,
    img: "/assets/img.webp",
    tax_info: "Recurring Tax Exempt",
    category: "Custom Item",
    name: "Sony XBR75X900F",
    short_info: "75\" Class HDR UHD Smart LED TV",
    count: 999,
    price: 2503.00,
    profit: 43,
    tag: 1,
    order: ["1", "2", "3"],
  },
  
];

