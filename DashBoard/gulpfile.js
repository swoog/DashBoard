/*
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant 
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var gulp = require('gulp');
var named = require('vinyl-named');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var less = require('gulp-less');
var path = require('path');

var OUTPUT_DIR = 'Scripts/';

gulp.task('default', ['build']);
gulp.task('build', ['build-react-dev']);

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('./css'));
});

gulp.task('build-jsx', function () {
    return gulp.src([
            'js/**/*.jsx'
        ])
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('build-react-dev', ['build-jsx'], function () {
    return gulp.src([
        'scripts/main.js'
    ])
        .pipe(named())
    .pipe(webpackStream({
        output: {
            filename: '[name].generated.js',
            libraryTarget: 'this'
        },
        module: {
            loaders: [
              { test: /\.css$/, loader: 'style!css' },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.DedupePlugin()
        ]
    }))
    .pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('build-deps-prod', function () {
    return gulp.src(['Resources/react.js', 'Resources/babel.js'])
        .pipe(named())
        .pipe(webpackStream({
            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        test: /\.js$/,
                        loader: 'babel-core',
                        query: {
                            presets: ['es2015', 'stage-0']
                        }
                    },
                ]
            },
            output: {
                filename: '[name].generated.min.js',
                libraryTarget: 'this'
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': '"production"'
                }),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.DedupePlugin()
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest(OUTPUT_DIR));
});

// Rerun the task when a file changes
gulp.task('watch', ['build'], function () {
    gulp.watch(['js/**/*.jsx', 'less/**/*.less'], ['less', 'build-react-dev']);
});