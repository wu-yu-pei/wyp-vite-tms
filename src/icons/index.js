import { Edit, Location } from '@element-plus/icons-vue'

const icons = [Edit, Location]

function setupIcons(app) {
  icons.forEach((icon) => {
    app.component(icon.name, icon)
  })
}

export default setupIcons

