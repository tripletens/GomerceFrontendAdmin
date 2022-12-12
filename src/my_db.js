import { AccessTime, EventNoteOutlined, MailOutlined, MeetingRoomOutlined, ShoppingCart } from "@mui/icons-material";


const data = [
  {
    id: 1,
    first_name: 'Susan',
    last_name: 'Smith',
    mobile: '+234-7064107055',
    image: '../vendor_img/animated_1.jpg',
    email: 'smith@gmail.com',
    birthday: 'Jan 19, 1994',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 200,
    sold: 211,
    payout: '$21000'
  },
  {
    id: 2,
    first_name: 'Anna',
    last_name: 'Johnson',
    mobile: '+234-8154107030',
    image: '../vendor_img/animated_2.jpg',
    email: 'ann_johnson@yahoo.com',
    birthday: 'March 19, 1989',
    Biz_address: '#11 Robert Road, Beside Lohda, Asaba, Delta State',
    Sale_focus: 'Ice Cream, Children outfit, Shoes, and general fashion',
    items: 145,
    sold: 57,
    payout: '$6000'
  },
  {
    id: 3,
    first_name: 'Peter',
    last_name: 'Jones',
    mobile: '+234-8064107055',
    image: '../vendor_img/animated_3.jpg',
    email: 'peter@hotmail.com',
    birthday: 'Dec 19, 1990',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 212,
    sold: 178,
    payout: '$7100'
  },
  {
    id: 4,
    first_name: 'Emeka',
    last_name: 'Robert',
    mobile: '+234-08123787322',
    image: '../vendor_img/animated_4.jpg',
    email: 'emeka.robert@ajiozi.com',
    birthday: 'Dec 19, 1990',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 454,
    sold: 521,
    payout: '$22000'
  },
  {
    id: 5,
    first_name: 'Sandra',
    last_name: 'Ajiri',
    mobile: '+234-8064107055',
    image: '../vendor_img/animated_5.jpg',
    email: 'sunny@ajiozi.com',
    birthday: 'Dec 19, 1990',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 343,
    sold: 521,
    payout: '$21000'
  },
  {
    id: 6,
    first_name: 'Bill',
    last_name: 'Anderson',
    mobile: '+234-8064107055',
    image: '../vendor_img/animated_6.jpg',
    email: 'bill.ander@gmmail.com',
    birthday: 'April 14, 1992',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 222,
    sold: 521,
    payout: '$21000'
  },
  {
    id: 7,
    first_name: 'Lucky',
    last_name: 'Ejiro',
    mobile: '+234-8064107055',
    image: '../vendor_img/animated_7.jpg',
    email: 'lucky@hotmail.com',
    birthday: 'June 12, 1986',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 222,
    sold: 521,
    payout: '$21000'
  },
  {
    id: 8,
    first_name: 'Ruke',
    last_name: 'Mathew',
    mobile: '+234-8064107055',
    image: '../vendor_img/animated_8.jpg',
    email: 'mathyzruk@ajiozi.com',
    birthday: 'Feb 12, 1989',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 222,
    sold: 521,
    payout: '$21000'
  },
  {
    id: 9,
    first_name: 'Osaru',
    last_name: 'John',
    mobile: '+234-8064107055',
    image: '../vendor_img/animated_9.jpg',
    email: 'johndoe@gmail.com',
    birthday: 'Aug 15, 1978',
    Biz_address: '#21 Airport Road, Beside Kemanson, Warri, Delta State',
    Sale_focus: 'Bags, Children outfit, Shoes, and general fashion',
    items: 222,
    sold: 521,
    payout: '$21000'
  },
];

export const categories = [
    {
        id: 1,
        img: <ShoppingCart sx={{fontSize:30}}/>,
        title: 'New Order',
        desc: "Chinonso has placed new order",
        time_symbol: <AccessTime sx={{fontSize:18}} />,
        time: "10 AM",
        color: '#ef6c00'
    },
    {
        id: 2,
        img: <MailOutlined sx={{fontSize:30}}/>,
        title: 'New Enquiry',
        desc: "Emma wants to know more about bulk order",
        time_symbol: <AccessTime sx={{fontSize:18}}/>,
        time: "02 PM",
        color: '#00838f'
    },
    {
        id: 3,
        img: <EventNoteOutlined sx={{fontSize:30}}/>,
        title: 'Support',
        desc: "customer has difficulty",
        time_symbol: <AccessTime sx={{fontSize:18}}/>,
        time: "08 AM",
        color: '#ab47bc'
    },
    {
        id: 4,
        img: <MeetingRoomOutlined sx={{fontSize:30}}/>,
        title: 'Meetup',
        desc: "Staff not available currently, in meeting",
        time_symbol: <AccessTime sx={{fontSize:18}}/>,
        time: "04 PM",
        color: '#0277bd'
    },
    {
        id: 5,
        img: <ShoppingCart sx={{fontSize:30}}/>,
        title: 'New Order',
        desc: "Chinonso has placed new order",
        time_symbol: <AccessTime sx={{fontSize:18}} />,
        time: "10 AM",
        color: '#ef6c00'
    },
    {
        id: 6,
        img: <MailOutlined sx={{fontSize:30}}/>,
        title: 'New Enquiry',
        desc: "Emma wants to know more about bulk order",
        time_symbol: <AccessTime sx={{fontSize:18}}/>,
        time: "02 PM",
        color: '#00838f'
    },
    {
        id: 7,
        img: <EventNoteOutlined sx={{fontSize:30}}/>,
        title: 'Support',
        desc: "customer has difficulty",
        time_symbol: <AccessTime sx={{fontSize:18}}/>,
        time: "08 AM",
        color: '#ab47bc'
    },
    {
        id: 8,
        img: <MeetingRoomOutlined sx={{fontSize:30}} />,
        title: 'Meetup',
        desc: "Staff not available currently, in meeting",
        time_symbol: <AccessTime sx={{fontSize:18}}/>,
        time: "04 PM",
        color: '#0277bd'
    },
]

export default data;