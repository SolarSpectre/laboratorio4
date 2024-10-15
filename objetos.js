const instagramProfile = {
  username: "josephCaza19",
  name: "Joseph Caza",
  bio: "Software Developer",
  followers: 1500,
  following: 500,
  posts: 128,

  // Método para mostrar información general del perfil
  showProfile() {
    console.log(
      `Username: ${this.username}, Followers: ${this.followers}, Posts: ${this.posts}`,
    );
  },

  // Método para actualizar seguidores (uso de "this")
  updateFollowers(newFollowers) {
    this.followers = newFollowers;
    console.log(`Followers updated to: ${this.followers}`);
  },
};

// Agregar una nueva clave-valor
instagramProfile.location = "Quito-Ecuador";
// Eliminar una clave-valor
delete instagramProfile.location;

// Acceder a los valores
console.log(instagramProfile.username);

// Uso de desestructuración
const { username, followers, following } = instagramProfile;
console.log(
  `User: ${username}, Followers: ${followers}, Following: ${following}`,
);

// Uso de "this" en los métodos
instagramProfile.updateFollowers(1600);

// Congelar el objeto para evitar modificaciones futuras
Object.freeze(instagramProfile);
// Intentamos modificar el objeto (esto no tendrá efecto porque está congelado)
instagramProfile.posts = 150;
console.log(instagramProfile.posts);

// Uso de spread operator
const clonedProfile = { ...instagramProfile, status: "verified" };
console.log(clonedProfile);

// Uso de rest operator
function showStats(...stats) {
  return stats.reduce((total, stat) => total + stat, 0);
}

const totalStats = showStats(
  instagramProfile.followers,
  instagramProfile.following,
  instagramProfile.posts,
);
console.log(`Total Stats: ${totalStats}`);

// Nombres abreviados en ES6
const userInfo = {
  username,
  followers,
  following,
};
console.log(userInfo);
