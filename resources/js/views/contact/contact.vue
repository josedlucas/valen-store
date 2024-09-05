<template>
    <section id="section1Contact">
        <div>
            <img class="d-md-block d-xxl-block d-lg-block d-none w-100" src="../../../valenweb/assets/images/contact/section1/background.svg" /><img class="d-md-none d-xxl-none d-lg-none d-block" src="../../../valenweb/assets/images/contact/section1/background-m.svg" />
            <div class="container-xl mt-xl-n13 pb-xl-6 px-xl-5 mt-n19 pb-13 px-4 px-md-0">
                <p class="text-warning fw-lighter raya-b d-grid fs-xl-12 fs-xxl-16 fs-11">CONTACTO</p>
                <h1 v-if="send" class="text-warning fw-lighter fs-xl-30 fs-30 mt-4" >
                    ¡MUCHAS GRACIAS! <br class="d-lg-block d-none" />
                    EL MENSAJE FUE ENVIADO CON ÉXITO, NOS <br class="d-lg-block d-none" />
                    CONTACTAREMOS A LA BREVEDAD
                </h1>
                <h1 v-else class="text-warning fw-lighter fs-xl-30 fs-30 mt-4">
                    ¿LISTO PARA ELEVAR EL ESTÁNDAR <br class="d-lg-block d-none" />
                    DE SEGURIDAD Y CONFORT EN TU <br class="d-lg-block d-none" />
                    LUGAR DE TRABAJO?.
                </h1>
            </div>
        </div>
        <div>
            <iframe
                class="maps mt-n5"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3182.7632758365353!2d-68.0389061!3d-38.970068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a318e859c5da5%3A0x260f0227ab8b818b!2sEl%20Choc%C3%B3n%201433%2C%20Q8300%20Neuqu%C3%A9n%2C%20Argentina!5e1!3m2!1sen!2sve!4v1724778642169!5m2!1sen!2sve"
                height="450"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="container-xl px-xl-5 mt-md-0 mt-n8 px-4 mx-auto d-block">
                <div class="col-xl-3 bg-white mt-xl-n15 position-absolute px-xxl-2 py-xxl-4 px-xl-2 py-xl-5 px-2 py-5">
                    <div>
                        <a class="fw-light fs-xl-13 text-decoration-none" href="https://wa.me/542994585083" target="_blank">
                            <img class="me-3" src="../../../valenweb/assets/images/icons/call-2.svg" />(0299) - 4585083</a>
                    </div>
                    <div class="my-xl-3 my-3">
                        <a class="fw-light fs-xl-13 my-3 text-decoration-none" href="mailto:ventas.valenindumentaria@gmail.com"><img class="me-3" src="../../../valenweb/assets/images/icons/email-2.svg" />ventas.valenindumentaria@gmail.com</a>
                    </div>
                    <div>
                        <a class="fw-light fs-xl-13 text-decoration-none" href=""><img class="me-3" src="../../../valenweb/assets/images/icons/address.svg" />El Chocón 1433, Neuquén Capital</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-xl my-md-5 px-xl-5 mt-13 px-4" v-if="!send">
            <div class="mt-lg-auto pt-4 pt-lg-1 fs-xl-30 fs-25">ENVIANOS UN MENSAJE</div>
            <form @submit.prevent="submitForm" class="mt-4 row" id="form-contact">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="fullname">Nombre y Apellido</label>
                        <input v-model="contactForm.fullname" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="text" id="fullname" name="fullname" placeholder="Nombre y Apellido" />
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="phone">Teléfono</label>
                        <input v-model="contactForm.phone" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="text" id="phone" name="phone" placeholder="Teléfono" />
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="email">Mail</label>
                        <input v-model="contactForm.email" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="email" id="email" name="email" placeholder="Mail" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="message">Mensaje</label>
                        <textarea v-model="contactForm.message" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg form-control" name="message" id="message" placeholder="Mensaje"></textarea>
                    </div>
                    <div class="g-recaptcha" data-sitekey="6LdO4h8pAAAAADj8tAhq-v0D5x8q_adS6LTQdXmp"></div>
                    <div class="mb-3 mt-lg-3 mt-4 justify-content-xl-start justify-content-center d-flex">
                        <button type="submit" class="btn btn-warning rounded-0">
                            <span v-if="isLoading">ENVIANDO...</span>
                            <span v-else>ENVIAR</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import {defineRule, useField, useForm} from "vee-validate";
import {required, min} from "@/validation/rules";
import useContact from "@/composables/contact";
import {reactive} from "vue";
import { useReCaptcha } from 'vue-recaptcha-v3';


defineRule('required', required)
defineRule('min', min);

let send = false;

const schema = {
    fullname: 'required|min:5',
    phone: 'required|min:5',
    email: 'required',
    message: 'required|min:5'
}

const {validate, errors} = useForm({validationSchema: schema})
const { executeRecaptcha } = useReCaptcha();
const { isLoading, storeContact } = useContact();

const { value: fullname } = useField('fullname', null, {initialValue: ''});
const { value: phone } = useField('phone', null, {initialValue: ''});
const { value: email } = useField('email', null, {initialValue: ''});
const { value: message } = useField('message', null, {initialValue: ''});



const contactForm = reactive({
    fullname,
    phone,
    email,
    message
})

async function submitForm() {
    const form = await validate();
    if (form.valid) {
        try {
            const token = await executeRecaptcha('contact_form');
            storeContact({ ...contactForm, recaptcha: token });
            send = true;
        } catch (error) {
            console.error('reCAPTCHA error:', error);
        }
    }
}



</script>
