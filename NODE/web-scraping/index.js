import fs from "fs";
import inquirer from "inquirer";
import puppeteer from "puppeteer";

//! -------------> funcion que hace el scrapping

const scrapping = async (keyWord) => {
  const BASE_URL = "https://www.dia.es/";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  // vamos a abrir una pagina en el navegador

  const page = await browser.newPage();
  page.on('dialog', async (dialog) => {
  if (dialog.type() === 'confirm') {
    await dialog.accept();
  } else {
    await dialog.dismiss();
  }
});

  // una vez abierta la pagina hay que navegar hasta la url de BASE_URL
  await page.goto(BASE_URL);

  // esperamos un poco tiempo a que se cargen todos los elementos de la pagina
  await page.waitForTimeout(6000); /// ----> vamos ac esperar 6 segundos

  //! diferencia al anterior proyecto -----> vamos a utilizar el input para meterle la palabra que cogimos por la terminal

  await page.click("#search-input-item");

  await page.type("#search-input-item", keyWord);
  await page.keyboard.press("Enter");

  // vamos a hacer los scroll porque ya nos cargado los elementos que hemos buscado en el input
  // esperamos un poco tiempo a que se cargen todos los elementos de la pagina
  await page.waitForTimeout(6000); /// ----> vamos ac esperar 6 segundos

  // vamos a hacer varios scroll para cargar el mayor numero de elementos

  await page.evaluate(() => {
    const element = document.getElementById("footer-signature");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  // vamos a decir que espere a que tengamos renderizado unos elementos concretos de la pagina

  await page.waitForSelector(".search-product-card__top-section-content");

  //! forma mas rapida de coger los elementos dde la pantalla en un objeto de js

  const diaProducts = await page.$$eval("search-product-card__top-section-content", (nodes) =>
    nodes.map((n) => ({
      title: n.querySelector("p.search-product-card__product-name")?.innerText,
      image: n.querySelector(".search-product-card-image")?.src,
      price: n.querySelector(".search-product-card__active-price")?.innerText,
     
    }))
  );

  diaProducts.pop();
  console.log(
    "🚀 ~ file: index.js:103 ~ scrapping ~ gameProducts:",
    gameProducts
  );

  // --------------> convertirlo a string para poder crear un archivo con font-size:
  const diaString = JSON.stringify(diaProducts);

  fs.writeFile(
    `${keyWord.replace(" ", "").toLowerCase()}.json`,
    diaString,
    () => {
      console.log("archivo creado");
    }
  );

  await browser.close();
};

inquirer
  .prompt([
    {
      name: "busqueda",
      message: "Que quieres buscar",
    },
  ])
  .then((answers) => {
    let keyWord = answers.busqueda;
    scrapping(keyWord);
  });
