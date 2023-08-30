# MachEight Challenge

This is the MachEight coding challenge, made with NodeJS and Typescript

## To have in mind

You can find the main function in the folder
```
"src/controller/sum.controller.ts"
```

### To test the app 
Make sure to install the necessary packages
```
    npm i
```

### Testing the application using Jest
```
    npm run test
```

### Test the application using an API Client like postman

```
npm run dev
```
The service will go up with 3000 port 

You can use the endpoint "http://localhost:3000/get-sum" (POST) and put the following data (JSON Data)
```
{
    "list": [1, 9, 7, 5, 0, 20, -4, 12, 16, 7],
    "sum": 12
}
```
The result should be
```
[[7,5],[0,12],[-4,16]]
```