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
			allContacts:[],
			todoArray:[],
			notes:[]
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
 				<td><button class='del' onclick="Delete(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
 				</tr>`
    })
    console.log(currentClientContact)
  
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
todoArray=[]
 getTodo=()=>{
 	i=JSON.parse(localStorage.indexes)
 	allClients=JSON.parse(localStorage.allOfClients)
 	currentClientTodo=JSON.parse(localStorage.allOfClients)[i].todoArray
 	if(currentClientTodo){
 		todoArray=currentClientTodo
 	}
 	allClients=JSON.parse(localStorage.allOfClients)
 	currentClientTodo=JSON.parse(localStorage.allOfClients)[i].todoArray
 	displayTodo.innerHTML=''
 	currentClientTodo.map((item,i)=>{	
 		displayTodo.innerHTML+=`<div class='todoli'>${currentClientTodo[i].todos} <br> <button class='javabutton' onclick="markDone(event)">Active</button>
 		 <button class='javabutton' onclick="deleteTodo(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button> </div> <br>`
 		 eventCount.innerHTML= currentClientTodo.length
 	})
 }


 addTodo=()=>{
 	i=JSON.parse(localStorage.indexes)
 	allClients=JSON.parse(localStorage.allOfClients)
 	currentClientTodo=JSON.parse(localStorage.allOfClients)[i].todoArray

 	let oneTodo={
 		todos:todoInput.value,
 		doneTodo: false
 	}

 	if (todoInput.value==""){
 		nullInput.innerHTML="Add a To do input!"
 	}else{
 		todoArray.push(oneTodo)
 		allClients[i].todoArray=todoArray
 		localStorage.allOfClients=JSON.stringify (allClients)
 		todoInput.value=''
 		location.reload()
 	}
 }

 clearTodo=()=>{
 	i=JSON.parse(localStorage.indexes)
 	todoArray=JSON.parse(localStorage.allOfClients)[i].todoArray
 	todoArray=[]
 	allClients=JSON.parse(localStorage.allOfClients)
 	allClients[i].todoArray=todoArray
 	localStorage.allOfClients=JSON.stringify(allClients)
 	location.reload()
 }



markDone=(e)=>{
i=JSON.parse(localStorage.indexes)
 	allClients=JSON.parse(localStorage.allOfClients)
 	doneTodo=JSON.parse(localStorage.allOfClients)[i].todoArray.doneTodo
 	currentClientTodo=JSON.parse(localStorage.allOfClients)[i].todoArray
 	doneTodo=currentClientTodo.doneTodo
 	filteredArray=currentClientTodo.filter((item,ind)=>e==ind)
 	currentClientTodo.doneTodo=filteredArray
 	allClients[i].todoArray.doneTodo=currentClientTodo.doneTodo
 	localStorage.allOfClients=JSON.stringify(allClients)
 	location.reload
}


deleteTodo=(inde)=>{
	i=JSON.parse(localStorage.indexes)
 	allClients=JSON.parse(localStorage.allOfClients)
 	currentClientTodo=JSON.parse(localStorage.allOfClients)[i].todoArray
 	filteredArray=currentClientTodo.filter((item,ind)=>inde!=ind)
 	currentClientTodo=filteredArray
 	allClients[i].todoArray=currentClientTodo
 	localStorage.allOfClients=JSON.stringify(allClients)
 	location.reload()
}


	//notes array begins
		 notes=[]
 		 getpreviousnote=()=>{
			
 			i=JSON.parse(localStorage.indexes)
 			currentClientNote=JSON.parse(localStorage.allOfClients)[i].notes
 			if(currentClientNote){
 			 notes=currentClientNote
 			}
 	}
 		 addNote=()=>{
 		i=JSON.parse(localStorage.indexes)
 			allClients=JSON.parse(localStorage.allOfClients)
 			let eachNote={
 				title:noteTitle.value,
 				note:not.value
 			}
 			if(noteTitle.value==''||not.value==''){
 				success.innerText=('Kindly fill in both fields!')
 			}
 			else{	
 				notes.push(eachNote)
 				allClients[i].notes = notes
 				localStorage.allOfClients = JSON.stringify(allClients);
 				noteTitle.value=''
 				not.value=''
 				success.innerText=('Note added Successfully')
 			}
 		}


 			 const notelist = ()=>{
	i=JSON.parse(localStorage.indexes)
 	currentClientNote=JSON.parse(localStorage.allOfClients)[i].notes
    currentClientNote.map((item,i)=>{
        tab.innerHTML += `<div class='margin'> (Page ${i+1}) <button class='del' onclick="deleteNote(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button><br>
 				<div class='insidetitlecolor'>${currentClientNote[i].title}</div> <br>
 				<div class='insidecolor'>${currentClientNote[i].note}</div>
 				</div> <br>`
    })
    console.log(currentClientNote)
  
}


const deleteNote = (inde)=>{
	i=JSON.parse(localStorage.indexes)
	currentClientNote=JSON.parse(localStorage.allOfClients)[i].notes
    let filteredArray =currentClientNote.filter((item,ind)=>inde!=ind)
    currentClientNote = filteredArray
    allClients=JSON.parse(localStorage.allOfClients)
    allClients[i].notes = currentClientNote
    localStorage.allOfClients = JSON.stringify(allClients)
    location.reload()
}
