import {
  Edit,
  Location,
  HomeFilled,
  List,
  Stopwatch,
  Reading,
  Files,
  ArrowDown,
} from '@element-plus/icons-vue'

const icon = [Edit, Location, ArrowDown]

const navIcon = [HomeFilled, List, Stopwatch, Reading, Files]

const icons = [...icon, ...navIcon]

function setupIcons(app) {
  icons.forEach((icon) => {
    app.component(icon.name, icon)
  })
}

export default setupIcons
