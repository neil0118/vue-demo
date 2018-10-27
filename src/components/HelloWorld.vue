<script>
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default {
  name: 'HelloWorld',
  data () {
    const env = runtimeEnv()
    return {
      msg: env.JS_RUNTIME_MESSAGE || 'JS_RUNTIME_MESSAGE is empty. Here’s a donut instead: 🍩'
    }
  }
}
</script>