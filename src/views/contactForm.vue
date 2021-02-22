<template>
<div class="card">
  <div class="card-header">
    Contact Us
  </div>
  <div class="card-body">
    <div class="d-flex justify-content-center col-12 mb-5 mt-5">
            <label class="col-2"><strong>Email:</strong></label>
            <input class="col-6 form-control" type="email" id="email">
        </div>
        <div class="d-flex justify-content-center col-12">
            <label class="col-2"><strong>Message:</strong></label>
            <textarea id="message" style="resize: none" rows="10" class="form-control col-6" ></textarea>
        </div>
        <button class="btn btn-primary" @click="sendWithAlert" >Send</button>
  </div>
</div>
</template>

<script>
import sendMessage from '../composables/sendMessage'
import { useRouter } from 'vue-router'

export default {
    name: "contactForm",
    methods:{
        sendWithAlert(){
            this.send()
            this.$swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your message has been send',
                showConfirmButton: false,
                timer: 1500
            })
            this.redirect()
        }
    },
    setup(props, context){
        const { error, message } = sendMessage()
        const router = useRouter()
        const redirect = () => {
        router.push( {name: 'Home'})                          //redirect to home view
        }
        const send = async () => {
            const inputEmail = document.getElementById('email').value
            const inputMessage = document.getElementById('message').value

            await message(inputEmail, inputMessage)
            if(!error.value){
                context.emit('send')
            }
        }
        return { send, redirect }
    }
}
</script>