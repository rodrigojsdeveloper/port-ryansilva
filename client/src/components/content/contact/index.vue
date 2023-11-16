<template>
    <section class="flex w-full max-w-800 animate-up flex-col gap-y-6 max-lg:mt-6 max-lg:max-w-none">
        <h1>Contact</h1>
        <p>Feel free to get in touch, and we can discuss how we can work together.</p>
        <div class="flex flex-col gap-y-3">
            <h2 class="leading-relaxed">My social networks</h2>
            <SocialNetworks />
        </div>
        <Line />
        <div class="flex flex-col gap-y-3">
            <h2 class="leading-relaxed">Send me an email</h2>
            <p>
                I greatly enjoy interacting with programmers,
                creators, and technology students. If you\'re interested in my work or would
                like to provide feedback on this site, let\'s have a chat.'
            </p>
        </div>
        <Form />
    </section>
</template>
  
<script setup>
import SocialNetworks from '../../socialNetwork/index.vue'
import Form from '../../form/index.vue'
</script>