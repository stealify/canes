import rollup from 'rollup';
import configPromise from './rollup.config.mjs';
import { promisify } from 'util';
import { exec } from 'child_process';

async function execPromise(cmd) {
  const { stdout, stderr } = await promisify(exec)(cmd);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}



async function build() {
  const inputOptions = await configPromise;
  const outputOptions = inputOptions.output;
  console.log(inputOptions)
  // create a bundle
  const bundle = await rollup.rollup(inputOptions).catch(console.log);
  //  const bundle = { imports: '', exports: '', modules: '' }
  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // Modify OutputOptions
  outputOptions[0].dir = 'dist/',

  // generate code and a sourcemap
  //const { code, map } = await bundle.generate(outputOptions[0]);

  // or write the bundle to disk
  //await bundle.write(outputOptions[0]);
  // rename -S .js .mjs dist/*.js

  execPromise('rm -rf dist')
  .then(()=>bundle.write(outputOptions[0]))
  .then(()=>execPromise('sed -i \'s/.js\";/.mjs\";/g\' dist/*'))
  .then(()=>execPromise('sed -i "s/.js\';/.mjs\';/g" dist/*'))
  .then(()=>execPromise('rename \'s/\\.js$/\\.mjs/\' dist/*.js'))
  //.then(()=>execPromise('rename \'s/\\.js.map$/\\.mjs.map/\' dist/*.js.map'))
  
  
  // rename 's/\.js$/\.mjs/' dist/*.js
  // rename 's/\.js.map$/\.mjs.map/' dist/*.js
}

build();

