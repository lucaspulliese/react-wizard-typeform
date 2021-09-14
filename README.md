# React typeform wizard

This projects is a work in progress base project to create a wizard form with [react hook form](https://react-hook-form.com/)

## Motivation

Show the potential of react hook form for the creation of wizard forms. Also leave a base form builder for programmers to reuse on their projects. In the console I show how the answers are saved. 

## Documentation

### Architecture

#### Directory

>__src__<br />

├── __app__ <br />
│&emsp; ├── __form-builder__ [Based on react-hook-forms]<br />
│&emsp; │&emsp; ├─ form-components<br />
│&emsp; │&emsp; ├─ form-sections<br />
│&emsp; │&emsp; ├─ form-types<br />
│&emsp; │&emsp; | &nbsp; └─ type-component<br />
│&emsp; │&emsp; | &nbsp; | &nbsp; ├─ styled.js<br />
│&emsp; │&emsp; | &nbsp; | &nbsp; └─ index.js<br />
│&emsp; │&emsp; └─ index.js<br />

├── __utils__ <br />
│&emsp; ├── __stepsData.js__ [JSON form structure]<br />