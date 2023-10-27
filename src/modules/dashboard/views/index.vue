<template>
  <div class="w-full flex justify-center">
    <el-card style="width: 600px;">
      <div>
        <el-text size="large" tag="b">
          Добро пожаловать на приветственную страничку!
        </el-text>
        <el-text tag="p">
          Здесь вы найдете гайды к моим программам и ссылки для их скачивания.
        </el-text>
        <el-text tag="p">
          В будущем, здесь появится возможность управлять телеграм ботами.
        </el-text>
        <el-text tag="p">
          В данный момент регистрация и авторизация в разработке.
        </el-text>
      </div>
    </el-card>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashBoard',
  components: {
  },
  setup() {
    return {}
  },
})
</script>
