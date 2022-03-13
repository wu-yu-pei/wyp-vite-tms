import {
  Edit,
  Location,
  HomeFilled,
  List,
  Stopwatch,
  Reading,
  Files,
  ArrowDown,
  ChatRound,
  User,
  SwitchButton,
  UploadFilled,
  Plus
} from '@element-plus/icons-vue'

const icon = [Edit, Location, ArrowDown, ChatRound, User, SwitchButton, UploadFilled, Plus]

const navIcon = [HomeFilled, List, Stopwatch, Reading, Files]

const icons = [...icon, ...navIcon]

function setupIcons(app) {
  icons.forEach((icon) => {
    app.component(icon.name, icon)
  })
}

export default setupIcons
