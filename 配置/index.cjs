/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4838ba65a52b79c2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '36f93213272aa67dec44aa53098e31e2',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Thezxr',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJXn56Xw6w893zkFeXYGtJ1IteFY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'H2Chu3pBrTb1egXjsEFDkkQm-ulQC2LKzso68muEJyI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'Thezxr', year: '1995', date: '03-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'd--2098', year: '2001', date: '09-20',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-10',
        },
      ],
     
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'H2Chu3pBrTb1egXjsEFDkkQm-ulQC2LKzso68muEJyI',

  CALLBACK_USERS: [
    {
      name: 'd--2098',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJXn56ZYeAbBzuIESsD3kCu-MXrI',
    }
  ],

}

module.exports = USER_CONFIG

