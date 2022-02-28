import {
  Edit,
  Location,
  HomeFilled,
  List,
  Stopwatch,
  Reading,
  Files,
} from '@element-plus/icons-vue'

const icon = [Edit, Location]

const navIcon = [HomeFilled, List, Stopwatch, Reading, Files]

const icons = [...icon, ...navIcon]

function setupIcons(app) {
  icons.forEach((icon) => {
    app.component(icon.name, icon)
  })
}

export default setupIcons
