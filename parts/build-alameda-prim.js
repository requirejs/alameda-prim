#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    alameda = fs.readFileSync(path.join(__dirname, 'alameda.js'), 'utf8'),
    prim = fs.readFileSync(path.join(__dirname, 'prim.js'), 'utf8'),
    combined = '';

// A bit brittle, but looking for something after the initial requirejs.load
// definition, but before any data-main or config-based loading is done.
combined = alameda.replace(/throw new Error\('No Promise implementation available'\);/, prim + '\n');

fs.writeFileSync(path.join(__dirname, '..', 'alameda-prim.js'), combined, 'utf8');
