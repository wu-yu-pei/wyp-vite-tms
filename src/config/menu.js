const menuConfig = {
  0: {
    navMenu: [
      {
        name: '首页',
        path: '/main/page/header',
        icon: '',
      },
      {
        name: '教学大纲',
        path: '/main/page/syllabus',
        icon: '',
      },
      {
        name: '教学进度计划表',
        path: '/main/page/progress',
        icon: '',
      },
      {
        name: '人才培养方案',
        path: '/main/page/plan',
        icon: '',
      },
      {
        name: '获奖情况',
        path: '/main/page/testimonials',
        icon: '',
        children: [
          {
            name: '我的奖状',
            path: '/main/page/testimonials/myTestimonials',
            icon: '',
          },
          {
            name: '奖项填报',
            path: '/main/page/testimonials/writeTestimonials',
            icon: '',
          },
        ],
      },
    ],
    infoMenu: [
      {
        name: '',
        path: '',
        icon: '',
      },
    ],
  },
  1: {
    navMenu: [],
    infoMenu: [],
  },
  2: {
    navMenu: [],
    infoMenu: [],
  },
  3: {
    navMenu: [],
    infoMenu: [],
  },
}
export default menuConfig
