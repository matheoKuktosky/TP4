<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Componente Http</h2>
      <hr>

      <button class="btn btn-danger my-3 mr-3" @click="getPostsCb()">Pedir XMLHttpRequest</button>    
      <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()">Pedir FETCH</button>    
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir AXIOS</button>   

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(post,index) in posts" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">Se encontraron {{posts.length}} datos</h4>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos</h4>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60afff581f26610017ffdad9.mockapi.io/users',
        posts : []
        
      }
    },
    methods: {
      getPostsCb() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })
        xhr.send()
      },

      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH',respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },

      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS', respuesta.data)
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background: linear-gradient(to bottom,  rgb(221, 200, 180) 0%,rgb(199, 156, 131) 17%,rgb(177, 120, 82) 33%,rgb(138, 83, 0) 67%,rgb(87, 49, 0) 83%,rgba(0,36,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    color: white;
  }

  hr {
    background-color: #fff;
  }  
</style>
