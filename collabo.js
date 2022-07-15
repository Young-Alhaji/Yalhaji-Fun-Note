let allClients=[]
	function getpreviousvalues(){
		if(localStorage.allOfClients){
			 allClients=JSON.parse(localStorage.allOfClients)
		}
	}
	function signup(){
		let newClients={
			firstname:fnam.value,
			surname:snam.value,
			email:emai.value,
			password:pass.value,
			allContacts:[]	
		}
		let confirm=confir.value
		let passwo=pass.value
		if(passwo!=confirm){
			intext.innerText=('The passwords inputed are different,Kindly reconfirm the password')
		}
		else if (fnam.value==''||snam.value==''||emai.value==''||pass.value==''||confir.value==''){
			intext.innerText=('Please Kindly input all fields')
		}else{
			allClients.push(newClients)
			location.assign('signin.html')
		}
		localStorage.allOfClients=JSON.stringify (allClients)
		console.log(allClients)

	}


function signin(){
		 Email=emai.value
		 Password=pass.value
		var found =false
		 allClients=JSON.parse(localStorage.allOfClients)
		 for (let i = 0; i<allClients.length ; i++) {
		 	if(Email==allClients[i].email && Password==allClients[i].password){
		 		localStorage.indexes=JSON.stringify(i)
		 		var found=true
		 	}
		 }
		 if (found==false){
		 		incorrect.innerText=('Invalid Email or Invalid Password')
		 	}else{
		 		location.assign('dashboard.html')
		 		emai.value=''
		 		pass.value=''
		 	}
	}
	console.log(allClients)


		// sign in ends
	// dashboard javascript begins
	greetings = () => {
		i=JSON.parse(localStorage.indexes)
		allClients = JSON.parse(localStorage.allOfClients)
		infos.innerText = `Hello ${allClients[i].firstname}, Welcome to your  dashboard`
		userInfo.innerText= `Hello, ${allClients[i].firstname}`
		console.log(allClients)
	}
// dashboard ends



//contact book javascript
 	allContacts=[]
 		 getpreviousvalue=()=>{
			
 			i=JSON.parse(localStorage.indexes)
 			currentClientContact=JSON.parse(localStorage.allOfClients)[i].allContacts
 			if(currentClientContact){
 			 allContacts=currentClientContact
 			}
 	}
 		 add=()=>{
 		i=JSON.parse(localStorage.indexes)
 			allClients=JSON.parse(localStorage.allOfClients)
 			let newContacts={
 				name:nam.value ,
 				phonenumber:phone.value,
 				email:eMail.value
 			}
 			if(nam.value==''||phone.value==''){
 				innertext.innerText=('Kindly fill in both name and number')
 			}
 			else{	
 				allContacts.push(newContacts)
 				allClients[i].allContacts = allContacts
 				localStorage.allOfClients = JSON.stringify(allClients);
 				nam.value=''
 				phone.value=''
 				eMail.value=''
 				innertext.innerText=('Contact added Successfully')
 			}
 		}



 		 const contactlist = ()=>{
	i=JSON.parse(localStorage.indexes)
 	currentClientContact=JSON.parse(localStorage.allOfClients)[i].allContacts
    currentClientContact.map((item,i)=>{
        tab.innerHTML += `<tr><th>(${i+1}) </th>
 				<td>${currentClientContact[i].name}  </td>
 				<td>${currentClientContact[i].phonenumber} </td>
 				<td>${currentClientContact[i].email}</td>
 				<td><button class='del' onclick="Delete(${i})">X</button></td>
 				</tr>`
    })
}
 		
 

const Delete = (inde)=>{
	i=JSON.parse(localStorage.indexes)
	currentClientContact=JSON.parse(localStorage.allOfClients)[i].allContacts
    let filteredArray =currentClientContact.filter((item,ind)=>inde!=ind)
    currentClientContact = filteredArray
    allClients=JSON.parse(localStorage.allOfClients)
    allClients[i].allContacts = currentClientContact
    localStorage.allOfClients = JSON.stringify(allClients)
    location.reload()
}






