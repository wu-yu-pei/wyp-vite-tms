export default {
  number: [
    {
      required: true,
      message: '必传',
      trigger: 'change',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'change',
    },
  ],
  passwd: [
    {
      required: true,
      message: '必传',
      trigger: 'change',
    },
  ],
}
