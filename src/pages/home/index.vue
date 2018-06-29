<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Link333s</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="item in userList">
        姓名：{{item.name}} 年龄：{{item.age}}
      </li>
    </ul>
    <button @click="submitUser">添加用户</button>
  </div>
</template>
<script>
  import{getUsers, addUser} from '@/api/user';
  export default{
    name: "",
    data(){
      return {
        msg: 'Welcome to Your Vue.js App',
        userList: []
      }
    },
    mounted(){
      this.getUserList()
    },
    components: {},
    methods: {
      submitUser(){
        var user = {
          username: "ceshi",
          userid: 1
        }
        this.addUser(user);
      },
      async getUserList(){
        let res = await getUsers();
        this.userList = res.users;
      },
      async addUser(params){
        let res = await addUser(params);
        if(res.code===1){

        }
        console.log(res);
      }
    }
  }
</script>
<style lang="less" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
