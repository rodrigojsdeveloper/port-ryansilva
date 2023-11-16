<template>
    <form id="contacts" action="https://formspree.io/f/mlekpwdz" method="POST" @submit.prevent="handleSubmit"
        class="flex w-full max-w-488 flex-col gap-y-4">
        <div class="flex flex-row items-center justify-between gap-2">
            <input label="Name" type="text" name="name" htmlFor="name" id="name" />
            <input label="Email" type="email" name="email" htmlFor="email" id="email" />
        </div>
        <Input label="Subject" type="text" name="subject" htmlFor="subject" id="subject" />
        <textarea abel="Message" type="text" name="message" htmlFor="message" id="message"></textarea>
        <button type="submit" class="h-11 w-full rounded-def bg-white text-dark-grey hover:opacity-80 active:opacity-50">
            Send
        </button>
    </form>
</template>
  
<script setup>

const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: 'application/json',
            },
        });
        if (response.ok) {
            form.reset();
        }
    } catch (error) {
        console.error(error);
    }
};
</script>
  