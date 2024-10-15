const sugestedFriends = ["Peter", "Jane", "Luis", "Ana", "Mateo"];

const profile = ["Joseph", "Caza", 19, true, { ciudad: "quito" }];

const posts = [
  {
    user: "Peter",
    photo: "Hiking in the mountains",
    description: "Hey, having a good time in the mountains",
    likes: 140,
    comments: 23,
  },
  {
    user: "Jane",
    photo: "Pool",
    description: "Swimming in the summer is the best",
    likes: 200,
    comments: 50,
  },
];

const sidebar = [
  "Home",
  "Search",
  "Explore",
  "Reels",
  "Messages",
  "Notifications",
  "Profile",
];

//Numero de elementos
console.log(`Numero de elementos: ${sidebar}`);
//--------------------------------------------------
//Loops
// 1)
for (let i = 0; i < sidebar.length; i++) {
  console.log(sidebar[i]);
}

// 2)
sugestedFriends.forEach((e, i) => console.log(`${i} - ${e}`));

// 3)
const newFriends = sugestedFriends.map((e) => `Hola ${e}`);
console.log(sugestedFriends);
console.log(newFriends);

//--------------------------------------------------------------
//Metodos
//push agrega al final
profile.push("Developer");
console.log(profile);
//unshift agrega al inicio
profile.unshift("Mr.");
console.log(profile);
//shift elimina del inicio
const firstElement = profile.shift();
console.log(firstElement); // Resultado: "Joseph"
console.log(profile);
// Resultado: ["Caza", 19, true, { ciudad: "quito" }]
// pop elimina del final
const lastElement = profile.pop();
console.log(lastElement); // Resultado: { ciudad: "quito" }
console.log(profile);
// Resultado: ["Joseph", "Caza", 19, true]
//slice devuelve una copia de una parte del array
const slicedProfile = profile.slice(1, 3);
console.log(slicedProfile);
// Resultado: ["Caza", 19]
// Array.isArray verifica si es arreglo
console.log(Array.isArray(profile));
// Resultado: true
