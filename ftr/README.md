# FTR Code Challenge - Number frequency printer with Fibonacci detection

My implementation of the FTR code challenge is written as a command-line application as-per the example.

The math functionality for the Fibonacci sequence is unit tested. User acceptance testing was used for the CLI application.

The math for the fibonacci calculations uses linear time algorithms.

## Tech

- Node.js
- TypeScript
- Jest
- [prompts](https://www.npmjs.com/package/prompts)

## Usage

Clone the repository and run the program.

```sh
npm install
npm start
```

To run unit tests:

```sh
npm run test
```

## Acceptance criteria

- [x] The program outputs provided numbers at an interval provided by the user
- [x] The output prints the frequency of the numbers
- [x] The output is sorted by frequency of numbers descending
- [x] The program halts printing if `halt` is entered
- [x] The program resumes printing if `resume` is entered
- [x] The program prints normally if `resume` is entered multiple times
- [x] The program prints `FIB` if the number provided is a Fibonacci number
- [x] The program does not print `FIB` if the number provided is equal-to or greater-than the 1000th Fibonacci number
- [x] The program exits on an additional kepress if `quit` is entered

## Improvements

### 1. Reimplementing for a different user interface

The program logic and UI logic (CLI) are baked together in `app.ts`. To facilitate a different or multiple user interfaces, a refactor would be necessary. This program logic would be split into a separate unit and tested independently. UI Logic would then be split between the CLI UI logic and graphical UI logic. These would utilise the same program logic.

### 2. Making the app production ready

As a CLI application, a `publish` NPM script would be written to compile the program to the oldest LTS of Node.js. This compiled output would be published to an NPM repository. Usage instructions would be written in the README of this repository.

### 3. Thoughts on the coding test

This is probably the most succinct and sometimes challenging coding tests I have performed. When reading the challenge initially, the requirements were initially difficult to understand. When my wife was acceptance testing my program, she also found the instructions difficult to follow initially. This may be alleviated by providing a quick summary of the intent and use of the program before describing the acceptance criteria.
