# file-ranger

[![Current npm package version](https://img.shields.io/npm/v/file-ranger.svg)](https://www.npmjs.com/package/file-ranger) 

Make, move, or copy files and directories using ranges.

## Installation

`npm install --global file-ranger`

## Usage

```
$ ranger --help

  Make, move, or copy files and directories using ranges.

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
```

## Related

- [make-dir-range-cli](https://github.com/hutsoninc/make-dir-range-cli) - Make directories from ranges of integers.
- [copy-to-range-cli](https://github.com/hutsoninc/copy-to-range-cli) - Copy a file to a range of directories
- [move-to-range-cli](https://github.com/hutsoninc/move-to-range-cli) - Move files to corresponding directories given a range

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details