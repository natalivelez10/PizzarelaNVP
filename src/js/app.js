// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDdLfIe4sj8eosp4LrmEPeXGSJUVjVZ0d8",
    authDomain: "pizzarelaflorencia.firebaseapp.com",
    projectId: "pizzarelaflorencia",
});

//iniciate cloud firestore throught firebase
var db = firebase.firestore();
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var celular = document.getElementById('celular').value;

    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: celular
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('celular').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

//leer documentos
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
      
        <th scope="row">${doc.id}</th>
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
        <td><button class="btn btn-danger"onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td><button class="btn btn-warning"onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born})">Editar</button></td>
</tr >
        `
    });
});

//BORRAR DOCUEMTNOS

function eliminar(id) {
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

// editar

function editar(id, nombre, apellido, celular) {
    document.getElementById8('nombre').value = nombre;
    document.getElementById8('apellido').value = apellido;
    document.getElementById8('celular').value = celular;
    var button = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("users").doc(id);
        // Set the "capital" field of the city 'DC'

        var nombre = document.getElementById8('nombre').value = nombre;
        var apellido = document.getElementById8('apellido').value = apellido;
        var celular = document.getElementById8('celular').value = celular;

        return washingtonRef.update({
            first: nombre,
            last: apellido,
            born: celular
        })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }


}

