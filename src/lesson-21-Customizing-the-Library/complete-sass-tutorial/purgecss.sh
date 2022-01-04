#!/bin/bash

# This is based on the approach here:
# https://stackoverflow.com/questions/58112925/how-to-integrate-purgecss-with-angular-cli-project
# and here:
# https://dev.to/dylanvdmerwe/reduce-angular-style-size-using-purgecss-to-remove-unused-styles-3b2k
# using a postbuil script

# go to the dist/yourProjectName folder
cd ./dist/complete-sass-tutorial

# make a new directory named 'css' (you can name it anything)
mkdir css

# run PurgeCSS & make a new '.css' file inside the 'css' directory
../../node_modules/purgecss/bin/purgecss.js --css ./styles.css --content ./index.html ./*.js --output ./css

# replace the 'dist/yourProjectName/styles.css' file with the 'dist/yourProjectName/css/styles.css' file
mv ./css/styles.css ./styles.css

# delete the previously created 'css' directory
rm -r css
