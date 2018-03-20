# TabSolution
The simpel tabbed solution. We provide a nice and smart service
for having info screens at your shop, flat or even a large
screen on the freeway.

### Status

Currently consists of a Node Server with an Angular 2 Client.
The client uses only a few of the provided API locations for now
but will be extended. 

## Prerequisites

Node and Angular 2 are required to run this app.

## Run instructions

### Server

```
cd src/server 
npm install
npm start
```
### Client

```
cd exemples/nodeAPI
npm install
npm start
open http://localhost:4200 in webbrowser
```


### Current API provided by server


| request type | location | payload | response |
| ------------- | ------------- | ------------- | ------------- |
| get   | ```/data}``` | ``` { } ``` |``` { data: any }``` |
| get   | ```/title/:id}``` | ``` { id: string } ``` |``` { title: string }``` |
| get   | ```/board/:id``` | ``` { id: string } ``` |``` { board: IBoard \| null }``` |
| get   | ```/boardlist``` | ``` { } ``` |``` { boardInfos: IBoardInfo[] }``` |


### Payload interfaces 
```
 IBoard {
   title: string;
   description: string;
   imageURL: string;
} 

 IBoardInfo {
   id: string;
   title: string;
} 
```
