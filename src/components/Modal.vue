<template>
    <div class="backdrop"  >
        <div class="myModal">
            <span @click.self='closeModal' class="closeLoginMessage">x</span>
            <slot>default content</slot>
            <div class="actions">
            <slot name="links"></slot>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:['header', 'text'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>
<style  >
.myModal {
    width: 400px;
    max-height: 500px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25px 100px 50px 50px;
}
.backdrop{
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.backdrop h1{
    color:rgb(37, 184, 176);
    grid-column: 1/3;
    grid-row: 2/3;
}
.backdrop h2{
    color:rgb(37, 184, 176);
    grid-column: 1/3;
    grid-row: 2/3;
}
.closeLoginMessage{
    border:1px solid red;
    padding:3%;
    border-radius: 4px;
    cursor: pointer;
    grid-column: 2/3;
    grid-row: 1/2;
    background: rgb(255, 255, 255);
    color:red;
    display: flex;
    justify-self: end;
    align-items: center;
}
.closeLoginMessage:hover{
    background: rgb(255, 0, 0);
    color:white;
}
.backdrop p{
    color:black;
    grid-column: 1/3;
    grid-row: 3/4;
}
.myModal .actions{
    grid-column: 1/3;
    grid-row: 4/5;
    display: flex;
    justify-content: space-around;
}
.myModal .actions a {
    border: 1px solid white;
    border-radius: 4px;
    text-decoration: none;
}
.myModal .actions .button{
    color:white;
    display: flex;
    align-items: center;
    border-radius:4px;
    text-decoration: none;
    background: rgb(37, 184, 176);;
    padding: 0 10px 0 10px ;
}
.additionalInfo {
    font-size:20px
}
</style>