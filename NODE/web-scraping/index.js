import fs from "fs";
import inquirer from "inquirer";
import puppeteer from "puppeteer";

const scrapping = async (keyWord) => {
  console.log(keyWord)
  const BASE_URL = "https://www.carrefour.es/";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });



  const page = await browser.newPage();
  page.on('dialog', async (dialog) => {
  if (dialog.type() === 'confirm') {
    await dialog.accept();
  } else {
    await dialog.dismiss();
  }
});

  
  await page.goto(BASE_URL);


  await page.waitForTimeout(12000); 


  await page.click("#search-input");

  await page.type("#search-input", keyWord);
  await page.keyboard.press("Enter");

 
  await page.waitForTimeout(8000); 



  await page.evaluate(() => {
    const element = document.getElementById("footer-signature");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.querySelector(".ebx-empathy-x__footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.querySelector(".ebx-empathy-x__footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.querySelector(".ebx-empathy-x__footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.querySelector(".ebx-empathy-x__footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.querySelector(".ebx-empathy-x__footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(8000);

  // vamos a decir que espere a que tengamos renderizado unos elementos concretos de la pagina

  await page.waitForSelector(".product-card");



  const diaProducts = await page.$$eval(".product-card", (nodes) =>
    nodes.map((n) => ({
      title: n.querySelector(".product-card__title-link track-click")?.innerText,
      image: n.querySelector(".product-card__image")?.src,
      price: n.querySelector(".product-card__price")?.innerText,
     
    }))
  );

  diaProducts.pop();
  console.log(
    "🚀 ~ file: index.js:103 ~ scrapping ~ gameProducts:",
    gameProducts
  );


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
    console.log(answers.busqueda)
    let keyWord = answers.busqueda;
    scrapping(keyWord);
  });
