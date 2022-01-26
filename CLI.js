#!/usr/bin/env node
const fs = require("fs");
const colors = require("colors");
const readFile = require("./Command/readFile");
const input = process.argv.slice(2);
readFile(input);
