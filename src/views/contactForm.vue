<template>
        <input type="email" id="email">
        

        <div class="form-group row">
            <div class="col-sm-12">
                <textarea id="message" style="resize: none" rows="10" ></textarea>
            </div>
        </div>
        <button @click="send" >Send</button>
</template>

<script>
import sendMessage from '../composables/sendMessage'

export default {
    name: "contactForm",
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