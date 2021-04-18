const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const writeStream = fs.createWriteStream('post.csv');



request('https://iamsterdam.xyz/', (error, response, html) =>{
    if(!error && response.statusCode == 200){
        //console.log(html)
        const $ = cheerio.load(html);
        $('.section__tab-group').each((i, el)=>{
            const content = $(el).find('.section__tab-content').text();
            //console.log(content)
            //Write headers
             writeStream.write(`${content}`)
        });
        //const heading = $('.amsterdam');
        //console.log(heading.html());
        //console.log(heading.text());
        //const output = heading.find('span').text();
        //const output = heading.children('span').next().text();
        //const output = heading.parent('span').next().text();
        //console.log(output);
        // $('.nav__item a').each((i, el) => {
        //     const item = $(el).text();
        //     const link = $(el).attr('href')
        //     console.log(link)
        // });
    }
});