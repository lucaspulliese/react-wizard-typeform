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

## Template

The design is based on [this template](https://www.typeform.com/templates/t/user-persona-survey-template/)

## Images

![image](https://user-images.githubusercontent.com/15676286/132963021-e057f0ef-163e-4536-a8d0-16a030e849b6.png)
![image](https://user-images.githubusercontent.com/15676286/132963027-64fcbc87-d6d2-485d-b9c9-d7b1ed66f7a4.png)
