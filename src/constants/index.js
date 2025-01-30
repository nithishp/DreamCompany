import { facebook, instagram, linkedin, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import TeamImage from '../persnalAsset/TeamImage.svg'
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#reviews", label: "Testimonials" },
    { href: "#contactus", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: TeamImage,
        label: "Team Support",
        subtext: "Our Team people with 10+ years of experience in the field of recruitment."
    },
    {
        imgURL: shieldTick,
        label: "100% Trust",
        subtext: "We have helped more than 200 people to reach their dream job."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Manoj Kumar",
    rating: 4.5,
    feedback:
      "I recently approached Dream company for a job vacany and was impressed with their speedy response and quick service. They were flexible with appointments, cost-efficient. Excellent service overall!",
  },
  {
    imgURL: customer2,
    customerName: "Kusuma palapatla",
    rating: 5,
    feedback:
      "After my studies I wanted to get settled in abroad, I do not know any job vacancies or have anyone to support. So my cousin asked me to approach Dream Compnay to get placed in right job. So I submitted my CV to them and within 15 days they found me a good job with a decent package that matches my profile!",
  },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    // { src: facebook, alt: "facebook logo" },
    // { src: linkedin, alt: "LinkedIn logo" },
    { src: instagram, alt: "instagram logo",href:"https://www.instagram.com/join_dreamcompany/" },
];