/** 
 Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Super Bonus
Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte? :sorriso:

**/



// console.log("VUE OK", Vue);

//! VUE_JS!//

const app = Vue.createApp({
    name: "Vue-Email-List",
    data() {
        return {
            isLoading: false,
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [],
        }
    },
    computed: {

    },
    methods: {
        getRandomEmail() {
            this.isLoading = true;
            this.emails = [];
            axios.get(this.apiUrl)
                .then(response => {
                    this.emails.push(response.data.response);
                }).catch(error => {
                    console.log(error);
                }).then(() => {
                    this.isLoading = false;
                })
        },
        getTenEmails() {
            for (let i = 0; i < 10; i++) {
                this.getRandomEmail();
            }
        }
    },


});

app.mount("#root");
