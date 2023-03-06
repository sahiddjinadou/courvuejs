new Vue({
    el:'#app',
    data: {
        message: 'Bonjour les zamis',
        lien: 'www.facebook.com',
        titre: 'Mon paragraphe',
        success: true,
        classe: ['Sahid', 'Erik', 'Amir', 'Tobi'],
        count: 0,
        countmsg: ''
    },

    methods: {
        increment: function() {
            this.count++;
            this.countmsg = 'La valeur de dollar augmente';
        },
        decrement: function () {
            this.count--;
            this.countmsg = 'La valeur diminue';
        }
    },
})