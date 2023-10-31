<template>
  <div class="w-full flex justify-center">
    <el-card style="width: 600px;">
      <h1>
        Гайд на программу для отслеживания артефактов и хель
      </h1>
      <el-divider />
      <div class="container">
        <ul>
          <li>
            <el-text>
              Выбор цели: Выберите, кого вы будете палить. Это влияет только на сообщение бота.
            </el-text>
          </li>
          <li>
            <el-text>
              Настройка макроса: Создайте макрос для отслеживания хель и артефактов и назначьте его на клавишу 1.
            </el-text>
          </li>
          <li>
            <el-text>
              Активация окна EW: Сделайте окно EW активным и нажмите комбинацию клавиш CTRL+3, чтобы захватить окно игры.
            </el-text>
          </li>
          <li>
            <el-text>
              Указание пути до папки со скриншотами: Укажите путь до папки, в которой будут сохраняться скриншоты. Это нужно сделать только один раз.
            </el-text>
          </li>
          <li>
            <el-text>
              Выделение хп бара: Выделите хп бар, как показано на скриншоте. Это поможет программе правильно определить хель и артефакты.
              <img src="https://i.imgur.com/Rht2osF.jpg" alt="Скриншот" />
            </el-text>
          </li>
          <li>
            <el-text>
              Запуск программы: Нажмите кнопку "Старт" или комбинацию клавиш CTRL+1, чтобы запустить программу и начать отслеживание хель и артефактов.
            </el-text>
          </li>
        </ul>
            <el-icon><Download /></el-icon>
            <el-link type="primary" href="https://drive.google.com/file/d/1yeu2wWhsBfsyQBNaun3oHrS_z-cWwZyT/view?usp=sharing" target="_blank">Скачать программу</el-link>
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
import { defineComponent } from 'vue'
import { Promotion, Download } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'Artifact',
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
