import { createContext, useState, useContext } from "react";

// Create the context
const LanguageContext = createContext();

// Define language options
const translations = {
  RUS: {
    logo:"василькоин",
    about: "О проекте",
    value: "Ценности ",
    tokenmics:"Токеномика",


    bannerh:"Монета Василькоин",
     bannerp: "  Этот мем-коин приносит добро, стиль и улыбки!",
    bannerbtn:" Вступить в коммьюнити",
    marque:"   василькоин",

    moneyh: "  О Василькоине",
    moneyp:" Это не просто мем-коин, а символ радости, доброты и стиля. Он создан, чтобы вдохновлять, объединять людей и делать мир ярче и счастливее.",


    actor:"  Ценности",
    actor2:"Василькоина ",
    span1:"Доброта:",
    span2:"Стиль: ",
    span3:"Улыбки: ",
    card1:" Василькоин делает мир добрее.",
    card2:"Василькоин - искусство быть собой.",
    card3:"Это наша главная валюта. ",



    rainbowh:"До следующей стадии!",
    day:"Дни",
    hour:"Часы",
    min:"Минуты",
    sec:"Секунды",
    rainbowp:"Не пропустите возможность стать частью движения Василькоин!",
    rainbowbtn:" Залетай",


    cardsech:"   Как использовать ",
    cardsech2:"Василькоин ",
    crd1t:"Монета приносит стиль",
    crd2t:"Распространяй добро",
    crd3t:"Улыбка имеет ценность.",
    crd1p:"Вы могли бы быть обладателем  самых модных аксессуаров, сияющих как ваша улыбка!",
    crd2p:"Ваши монеты могли бы превращаться в добрые дела, которые меняют мир.",
    crd3p:" Ваша улыбка становится настоящим богатством, а Василькоин её усиливает! ",




    charth: " Как распределяются  ",
    charth2:"улыбки и добро",

    lione:"Пул счастья (Ликвидность): 20%",
    litwo:"Пул улыбки (Награды): 15%",
    lithree:"Пул доброты (Фонд помощи): 10%",
    lifour:"Пул стиля (Наша экосистема): 25%",
    lifive:"Пул света (Маркетинг): 20%",
    lisix:"Резерв лучей (Стабфонд): 10%",
    lioneextra:"Ликвидность",
    litwoextra:"Награды",
    lithreeextra:"Фонд помощи",
    lifourextra:"Наша экосистема",
    lifiveextra:"Маркетинг",
    lisixextra:"Стабфонд",



    cardsHeader: "Партнеры, которые появятся для VasilCoin",
    cardsP: "   Ваше доверие к Василькоину вдохновляет на создание партнёрств, которые принесут добро, стиль и радость ",
    cardoneh: "Дом Радости",
    cardonep: "Модный дом, создающий искусство стиля.",
    cardtwoh: "Шикарные шарфики",
    cardtwop: "Бренд элегантных аксессуаров и фешенебельностей..",
    cardthreeh: "Биржа счастья",
    cardthreep: "Место для обмена добром и хорошим настроением..",
    cardfourh: "Сияющие сердца",
    cardfourp: "Фонд помощи нуждающимся в доброте и улыбке.",
    cardfiveh: "Фонд богачей",
    cardfivep: "Вдохновляем богатых людей делать добые дела.",
    cardsixh: "Биржа шарфиков",
    cardsixp: "Платформа для модных и сияющих покупок.",
    cardsevenh: "Магазин щеночков",
    cardsevenp: "Место истинного счастья от объятий с питомцами.",
    cardeighth: "Сияющая студия",
    cardeightp: "Предоставляет уникальные украшения для радости.",
    cardnineh: "Райский уголок",
    cardninep: "Курорт для тех, кто ценит стиль и комфорт.",

    footerHead:"василькоин",
    welcome: "Присоединяйтесь к движению Василькоина и помогите миру стать ярче, добрее и стильнее!",
    copyright: "Авторские права © 2025 $VASIL. Все права защищены.",
    footerbtn: " Вместе за улыбку с Василькоином!"
  },
  EN: {
    logo:"VASILCOIN",
    about: "About",
    value: "Values ",
    tokenmics:"Тоkenmics",

    
    bannerh:"Welcome to the VasilCoin",
    bannerp: "  The Meme Coin That Brings Kindness, Style, and Smiles!",
    bannerbtn:" Join our community",
    marque:" vasilcoin",

    moneyh:"About VasilCoin",
    moneyp:"VasilCoin is more than just a meme coin: it’s a symbol of joy, kindness, and style. Created to inspire, unite people, and make the world brighter and happier.",


    actor:"The Values of  ",
    actor2:"VasilCoin ",
    span1:"Kindness: ",
    span2:"Style: ",
    span3:"Smiles: ",
    card1:"Every VasilCoin makes the world a bit better.",
    card2:" Style is the art of being yourself.",
    card3:" A smile is our greatest currency.",



    rainbowh:"Time Until the Next Stage!",
    day:"Days",
    hour:"Hours",
    min:"Minutes",
    sec:"Seconds",
    rainbowp:"Don’t miss the chance to join the VasilCoin movement!",
    rainbowbtn:" Join Now",


    cardsech:" How You Could  ",
    cardsech2:"Use VasilCoin ",
    crd1t:"Imagine it brings style.",
    crd2t:"Imagine it spreads kindness.",
    crd3t:"Imagine every smile has value.",
    crd1p:"You could own the trendiest accessories shining as brightly as your smile.",
    crd2p:"Your coins could turn into acts of kindness that change the world.",
    crd3p:" Picture your smile becoming real wealth, with VasilCoin amplifying its brightness.",


    charth: " How Smiles and Kindness  ",
    charth2:" Are Distributed",

    
    lione:"Happiness Pool (Liquidity): 20%",
    litwo:"Smile Pool (Rewards): 15%",
    lithree:"Kindness Pool (Charity): 10%",
    lifour:"Style Pool (Ecosystem Development): 25%",
    lifive:"Light Pool (Marketing): 20%",
    lisix:"Ray Reserve (Reserve Fund): 10%",
    lioneextra:"Liquidity",
    litwoextra:"Rewards",
    lithreeextra:"Charity",
    lifourextra:"Ecosystem Development",
    lifiveextra:"Marketing",
    lisixextra:"Reserve Fund",



    cardsHeader: "Partners Who Will Emerge Thanks to VasilCoin",
    cardsP:"Your trust in VasilCoin inspires partnerships that will bring joy, style, and kindness to every corner of the world!",
    cardoneh: "House of Joy",
    cardonep: "A fashion house turning style into an art form.",
    cardtwoh: "Chic Scarves",
    cardtwop: "A brand of elegant accessories that shine brightly your smile.",
    cardthreeh: "Happiness Exchange",
    cardthreep: "A platform for trading VasilCoin for joy and style.",
    cardfourh: "Radiant Hearts",
    cardfourp: "A charity fund using VasilCoin to help those in need.",
    cardfiveh: "Wealth Support Fund",
    cardfivep: "A unique initiative inspiring the wealthy to do good with style.",
    cardsixh: "Scarf Exchange",
    cardsixp: "A platform where trendy can be purchased with VasilCoin.",
    cardsevenh: "Store of Beautiful Puppies",
    cardsevenp: "A place where happiness the form of adorable pets.",
    cardeighth: "Shining Accessories Studio",
    cardeightp: "A brand creating unique jewelry to highlight individuality.",
    cardnineh: "Paradise Retreat Spot",
    cardninep: "A luxury resort where you can pay for with VasilCoin.",


    footerHead:"vasilcoin",
    welcome: "Join the VasylCoin movement and help make the world brighter, kinder, and more stylish!",
    copyright: "Copyright © 2025 $VASIL. All rights reserved.",
    footerbtn: "Together for smiles with VasilCoin!"
  },
};

// Create the provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("RUS");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);
