import cheerio from 'cheerio';
import { promises as fs } from 'fs';

//['files'] => [{ content, filename}] content is Cheerio Parsed
function readFiles(filenames){
  return Promise.all(filenames.map(readFile));
}

//=> { content, filename }
function readFile(filename) {
  return fs.readFile(filename,'utf-8').then(content=>stealifyFileObj({ content, filename }));
}

function stealifyFileObj({ content='',filename }) {
  return { filename, content };
}

function toCheerio(stealifyFile){
  stealifyFile.content = cheerio.load(stealifyFile.content);
  return stealifyFile;
  //return Object.keys(stealifyFile).forEach(key=>stealifyFile[key]=cheerio.load())
}
function toHtml(stealifyFile) {

}

function findFileInArray(stealifyFiles,filename) {
  return stealifyFiles.filter(x=>x.filename === filename)[0];
}

readFiles(['./home/home.html','./pages/pages.html'])
  .then(stealifyFiles=>stealifyFiles.map(toCheerio))
  //.then(stealifyFiles=>stealifyFiles.map(({filename, content})=>({ [filename]: content})))
  .then(stealifyFiles=>{
    const home = findFileInArray(stealifyFiles,'./home/home.html');
    const pages = stealifyFiles.filter(x=>x.filename === './pages/pages.html')[0];
    home.content('body').append(pages.content)
    return home.content
  })
  .then(HTML=>HTML.html())
    
    stealifyFiles[].content.append(stealifyFiles['./pages/pages.html'].content))
const Pages = readFile('./pages/pages.html');

const Render = Promise.all([Layout, Pages]);


Render.then(Parts=>
  Parts.map(part=>{

  })
  
  Parts.map(part=>Object.keys(part).forEach(key=>part(key))));

.then(html=>cheerio.load(html));
Layout.then()
Pages.then(html=>cheerio.load(html))



.then($=>$('body').append())