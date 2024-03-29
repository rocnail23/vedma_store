
export interface HowWork  {
  title:string,
  titleIcons:string,
  items: ItemCard[],
  info?:string

}


export interface ItemCard  {
  type:string,
  src: string, 
  text?: string,
  size?: [number,number]
}



export let galeryImages = [
    {image: '/galery-1.jpg'},
    {image: '/galery-2.jpg'},
    {image: '/galery-3.jpg', className:"row-span-2"},
    {image: '/galery-4.jpg' },
    {image: '/galery-5.jpg'}
  ];
  

  export let howWork:HowWork[] = [

    {
      title: "metodos de pago",
      titleIcons: "fa-dollar-sign",
      items: [
         {type:"icon", src: "fa-money-bill-wave", text: "efectivo"},
         {type:"icon", src: "fa-mobile-screen-button", text: "pago movil"},
         {type:"icon-image",src: "/paypal.png",text: "paypal", size:[80,80]},
         {type: "icon-image",src: "/reserve.png",text: "reserve",size:[40,40]}
        ],
      info: "paypal 10% + de comision"
    },
    {
      title: "delivery",
      titleIcons: "fa-motorcycle",
      items:[
        {type:"icon",src:"fa-calendar-days", text: "lunes-viernes"},
        {type:"icon",src:"fa-clock", text:"8AM-6PM"}
      ]
    },
    {
      title: "envios a nivel nacional",
      titleIcons: "fa-truck-fast",
      items: [
        {type: "icon-image", src: "/tealcal.png" ,size:[80,50]},
        {type:"icon-image",src: "/mrw.png",size:[150,50]},
        {type:"icon-image", src: "/zoom.png", size:[180,50]}
      ],
    }

  ]