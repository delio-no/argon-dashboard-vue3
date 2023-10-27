<template>
  <div class="w-full flex justify-center">
    <el-card style="width: 600px;">
      <h1>
        Гайд на программу для отслеживания питов
      </h1>
      <el-divider />
      <div class="container">
        <ul>
          <li>
            <el-text>Откройте окно EW. Нажмите комбинацию клавиш CTRL+3, для захвата окна игры.</el-text>
          </li>
          <li>
            <el-text>
              Выделите область. Нажмите CTRL+4, чтобы выделить область. Обратите внимание на следующие баги при выделении области:
            </el-text>
            <ul>
              <li>
                <el-text>
                  Не надо спамить CTRL+4.
                </el-text>
              </li>
              <li>
                <el-text>
                  Не всегда фокусируется выделение, нужно самому развернуть.
                </el-text>
              </li>
            </ul>
          </li>
          <li>
            <el-text>
              Нажмите Ctrl+5 и, следуя примеру на скриншоте, кликните на вкладку "Рейд", выделенную красным. Программа выполнит двойной клик, поэтому перед запуском вкладка "Рейд" должна быть активной.
            </el-text>
            <br>
            <img src="https://i.imgur.com/i9ZWgW9.jpg" alt="Скриншот" />
          </li>
          <li>
            <el-text size="large" tag="b">
              Для запуска нажмите CTRL+1.
            </el-text>
          </li>
        </ul>
            <el-icon><Download /></el-icon>
            <el-link type="primary" href="https://drive.google.com/file/d/19TrvJqbLq-hj5JU1trhk4HZGU-gSFesa/view?usp=sharing" target="_blank">Скачать программу</el-link>
            <br>
            <el-icon ><Promotion /></el-icon>
            <el-link type="primary" href="https://t.me/CmdntBot" target="_blank">Основной бот в Telegram</el-link>
            <br>
            <el-icon ><Promotion /></el-icon>
            <el-link type="primary" href="https://t.me/FamilyReserveBot" target="_blank">Резервный бот в Telegram</el-link>
         
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Promotion, Download } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'Pit',
  components: {
    Promotion,
    Download
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
::v-deep(.card-avatar-profile.el-link) .el-link--inner {
  @apply absolute;
}
.el-button {
  @apply font-semibold !important;
}
</style>
