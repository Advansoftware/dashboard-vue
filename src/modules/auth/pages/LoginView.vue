<template>
   <div class="back">
      <v-app id="inspire">
         <v-main>
            <v-container fluid fill-height>
               <v-layout align-center justify-center>
                  <v-flex xs12 sm8 md3>
                     <v-card class="elevation-12">
                        <v-toolbar dark color="error">
                           <v-toolbar-title>Entrar</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                           <v-form @submit.prevent="submit()">
                              <v-text-field
                                 prepend-icon="mdi-account-circle-outline"
                                 name="email"
                                 label="E-mail"
                                 type="email"
                                 v-model="form.email"
                                 color="danger"
                              ></v-text-field>
                           <v-text-field
                              prepend-icon="mdi-key-outline"
                              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[rules.required, rules.min]"
                              :type="show3 ? 'text' : 'password'"
                              name="password"
                              label="Senha"
                              hint="Minimo 8 caracteres"
                              value=""
                              v-model="form.password"
                              class="input-group--focused"
                              @click:append="show3 = !show3"
                           ></v-text-field>
                           <v-card-actions>
                           <v-spacer></v-spacer>
                           <v-btn color="error" class="mb-3 mr-2" @click="submit">Entrar</v-btn>
                        </v-card-actions>
                           </v-form>
                        </v-card-text>
                        
                     </v-card>
                  </v-flex>
               </v-layout>
            </v-container>
         </v-main>
      </v-app>
   </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
   name: 'LoginView',
   props: {
      source: String,
   },
   data: () => ({
        show3: false,
        rules: {
          required: value => !!value || 'Por Favor, digite a senha.',
          min: v => v.length >= 6 || 'Minimo 8 caracteres',
          emailMatch: () => (`Por favor, digite um e-mail valido`),
        },
        form: {
         email: '', 
         password: ''
        }
      }),
      methods:{
         ...mapActions('auth', ['ActionDoLogin']),
        async submit(){
         try{
            await this.ActionDoLogin(this.form);
            this.$router.push({name: 'home'})
         }catch(err){
            console.log(err.response);
         }
           
         }
      }
};
</script>

<style scoped>
.back {
  background-image: url('../../../assets/fundo.jpg');
   background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}
.back::after{
   content: '';
   position: fixed;
   background-color: rgba(0,0,0,.5);
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   backdrop-filter: blur(5px);
}
#inspire {
  background: none;
  z-index: 5;
}
</style>
