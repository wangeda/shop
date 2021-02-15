<template>
<main>
    <div class="row ml-5">
        <div class="col-3">
            <AsideSettingMenu />
        </div>
        <div class="col-9 align-items-center d-flex flex-wrap justify-content-around mb-5">
            <div class="col-12">
                <form class="d-flex flex-column">
                    <div class="form-group row">
                        <div class="col-4">
                            <label><strong>Name</strong></label>
                            <p id="name"></p>
                        </div>
                        <div class="col-4">
                            <label><strong>Surname</strong></label>
                            <p id="surname"></p>
                        </div>
                        <div class="col-4">
                            <img src="@/assets/userImg.png" class="profilePhoto" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-6">
                            <label><strong>Mobile phone</strong></label>
                            <p id="mobile"></p>
                        </div>
                        <div class="col-6">
                            <label><strong>Postal Code</strong></label>
                            <p id="cp"></p>
                      </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-12">
                            <label><strong>Address</strong></label>
                            <p id="address"></p>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-12">
                            <label><strong>Email</strong></label>
                            <p>{{ user.email }}</p>
                        </div>
                    </div>
                </form>
                {{ getUsers() }}
            </div>
        </div>
    </div>
</main>
</template>
<script>
//import elements
import getUser from "../../composables/user";
import AsideSettingMenu from "../../components/AsideSettingMenu";
import { firestore } from "../../firebase/config";

export default {
  //used components
  components: { AsideSettingMenu },
  setup() {
    const { user } = getUser();
    const firestoredb = firestore;
    return { firestoredb, user };                                            //export for use throughout the view
  },
  methods: {
    getUsers() {
      const userName = this.user.email;                                       //create a constant with the current user value
      var docRef = this.firestoredb.collection("users").doc(userName);        //connect to firebase, look for the collection 'users' and the document 'userName' inside it
      docRef
        .get()
        .then(function (doc) {
          var screen = "";                                                    //create a string variable
          if (doc.exists) {
            var name = doc.data().name;                                       //extracts name field from data
            screen = name;                                                    //equals emmpty string to data
            document.getElementById("name").innerText = screen;               //print on the screen the string. Now contains data.    Repeat the process for each field

            const surname = doc.data().surname;
            screen = surname;
            document.getElementById("surname").innerText = screen;

            const mobile = doc.data().mobile;
            screen = mobile;
            document.getElementById("mobile").innerText = screen;

            const cp = doc.data().cp;
            screen = cp;
            document.getElementById("cp").innerText = screen;

            const address = doc.data().address;
            screen = address;
            document.getElementById("address").innerText = screen;
          } else {
            console.log("No such document!");                                   // doc.data() will be undefined in this case
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    },
  },
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card img {
  width: 250px;
  height: 250px;
}
.profilePhoto {
  width: 150px;
  height: 150px;
  border-radius: 150px;
}
button {
  color: #38d3b0;
  background: "#FFF";
  border-color: #38d3b0;
  font-weight: bold;
}
button:hover {
  background: #38d3b0;
  color: #fff;
}
form {
  min-width: 300px;
  max-width: 800px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #595a5a;
  display: inline-block;
  margin: 25px 0 15px;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(37, 190, 183);
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 16px;
  position: relative;
  top: 2px;
}
input::placeholder {
  color: rgb(148, 165, 164);
}
input:focus {
  outline: none;
}
</style>