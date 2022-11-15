function addLocalStorage(id,person,personScore) {
 const onePerson = { id , person , personScore };
 let people = getLocalStorage();
 people.push(onePerson);
 localStorage.setItem('list', JSON.stringify(people));
}

function getLocalStorage() {
 return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [] ;
}

export { addLocalStorage , getLocalStorage };