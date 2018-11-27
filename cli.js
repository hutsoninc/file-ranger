#!/usr/bin/env node
'use strict';
const meow = require('meow');
const makeDirRange = require('make-dir-range');
const moveToRange = require('move-to-range');
const copyToRange = require('copy-to-range');

const cli = meow(`
	Usage
      $ ranger make <range> <options>

        Make directories from ranges of integers.

        Options:
          --destination, -d  Destination for dirs
          --prepend, -p  Prepend to destination dir names
          --append, -a  Append to destination dir names

      $ ranger move <range> <file-type> <options>

        Move files to corresponding directories given a range.

        Options:
          --destination, -d  Destination for dirs
          --prepend, -p  Prepend to destination dir names
          --append, -a  Append to destination dir names

      $ ranger copy <file> <range> <options>

        Copy a file to a range of directories.

        Options:
          --destination, -d  Destination for dirs

	Examples
      $ ranger make 1-5,7-10
      $ ranger move 101-153 .txt --destination output
      $ ragner copy file.txt 11-15,18,20-25
`, {
    flags: {
        append: {
            type: 'string',
            default: '',
            alias: 'a'
        },
        prepend: {
            type: 'string',
            default: '',
            alias: 'p'
        },
        destination: {
            type: 'string',
            default: '',
            alias: 'd'
        }
    }
});

const input = cli.input;

if (input.length === 0) {
    console.error('No command provided');
    process.exit(1);
}

if (input.length === 1) {
    console.error('No args provided');
    process.exit(1);
}

switch (input[0]) {
    case "make":
    case "mk":
    case "mkdir":
        makeDirRange(input[1], cli.flags);
        break;
    case "move":
    case "mv":
        if (input.length === 2) {
            console.error('No file type provided');
            process.exit(1);
        }
        moveToRange(input[1], input[2], cli.flags);
        break;
    case "copy":
    case "cp":
        if (input.length === 2) {
            console.error('No range provided');
            process.exit(1);
        }
        copyToRange(input[1], input[2], cli.flags);
        break;
    default:
        console.error(`Invalid command ${input[1]}`);
        process.exit(1);
        break;
}

process.exit(1);