// to-do javascripts begins
i = JSON.parse(localStorage.indexes)
allClients = JSON.parse(localStorage.allOfClients)
todoArray = [];
// getPreviousTodos = () => {
// 	showTodos()
// };
const addTodo = () => {
	if (todoInput.value == "") {
		alert("enter a value")
	} else {
		let userTodo = todoInput.value;
		todoItem = { item: userTodo, done: false };
		todoArray.push(todoItem);
		// allClients[i].events = events
		todoInput.value = "";
		showTodos();
	}
	// for (let index = 0; index < allClients.length; index++) {
	// 	if(index==i){
	// 		todoArray=allClients[index].todoArrays;
			
	// 		if (todoInput.value != "") {
	// 			let todoItem = { item: todoInput.value, done: false };
				
	// 			todoArray.push(todoItem);
	// 			// console.log(todoArray[0]);
	// 			allClients[i].todoArray = todoArray;
	// 			allOfClients = JSON.stringify(allClients)
	// 			todoInput.value = "";	
				
	// 			localStorage.allOfClients = JSON.stringify(allClients);
	// 			todoInput.value = "";
	// 			showTodos();
				
	// 		} else {
	// 			alert("enter a value")
	// 		}
				
	// 	}
		
	// }

}


showTodos = () => {
	
	// i = JSON.parse(localStorage.indexes)
	// // currentClientTodos = JSON.parse(localStorage.allOfClients)[i].todoArray;
	// for (ind=0; ind<allClients.length; ind++) {
	// 	if(i==ind){
	// 		// console.log(allClients[ind].todoArray)
	// 	todoArray=allClients[ind].todoArray;
	today = new Date
		userInfo.innerText = `Welcome ${allClients[i].firstname}`
	// 	todoArray=allClients[ind].todoArrays;
		todoInfo = "";
		for (i = 0; i < todoArray.length; i++) {
		if (todoArray[i].done) {
		todoInfo += `<div class="shadow p-3 mb-1 text-success">${todoArray[i].item}<button class="float-end btn btn-success btn-sm">DONE</button></div>`;
		} else {
			todoInfo += `<div class="shadow p-3 mb-1 text-danger">${todoArray[i].item}<button class="float-end btn-danger btn-sm" onclick="markDone(${i})">MARK AS DONE</button></div>`;
		}
	}
	displayTodo.innerHTML = todoInfo;
	showCount();
		}
// 	}
	
// }
showCount = () => {
	let pending = todoArray.filter(todo => !todo.done)
	taskCount.innerHTML = pending.length;
}
clearTodo = () => {

	todoArray = [];
	showTodos();
}
markDone = (index) => {
	todoArray[index].done = true;
	// console.log(todoArray[index])
	showTodos();
}

// to-do javascripts ends
// events javascript starts
events = [];
getPreviousEvent = () => {
	// i  = JSON.parse(localStorage.indexes)
	// currentClientEvents = JSON.parse(localStorage.allOfClients)[i].events;
	// console.log(currentClientEvents)
	// if(currentClientEvents){
	// 	events = currentClientEvents;
	// }
}
addEvents = () => {
	if (eventInput.value == "") {
		alert("enter a value")
	} else {
		let upcomingEvents = eventInput.value;
		eventItem = { item: upcomingEvents, done: false };
		events.push(eventItem);
		// allClients[i].events = events
		eventInput.value = "";
		showEvents();
	}
}

showEvents = () => {
	eventsInfo = "";
	for (i = 0; i < events.length; i++) {
		// userInfo.innerText= `Hello, ${allClients[i].firstname}`
		if (events[i].done) {
			eventsInfo += `<div class="shadow p-3 mb-1 text-success">${events[i].item}<button class="float-end btn btn-success btn-sm">DONE</button></div>`;
		} else {
			eventsInfo += `<div class="shadow p-3 mb-1 text-danger">${events[i].item}<button class="float-end btn-danger btn-sm" onclick="markEvent(${i})">Mark As Done</button></div>`;
		}
	}
	displayEvents.innerHTML = eventsInfo;
	showEventCount();
}
showEventCount = () => {
	let pending = events.filter(event => !event.done)
	eventCount.innerHTML = pending.length;
}
clearEvents = () => {
	events = [];
	showEvents();
}
markEvent = (index) => {
	events[index].done = true;
	// console.log(todoArray[index])
	showEvents();
}
today = new Date()
console.log(today);
	// events javascript ends