const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

const css = (done) => {
  //1- Identificar el archivo .SCSS  a compilar
  src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css")); //2-Compilarlo

  //3- Guardarlo en una carpeta llamada "dist"
  done();
};

function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}
exports.css = css;
exports.dev = dev;
