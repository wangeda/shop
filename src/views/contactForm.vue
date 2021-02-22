<template>
        <input type="email" id="email">
        

        <div class="form-group row">
            <div class="col-sm-12">
                <textarea id="message" style="resize: none" rows="10" ></textarea>
            </div>
        </div>
        <button @click="sendWithAlert" >Send</button>
</template>

<script>
import sendMessage from '../composables/sendMessage'

export default {
    name: "contactForm",
    methods:{
        sendWithAlert(){
            this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message has been send',
            showConfirmButton: false,
            timer: 1500
            })
        }
    },
    setup(props, context){
        const { error, message } = sendMessage()
        const send = async () => {
            const inputEmail = document.getElementById('email').value
            const inputMessage = document.getElementById('message').value

            await message(inputEmail, inputMessage)
            if(!error.value){
                context.emit('send')
            }
        }
        return { send }
    }
}
</script>

<style>

</style>