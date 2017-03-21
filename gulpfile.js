var gulp = require('gulp'),
    shell = require('gulp-shell');


gulp.task('deploy', shell.task([
    'gcloud app deploy app.yaml --project <PROJECT-ID> --version <VERSION> --verbosity=info  --no-promote'
]));