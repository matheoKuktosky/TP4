
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 5,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      usuariosIngresados: []
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    enviar() {
      this.usuariosIngresados.push({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }
}


